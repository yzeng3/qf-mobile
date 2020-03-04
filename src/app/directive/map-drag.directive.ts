import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { DomController } from '@ionic/angular';
@Directive({
    selector: '[appMapDrag]'
})
export class MapDragDirective implements AfterViewInit {

    @Input() startTop: any;
    @Input() startRight: any;
    @Input() startBottom: any;
    @Input() startLeft: any;

    constructor(public element: ElementRef, public renderer2: Renderer2, public domCtrl: DomController) { }

    ngAfterViewInit() {
        console.log('top' + this.startTop + 'right' + this.startRight + 'bottom' + this.startBottom + 'left' + this.startLeft);
        this.renderer2.setStyle(this.element.nativeElement, 'position', 'absolute');
        if (this.startTop) { this.renderer2.setStyle(this.element.nativeElement, 'top', this.startTop + 'px'); }
        if (this.startRight) { this.renderer2.setStyle(this.element.nativeElement, 'right', this.startRight + 'px'); }
        if (this.startBottom) { this.renderer2.setStyle(this.element.nativeElement, 'bottom', this.startBottom + 'px'); }
        if (this.startLeft) { this.renderer2.setStyle(this.element.nativeElement, 'left', this.startLeft + 'px'); }

        const hammertime = new Hammer(this.element.nativeElement);
        console.log(hammertime);
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });

        hammertime.on('pan', (ev: any) => {
            this.handlePan(ev);
        });
    }

    handlePan(ev) {
        const fabWidth = 56, fabHeight = 56;
        const newLeft = ev.center.x;
        const newTop = ev.center.y;
        const clientWidth = document.body.clientWidth;
        const clientHeight = document.body.clientHeight;
        this.domCtrl.write(() => {
            if (newTop <= 0) {
                this.renderer2.setStyle(this.element.nativeElement, 'top', '0px');
            } else if (newTop >= clientHeight - fabHeight) {
                this.renderer2.setStyle(this.element.nativeElement, 'bottom', '0px');
            } else {
                this.renderer2.setStyle(this.element.nativeElement, 'top', newTop + 'px');
            }
            if (newLeft <= 0) {
                this.renderer2.setStyle(this.element.nativeElement, 'left', '0px');
            } else if (newLeft >= clientWidth - fabWidth) {
                this.renderer2.setStyle(this.element.nativeElement, 'right', '0px');
            } else {
                this.renderer2.setStyle(this.element.nativeElement, 'left', newLeft + 'px');
            }
        });
    }

}
