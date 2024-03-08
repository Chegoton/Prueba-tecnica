import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DirectorViewModel } from '../../../services/api/models';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { DirectorService } from '../../../services/api/services';
import { NotificationService } from '../../../notification.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modal-edit-director',
  templateUrl: './modal-edit-director.component.html',
  styleUrl: './modal-edit-director.component.css'
})
export class ModalEditDirectorComponent {

  director: DirectorViewModel = { name: '', age: 0 };

  ngOnInit(): void {


  }


  constructor(
    private _notificationService: NotificationService, 
    private _directorService: DirectorService, 
    public matDialogRef: MatDialogRef<ModalEditDirectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.director = { ...data.directorData };
    }


  btnSave(): void {
    try {
      this._directorService.apiDirectorUpdateDirectorPut$Response({body: this.director}).subscribe(
        r => {
          this._notificationService.showSuccess('Director change successfully');
          this.closeModal();
          window.location.reload(); // Recargar la página
        }
      );
    } catch (error) {
      console.error('Error saving director:', error);
      this._notificationService.showError('Error change director');
    }

  }




  closeModal(): void {
    this.matDialogRef.close();
  }

}
