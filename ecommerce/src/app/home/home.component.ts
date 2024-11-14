import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private ps:ApiserviceService){}
  pro:any[]=[
    {id:21,imageurl:'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/y/l/j/s-85-shirt-full-shirtify-original-imagn7vqgsakwfdy.jpeg?q=90&crop=false', price:499,title:'Orange Cotton Shirt'},
    {id:22,imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJ4wCaCaKdi5SO-ioknjn0PoBVn1CXlQvBw&s',price:599,title:'White shirt Chinese Collar'},
    {id:23,imageurl:'https://i.pinimg.com/474x/be/93/b9/be93b9280e79fb56bab632c80ca28fcb.jpg',price:799,title:'Formal Green Shirt'},
    {id:24,imageurl:'https://i.pinimg.com/736x/aa/25/00/aa25009175379d8bf958303a6386509e.jpg',price:899,title:'Blue Checked shirt'}]
  womenpro:any[]=[
      {id:25,imageurl:'https://cdn.shopify.com/s/files/1/0486/0634/7416/files/kntr121blac.jpg?v=1722674062', price:499,title:'White Regular fit shirt'},
      {id:26,imageurl:'https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/n/j/9/m-473-sanwariya-creation-original-imaggzkrwd6zdu78.jpeg?q=20&crop=false',price:599,title:'slim fit Blue dress'},
      {id:27,imageurl:'https://sepiastories.in/wp-content/uploads/2024/08/1-Desert-Flora-Puff-Sleeve-Cotton-Dress.webp',price:799,title:'Green Cotton printed dress'},
      {id:28,imageurl:'https://rukminim1.flixcart.com/image/400/500/xif0q/shopsy-dress/h/k/3/l-fs-dress-3-buyuniquefashion-original-imagtzc6dvxg22zg.jpeg?q=90&crop=false',price:899,title:'red printed top'}]
      
}
