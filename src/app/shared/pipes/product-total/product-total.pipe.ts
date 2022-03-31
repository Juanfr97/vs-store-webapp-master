import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productTotal'
})
export class ProductTotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    return value.amount*value.price;
  }

}
