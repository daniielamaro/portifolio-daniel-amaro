import { Component, OnInit } from '@angular/core';

import { Alertas } from '../shared/classes/alertas';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private alerta: Alertas) { }

  ngOnInit(): void {
  }

  exibirWhatsapp(){
    this.alerta.whatsapp()
  }

}
