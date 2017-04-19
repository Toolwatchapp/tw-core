import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kFormatter'
}) 
export class KFormatter implements PipeTransform {

  //we expect a signed number (i.e +2.7)
  transform(value: string): string {

    let sign:string = value.charAt(0);
    value = value.substr(1);
    let number = Number(value);

    if(Math.abs(number) > 999) {
      return sign + (number/1000).toFixed(0) + 'k';
    } else if(Math.abs(number) > 100) {
      return sign + number.toFixed(0);
    } else {
      return sign + number.toFixed(1);
    }
  }
}
