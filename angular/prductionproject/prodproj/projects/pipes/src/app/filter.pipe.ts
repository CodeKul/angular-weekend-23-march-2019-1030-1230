import { Pipe, PipeTransform } from '@angular/core';
import { Mobile } from './app.component';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(raw: Array<Mobile>, firstCharacter?: string): Array<Mobile> {
    if (firstCharacter) {
      let filterdMobiles = new Array<Mobile>()
      raw.forEach(mobile => {
        if (mobile.company.charAt(0) == firstCharacter) {
          filterdMobiles.push(mobile)
        }
      })
      return filterdMobiles;
    }
    return raw
  }
}
