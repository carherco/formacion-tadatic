import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumb'
})
export class ThumbPipe implements PipeTransform {

  transform(componente: any): string {
    console.log('estoy en la pipe thumb');
    let thumb;
    if (componente.type === 'render') {
      thumb = 'assets/xxxxxx.gif';
    } else {
      if (componente.thumbnail) {
        thumb = componente.thumbnail;
      } else {
        thumb = '../../afasdfasdfsda.gif' ;
      }
    }

    return thumb;
  }

}
