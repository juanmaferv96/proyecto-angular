//import { AppComponent } from './../app.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query:string;
  public result? : string;
  @Input() labelButton?: string;
  @Input() placeholder?: string;
  @Output() searchEvent = new EventEmitter();

  constructor() {
    this.query="query";
   }
   search(){
    this.result = 'Consulta realizada con query \"'+ this.query + '\"';
    this.searchEvent.emit({query: this.query, resultado: this.result});
  }


  ngOnInit(): void {
  }

}

