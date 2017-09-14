import { Pipe, PipeTransform } from '@angular/core';

import { URL_IMAGENES } from '../../config/url.servicios';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform( codigo: string ) {
    return URL_IMAGENES + codigo +".jpg";
  }
}
