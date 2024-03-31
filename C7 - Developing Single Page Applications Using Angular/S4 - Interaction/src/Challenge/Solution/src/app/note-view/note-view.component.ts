import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/note';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

 n:Notes[]=NOTES;
  constructor() { }
  ngOnInit(): void {
  }
onSearchText(senote:string){
  if(senote===''||!senote){
    this.n=NOTES;
  }
  else{
    this.n=NOTES;
    this.n = this.n.filter(note =>note.title?.startsWith(senote));
  }
} 
onnoteAdded($event:any){
  this.n.push($event) ;
  alert("success")
}

}
