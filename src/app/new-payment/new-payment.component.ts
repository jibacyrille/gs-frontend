import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentType } from '../model/students.model';
import { StudentsService } from '../services/students.service';
//import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrl: './new-payment.component.css'
})
export class NewPaymentComponent implements OnInit{


  public paymentFormGroup! : FormGroup;
  studentCode! : string;
  paymentTypes :string[]=[];
  pdfFileUrl! : string;
  showProgress! : boolean;


  constructor(private fb : FormBuilder, private activatedRoute:ActivatedRoute,
    private studentService:StudentsService
  ){

  }
  ngOnInit(): void {
    for(let elt in PaymentType){
      let value=PaymentType[elt]
      if(typeof value==='string') {
        this.paymentTypes.push(value);
      }
      
    }
    
    this.studentCode=this.activatedRoute.snapshot.params['studentCode']
    this.paymentFormGroup=this.fb.group({
      date : this.fb.control(''),
      amount : this.fb.control(''),
      type : this.fb.control(''),
      studentCode : this.fb.control(this.studentCode),
      fileSource : this.fb.control(''),
      fileName : this.fb.control('')
    
    });
  }

  selectFile(event:any){
    if(event.target.files.length>0){
      let file=event.target.files[0];
      this.paymentFormGroup.patchValue({
        fileSource:file,
        fileName:file.name
      });
      this.pdfFileUrl=window.URL.createObjectURL(file);
    }
    
  }

  savePayment() {
    this.showProgress=true;
    let date:Date=new Date(this.paymentFormGroup.value.date);
    let formattedDate=date.getDate()+"/"+(date.getMonth()+1)+'/'+date.getFullYear();
    this.showProgress=true;
    const formData=new FormData();
    console.log(formattedDate)
    formData.append('file', this.paymentFormGroup.get('fileSource')!.value);
    formData.append("amount", this.paymentFormGroup.value.amount);
    formData.append("type", this.paymentFormGroup.value.type);
    formData.append("date", formattedDate);
    formData.append("studentCode", this.paymentFormGroup.value.studentCode);

    this.studentService.savePayment(formData)
        .subscribe({
          next : value => {
            this.showProgress=false;
            alert("Payment saved successfully");
          },
          error : err =>{
            console.log(err);
          }
        });
    
    }

    afterLoadComplete($event: any) {
      alert("Chargement terminé")
      }
      

}
