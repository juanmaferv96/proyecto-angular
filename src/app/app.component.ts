import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';

  public msgEventSearch?: string;
  public labelBuscar?: string = 'Buscar';
  public labelPlaceHolder?:string = 'Buscar algo';
  


  constructor(){

  }
  search(event: any){
    // this.msgEventSearch = (<HTMLInputElement>event.target).value + ' => '+ (<HTMLInputElement>event.target).value;
    this.msgEventSearch = event.query + ' =>' + event.resultado;
  }
}
