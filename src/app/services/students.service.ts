import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { EleveInitDTO, Payment, Student } from '../model/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  
  constructor(private http: HttpClient) { }

  public getAllPayments():Observable<Array<Payment>>{
    return this.http.get<Array<Payment>>(environment.backendHost+"/payments");
    //return this.http.get(`${environment.backendHost}/payments`);
  }

  public getStudents():Observable<Array<EleveInitDTO>>{
    return this.http.get<Array<EleveInitDTO>>(environment.backendHost+"/inscription/liste");
    //return this.http.get(`${environment.backendHost}/payments`);
  }

  public getStudents1():Observable<Array<Student>>{
    return this.http.get<Array<Student>>(environment.backendHost+"/students");
    //return this.http.get(`${environment.backendHost}/payments`);
  }

  public getStudentPayments(code:string):Observable<Array<Payment>>{
    return this.http.get<Array<Payment>>(`${environment.backendHost}/students/${code}/payments`);
    //return this.http.get<Array<Payment>>(environment.backendHost+"/students/"+code+"/payments");
    //return this.http.get(`${environment.backendHost}/payments`);
  }
  public savePayment(formData:any):Observable<Payment>{
    return this.http.post<Payment> (`${environment.backendHost}/payments`, formData)
  }

  public getPaymentDetails(paymentId: Number) {
    return this.http.get(`${environment.backendHost}/paymentFile/${paymentId}`, {responseType:'blob'});
  }

  public getPaymentByID(code:Number):Observable<Payment>{
    return this.http.get<Payment>(`${environment.backendHost}/payments/${code}`);
  }

  public deletePaymentByID(code:Number): Observable<void>{
    return this.http.delete<void>(`${environment.backendHost}/delete/payments/${code}`);
  }

  public getStudentByMatricule(matricule:String):Observable<EleveInitDTO>{
    return this.http.get<EleveInitDTO>(`${environment.backendHost}/eleves/${matricule}`);
  }

  initStudent(formData: FormData):Observable<EleveInitDTO> {
    return this.http.post<any> (`${environment.backendHost}/init-eleve`, formData)
  }

}


