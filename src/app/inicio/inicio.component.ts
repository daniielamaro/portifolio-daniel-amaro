import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn, bounceInLeft } from 'ng-animate';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft, {
      params: { timing: 2}
    }))]),
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn, {
      params: { timing: 2}
    }))])
  ]
})
export class InicioComponent implements OnInit {

  bounceInLeft: any;
  bounceIn: any;
  ativar: boolean;

  constructor() { }

  ngOnInit(): void {
    this.ativar = true;
  }

}
