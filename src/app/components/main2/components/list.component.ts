import { Component, Input } from '@angular/core';
import { Bokningar } from '../../../bokningar.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent{
  bokning!: Bokningar[]
  @Input() bokadArr! : Bokningar[]
  @Input() utfordArr! : Bokningar[] 
  
  constructor() {}

  removeBook(booking: Bokningar) {
    let index = this.bokadArr.indexOf(booking);
    if (index > -1) {
        this.bokadArr.splice(index, 1);
    }
    console.log(this.bokadArr)
}

selectedItems: Bokningar[] = [];


CheckboxChange(bokning : Bokningar) {
  if (bokning.status) {
    this.selectedItems.push(bokning)
  } else {
    const index = this.selectedItems.indexOf(bokning)
    if(index > -1){
      this.selectedItems.splice(index, 1)
    }
  }
 

}

removeBtn() {
  if (this.selectedItems.length > 0){
    this.selectedItems.forEach(x => {
      const index = this.utfordArr.indexOf(x)
      if(index > -1) {
        this.utfordArr.splice(index, 1)
        console.log(this.utfordArr)
      }
    }) 
    this.selectedItems = [];
  } else {
      alert("Var god och välj en utförd boknign")
    }
  }
 
}



