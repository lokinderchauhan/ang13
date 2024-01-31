import { NgModule, Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'Age',
  pure: true
})
export class AgePipe implements PipeTransform {


  // convert date to local date with time zone passed as string ...
  // i.e
  // date = convertTimezoneToLocal(date, timezone, true);
  convertTimezoneToLocal(date: Date, timezone: string, reverse: boolean): Date {
    const reverseValue = reverse ? -1 : 1;
    const dateTimezoneOffset = date.getTimezoneOffset();
    const timezoneOffset = this.timezoneToOffset(timezone, dateTimezoneOffset);
    return this.addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
  }

  addDateMinutes(date: Date, minutes: number) {
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  }


  // Convert sting time zone to offset.
  timezoneToOffset(timezone: string, fallback: number): number {
    // Support: IE 9-11 only, Edge 13-15+
    // IE/Edge do not "understand" colon (`:`) in timezone
    timezone = timezone.replace(/:/g, '');
    const requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
  }



  transform(value: any, args?: any): any {
    if (value) {
      // Create date object without timezone added..
      let newDate= new Date(value);

      // add timezone value to date.
      newDate= this.addDateMinutes(newDate,-1*newDate.getTimezoneOffset())
        let seconds = Math.floor((+new Date() - +newDate) / 1000);

        const intervals: { [key: string]: number } = {
            'year': 31536000,
            'month': 2592000,
           // 'week': 604800,
            'day': 86400,
            // 'hour': 3600,
            // 'minute': 60,
            // 'second': 1
        };
        let counter=[];
        if (seconds <= 86400) {
          return 'Today';
        }
        if(seconds <=172800 && seconds>86400){
          return 'Yesterday';
        }
        for (const i in intervals) {
           let part = Math.floor(seconds / intervals[i]);
            if (part > 0)
                if (part === 1) {
                     counter.push(' '+part+ ' ' + i + '') ; // singular (1 day ago)
                     seconds=seconds-intervals[i];
                } else {
                   counter.push(' '+part+ ' ' + i + 's') ; // singular (1 day ago) return counter + ' ' + i + 's'; // plural (2 days ago)
                   seconds=seconds-(part*intervals[i]);
                }
              if(seconds<=0){
                break;
              }
        }
        return counter.join(",");

    }
    return value;
}

}

@NgModule({
  declarations: [AgePipe],
  imports: [],
  exports: [AgePipe],
})
export class AgePipeModule {}
