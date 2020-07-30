import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(time: number): Date {
    const hours:number = Math.floor(time / (60 * 60));
    const minutes:number = Math.floor((time % 3600) / 60);
    const seconds:number = time % 60;
    return new Date(0, 0, 0, hours, minutes, seconds);
  }
}
