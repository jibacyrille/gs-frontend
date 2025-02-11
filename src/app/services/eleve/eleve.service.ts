// src/app/services/eleve.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eleve } from '../../model/students.model';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  // Assurez-vous que l'URL correspond à celle de votre backend (par exemple, http://localhost:8080/api/eleves)
  private baseUrl = 'http://localhost:8080/api/eleves';

  constructor(private http: HttpClient) { }

  // Récupère tous les élèves
  getEleves(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.baseUrl);
  }

  // Récupère un élève par son ID
  getEleve(id: number): Observable<Eleve> {
    return this.http.get<Eleve>(`${this.baseUrl}/${id}`);
  }

  // Crée un nouvel élève
  createEleve(eleve: Eleve): Observable<Eleve> {
    return this.http.post<Eleve>(this.baseUrl, eleve);
  }

  // Met à jour un élève
  updateEleve(id: number, eleve: Eleve): Observable<Eleve> {
    return this.http.put<Eleve>(`${this.baseUrl}/${id}`, eleve);
  }

  // Supprime un élève
  deleteEleve(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
