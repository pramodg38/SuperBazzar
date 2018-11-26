import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
{ path: '', redirectTo:'home', pathMatch: 'full' },
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
//{path:'profile', component:ProfileComponent},
{path:'product_details', component:ProductsComponent},
{ path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
