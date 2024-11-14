import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productarray:any[]=[]
  total=0
  constructor(private cs:ApiserviceService){
    this.productarray=this.cs.sendcartdata()
    this.productarray.forEach((i)=>{this.total=this.total+i.price})
  } 
  remove(obj:any){
    let index=this.productarray.indexOf(obj)
    this.productarray.splice(index,index+1)
    console.log(this.productarray,index)
    this.total=this.total-obj.price
  }
  text='BUY NOW';
  ordered(){
    if(this.productarray){
      this.text='OrderPlaced'}
  }
  
}
