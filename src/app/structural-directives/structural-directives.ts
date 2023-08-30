import { Component } from '@angular/core';

@Component({
  selector: 'structural-directives',
  template: `
    <section>
      <h4>structural-directives component works!</h4>

      <h6>FOR LOOP:</h6>
      <ol>
        <li *ngFor="let dataItem of dataList">{{ dataItem }}</li>
      </ol>

      <h6>IF FIRST ELEMENT IS "aaa":</h6>
      <div *ngIf="dataList[0] === 'aaa'; then thenBlock; else elseBlock"></div>
      <ng-template #thenBlock>true.</ng-template>
      <ng-template #elseBlock>false.</ng-template>

      <h6>NG-SWITCH for value {{ switchValue }}:</h6>
      <ol [ngSwitch]="switchValue">
        <li *ngSwitchCase="2">{{ dataList[switchValue] }}</li>
        <li *ngSwitchCase="0">{{ dataList[switchValue] }}</li>
        <li *ngSwitchCase="1">{{ dataList[switchValue] }}</li>
        <li *ngSwitchDefault="">OUT OF RANGE!</li>
      </ol>
    </section>
  `,
  styles: [],
})
export class StructuralDirectives_Component {
  dataList = ['aaa', 'bbb', 'ccc'];
  switchValue = 1;
}
