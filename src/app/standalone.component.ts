import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>
      {{ message }}
    </h3>
  `,
  styles: [
  ]
})
export class StandaloneComponent {
  message = "Standalone works!";
}
