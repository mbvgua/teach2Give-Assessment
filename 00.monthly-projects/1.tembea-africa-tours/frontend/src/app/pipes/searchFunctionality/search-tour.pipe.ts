import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTour',
  standalone: true
})
export class SearchTourPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
