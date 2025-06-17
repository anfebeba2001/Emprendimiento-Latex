import { Injectable } from '@angular/core';
import { newElement } from '../Models/newElement';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news: newElement[] = [
    {
      title: 'Atraco registrado!',
      description: 'Hombre de mediana edad reporta haber sido atracado en la calle.',
      provider: 'El espectador',
      distance: 3,
      date: '2023-10-01'
    },
    {
      title: 'Trancón eterno!',
      description: 'Toda la autopista norte está congestionada por un accidente.',
      provider: 'El tiempo',
      distance: 2.5,
      date: '2023-10-01'
    },
    {
      title: 'Alerta AMBER!',
      description: 'Niño de 10 años desaparecido.',
      provider: 'El heraldo',
      distance: 0.5,
      date: '2023-10-01'
    },
    {
      title: 'Tiroteo en el centro!',
      description: 'Hombre de 30 años fue asesinado en el centro de la ciudad.',
      provider: 'El tiempo',
      distance: 1,
      date: '2023-10-01'
    },
    {
      title: 'Accidente en la autopista!',
      description: 'Dos vehículos chocaron en la autopista norte.',
      provider: 'El espectador',
      distance: 4,
      date: '2023-10-01'
    }
  ];

  getNews(): newElement[] {
    return this.news;
  }
}
