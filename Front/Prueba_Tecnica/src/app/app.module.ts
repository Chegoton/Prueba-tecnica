import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CRUDComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';

import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

import { MatDialogModule} from '@angular/material/dialog'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms'; 

import { ModalAddDirectorComponent } from './component/modal/modal-add-director/modal-add-director.component';
import { ModalAddMovieComponent } from './component/modal/modal-add-movie/modal-add-movie.component';
import { ModalEditMovieComponent } from './component/modal/modal-edit-movie/modal-edit-movie.component';
import { ModalEditDirectorComponent } from './component/modal/modal-edit-director/modal-edit-director.component';

@NgModule({
  declarations: [
    AppComponent,
    CRUDComponent,
    ModalAddDirectorComponent,
    ModalAddMovieComponent,
    ModalEditMovieComponent,
    ModalEditDirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    NgbModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
