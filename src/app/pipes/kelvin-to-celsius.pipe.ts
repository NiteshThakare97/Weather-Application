import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kelvinToCelsius' })
export class KelvinToCelsiusPipe implements PipeTransform {
  transform(kelvin: number): number {
    return kelvin - 273.15;
  }
}
