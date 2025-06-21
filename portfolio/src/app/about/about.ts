import { Component } from '@angular/core';
import { Media } from '../media/media';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-about',
  imports: [Media, Header, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
