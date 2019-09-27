import { Directive, HostBinding,Input } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective { 
    constructor(){}
    @HostBinding('style.grid-area')   area = "title";
    @HostBinding('style.font-size')   @Input() appGridItemTitle = '0.5rem';
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
}