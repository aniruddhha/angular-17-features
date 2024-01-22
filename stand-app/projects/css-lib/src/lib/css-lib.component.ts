import { Component } from '@angular/core';

@Component({
  selector: 'lib-css-lib',
  standalone: true,
  imports: [],
  template: `
    <p class='bigger'>
      css-lib works!
    </p>
  `,
  styleUrl: `./my.css`
})
export class CssLibComponent {

}
