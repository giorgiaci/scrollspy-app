import { Directive, EventEmitter, Output, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
    currentSection: string = '';
    @Output() public sectionChange = new EventEmitter<string>();


    constructor(private el: ElementRef) {
        this.emitSection()
    }

    emitSection() {
        fromEvent(this.el.nativeElement,
            'scroll').subscribe((e: any) => {
                let currentSection: string = '';
                const childrens = this.el.nativeElement.children;
                const scrollTop = e.target.scrollTop;
                const parentOffsetTop = e.target.offsetTop;

                for (let i = 0; i < childrens.length; i++) {
                    if ((childrens[i].offsetTop - parentOffsetTop) <= scrollTop) {
                        currentSection = childrens[i];
                    }
                }
                if (currentSection !== this.currentSection) {
                    this.currentSection = currentSection;
                    this.sectionChange.emit(this.currentSection);
                }


            });
    }

}