import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-pane',
  templateUrl: './select-pane.component.html',
  styleUrls: ['./select-pane.component.css']
})
export class SelectPaneComponent implements OnInit {

  @Output() addItem: EventEmitter<string> = new EventEmitter();

  cartItems: {image: string, itemName: string}[] = [];
  receivedItems: any[] = [];
  clickCount: number = 0;
  ngOnInit(): void {
    this.cartItems.push({image: "assets/apple.jpg", itemName: "Apple"})
    this.cartItems.push({image: "assets/grape.jpg", itemName: "Grape"})
    this.cartItems.push({image: "assets/orange.jpg", itemName: "Orange"})
    this.cartItems.push({image: "assets/pear.jpg", itemName: "Pear"})
  }

  onSelectItem(itemName: string) {
    this.addItem.emit(itemName);
  }

}
