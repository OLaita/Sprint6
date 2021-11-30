import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  haribo = true;

  constructor() {
    this.haribo = this.haribo;
  }

  ngOnInit(): void {
  }

  cambiarEscena(){
    this.haribo = !this.haribo;
  }

}
