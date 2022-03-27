import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ButtonComponent } from './component/button/button.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
