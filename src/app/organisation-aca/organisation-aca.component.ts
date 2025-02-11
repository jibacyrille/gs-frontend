import { Component } from '@angular/core';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  title: string;
  addButtonLabel: string;
  tableHeaders: string[];
  dataKeys: string[];
  data: any[];
  filteredData?: any[]; // Ajoutez cette propriété pour stocker les données filtrées
}

@Component({
  selector: 'app-organisation-aca',
  templateUrl: './organisation-aca.component.html',
  styleUrl: './organisation-aca.component.css'
})
export class OrganisationAcaComponent {
  activeTab: string = 'classes';
  searchText: string = '';

  menuItems: MenuItem[] = [
    {
      id: 'classes',
      label: 'Classes & Groupes',
      icon: 'fas fa-chalkboard',
      title: 'Gestion des Classes & Groupes',
      addButtonLabel: 'Ajouter une classe',
      tableHeaders: ['ID', 'Nom de la classe', 'Niveau'],
      dataKeys: ['id', 'name', 'niveau'],
      data: [
        { id: 1, name: 'Classe 1', niveau:'4eme' },
        { id: 2, name: 'school 3', niveau:'Terminale' },
        { id: 3, name: 'Classe 4', niveau:'4eme' },
        { id: 4, name: 'school 9', niveau:'Terminale' },
        { id: 5, name: 'Classe 10', niveau:'probatoie' },
        { id: 6, name: 'school 11', niveau:'Terminale' },
        { id: 7, name: 'Classe 12', niveau:'4eme' },
        { id: 8, name: 'school 13', niveau:'Terminale' },
        { id: 9, name: 'Classe 22', niveau:'4eme' },
        { id: 10, name: 'school 41', niveau:'BEPPC' },
        { id: 11, name: 'Classe 35', niveau:'4eme' },
        { id: 12, name: 'school 40', niveau:'Terminale' },
        { id: 13, name: 'Classe 47', niveau:'4eme' },
        { id: 14, name: 'school 48', niveau:'bepc' },
        { id: 15, name: 'Classe 19', niveau:'4eme' },
        { id: 16, name: 'school 17', niveau:'Terminale' },
        // Autres classes
      ]
    },
    {
      id: 'niveaux',
      label: 'Niveaux',
      icon: 'fas fa-layer-group',
      title: 'Gestion des Niveaux',
      addButtonLabel: 'Ajouter un niveau',
      tableHeaders: ['ID', 'Niveau'],
      dataKeys: ['id', 'level'],
      data: [
        { id: 1, level: 'Niveau 1' },
        // Autres niveaux
      ]
    },
    {
      id: 'cycles',
      label: 'Cycles',
      icon: 'fas fa-sync-alt',
      title: 'Gestion des Cycles',
      addButtonLabel: 'Ajouter un cycle',
      tableHeaders: ['ID', 'Cycle','section'],
      dataKeys: ['id', 'cycle', 'section'],
      data: [
        { id: 1, cycle: 'Cycle primaire', section: 'Section Anglophone' },
        { id: 2, cycle: 'Cycle secondaire', section: 'Section Francophone' },
        // Autres cycles
      ]
    },
    {
      id: 'sections',
      label: 'Sections',
      icon: 'fas fa-columns',
      title: 'Gestion des Sections',
      addButtonLabel: 'Ajouter une section',
      tableHeaders: ['ID', 'Section'],
      dataKeys: ['id', 'section'],
      data: [
        { id: 1, section: 'Section A' },
        // Autres sections
      ]
    },
    {
      id: 'matieres',
      label: 'Matières',
      icon: 'fas fa-book',
      title: 'Gestion des Matières',
      addButtonLabel: 'Ajouter une matière',
      tableHeaders: ['ID', 'Matière'],
      dataKeys: ['id', 'subject'],
      data: [
        { id: 1, subject: 'Mathématiques' },
        // Autres matières
      ]
    },
    {
      id: 'cours',
      label: 'Cours',
      icon: 'fas fa-chalkboard-teacher',
      title: 'Gestion des Cours',
      addButtonLabel: 'Ajouter un cours',
      tableHeaders: ['ID', 'Cours'],
      dataKeys: ['id', 'course'],
      data: [
        { id: 1, course: 'Cours de Mathématiques' },
        // Autres cours
      ]
    },
    {
      id: 'association',
      label: 'Association Enseignants',
      icon: 'fas fa-user-plus',
      title: 'Association des Enseignants aux Cours',
      addButtonLabel: 'Associer un enseignant',
      tableHeaders: ['ID', 'Enseignant', 'Cours'],
      dataKeys: ['id', 'teacher', 'course'],
      data: [
        { id: 1, teacher: 'M. Dupont', course: 'Mathématiques' }
      ]
    }
  ]


  constructor() {
    this.initializeFilteredData();
  }

  initializeFilteredData() {
    this.menuItems.forEach(item => {
      item.filteredData = [...item.data];
    });
  }


  addItem(): void {
    /*const newId = this.menuItems.length > 0 ? Math.max(...this.menuItems.map(item => item.id)) + 1 : 1;
    const newItem: MenuItem = { id: newId, teacher, course };
    this.menuItems.push(newItem);*/
  }


  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    this.applyFilter(); // Appliquez le filtre lors du changement d'onglet
  }

  applyFilter() {
    const searchTerm = this.searchText.toLowerCase();
    const activeItem = this.menuItems.find(item => item.id === this.activeTab);
    if (activeItem) {
      activeItem.filteredData = activeItem.data.filter(entry =>
        Object.values(entry).some(
          (val: unknown) => String(val).toLowerCase().includes(searchTerm)
        )
      );
    }
  }

  detailsItem(){}

  // Fonction pour éditer un élément
  editItem() {
   // itemId: number, dataType: string
  /*  if (dataType === 'class') {
      const classToEdit = this.classes.find(cls => cls.id === itemId);
      if (classToEdit) {
        // Implémentez la logique pour éditer la classe
        console.log(`Édition de la classe : ${classToEdit.name}`);
      }
    } else if (dataType === 'association') {
      const associationToEdit = this.associations.find(assoc => assoc.id === itemId);
      if (associationToEdit) {
        // Implémentez la logique pour éditer l'association
        console.log(`Édition de l'association : ${associationToEdit.teacher} - ${associationToEdit.course}`);
      }
    }*/
  }

  // Fonction pour supprimer un élément
  deleteItem() {
//itemId: number, dataType: string

   /* if (dataType === 'class') {
      this.classes = this.classes.filter(cls => cls.id !== itemId);
      console.log(`Classe avec ID ${itemId} supprimée.`);
    } else if (dataType === 'association') {
      this.associations = this.associations.filter(assoc => assoc.id !== itemId);
      console.log(`Association avec ID ${itemId} supprimée.`);
    }*/
  }
}




  /*
  editItem(courseId: number, newData: Partial<Course>): void {
    const course = this.courses.find(c => c.id === courseId);
    if (course) {
      Object.assign(course, newData);
    }
  }

  deleteItem(courseId: number): void {
    this.courses = this.courses.filter(c => c.id !== courseId);
  }
    */



 

