import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fundos = [
    "#624D96",
    "#DB3C37"
  ];

  telas = [
    "inicial",
    "sobre"
  ]

  corAtual: string;
  telaAtual: string;

  constructor() { }

  ngOnInit(): void {
    this.corAtual = this.fundos[0];
    this.telaAtual= this.telas[0];
  }

  receberOpcao(opcao) {
    this.mudarTela(opcao);
  }
  
  mudarTela(num: number){
    this.mundarFundo(num);
    this.telaAtual = this.telas[num];
  }

  mundarFundo(index: number){
    document.getElementById("home").animate([
      { backgroundColor: this.corAtual }, 
      { backgroundColor: this.fundos[index] }
    ], { 
      duration: 500,
      fill: 'forwards'
    });

    this.corAtual = this.fundos[index];
  }

}
