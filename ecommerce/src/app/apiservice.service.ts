import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public productdata:any={}

  constructor(private hc:HttpClient) { 
  }
  getdata(){
    return this.hc.get('http://127.0.0.1:8000/api/products')
  }
  getproddata(obj:any){
    this.productdata=obj
  }
  cartproduct:any[]=[]
  getproduct(obj:any){
    this.cartproduct.push(obj)
  }
  sendcartdata(){
    return this.cartproduct
  }
  specificdata(id:any){
    return this.hc.get(`http://127.0.0.1:8000/api/products/${id}`)
  }

}