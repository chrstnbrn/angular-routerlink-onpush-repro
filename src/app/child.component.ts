import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<a routerLink="/" queryParamsHandling="preserve">Keep query param</a>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {}