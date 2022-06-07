import { Product } from './product.model';
import { products } from './product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {

  products:Product[] = [];
  originalProducts:Product[] = [];
  gridView:boolean = true;
  sorted: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.products = [...products];
    this.originalProducts = [...products];
    console.log(this.products);
  }

  sortProducts(event:Event){
    this.sorted = true;
    const input = event.target as HTMLInputElement;
    const order = input.value;
    this.products.sort(this.sortData(order));
  }

  sortData(order:string){
    return(a:Product, b:Product) => {
      let price1 = a.Price;
      let price2 = b.Price;
      if(price1 === price2){
        return 0;
      }else if(price1 === null || price1 === undefined){
        return 1;
      }else if(price2 === null || price2 === undefined){
        return -1;
      }else if(order === 'desc'){
        return (price1 > price2)?-1:1;
      }else{
        return (price1 > price2)?1:-1;
      }
    }
  }

  resetFilter(){
    this.sorted = false;
    this.products = [...this.originalProducts];
  }

}
