import { Component } from '@angular/core';
import { Media } from '../media/media';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contacts',
  imports: [Media, Header, Footer],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {}
