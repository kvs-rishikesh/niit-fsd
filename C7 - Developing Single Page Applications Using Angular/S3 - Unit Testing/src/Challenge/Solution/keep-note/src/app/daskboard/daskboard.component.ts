import { Component } from '@angular/core';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-daskboard',
  templateUrl: './daskboard.component.html',
  styleUrl: './daskboard.component.css'
})
export class DaskboardComponent {

  notes = NOTES
  searchText: string = '';
  searchNote() {
    this.notes = NOTES;
    if (this.searchText !== '' && this.searchText) {
      this.notes = this.notes.filter(note => note.title?.startsWith(this.searchText.toLowerCase()));
    }
  }

}
