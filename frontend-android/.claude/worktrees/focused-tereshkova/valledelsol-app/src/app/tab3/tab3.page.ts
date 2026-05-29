import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
  IonToast,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { paperPlaneOutline } from 'ionicons/icons';

addIcons({ paperPlaneOutline });

const API_URL = 'http://localhost:8000';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonLabel, IonSelect, IonSelectOption,
    IonInput, IonTextarea, IonButton, IonIcon, IonToast, IonText,
  ],
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  tipo = 'SMS';
  destinatario = '';
  mensaje = '';
  showToast = false;
  errorToast = false;
  loading = false;

  constructor(private http: HttpClient) {}

  enviarAlerta() {
    if (!this.destinatario.trim() || !this.mensaje.trim()) {
      this.errorToast = true;
      return;
    }

    this.loading = true;

    this.http
      .post(`${API_URL}/api/alertas/enviar`, {
        tipoAlerta: this.tipo,
        destinatario: this.destinatario,
        mensaje: this.mensaje,
      })
      .subscribe({
        next: () => {
          this.showToast = true;
          this.destinatario = '';
          this.mensaje = '';
          this.loading = false;
        },
        error: () => {
          this.errorToast = true;
          this.loading = false;
        },
      });
  }
}
