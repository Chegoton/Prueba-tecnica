import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DirectorViewModel } from '../../../services/api/models';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { DirectorService } from '../../../services/api/services';
import { NotificationService } from '../../../notification.service';

@Component({
  selector: 'app-modal-add-director',
  templateUrl: './modal-add-director.component.html',
  styleUrls: ['./modal-add-director.component.css']
})
export class ModalAddDirectorComponent {

  director: DirectorViewModel = { name: '', age: 0 };

  constructor(private _notificationService: NotificationService, private _directorService: DirectorService, public matDialogRef: MatDialogRef<ModalAddDirectorComponent>) {}


  btnSave(): void {
    try {
      this._directorService.apiDirectorAddDirectorPost$Response({body: this.director}).subscribe(
        r => {
          this._notificationService.showSuccess('Director saved successfully');
          this.closeModal();
          window.location.reload(); // Recargar la página
        }
      );
    } catch (error) {
      console.error('Error saving director:', error);
      this._notificationService.showError('Error saving director');
    }
  }




  closeModal(): void {
    this.matDialogRef.close();
  }
}
