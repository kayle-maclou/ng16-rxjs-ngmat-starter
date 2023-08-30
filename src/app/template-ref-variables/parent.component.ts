import { Component } from '@angular/core';

@Component({
  selector: 'template-ref-variables-parent',
  template: `
    <p>
      parent component works!
      <template-ref-variables-child #childComponent />
      <button (click)="childComponent.someFunction()">Call method in child component!</button>
    </p>
  `,
  styles: [
  ]
})
export class TemplateRefVariables_ParentComponent {
}
