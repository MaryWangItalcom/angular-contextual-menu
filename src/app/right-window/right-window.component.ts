import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-window',
  templateUrl: './right-window.component.html',
  styleUrls: ['./right-window.component.less']
})
export class RightWindowComponent implements OnInit {
  
  @Input() name = '';
  @Input() lists: ContextMenuItem[] = [];
  visible: boolean = false;
  message: string = "nessun elemento in lista";


  constructor() { }

  ngOnInit(): void {
  }

  onRightClick(event: Event) {
    event.preventDefault();
    console.log(event);
    this.visible = true;
  }

  closeWindow(event:any){
    this.visible = false;
  }

  itemClick(item:ContextMenuItem) {
    item.callback(item);
    // alert(item.id);
    this.closeWindow(null);
  }
}


export interface ContextMenuItem {
  id:string;
  text:string;
  callback:any;
}
