import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';

let routeConfig: Routes = [
  { path: '', component: Child3Component },
  { path: 'child4', component: Child4Component }
];

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent,
    Child2Component,
    Child3Component,
    Child4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
