// src/app/components/eleve/eleve-list.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { Eleve } from '../model/students.model';
import { EleveService } from '../services/eleve/eleve.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReloadService } from '../services/reload.service';

@Component({
  selector: 'app-eleve-list',
  templateUrl: './eleve-list.component.html',
  styleUrls: ['./eleve-list.component.css']
})
export class EleveListComponent implements OnInit {
  public eleves! : Array<Eleve>;
  public elevesDataSource! : MatTableDataSource<Eleve>;
  public displayedColumns=['Matricule','Nom','Prenom','Date de Naissance','Lieu de Naissance','Actions'];
  
  
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
 

  constructor(private reloadService: ReloadService, private eleveService: EleveService) { }

  ngOnInit(): void {
    this.loadEleves();
  }

  // Méthode pour charger les élèves depuis le backend
  loadEleves(): void {
    
    this.eleveService.getEleves().subscribe({
      next: (data) => {
        console.log('Données reçues depuis le backend :', data);
        this.eleves = data;
        this.elevesDataSource = new MatTableDataSource<Eleve>(this.eleves);
        this.elevesDataSource.paginator = this.paginator;
        this.elevesDataSource.sort = this.sort;
      },
      error: (err) => console.error('Erreur lors de la récupération des élèves', err)
    });
  }

  // Méthode pour supprimer un élève
  deleteEleve(id: number): void {
    this.eleveService.deleteEleve(id).subscribe(() => {
      this.eleves = this.eleves.filter(e => e.idEleve !== id);
      this.reloadService.requestReload();
    });
    this.reloadService.reload$.subscribe(() => {
      this.loadEleves();
    });
    
  }
}
