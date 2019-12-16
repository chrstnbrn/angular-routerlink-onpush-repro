import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'my-app',
  template: `
  <p>
    <a routerLink="/" [queryParams]="{ param: 'abc' }">Set query param</a>
  </p>
  <p>
    <app-child></app-child>
  </p>
`
})
export class AppComponent {}
