
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/dialog/service';
import { HomeVariantDialogComponent } from '../home-variant-dialog';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }
  handleGroupBuy(){
    const top = 40;
    this.dialogService.open(HomeVariantDialogComponent,{
      inputs: {},
      outputs: {},
      position: {
        top:`${top}%`,
        left:'0',
        width:'100%',
        height:`${100 - top}%`
      }
    })
  }
}
