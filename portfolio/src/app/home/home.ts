import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Media } from '../media/media';
import { Footer } from '../footer/footer';
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [Header, Media, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  constructor(private router: Router) {}

  goDirect(path: String) {
    this.router.navigate([`${path}`]);
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      // เช็คก่อนว่ามี document
      const captures = document.querySelectorAll<HTMLElement>('.glow-capture');

      captures.forEach((capture) => {
        const clonedChild = capture.children[0].cloneNode(true);
        const overlay = capture.querySelector<HTMLElement>('.glow-overlay');

        if (overlay) {
          overlay.appendChild(clonedChild);
        }

        capture.addEventListener('mousemove', (event: MouseEvent) => {
          const x = event.pageX - capture.offsetLeft;
          const y = event.pageY - capture.offsetTop;

          if (overlay) {
            overlay.style.setProperty('--glow-x', `${x}px`);
            overlay.style.setProperty('--glow-y', `${y}px`);
            overlay.style.setProperty('--glow-opacity', '1');
          }
        });

        capture.addEventListener('mouseleave', () => {
          if (overlay) {
            overlay.style.setProperty('--glow-opacity', '0');
          }
        });
      });
    }
  }
}
