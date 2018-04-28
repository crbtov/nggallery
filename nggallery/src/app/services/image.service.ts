import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable()
export class ImageService {
  images: Image[] = [
    new Image ('1', 'Primera Imagen', 'Descripción primera imagen',
    'https://videotutoriales.com/maspa/maspa1.jpg',
    'https://videotutoriales.com/maspa/maspa1-1.jpg'),
    new Image ('2', 'Segunda Imagen', 'Descripción segunda imagen',
    'https://videotutoriales.com/maspa/maspa2.jpg',
    'https://videotutoriales.com/maspa/maspa2-1.jpg'),
    new Image ('3', 'Segunda Imagen', 'Descripción segunda imagen',
    'https://videotutoriales.com/maspa/maspa3.jpg',
    'https://videotutoriales.com/maspa/maspa3-1.jpg'),
    new Image ('4', 'Segunda Imagen', 'Descripción segunda imagen',
    'https://videotutoriales.com/maspa/maspa4.jpg',
    'https://videotutoriales.com/maspa/maspa4-1.jpg'),
    new Image ('5', 'Segunda Imagen', 'Descripción segunda imagen',
    'https://videotutoriales.com/maspa/maspa5.jpg',
    'https://videotutoriales.com/maspa/maspa5-1.jpg'),
    new Image ('6', 'Segunda Imagen', 'Descripción segunda imagen',
    'https://videotutoriales.com/maspa/maspa6.jpg',
    'https://videotutoriales.com/maspa/maspa6-1.jpg'),
    new Image ('7', 'Segunda Imagen', 'Descripción segunda imagen',
    'https://videotutoriales.com/maspa/maspa7.jpg',
    'https://videotutoriales.com/maspa/maspa7-1.jpg'),
    new Image ('8', 'Segunda Imagen', 'Descripción segunda imagen',
    'https://videotutoriales.com/maspa/maspa8.jpg',
    'https://videotutoriales.com/maspa/maspa8-1.jpg'),
  ];
  constructor() { }
    getImages() {
    return this.images;
  }
}
