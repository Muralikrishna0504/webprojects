import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
specificprod:any;
id:any;
constructor(private aps:ApiserviceService,private rs:ActivatedRoute){}
ngOnInit(){
this.rs.params.subscribe((val)=>{this.id=val['id']})
this.aps.specificdata(this.id).subscribe((val:any)=>{this.specificprod=val,console.log(this.specificprod)})
}
sendtocart(obj:any){
  this.aps.getproduct(obj)
}
}
