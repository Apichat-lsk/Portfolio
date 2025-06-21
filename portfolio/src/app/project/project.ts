import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Media } from '../media/media';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-project',
  imports: [Header, Media, Footer],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {}
