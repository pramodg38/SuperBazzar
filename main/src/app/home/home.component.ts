import {   Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../cart/product';



@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

   public products: Product[];
      public produc: any;

    
  constructor(  private productService: ProductService) {}

  ngOnInit() {
	 this.products = this.productService.findAll();
  }
  getdetails(id){
	  this.produc = this.productService.find(id);
	  console.log(this.produc);
  }

}
