import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;
  constructor() { 
    this.correo = {
      titulo: "Email de prueba",
      cuerpo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      emisor: "correoclasegabri@gmail.com",
      destinatario: "testCorreo@correo.com"
    }
  }

  ngOnInit(): void {
  }

}
