import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-pane',
  templateUrl: './cart-pane.component.html',
  styleUrls: ['./cart-pane.component.css']
})
export class CartPaneComponent {
  @Input() cartItems: any[] = [];

  deleteItem(name: string) {
    // let objFound = this.cartItems.find(o => o.name === name);
    // let foundIndex = this.cartItems.findIndex(objFound, 0);
    // this.cartItems.splice(foundIndex,1);


      console.log('deleteItem: ' + name);

      let objFound = this.cartItems.find(o => o.name === name);

      let foundIndex = this.cartItems.indexOf(objFound, 0);

      this.cartItems.splice(foundIndex, 1);

  }
}
