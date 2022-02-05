import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timelapse'
})
export class TimelapsePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
