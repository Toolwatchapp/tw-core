import { Pipe, PipeTransform } from '@angular/core';
import { Wove } from 'aspect.js/dist/lib/aspect';
import { LoggerAspect } from './../aspects/logger.aspect';

@Wove(LoggerAspect)
@Pipe({
  name: 'leadingZero'
})
export class LeadingZero implements PipeTransform {

  transform(value: number): string {
    if (value < 10) {
        return "0" + value;
    }else{
        return value.toString();
    }
  }
}
