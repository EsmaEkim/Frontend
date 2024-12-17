import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1={productId:1,productName:"Keyboard",categoryId:1,unitPrice:17}
  product2={productId:2,productName:"Cable",categoryId:1,unitPrice:2}
  product3={productId:3,productName:"Mouse",categoryId:1,unitPrice:8}
  product4={productId:4,productName:"Headphone",categoryId:1,unitPrice:36}
  product5={productId:5,productName:"Airpods",categoryId:1,unitPrice:25}

  products=[this.product1,this.product2,this.product3,this.product4,this.product5]

  constructor() { }

  ngOnInit(): void {
  }

}
