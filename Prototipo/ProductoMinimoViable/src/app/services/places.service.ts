import { Injectable } from '@angular/core';
import { place } from '../Models/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

   private places: place[] = [
    {
      name: 'Four Seasons Hotel',
      description: '"No me vuelvo a quedar en un país sin un Four Seasons" -Tony Stark.',
      image: 'https://www.fourseasons.com/alt/img-opt/~75.701/publish/content/dam/fourseasons/images/web/BHA/BHA_034_aspect16x9.jpg',
      location: 'Kr 13 #85-46, Chapinero, Bogotá, Cundinamarca',
      price: "500 por noche (No está mal para un hotel de lujo!)",
      votesUp: 232,
      votesDown: 20,
      rating: 4.8
    },
    {
      name: 'Crepes & Waffles',
      description: '"A veces la vida es como un crepe, dulce y crujiente por fuera, pero suave y deliciosa por dentro." -Anónimo.',
      image: 'https://america-retail.com/wp-content/uploads/2024/02/Crepes-Wafles-e1707758436755.jpg',
      location: 'Kr 20 # 164 A - 05, Chapinero, Bogotá, Cundinamarca',
      price: "15 por plato (De acuerdo a tu presupuesto de viajes!)",
      votesUp: 1241,
      votesDown: 108,
      rating: 4.2
    },
    {
      name: 'Casa Museo Salto del Tequendama',
      description: '"Hogar de verdadera riqueza cultural" -Gabriel Marquez.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJzL7AXD2YauE2JrBGJO-AHFeneKGYXSaRA&s',
      location: 'km 6.9, Soacha, Cundinamarca',
      votesUp: 842,
      votesDown: 79,
      price: "125 por noche (5% menos que tu reserva anterior!)",
      rating: 3.8
    }
  ];

  getPlaces(): place[] {
    return this.places;
  }
}
