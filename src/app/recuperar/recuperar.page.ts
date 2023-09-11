import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  usuario: string = ''; // Inicializa la propiedad usuario


  constructor(private navCtrl: NavController, private router: Router) {}


  recuperarDatos() {
    // Validar los campos
    if (this.usuario.length >= 3 && this.usuario.length <= 8) {
      // Los datos son válidos, pasar a la página Home
      this.navCtrl.navigateForward('/login', {
        queryParams: {
          usuario: this.usuario 
        },
      });
    } else {
      // Mostrar un mensaje de error
      // Puedes agregar lógica adicional para mostrar mensajes de error personalizados
    }
  }
}
