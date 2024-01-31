import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'bday'
})
export class BdayPipe implements PipeTransform {

  transform(value: string): boolean {

    const today = new Date()
    const nextDate = new Date(value);
    const localNextDate = new Date(nextDate.toLocaleString())
    if(today.getMonth() == localNextDate.getMonth() &&   today.getDate() == localNextDate.getDate()) {
      return true
    } else {
      return false
    }
  }

}

@NgModule({
  declarations: [BdayPipe],
  imports: [
    CommonModule
  ],
  exports: [BdayPipe]
})
export class BdayPipeModule {
}
