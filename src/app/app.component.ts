import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loteria';

  codigo = "";
  respuesta1 = 0;
  respuesta2 = 0;

  ganadores = ['ganador1','ganador2','ganador3']
  ganadorRenault = 'ganadorF'

  ganador(){
      if (this.ganadores.includes(this.codigo)){
         this.respuesta1 = 1
         this.respuesta2 = 0
      }
      else if(this.ganadorRenault == this.codigo){
         this.respuesta2 = 1
         this.respuesta1 = 0
      }
      else{
         this.respuesta1 = 2
         this.respuesta2 = 2
      }
      console.log(this.respuesta1);
      console.log(this.respuesta2);

  }

}
