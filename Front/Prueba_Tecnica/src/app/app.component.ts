import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { DirectorViewModel } from './services/api/models/director-view-model';
import { MoviesViewModel } from './services/api/models';
import { DirectorService } from './services/api/services';
import { MoviesService } from './services/api/services';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddDirectorComponent } from './component/modal/modal-add-director/modal-add-director.component';
import { ModalAddMovieComponent } from './component/modal/modal-add-movie/modal-add-movie.component';
import { ModalEditMovieComponent } from './component/modal/modal-edit-movie/modal-edit-movie.component';
import { ModalEditDirectorComponent } from './component/modal/modal-edit-director/modal-edit-director.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit, AfterViewInit  {

  jsonDirectors: DirectorViewModel[] = []; 
  jsonMovies: MoviesViewModel[] = []; 
  displayedColumnsDirector: string[] = ['name', 'age', 'active', 'actions'];
  displayedColumnsMovies: string[] = ['name', 'gender', 'directorName', 'duration', 'available', 'actions'];
  dataSourceDirector = new MatTableDataSource<DirectorViewModel>(this.jsonDirectors);
  dataSourceMovies = new MatTableDataSource<MoviesViewModel>(this.jsonMovies);


  @ViewChild('directorPaginator') directorPaginator!: MatPaginator;
  @ViewChild('directorSort') directorSort!: MatSort;
  @ViewChild('moviesPaginator') moviesPaginator!: MatPaginator;
  @ViewChild('moviesSort') moviesSort!: MatSort;


  closeResult = '';


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.dataSourceDirector.paginator = this.directorPaginator;
    this.dataSourceDirector.sort = this.directorSort;
    this.dataSourceMovies.paginator = this.moviesPaginator;
    this.dataSourceMovies.sort = this.moviesSort;
  }

  constructor(
    private _directorService: DirectorService,
    private _moviesService: MoviesService,
    private modalService: NgbModal,
    private _matDialog: MatDialog
  ) {}


  ngOnInit(): void {
    this.getDirector();
    this.getMovie();
  }

  getDirector() {
    this._directorService.apiDirectorGetDirectorsGet$Json$Response().subscribe(
      r => {
        this.jsonDirectors = r.body;
        this.dataSourceDirector.data = this.jsonDirectors;
        console.log(this.jsonDirectors);
      }
    );
  }

  getMovie() {
    this._moviesService.apiMoviesGetMoviesGet$Json$Response().subscribe(
      r => {
        this.jsonMovies = r.body;
        this.dataSourceMovies.data = this.jsonMovies;
        console.log(this.jsonMovies);
      }
    );
  }


  openAddModalDirector(){
    this._matDialog.open(ModalAddDirectorComponent);

  }

  openAddModalMovie(){
    this._matDialog.open(ModalAddMovieComponent);

  }

  openEditModalMovie(movieData: MoviesViewModel): void {
    const dialogRef = this._matDialog.open(ModalEditMovieComponent, {
      data: { movieData } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditModalDirector(directorData: DirectorViewModel): void {
    const dialogRef = this._matDialog.open(ModalEditDirectorComponent, {
      data: { directorData } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceDirector.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceDirector.paginator) {
      this.dataSourceDirector.paginator.firstPage();
    }
  }

  applyFilterMovies(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMovies.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceMovies.paginator) {
      this.dataSourceMovies.paginator.firstPage();
    }
  }



}
