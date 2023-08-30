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
@NgModule({
  declarations: [
    AppComponent,
    ComponentIo_ParentComponent,
    ComponentIo_ChildComponent,
    TemplateRefVariables_ParentComponent,
    TemplateRefVariables_ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
