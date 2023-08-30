import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ComponentIo_ParentComponent } from './component-io/parent.component';
import { ComponentIo_ChildComponent } from './component-io/child.component';
import { TemplateRefVariables_ChildComponent } from './template-ref-variables/child.component';
import { TemplateRefVariables_ParentComponent } from './template-ref-variables/parent.component';
import { StructuralDirectives_Component } from './structural-directives/structural-directives';
import { ClassBinding_Component } from './class-binding/class-binding';
@NgModule({
  declarations: [
    AppComponent,
    ComponentIo_ParentComponent,
    ComponentIo_ChildComponent,
    TemplateRefVariables_ParentComponent,
    TemplateRefVariables_ChildComponent,
    StructuralDirectives_Component,
    ClassBinding_Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
