/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)

const Order = Ember.Object.extend({
  price: this.price,
  quantity: this.quantity,
  orderPrice: Ember.computed('price', 'quantity', function() {
    return `${this.get('price')}` * `{this.get('quantity')}`;
  })
});

const Cart = Ember.Object.extend({
  orders: [],
  addToCart: function() {
    return this.get('orders').pushObject('item');
  },

  totalPrice: Ember.computed('orderPrice', function() {
    let total = 0;
    return total += this.get('orderPrice');
  })
});

let newCart = Cart.create({
  orders: [
  Ember.object.create({name: 'hat', quantity: 2, price: 5}),
  Ember.object.create({name: 'desk lamp', quantity: 1, price: 20}),
  Ember.object.create({name: 'hand towels', quantity: 3, price: 8}),
]
});
