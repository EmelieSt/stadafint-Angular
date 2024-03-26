import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Bokningar } from '../../bokningar.model';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit{
  
  bokadArr! : Bokningar[]
  utfordArr! : Bokningar[] 

  bokning : Bokningar = {
    id: 1, datum: 1, tid: 1, kund: '', level: '', cleaner: '', status: false
  }
  bokningar !: Bokningar []

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.fetchData();
  }


fetchData() {

    this.http.get<Bokningar[]>('./assets/bokningar.json')

    .subscribe((data) => { 
      this.bokningar = data;

      this.bokadArr = data.filter(n => n.status == true)
      this.bokadArr.sort((a, b) => (a.datum > b.datum ? 1 : -1))

      this.utfordArr = data.filter(n => n.status == false)
      this.utfordArr.sort((a, b) => (a.datum > b.datum ? 1 : -1))

      console.log(this.bokadArr)
      console.log(this.utfordArr)
    });
  }

  addBokning(bokning : Bokningar){

    let currentDate = new Date();
    let minDate = new Date();
    let maxDate = new Date();

    minDate.setDate(currentDate.getDate() - 1);
    
    maxDate.setDate(currentDate.getDate() + 90);

    if(bokning.level && bokning.datum && bokning.tid && bokning.cleaner) {

      if(new Date(bokning.datum) >= minDate && new Date(bokning.datum) <= maxDate){
        let tid = bokning.tid.toString();

        if(tid >= '08:00' && tid <= '16:00'){
          let existingBooking = this.bokadArr.find(b => b.datum === bokning.datum && b.tid === bokning.tid);
          if(existingBooking){
            alert("Dubbelbokning ogiltigt!")
          } else {
            this.bokadArr= [...this.bokadArr, bokning];
            this.bokadArr.sort((a, b) => (a.datum > b.datum ? 1 : -1));
          }
        }else{
          alert("Tiden måste vara mellan 08:00 och 16:00");
        }
      } else {
        alert(`Ogiltigt datum! datumet måste vara mellan ${minDate.toDateString()} och ${maxDate.toDateString()}`);
      }
    } else {
      alert("Alla fält måste vara ifyllda");
    }
     console.log(this.bokadArr)
 
  }
  
  
}
