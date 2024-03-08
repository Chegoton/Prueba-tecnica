import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MoviesViewModel } from '../../../services/api/models';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from '../../../services/api/services';
import { NotificationService } from '../../../notification.service';
import { DirectorService } from '../../../services/api/services';
import { DirectorViewModel } from '../../../services/api/models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modal-edit-movie',
  templateUrl: './modal-edit-movie.component.html',
  styleUrl: './modal-edit-movie.component.css'
})
export class ModalEditMovieComponent {
  movie: MoviesViewModel = { name: '', gender: '', directorName:'', duration:'',fkDirector:0};
  jsonMovies!: MoviesViewModel; 
  directors: { id: number, name: string }[] = [];

  constructor(
    private _notificationService: NotificationService, 
    private _directorService: DirectorService , 
    private _moviesService: MoviesService,
     public matDialogRef: MatDialogRef<ModalEditMovieComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) {}
 

  ngOnInit(): void {
    this.loadDdlDirector()
    if (this.data && this.data.movieData) {
      this.movie = this.data.movieData;
      const selectedDirector = this.directors.find(director => director.id === +this.movie.directorName!);
      if (selectedDirector) {
        this.movie.directorName = selectedDirector.id.toString();
      }
    }
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
          }
        );
      } catch (error) {
        console.error('Error loading directors:', error);
        this._notificationService.showError('Error loading directors');
      }
    }


  btnSave(){
    this.jsonMovies = {
      name: this.movie.name,
      gender: this.movie.gender,
      fkDirector: this.movie.fkDirector, // Asegúrate de que esto sea lo correcto
      duration: this.movie.duration,
      pkMovies: this.movie.pkMovies,
      available: this.movie.available 
    };
    try{
    this._moviesService.apiMoviesUpdateMoviesPut$Response({body: this.jsonMovies}).subscribe(
      r=>{
        this._notificationService.showSuccess('Movie change successfully');
          this.closeModal();
          window.location.reload(); 
      }
    );
  } catch (error) {
    console.error('Error saving director:', error);
    this._notificationService.showError('Error change movie');
  }

  }


  closeModal(): void {
    this.matDialogRef.close();
  }


  formatoHora(): boolean {
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    return !this.movie.duration || regex.test(this.movie.duration);
  }


}
