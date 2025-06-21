import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.css',
})
export class App {
  protected title = 'portfolio';
}
