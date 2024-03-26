import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Main2Component } from '../main2/main2.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() text! : string
  @Input() taEmot!: HTMLInputElement
  @Input() routerLink !: string;

  @Output() btnClicked = new EventEmitter()

  Clicked!: string

  constructor() { }


  addClick(){
    this.btnClicked.emit()
  }

}
