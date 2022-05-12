import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { SideNavComponent } from './shell/side-nav/side-nav.component';



@NgModule({
  declarations: [
    ShellComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    MaterialUiModule
  ]
})
export class ShellModule { }
