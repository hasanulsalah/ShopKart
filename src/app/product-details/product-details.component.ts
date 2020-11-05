import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public productDetails: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productDetails = this.productdetails.find(x => x.id == params.id);
    })
  }

  public productdetails : Array<any> = [
    {
      "id":1,
      "name": "Apple I pad",
      "description":"Like a computer. Unlike any computer. The new iPad combines the power and capability of a computer with the ease of use and versatility you’d never expect from one. And now it’s even more versatile, with a larger 10.2‐inch Retina display, support for the full-sized Smart Keyboard and the amazing new capabilities of iPadOS. It’s unbelievably fun. And unmistakably iPad. With iPad, getting work done is all hustle and no hassle.",
      "price":200,
      "imageUrl":"https://sm.pcmag.com/pcmag_in/news/a/amazon-amp/amazon-amps-up-fire-hd-8-tablet_p4bt.jpg"

  },
  {
      "id":2,
      "name": "Sony Headphone",
      "description":"A convenient short-range wireless connection between phones, laptops, headphones and more. Adjust your music or answer calls with these models with built-in controls. Identifies and filters out distracting environmental noise such as jet engines.",
      "price":80,
      "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScD9ae9B2GpOXYcAmmvtXINhdfv6WBPy_k8w&usqp=CAU"

  }    
]

}
