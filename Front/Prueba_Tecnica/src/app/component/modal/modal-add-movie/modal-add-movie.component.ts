import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MoviesViewModel } from '../../../services/api/models';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from '../../../services/api/services';
import { NotificationService } from '../../../notification.service';
import { DirectorService } from '../../../services/api/services';
import { DirectorViewModel } from '../../../services/api/models';


@Component({
  selector: 'app-modal-add-movie',
  templateUrl: './modal-add-movie.component.html',
  styleUrl: './modal-add-movie.component.css'
})
export class ModalAddMovieComponent implements OnInit {
  movie: MoviesViewModel = { name: '', gender: '', directorName:'', duration:''};
  jsonMovies!: MoviesViewModel; 
  directors: { id: number, name: string }[] = [];

  constructor(private _notificationService: NotificationService, private _directorService: DirectorService , private _moviesService: MoviesService, public matDialogRef: MatDialogRef<ModalAddMovieComponent>) {}
 
  ngOnInit(): void {
    this.loadDdlDirector() 
  }


  

  loadDdlDirector() {
    try {
      this._directorService.apiDirectorGetDirectorsGet$Json$Response().subscribe(
        (r) => {
    
          this.directors = r.body
            .filter((director: DirectorViewModel) => director.pkDirector != null && director.name != null)
            .map((director: DirectorViewModel) => ({
              id: director.pkDirector!,
              name: director.name!
            }));
            console.log( this.directors)
        }
      );
    } catch (error) {
      console.error('Error loading directors:', error);
      this._notificationService.showError('Error loading directors');
    }
  }

  

  btnSave(): void {
    this.jsonMovies = this.movie
    const directorSeleccionado = this.directors.find(director => director.name === this.movie.directorName);

    if (directorSeleccionado) {
      this.jsonMovies.fkDirector = directorSeleccionado.id;
    }
    if (this.jsonMovies.directorName) {
      // Parsear el valor de directorName a un número
      const directorId: number = parseInt(this.jsonMovies.directorName);
      // Asignar el valor convertido a fkDirector
      this.jsonMovies.fkDirector = directorId;
    }

 

   
      try {
      this._moviesService.apiMoviesAddMoviesPost$Response({body: this.jsonMovies}).subscribe(
        r => {
          this._notificationService.showSuccess('Movie saved successfully');
          this.closeModal();
          window.location.reload(); // Recargar la página
        }
      );
    } catch (error) {
      console.error('Error saving director:', error);
      this._notificationService.showError('Error saving movie');
    }

     
}
 
  



    // Aquí puedes realizar cualquier otra acción que necesites con los datos de la película
  

  closeModal(): void {
    this.matDialogRef.close();
  }


  formatoHora(): boolean {
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    return !this.movie.duration || regex.test(this.movie.duration);
  }

}

