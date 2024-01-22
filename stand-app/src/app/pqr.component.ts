import { Component } from '@angular/core';
import { TextComponent } from './text.component';

@Component({
  selector: 'app-pqr',
  standalone: true,
  imports: [TextComponent],
  template: `
    <p>
      <app-text></app-text>
      pqr works!
    </p>
  `,
  styles: ``
})
export class PqrComponent {

}
