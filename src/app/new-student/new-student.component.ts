import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; // Import MatDialogRef
import { StudentsService } from '../services/students.service';
import { ClassList } from '../model/students.model';
import { ReloadService } from '../services/reload.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.css'
})
export class NewStudentComponent implements OnInit {

  public studentFormGroup!: FormGroup;
  classList: string[] = [];
  showProgress!: boolean;

  constructor(
    private reloadService: ReloadService,
    private fb: FormBuilder,
    private studentService: StudentsService,
    private dialogRef: MatDialogRef<NewStudentComponent> // Injecter MatDialogRef
  ) {}

  ngOnInit(): void {
    for (let elt in ClassList) {
      let value = ClassList[elt];
      if (typeof value === 'string') {
        this.classList.push(value);
      }
    }

    this.studentFormGroup = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      classe: ['', Validators.required],
      dateIns: ['', Validators.required],
    });
  }

  initStudent() {
    if (this.studentFormGroup.valid) {
      const formData = new FormData();
      formData.append("nom", this.studentFormGroup.value.nom);
      formData.append("prenom", this.studentFormGroup.value.prenom);
      formData.append("classe", this.studentFormGroup.value.classe);
      formData.append("etat", "Created");

      this.studentService.initStudent(formData).subscribe({
        next: value => {
          this.reloadService.requestReload();
          alert("L'élève " + value.nom + " " + value.prenom + " a été inscrit en " + value.classe);
          this.close(); // Fermer après l'inscription
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }

  // Méthode pour fermer le dialogue
  close() {
    this.dialogRef.close(); // Ferme la boîte de dialogue
  }
}