import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector:'[context-menu]'
})

export class ContextMenuDirective{
    constructor(private elr:ElementRef, private render:Renderer2){
     //   elr.nativeElement.style.background='red';
    }

    @HostListener('contextmenu') onContextManu() {
        
        console.log('right click');
        this.render.appendChild(this.elr.nativeElement, this.contextMenuHtml)
        return false;
    }

      contextMenuHtml = this.render.createText('Example of Create Text');
    
}