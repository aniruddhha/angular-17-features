import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CssLibComponent } from 'css-lib'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-app';
}
