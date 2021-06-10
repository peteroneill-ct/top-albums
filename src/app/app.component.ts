import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar color="primary"> Top 100 Albums </mat-toolbar>
      <app-albums></app-albums>
    </div>
  `,
})
export class AppComponent {}
