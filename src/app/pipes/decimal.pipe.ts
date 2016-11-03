import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
}) 
export class Decimal implements PipeTransform {

  transform(value: number): number {

  	if(Math.abs(value) < 100){
  		return value.toFixed(1);
  	}else{
  		return value.toFixed(0);
  	}
  }
}
