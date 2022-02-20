import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [ "../../../../assets/images/home.jpg","../../../../assets/images/home2.jpg","../../../../assets/images/home3.jpg"];
  constructor() { }
  companyIconImage:string = "../../../../images/company-icon.png"

  ngOnInit(): void {
  }

}
