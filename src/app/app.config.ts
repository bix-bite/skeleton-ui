import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
    provideAuth0({
      domain: 'dev-v4u2qqnm8yh4gmsg.us.auth0.com',
      clientId: 'OVk7QHpBepsQW8oW1EkqR95h80FeAvKL',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
};
