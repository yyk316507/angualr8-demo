import { Component } from '@angular/core';
import { DialogService } from './dialog/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog';
  constructor(private dialogService: DialogService){}
  removeDialog(){
    this.dialogService.close()
  }
}
