import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  profileJson = '';

  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe(
      user => this.profileJson = JSON.stringify(user, null, 2)
    );
  }



}
