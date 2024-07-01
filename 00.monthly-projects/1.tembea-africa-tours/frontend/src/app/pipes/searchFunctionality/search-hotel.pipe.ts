import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHotel',
  standalone: true
})
export class SearchHotelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
