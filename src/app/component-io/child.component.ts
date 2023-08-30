import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-io-child',
  template: `
    <p>
      child component works with my {{myInputParam}}.
      <button (click)="clickMe()">Click me!</button>
    </p>
  `,
  styles: [
  ]
})
export class ComponentIo_ChildComponent {
  @Input()
  myInputParam: string = '';

  @Output()
  myOutputEvent = new EventEmitter<string>();

  clickMe() {
    this.myOutputEvent.emit('Child was clicked!');
  }

}
