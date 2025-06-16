import { Injectable } from '@angular/core';
import { review } from '../Models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private reviews: review[] = [
    {
      userName: "Pepe Veraz",
      userImg: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      reviewText: "Comodidad y calidad en un solo lugar. Muy recomendable.",
      reviewDate:'2023-10-02',
      reviewRating: 4.5
    },
    {
      userName: "Andrés Bejarano",
      userImg: "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
      reviewText: "Las camas son como tocar una nube. Me encanta este lugar.",
      reviewDate:'2022-12-06',
      reviewRating: 3.8
    },
    {
      userName: "Juliana Vargas",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s",
      reviewText: "Cuando llegué, sentí que estaba en un sueño. Todo es perfecto aquí.",
      reviewDate:'2021-08-23',
      reviewRating: 4.5
    }
  ];

  getReviews(): review[] {
    return this.reviews;
  }
}
