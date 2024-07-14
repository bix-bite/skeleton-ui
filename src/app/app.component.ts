import { ChangeDetectionStrategy, Component, computed, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthService, User } from '@auth0/auth0-angular';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'skeleton-ui';

  authenticated = signal(false);
  user = signal<User | undefined>(undefined)
  pictureUrl = computed(() => this.user()?.picture || '');
  name = computed(() => this.user()?.given_name || '');

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.error$.subscribe((x) => console.error((x.message)));
    this.auth.isAuthenticated$.subscribe((x) => this.authenticated.set(x) );
    this.auth.user$.subscribe( (u) => this.user.set(u ? u : undefined) );
  }

  loginWithRedirect() {
    this.auth.loginWithRedirect();
    
  }

  logout() {
    this.auth.logout();
  }

  
}

