import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  private reloadSubject = new Subject<void>();
  reload$ = this.reloadSubject.asObservable();

  requestReload() {
    this.reloadSubject.next(); // Émet un signal de rechargement
  }
}