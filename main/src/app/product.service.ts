import { Injectable } from '@angular/core';
import { Product } from './cart/product';
import { HttpClient } from '@angular/common/http';


@Injectable({
	 providedIn: "root"
})


export class ProductService {

    private products: Product[];

 //private products: any[];
  constructor(  private http: HttpClient ) { 
	    this.products = [{
     id:'p001', name: 'shirt', img_Url: './assets/images/img1.jpeg' , price: 100
    },{
      id:'p022',name: 'shirt', img_Url: '../assets/images/jac1.jpeg', price: 100
    },{
      id:'p01',name: 'shirt', img_Url: '../assets/images/kurta1.jpeg', price: 100
    },{
      id:'p02',name: 'shirt', img_Url: '../assets/images/mi1.jpeg', price: 100
    },{
      id:'p03',name: 'shirt', img_Url: '../assets/images/img2.jpeg', price: 10
    },{
      id:'p04',name: 'shirt', img_Url: '../assets/images/sam3.jpeg', price: 100
    },{
      id:'p05',name: 'shirt', img_Url: '../assets/images/img1.jpeg', price: 100
    },{
      id:'p06', name: 'shirt', img_Url: '../assets/images/img2.jpeg', price: 100
    },{
     id:'p06', name: 'shirt', img_Url: '../assets/images/sam1.jpeg' , price: 100
    },{
     id:'p07', name: 'shirt', img_Url: '../assets/images/sam3.jpeg', price: 100
    },{
      id:'p08',name: 'shirt', img_Url: '../assets/images/jac1.jpeg', price: 100
    },{
      id:'p09', name: 'shirt', img_Url: '../assets/images/img4.jpeg', price: 100
    },{
	  id:'p10', name: 'shirt', img_Url: '../assets/images/img1.jpeg', price: 10
    },{
      id:'p11', name: 'shirt', img_Url: '../assets/images/sam2.jpeg', price: 100
    },{
      id:'p12', name: 'shirt', img_Url: '../assets/images/img4.jpeg', price: 100
    }
	];
  }
  
  
 
  getdata(){
	  return this.http.get("http://localhost:3000/products")
	  .subscribe(data=>{
		  return data ;
		  })
  };
  
   getuserdetails(username, password){
	   //post user details to server and return user info
	   
	   return this.http.post('http://localhost:3000/poducts',{username, password})
	   .subscribe(data=>{
	   console.log(data)})
   }
   
   
   registeruser(username, password, firstname, lastname, email){
	   //post user details to server and return user info
	   return this.http.post('http://localhost:3000/poducts',{username, password, firstname, lastname, email})
	   .subscribe(data=>{
	   console.log(data )})
   }

  
    findAll(): Product[] {
        return this.products;
    }
	
	find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }
	
	private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}
