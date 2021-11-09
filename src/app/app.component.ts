import { Component, Input } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ContextMenuItem } from './right-window/right-window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  currentName1 = "Button 1";
  currentName2 = "Button 2";

  constructor(
    
  ){}

  currentList1: any[] = [
    {
      id: '1',
      text: 'Primo menu',
      callback: (item: ContextMenuItem) => {alert("Sono l'azione di callback della voce del menù contestuale:" + item.id)}
    },
    {
      id: '2',
      text: 'Secondo menu',
      callback: (item: ContextMenuItem) => this.actionMenuCallback(item)
    }
  ]

  currentList2 = []

  actionMenuCallback(item:ContextMenuItem) {
    alert("Sono l'azione di callback della voce del menù contestuale (in una funzione):" + item.id);
  }

}
