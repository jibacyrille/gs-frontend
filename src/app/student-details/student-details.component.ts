import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../services/students.service';
import { Payment } from '../model/students.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleve-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {

  studentCode! : string;

  public studentpayments! : Array<Payment>;
  public paymentDataSource : any;
  public displayedColumns=['id','date','amount','type',
    'status','firstName', 'details'];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private activatedRoute : ActivatedRoute,
              private studentsService:StudentsService,
              private router:Router
  ){

  }
  ngOnInit(){
    this.studentCode=this.activatedRoute.snapshot.params['code'];
    this.studentsService.getStudentPayments(this.studentCode).subscribe({
      next : data=>{
        this.studentpayments=data
        this.paymentDataSource=new MatTableDataSource<Payment>(this.studentpayments);
        this.paymentDataSource.paginator=this.paginator
        this.paymentDataSource.sort=this.sort;
      },
      error: err =>{
        console.log(err)
      }
    })
  }

  newPayment() {
    this.router.navigateByUrl(`/admin/new-payment/${this.studentCode}`);
    }

    paymentDetails(payment: Payment) {
      this.router.navigateByUrl(`/admin/payment-details/${payment.id}`)
      }

}
