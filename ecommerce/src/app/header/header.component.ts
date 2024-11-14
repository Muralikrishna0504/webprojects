import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
count=0
constructor(private cs:ApiserviceService){}
ngDoCheck(){
  this.count=this.cs.sendcartdata().length
  console.log(this.count)
}
}