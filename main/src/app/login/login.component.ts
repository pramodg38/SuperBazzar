import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../cart/product';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  
export class LoginComponent implements OnInit {
  
    constructor(private productService: ProductService){}
      
    ngOnInit(){};
	
	
   loginUser(event) {
	   event.preventDefault();
	   const target= event.target;
	   const username = target.querySelector('#username').value;
	   const password = target.querySelector('#password').value;
	   
	   this.productService.getuserdetails(username, password);
	   console.log(username, password)
	 
  }
 
}

