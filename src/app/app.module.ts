import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule} from '@angular/forms'; 
import { NgxSearchFilterModule } from 'ngx-search-filter';


import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { PaymentsComponent } from './payments/payments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { StudentDetailsComponent } from './student-details/student-details.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { ListeInscriptionComponent } from './liste-inscription/liste-inscription.component';
import { TestComponent } from './test/test.component';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { EleveListComponent } from './eleve-list/eleve-list.component';
import { OrganisationAcaComponent } from './organisation-aca/organisation-aca.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    ProfileComponent,
    LoadStudentsComponent,
    LoadPaymentsComponent,
    LoginComponent,
    StudentsComponent,
    PaymentsComponent,
    DashboardComponent,
    StudentDetailsComponent,
    NewPaymentComponent,
    PaymentDetailsComponent,
    UserProfileComponent,
    NewStudentComponent,
    InscriptionsComponent,
    ListeInscriptionComponent,
    TestComponent,
    ContactsTableComponent,
    EleveListComponent,
    OrganisationAcaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,MatPaginatorModule,
    MatSortModule,
    //FlexLayoutModule,
    //FlexLayoutServerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    PdfViewerModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule

  ],
  providers: [
    provideHttpClient(withFetch()),
    //provideClientHydration(),
    provideAnimationsAsync(),
    AuthGuard, AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
