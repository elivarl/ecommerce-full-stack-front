import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { HomeService } from 'src/app/services/home.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: Product [] = [];

  constructor(private homeService:HomeService){

  }
  
  ngOnInit(): void {
    this.homeService.getProducts().subscribe(
      data => this.products = data
    );
  }


}
