import { Component } from '@angular/core';

@Component({
  selector: 'template-based-form',
  template: `
    <section>
      <h4>Template-based Form works!</h4>

      <form #myForm="ngForm" (ngSubmit)="onSubmitForm(myForm)">
        <div>
          <label for="field1">Field1:</label>
          <input type="text" name="field1" id="field1" [(ngModel)]="field1" />
        </div>
        <div>
          <label for="field2">Field2:</label>
          <input type="text" name="field2" id="field2" [(ngModel)]="field2" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  `,
  styles: [],
})
export class TemplateBasedForm_Component {
  field1: any;
  field2: any;

  onSubmitForm(form: any) {
    console.log(form.value);
  }
}
