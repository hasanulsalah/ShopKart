import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopkart-styles',
  templateUrl: './shopkart-styles.component.html',
  styleUrls: ['./shopkart-styles.component.css']
})
export class ShopkartStylesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  public carouselimages : Array<any> = [
    {
      "id": 1,
      "name": "image1",
      "imageUrl": "https://djgn3cwvdf3zo.cloudfront.net/Special_Offer_14_11_18.gif",
      "captionTitle": "Hot deals",
      "caption": "purchase now"
  },
  {
      "id": 2,
      "name": "image2",
      "imageUrl": "https://cdn.static-zoutons.com/images/originals/coupon-category/1590086255828.jpg_1590086255.png",
      "captionTitle": "Buy Now",
      "caption": "15%-20% discount"
  }    
  ,
  {
      "id": 3,
      "name": "image3",
      "imageUrl": "https://rukminim1.flixcart.com/flap/844/140/image/574c269203e46f16.jpg?q=50",
      "captionTitle": "",
      "caption": ""
  }    
  ,
  {
      "id": 4,
      "name": "image4",
      "imageUrl": "https://cdn-w.medlife.com/2020/05/15-Off-Offer-page-Main.jpg",
      "captionTitle": "",
      "caption": ""
  }    
  ,
  {
      "id": 5,
      "name": "image5",
      "imageUrl": "https://gos3.ibcdn.com/top-1569824160.jpg",
      "captionTitle": "",
      "caption": ""
  }    
  ,
  {
      "id": 6,
      "name": "image6",
      "imageUrl": "https://www.kaff.in/wp-content/uploads/2020/06/Torino-90-1024x252.jpg",
      "captionTitle": "",
      "caption": ""
  }   
  ]

}
