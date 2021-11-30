import { FRASES } from './../frases';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  frases;
  currentSentence;

  constructor() {

    this.frases = FRASES;
    this.currentSentence = this.frases.filter(f => f.active);

  }

  ngOnInit(): void {
  }


  prev(){

    this.currentSentence.map(d => d.active=false);

    let pos = this.frases.indexOf(this.currentSentence[0]);

    if(pos == 0){
      pos = this.frases.length-1;
    }else{
      pos--;
    }

    this.currentSentence.pop();
    this.currentSentence.push(this.frases[pos]);

    this.currentSentence.map(d => d.active=true);   

  }

  next(){

    this.currentSentence.map(d => d.active=false);

    let pos = this.frases.indexOf(this.currentSentence[0]);

    if(pos == this.frases.length-1){
      pos = 0;
    }else{
      pos++;
    }

    this.currentSentence.pop();
    this.currentSentence.push(this.frases[pos]);

    this.currentSentence.map(d => d.active=true); 

  }

}
