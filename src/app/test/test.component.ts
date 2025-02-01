import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  name: string;
  age: number;
  [key: string]: any;
}

const ELEMENT_DATA: Element[] = [
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 30},
  {name: 'Charlie', age: 35},
  {name: 'David', age: 40},
];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  filteredDataSource = new MatTableDataSource<Element>();
  uniqueOptions: any = {};
  selectedOptions: any = {};

  ngOnInit() {
    // Initialiser les options uniques et sélectionnées
    this.initializeFilters();
    this.applyFilter();  // Appliquer le filtre initialement
  }

  initializeFilters() {
    this.displayedColumns.forEach((column) => {
      this.uniqueOptions[column] = [...new Set(ELEMENT_DATA.map((item) => item[column as keyof Element]))];
      this.selectedOptions[column] = {};  // Assurez-vous que chaque clé est initialisée avec un objet vide
  
      // Utiliser une vérification de nullité
      this.uniqueOptions[column]?.forEach((option: string) => {  // Définir explicitement le type de 'option' ici
        if (this.selectedOptions[column]) {
          this.selectedOptions[column]![option] = true;
        }
      });
    });
  }
  

  applyFilter() {
    const filteredData = ELEMENT_DATA.filter(item => {
      return this.displayedColumns.every(column => this.selectedOptions[column][item[column]]);
    });
    this.filteredDataSource.data = filteredData;  // Mettre à jour les données filtrées du tableau
  }
}
