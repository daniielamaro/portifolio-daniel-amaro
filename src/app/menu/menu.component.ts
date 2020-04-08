import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { trigger, transition, useAnimation } from '@angular/animations';
import { flash } from 'ng-animate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('flash', [transition('* => *', useAnimation(flash, {
      params: { timing: 3}
    }))])
  ]
})
export class MenuComponent implements OnInit {

  exibirFab: boolean;
  flash: any;

  @Output() opcao = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.exibirFab = false;
  }

  exibir(){
    this.exibirFab = !this.exibirFab;

    if(this.exibirFab){
      this.animExibir();
    }else{
      this.animEsconder();
    }
  }

  enviarOp(op:number){
    if(this.exibirFab){
      this.opcao.emit(op);
      this.exibirFab = false;
      this.animEsconder();
    }
  }

  animExibir(){
    document.getElementById("fabMenu").animate([
      { opacity: 0.5, transform: "rotate(0deg)" }, 
      { opacity: 1, transform: "rotate(45deg)" }
    ], { 
      duration: 300,
      fill: 'forwards'
    });

    document.getElementById("menu-initial").animate([
      { opacity: 0, bottom: '30px', width: "0px", heigth: "0px" }, 
      { opacity: 1, bottom: '100px', width: "150px", heigth: "40px"}
    ], { 
      duration: 300,
      fill: 'forwards'
    });

    document.getElementById("menu-sobre").animate([
      { opacity: 0, bottom: '30px', width: "0px", heigth: "0px" }, 
      { opacity: 1, bottom: '160px', width: "150px", heigth: "40px"}
    ], { 
      duration: 300,
      fill: 'forwards'
    });
  }

  animEsconder(){
    document.getElementById("fabMenu").animate([
      { opacity: 1, transform: "rotate(45deg)" }, 
      { opacity: 0.5, transform: "rotate(0deg)" }
    ], { 
      duration: 300,
      fill: 'forwards'
    });

    document.getElementById("menu-initial").animate([ 
      { opacity: 1, bottom: '100px', width: "150px", heigth: "40px"},
      { opacity: 0, bottom: '30px', width: "0px", heigth: "0px" }
    ], { 
      duration: 300,
      fill: 'forwards'
    });

    document.getElementById("menu-sobre").animate([
      { opacity: 1, bottom: '170px', width: "150px", heigth: "40px"},
      { opacity: 0, bottom: '30px', width: "0px", heigth: "0px" }
    ], { 
      duration: 300,
      fill: 'forwards'
    });
  }

}
