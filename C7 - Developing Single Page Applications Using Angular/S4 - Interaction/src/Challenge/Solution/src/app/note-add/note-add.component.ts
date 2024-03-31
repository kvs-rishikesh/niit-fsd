import { Component, OnInit,Output, EventEmitter} from '@angular/core';

import { Notes } from '../models/note';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

note:Notes={}

@Output()
noteadded:EventEmitter<any>=new EventEmitter<any>()

savenote(){
this.noteadded.emit(this.note);
this.note={}
}

  constructor() { }

  ngOnInit(): void {
  }

}
