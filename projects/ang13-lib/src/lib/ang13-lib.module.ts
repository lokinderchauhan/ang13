import { NgModule } from '@angular/core';
import { Ang13LibComponent } from './ang13-lib.component';
import { AgePipe } from './age.pipe';
import { BdayPipe } from './bday.pipe';



@NgModule({
  declarations: [
    Ang13LibComponent,
    AgePipe,
    BdayPipe
  ],
  imports: [
  ],
  exports: [
    Ang13LibComponent,AgePipe,BdayPipe
  ]
})
export class Ang13LibModule { }
