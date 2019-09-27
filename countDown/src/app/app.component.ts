import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startDate = new Date(2019,9,24)
  endDate = new Date(2019,10,1)
}
