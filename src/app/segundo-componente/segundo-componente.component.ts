import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Joao";
  dataNascimento = "1995-01-01"
  urlImage = "/assets/bcb5150e95e0e0f582aa2e0dbb578359.jpg";

  mostrarDataNascimento(){
    alert(' a data de nascimento do joao e: ${this.dataNascimento} ')
  }
}
