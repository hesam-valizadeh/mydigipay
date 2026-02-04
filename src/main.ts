import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiperElements } from 'swiper/element/bundle';
registerSwiperElements();
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
if ('serviceWorker' in navigator ) {
    navigator.serviceWorker.register('ngsw-worker.js')
      .then(reg => console.log('Service Worker Registered'))
      .catch(err => console.error('Service Worker Registration Failed', err));
  }