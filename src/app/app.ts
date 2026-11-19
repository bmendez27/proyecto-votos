import { Component, signal } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('proyecto-votos');
}
