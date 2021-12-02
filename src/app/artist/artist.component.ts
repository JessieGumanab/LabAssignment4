import { Component, OnInit } from '@angular/core';

interface IArtistCard {
  id?: number;
  image_url: string;
  full_name: string;
  num_sales: number;
}
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artists: Array<IArtistCard> = [];
  constructor() { }

  ngOnInit(): void {
    this.artists = [
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/99.jpg',
        full_name: 'Raphael',
        num_sales: 84
      },
      {
        image_url: 'assets/img/artists/19.jpg',
        full_name: 'Van Gogh',
        num_sales: 80
      },
      {
        image_url: 'assets/img/artists/95.jpg',
        full_name: 'Botticelli',
        num_sales: 73
      },
      {
        image_url: 'assets/img/artists/29.jpg',
        full_name: 'Klimt',
        num_sales: 69
      },
      {
        image_url: 'assets/img/artists/2.jpg',
        full_name: 'Matisse',
        num_sales: 64
      },
      {
        image_url: 'assets/img/artists/98.jpg',
        full_name: 'Michelangelo',
        num_sales: 60
      },
      {
        image_url: 'assets/img/artists/106.jpg',
        full_name: 'Vermeer',
        num_sales: 55
      },
      {
        image_url: 'assets/img/artists/97.jpg',
        full_name: 'Da Vinci',
        num_sales: 51
      },
      {
        image_url: 'assets/img/artists/21.jpg',
        full_name: 'Cezanne',
        num_sales: 48
      },
      {
        image_url: 'assets/img/artists/17.jpg',
        full_name: 'Monet',
        num_sales: 44
      },
      {
        image_url: 'assets/img/artists/101.jpg',
        full_name: 'Caravagglo',
        num_sales: 43
      }
    ];
  }

}
