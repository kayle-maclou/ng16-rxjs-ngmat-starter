import { Component } from '@angular/core';

@Component({
  selector: 'style-binding',
  template: `
    <section>
      <h4>Style-binding component works!</h4>

      <h6>STYLE BINDING:</h6>
      <div [style.color]="isGreen ? '#0f0' : '#000'">This should be green!</div>

      <h6>NG-STYLE:</h6>
      <div [ngStyle]="getStyles()">This should be green and bold!</div>
    </section>
  `,
  styles: [],
})
export class StyleBinding_Component {
  isGreen = true;
  isBold = true;

  getStyles() {
    return {
      color: this.isGreen ? '#0f0' : '#000',
      'font-weight': this.isBold ? 'bold' : '600pt',
    };
  }
}
