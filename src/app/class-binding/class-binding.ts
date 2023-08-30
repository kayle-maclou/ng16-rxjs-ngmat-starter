import { Component } from '@angular/core';

@Component({
  selector: 'class-binding',
  template: `
    <section>
      <h4>class-binding component works!</h4>

      <h6>CLASS BINDING:</h6>
      <div [class.green]="isGreen">This should be green!</div>

      <h6>NG-CLASS:</h6>
      <div [ngClass]="getStyles()">This should be green and bold!</div>
    </section>
  `,
  styles: [
    `
      .green {
        color: #0f0;
      }
      .bold {
        font-weight: bold;
      }
    `,
  ],
})
export class ClassBinding_Component {
  isGreen = true;
  isBold = true;

  getStyles() {
    return {
      green: this.isGreen,
      bold: this.isBold,
    };
  }
}
