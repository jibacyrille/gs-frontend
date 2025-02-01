import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EleveInitDTO, Student } from '../model/students.model';
import { Router } from '@angular/router';
import { ReloadService } from '../services/reload.service';


@Component({
  selector: 'app-liste-inscription',
  templateUrl: './liste-inscription.component.html',
  styleUrl: './liste-inscription.component.css'
})
export class ListeInscriptionComponent {

  public eleves! : Array<EleveInitDTO>;
  public elevesDataSource! : MatTableDataSource<EleveInitDTO>;
  public displayedColumns=['id','matricule','nom','prenom','classe','etat','details'];


  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private reloadService: ReloadService, private studentsService : StudentsService, private router:Router){
  }
  ngOnInit(): void {
    this.reloadService.reload$.subscribe(() => {
      this.chargerTableau();
    });
    this.chargerTableau();


  }

  chargerTableau(){
    this.studentsService.getStudents()
      .subscribe({
        next : data=>{
          this.eleves=data
          this.elevesDataSource=new MatTableDataSource<EleveInitDTO>(this.eleves);
          this.elevesDataSource.paginator=this.paginator
          this.elevesDataSource.sort=this.sort;
        },
        error: err =>{
          console.log(err)
        }
      });
  }

  studentProfile(eleve: EleveInitDTO) {
    this.router.navigateByUrl('/admin/profile/'+eleve.matricule);
    }
}