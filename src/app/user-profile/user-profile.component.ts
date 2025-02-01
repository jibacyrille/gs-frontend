import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  
  isReadOnly = true; // ou une condition basée sur votre logique d'application
 // isDisabled = true;

}
