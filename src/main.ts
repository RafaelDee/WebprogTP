/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export const webname = "WebprogTP"
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
document.title = webname
