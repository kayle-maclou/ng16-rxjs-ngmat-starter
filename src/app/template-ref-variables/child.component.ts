import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'template-ref-variables-child',
  template: `
    <p>
      child component works!.
    </p>
  `,
  styles: [
  ]
})
export class TemplateRefVariables_ChildComponent {

  someFunction() {
    alert('Child component method was called!');
  }

}
