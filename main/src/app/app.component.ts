import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'main';
  login:boolean = true;
  
  ngOnInit(){
     
    var loginbut =function(){
		this.login= !this.login
	}


  }
}
