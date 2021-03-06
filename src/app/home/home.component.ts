import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:HomeService) { }

  ngOnInit() {
    this.service.getAdventages()
      .subscribe((data)=>{this.advantages = data;console.log(data)})
  }

  title = 'home works!';

  products = [{
    id:0,
    titre:"Titre 1",
    imgUrl:"/assets/img/OilPaintingOrange.jpg",
    desc:"Sed si ille hac tam eximia fortuna propter utilitatem" +
    " rei publicae frui non properat, ut omnia illa conficiat," +
    " quid ego, senator, facere debeo, quem, etiamsi ille aliud " +
    "vellet, rei publicae consulere oporteret",
    rating: "bronze"
  },{
    id:1,
    titre:"Titre 2",
    imgUrl:"/assets/img/OilPaintingGreen.jpg",
    desc:"Sed si ille hac tam eximia fortuna propter utilitatem" +
    " rei publicae frui non properat, ut omnia illa conficiat," +
    " quid ego, senator, facere debeo, quem, etiamsi ille aliud " +
    "vellet, rei publicae consulere oporteret",
    rating: "silver"
  },{
    id:2,
    titre:"Titre 3",
    imgUrl:"/assets/img/OilPaintingRed.jpg",
    desc:"Sed si ille hac tam eximia fortuna propter utilitatem" +
    " rei publicae frui non properat, ut omnia illa conficiat," +
    " quid ego, senator, facere debeo, quem, etiamsi ille aliud " +
    "vellet, rei publicae consulere oporteret",
    rating:"gold"
  },{
    id:3,
    titre:"Titre 4",
    imgUrl:"/assets/img/OilPaintingBlue.jpg",
    desc:"Sed si ille hac tam eximia fortuna propter utilitatem" +
    " rei publicae frui non properat, ut omnia illa conficiat," +
    " quid ego, senator, facere debeo, quem, etiamsi ille aliud " +
    "vellet, rei publicae consulere oporteret",
    rating:"silver"
  }];

  advantages = [{
    id:0,
    titr:"Titre 1",
    src:"/assets/img/icon-tv.png",
    color:"#4dd8d8",
    liste:["Hanc regionem",
      "Hoc inmaturo interitu",
      "Principium autem",
      "Restabat ut Caesar"],
    button:"View this advantage"
  },{
    id:1,
    titr:"Titre 2",
    src:"/assets/img/icon-mobile.png",
    color:"#ffe7b1",
    liste:["Hanc regionem",
      "Hoc inmaturo interitu",
      "Principium autem",
      "Restabat ut Caesar"],
    button:"View this advantage"
  },{
    id:2,
    titr:"Titre 3",
    src:"/assets/img/icon-tv.png",
    color:"#a7ec91",
    liste:["Hanc regionem",
      "Hoc inmaturo interitu",
      "Principium autem",
      "Restabat ut Caesar"],
    button:"View this advantage"
  },{
    id:3,
    titr:"Titre 4",
    src:"/assets/img/icon-mobile.png",
    color:"#dea6e2",
    liste:["Hanc regionem",
      "Hoc inmaturo interitu",
      "Principium autem",
      "Restabat ut Caesar"],
    button:"View this advantage"
  }];

  slides = [{
    id:0,
    imageUrl:"/assets/img/la.jpg",
    alt:"First slide"
  },{
    id:1,
    imageUrl:"/assets/img/ny.jpg",
    alt:"Second slide"
  },{
    id:2,
    imageUrl:"/assets/img/chicago.jpg",
    alt:"Third slide"
  }];

  titleH2 = "Welcome to <strong>Seating Plan</strong>";

  titleH3 = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>";

}
