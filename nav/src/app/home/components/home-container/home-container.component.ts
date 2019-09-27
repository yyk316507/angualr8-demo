import { Component, ChangeDetectionStrategy, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService, token } from '../../services';
import { Observable } from 'rxjs/internal/Observable';
import { TopMenu } from 'src/app/shared/components';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent{
  menus$:Observable<TopMenu[]>;
  selectedTabLink$:Observable<string>;
  constructor(
    private router : Router,
    private service:HomeService,
    private route : ActivatedRoute,
    @Inject(token) private baseUrl : string
    ){}
  handelTabSelected(topMenu:TopMenu){
    this.router.navigate(['home',topMenu.link])
  }
  ngOnInit(): void  {
    this.menus$ = this.service.getTabs();
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has("tabLink")),
      map(params => params.get("tabLink")) 
    )
  }

}
