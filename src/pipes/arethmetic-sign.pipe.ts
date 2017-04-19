import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arethmeticSign'
}) 
export class ArethmeticSign implements PipeTransform {

  transform(value: number): string {
    if(value >= 0) {
        return "+" + value;
    } else {
        return value.toString();
    }
  }
}
