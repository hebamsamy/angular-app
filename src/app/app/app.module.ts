import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MoneyPipe } from '../Pipes/money.pipe';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { todolistComponent } from './Components/todolist/todolist.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductService } from '../Services/product.service';
import { InitComponent } from './Components/init/init.component';
import { RouterModule } from '@angular/router';

@NgModule({
  // childern
  declarations: [
    NavbarComponent,
    FooterComponent,
    todolistComponent,
    ProductListComponent,
    ProductCardComponent,
    MoneyPipe,
    InitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  bootstrap:[InitComponent],
  // exports:[],
  providers:[],
})
export class AppModule { }



