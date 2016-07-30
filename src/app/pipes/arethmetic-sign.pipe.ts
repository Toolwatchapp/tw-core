import { Pipe, PipeTransform } from '@angular/core';
import { Wove } from 'aspect.js/dist/lib/aspect';
import { LoggerAspect } from './../aspects/logger.aspect';

@Wove(LoggerAspect)
@Pipe({
  name: 'arethmeticSign'
})
export class ArethmeticSign implements PipeTransform {

  transform(value: number): string {
    if(value >= 0){
            return "+" + value;
    }else{
        return value.toString();
    }
  }
}
