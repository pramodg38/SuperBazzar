import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
	
	
	 UserRegisterData:any = {
		 username:"",
	     password:"",
	     Fname: "",
	     Lname: "",
	     Email: "",
		 
	 }
	
  constructor( private productService: ProductService ) { }

  ngOnInit() {}
  
  userRegister() {
	   event.preventDefault();
	   //this.productService.registeruser(username, password, Fname, Lname, Email);
	   console.log(this.UserRegisterData.username)
	 
  }

}
