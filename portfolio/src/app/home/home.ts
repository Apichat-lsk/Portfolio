import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Media } from '../media/media';
import { Footer } from '../footer/footer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [Header, Media, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  goDirect(path: String) {
    this.router.navigate([`${path}`]);
  }
  openInternalPage(path: any) {
    window.open(path, '_blank');
  }
}
