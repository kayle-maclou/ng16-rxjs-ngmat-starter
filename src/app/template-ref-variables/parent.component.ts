import { Component } from '@angular/core';

@Component({
  selector: 'component-io-parent',
  template: `
    <p>
      parent component works!
      <component-io-child 
        myInputParam="Some-input-value"
        (myOutputEvent)="onOutputEvent($event)"
      />
    </p>
  `,
  styles: [
  ]
})
export class TemplateRefVariables_ParentComponent {

  onOutputEvent($event: string) {
    alert($event)
  }
}
