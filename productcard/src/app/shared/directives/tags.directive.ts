import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appTag]',
})
export class TagDirective {
    @HostBinding('style.background-color') tagBgColor = '#faefe3'
    @HostBinding('style.color') tagColor = '#ca516a'
    @HostBinding('style.font-size') tagSize = '0.8rem'
    @HostBinding('style.padding') tagPadding = '3px'
 }