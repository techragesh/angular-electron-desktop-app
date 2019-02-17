import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-electron-desktop-app';

  Add(a: number, b: number): number {
    return a + b;
  }
  Sub(a: number, b: number): number {
    return a - b;
  }
  Multi(a: number, b: number): number {
    return a * b;
  }
  Divide(a: number, b: number): number {
    return a / b;
  }
}
