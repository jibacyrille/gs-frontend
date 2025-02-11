import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { PaymentsComponent } from './payments/payments.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { EleveListComponent } from './eleve-list/eleve-list.component';
import { OrganisationAcaComponent } from './organisation-aca/organisation-aca.component';

const routes: Routes = [
  {path: "", component : LoginComponent},
  {path: "login", component : LoginComponent},
  {path: "admin", component : AdminTemplateComponent,
    canActivate : [AuthGuard],
    children : [
      {path: "home", component : HomeComponent},
      {path: "profile", component : ProfileComponent},
      {
        path: "loadStudents", component : LoadStudentsComponent,
        canActivate : [AuthorizationGuard], data : {roles : ['ADMIN']}
      },
      {path: "loadPayments", component : LoadPaymentsComponent},
      {path: "dashboard", component : DashboardComponent},
      {path: "students", component : StudentsComponent},
      {path: "payments", component : PaymentsComponent},
      {path: "eleve-details/:code", component : StudentDetailsComponent},
      {path: "new-payment/:studentCode", component : NewPaymentComponent},
      {path: "payment-details/:id", component : PaymentDetailsComponent},
      {path: "user-profile", component : UserProfileComponent},
      {path: "init-eleve", component : NewStudentComponent},
      {path: "profile/:matricule", component : ProfileComponent},
      {path: "inscriptions", component : InscriptionsComponent},
      {path: "eleves", component : EleveListComponent},
      {path: "organisation-aca", component : OrganisationAcaComponent}
      

    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
