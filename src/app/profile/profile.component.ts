import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  isReadOnly = true; // ou une condition basée sur votre logique d'application
  // isDisabled = true;

  public studentFormGroup! : FormGroup;
  studentMatricule! : string;
  paymentTypes :string[]=[];
  pdfFileUrl! : string;
  showProgress! : boolean;

  //date : this.fb.control(''),
  nom! : String;
  prenom! : String;
  classe! : String;


  constructor(private fb : FormBuilder, private activatedRoute:ActivatedRoute,
    private studentService:StudentsService
  ){

  }
  ngOnInit(): void {
 /*   for(let elt in PaymentType){
      let value=PaymentType[elt]
      if(typeof value==='string') {
        this.paymentTypes.push(value);
      }
      
    }*/
    
    this.studentMatricule=this.activatedRoute.snapshot.params['matricule']
    this.studentService.getStudentByMatricule(this.studentMatricule).subscribe({
      next : eleveDTO => {
        
        this.nom=eleveDTO.nom.toString();
        this.prenom=eleveDTO.prenom;
        this.classe=eleveDTO.classe;
        //this.date=new Date("10/10/2024");
        //this.date=eleveDTO.;

        this.studentFormGroup=this.fb.group({
          nom : this.fb.control(this.nom),
          prenom : this.fb.control(this.prenom),
          classe : this.fb.control(this.classe),
          date : this.fb.control(new Date("10/10/2024"))
              
        });
        
      }, error : err =>{
        console.log(err)
      }
    });


    this.studentFormGroup=this.fb.group({
      nom : this.fb.control(this.nom),
      prenom : this.fb.control(this.prenom),
      classe : this.fb.control(this.classe),
      date : this.fb.control(new Date("10/10/2024"))
          
    });
  }

}
