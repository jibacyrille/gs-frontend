import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewStudentComponent } from '../new-student/new-student.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.css'
})
export class InscriptionsComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(NewStudentComponent, {
      width: '450px',
      data: { message: 'Hello, world!' } // Optionnel : vous pouvez passer des données au dialogue
    });
  }

  isChildVisible = false;

  showChild() {
    this.isChildVisible = true;
  }

  hideChild() {
    this.isChildVisible = false;
  }

}
