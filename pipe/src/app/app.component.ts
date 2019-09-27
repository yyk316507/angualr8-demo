import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: Date;
  constructor() { }
  ngOnInit() {
    this.date = this.minusDays(new Date(),6)
  }
  minusDays(date:Date,days:number){
    const result  = new Date(date)
    result.setDate(result.getDate() - days);
    return result;
  }
}
