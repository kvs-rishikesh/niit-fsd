import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

senote:string='';
@Output()
searchText:EventEmitter<string>=new EventEmitter<string>();

search(){
  this.searchText.emit(this.senote);
  this.senote="";
}

}
