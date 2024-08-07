import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'web-24a-qbao',
        appId: '1:69276214672:web:2f4b90f3a6f8e418dd3f15',
        storageBucket: 'web-24a-qbao.appspot.com',
        apiKey: 'AIzaSyDEjzNMhmb0T9dlD0IlMrKADTBMQLrZbxc',
        authDomain: 'web-24a-qbao.firebaseapp.com',
        messagingSenderId: '69276214672',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
