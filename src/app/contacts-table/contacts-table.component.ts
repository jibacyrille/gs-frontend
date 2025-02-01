import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent implements OnInit {
  contacts: any[] = []; // Remplacez avec vos données réelles
  filteredContacts: any[] = [];
  displayedColumns: string[] = ['name', 'company', 'status', 'assignedTo', 'phone', 'email'];
  
  uniqueNames: string[] = [];
  selectedName: { [key: string]: boolean } = {};

  uniqueCompanies: string[] = [];
  selectedCompany: { [key: string]: boolean } = {};

  uniqueStatuses: string[] = [];
  selectedStatus: { [key: string]: boolean } = {};

  uniqueAssignedTo: string[] = [];
  selectedAssignedTo: { [key: string]: boolean } = {};

  dropdownVisible: { [key: string]: boolean } = {
    name: false,
    company: false,
    status: false,
    assignedTo: false
  };

  constructor() {}

  ngOnInit() {
    this.contacts = [
      
        { name: 'Amelia Harper', company: 'ACME', status: 'Salaried', assignedTo: 'John Heart', phone: '+1(213)555-4276', email: 'ameliah@dx-email.com' },
        { name: 'Antony Remmen', company: 'Clicker', status: 'Salaried', assignedTo: 'Samantha Bright', phone: '+1(310)555-6625', email: 'anthonyr@dx-email.com' },
        { name: 'Arnie Schwartz', company: 'Screen Shop', status: 'Salaried', assignedTo: 'John Heart', phone: '+1(714)555-8882', email: 'arnolds@dx-email.com' },
        { name: 'Arthur Miller', company: 'Super Mart of the West', status: 'Salaried', assignedTo: 'Samantha Bright', phone: '+1(310)555-8583', email: 'arthurm@dx-email.com' },
        { name: 'Barb Banks', company: 'StereoShack', status: 'Salaried', assignedTo: 'Samantha Bright', phone: '+1(714)555-3355', email: 'barbarab@dx-email.com' },
        { name: 'Bart Arnaz', company: 'ElectrixMax', status: 'Salaried', assignedTo: 'John Heart', phone: '+1(714)555-2000', email: 'barta@dx-email.com' },
        { name: 'Billy Zimmer', company: 'Braeburn', status: 'Salaried', assignedTo: 'Samantha Bright', phone: '+1(909)555-6939', email: 'williamz@dx-email.com' },
        { name: 'Brad Farkus', company: 'Walters', status: 'Terminated', assignedTo: 'John Heart', phone: '+1(213)555-3626', email: 'bradf@dx-email.com' }
     
    ];

    this.filteredContacts = [...this.contacts];
    this.initializeFilterOptions();
  }

  initializeFilterOptions() {
    this.uniqueNames = [...new Set(this.contacts.map(contact => contact.name))];
    this.uniqueNames.forEach(name => this.selectedName[name] = false);

    this.uniqueCompanies = [...new Set(this.contacts.map(contact => contact.company))];
    this.uniqueCompanies.forEach(company => this.selectedCompany[company] = false);

    this.uniqueStatuses = [...new Set(this.contacts.map(contact => contact.status))];
    this.uniqueStatuses.forEach(status => this.selectedStatus[status] = false);

    this.uniqueAssignedTo = [...new Set(this.contacts.map(contact => contact.assignedTo))];
    this.uniqueAssignedTo.forEach(assignedTo => this.selectedAssignedTo[assignedTo] = false);
  }

  toggleDropdown(column: string): void {
    // Ferme tous les dropdowns sauf celui cliqué
    for (const key in this.dropdownVisible) {
      if (key !== column) {
        this.dropdownVisible[key] = false;
      }
    }
    // Toggle dropdown visibility
    this.dropdownVisible[column] = !this.dropdownVisible[column];
  }

  toggleSelectAll(column: string, isChecked: boolean): void {
    if (column === 'name') {
      this.uniqueNames.forEach(option => this.selectedName[option] = isChecked);
    } else if (column === 'company') {
      this.uniqueCompanies.forEach(option => this.selectedCompany[option] = isChecked);
    } else if (column === 'status') {
      this.uniqueStatuses.forEach(option => this.selectedStatus[option] = isChecked);
    } else if (column === 'assignedTo') {
      this.uniqueAssignedTo.forEach(option => this.selectedAssignedTo[option] = isChecked);
    }
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredContacts = this.contacts.filter(contact =>
      (Object.values(this.selectedName).every(v => !v) || this.selectedName[contact.name]) &&
      (Object.values(this.selectedCompany).every(v => !v) || this.selectedCompany[contact.company]) &&
      (Object.values(this.selectedStatus).every(v => !v) || this.selectedStatus[contact.status]) &&
      (Object.values(this.selectedAssignedTo).every(v => !v) || this.selectedAssignedTo[contact.assignedTo])
    );
  }
}
