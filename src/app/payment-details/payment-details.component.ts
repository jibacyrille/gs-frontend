import { Component, OnInit } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentsService } from '../services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { Payment } from '../model/students.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit {

  paymentId!:Number;
  studentCode!:String;
  pdfFileUrl:any;
  payment!: Payment
  constructor(
    private studentService:StudentsService,
    private route: ActivatedRoute,
    private router:Router
){

}
ngOnInit(): void {
  this.paymentId=this.route.snapshot.params['id'];

  this.studentService.getPaymentByID(this.paymentId).subscribe({
    next : value => {
      this.studentCode=value.eleve.code;

    }, error : err =>{
      console.log(err)
    }
  });

  this.studentService.getPaymentDetails(this.paymentId).subscribe({
    next : value => {
      let blob: Blob=new Blob([value], {type:'application/pdf'});
      this.pdfFileUrl=window.URL.createObjectURL(blob);

    }, error : err =>{
      console.log(err)
    }
  });

}

afterLoadComplete($event: any) {

  }
  newPayment() {
    this.router.navigateByUrl(`/admin/new-payment/${this.studentCode}`);
    }

}
