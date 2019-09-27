import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector:'[appGridItemTitle]'
})
export class appGridItemTitleDirective { 
    /* @Input()  可以移到@HostBinding()这里 */
    @HostBinding("style.grid-area")  area = "title";
    @HostBinding("style.font-size")  @Input() size ="0.5rem";
}