import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products:any[]=[]
constructor(private aps:ApiserviceService){
  this.aps.getdata().subscribe((val:any)=>{this.products=val})
}
addprod(obj:any){
  this.aps.getproduct(obj)
}

}

