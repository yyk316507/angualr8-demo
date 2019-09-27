import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    selector:'[appGridItemImage]'
})
export class appGridItemImageDirective {
    @Input() appGridItemImage = "2rem";
    @Input() fitMode = "cover";
    @HostBinding("style.grid-area") area = "image";
    @HostBinding("style.width") width = this.appGridItemImage;
    @HostBinding("style.height") height = this.appGridItemImage;
    @HostBinding("style.object-fit") fit = this.fitMode;
}