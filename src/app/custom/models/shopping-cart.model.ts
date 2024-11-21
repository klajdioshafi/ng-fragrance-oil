import { CartItem } from "./cart-item.model";
import { Product } from "./product.model";

export class ShoppingCart {
    items!: CartItem[];
    subtotal!: number;
    shipping!: number;
    total!: number;

    constructor() {
        this.items = [];
        this.subtotal = 0;
        this.items.forEach((item) => {
            let sum = 0;
            sum += (item.product.price * item.quantity);
            return sum;
        });
    }

    calculateSubtotal() {
        this.subtotal = 0;
        this.items.forEach((item) => {
            this.subtotal += (item.product.price * item.quantity);
        });
    }

    calculateShipping() {
        this.shipping = 2;
    }

    calculateTotal() {
        this.total = 0;
        this.total = this.subtotal + this.shipping;
    }
}