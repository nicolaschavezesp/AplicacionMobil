import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  showLogo: boolean = true;

  toggleLogo() {
    this.showLogo = !this.showLogo;
  }

  usuario: string = "usuario";
  clases: any[] = [
    {
      nombre: "Clase 1",
      cod: "A-23",
      alumnosRegistrados: 20
    },
    {
      nombre: "Clase 2",
      cod: "D-57",
      alumnosRegistrados: 15
    },
    {
      nombre: "Clase 3",
      cod: "G-41",
      alumnosRegistrados: 18
    },
    {
      nombre: "Clase 4",
      cod: "E-39",
      alumnosRegistrados: 32
    },
    {
      nombre: "Clase 5",
      cod: "K-98",
      alumnosRegistrados: 28
    },
    {
      nombre: "Clase 6",
      cod: "R-11",
      alumnosRegistrados: 22
    },


  ];

  


  verInfoClase(clase: any) {
    // Lógica para ver la información detallada de la clase
  }

  iniciarClase(clase: any) {
    // Lógica para iniciar la clase y mostrar el código QR de asistencia
  }

  abrirPerfil() {
    // Lógica para abrir la página de perfil
  }

  abrirClases() {
    // Lógica para abrir la página de clases
  }

  abrirConfiguraciones() {
    // Lógica para abrir la página de configuraciones
  }

  cerrarSesion() {
    // Lógica para cerrar sesión
  }
}

