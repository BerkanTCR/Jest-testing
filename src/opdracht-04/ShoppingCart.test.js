import { ShoppingCart } from './ShoppingCart';

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    // TODO: Maak hier een nieuwe ShoppingCart aan
    // Hint: cart = new ShoppingCart();
    cart = new ShoppingCart();

  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: nieuwe cart is leeg', () => {
    cart = new ShoppingCart();
    expect(cart.getItemCount()).toBe(0);
  });

  test('addItem voegt product toe', () => {
    // TODO: Voeg een product toe: { id: 1, name: 'Laptop', price: 999 }
    // TODO: Check of getItemCount() nu 1 is
    cart = new ShoppingCart();
    cart.addItem({ id: 1, name: 'Laptop', price: 999 });
    expect(cart.getItemCount()).toBe(1);
  });

  test('addItem met quantity voegt meerdere items toe', () => {
    // TODO: Voeg product toe met quantity 3
    // TODO: Check of getItemCount() 3 is
    cart = new ShoppingCart();
    cart.addItem({ id: 1, name: 'Laptop', price: 999}, 3 );
    expect(cart.getItemCount()).toBe(3);
  });

  test('getTotal berekent juiste totaal', () => {
    // TODO: Voeg product toe: { id: 1, name: 'Muis', price: 25 }, quantity 2
    // TODO: Check of getTotal() 50 teruggeeft (2 x 25)
    cart = new ShoppingCart();
    cart.addItem({ id: 1, name: 'Muis', price: 25 }, 2);
    expect(cart.getTotal()).toBe(50);

  });

  test('removeItem verwijdert product', () => {
    // TODO: Voeg een product toe met id: 1
    // TODO: Roep removeItem(1) aan
    // TODO: Check of getItemCount() 0 is
    cart = new ShoppingCart();
    cart.addItem( { id: 1, name: 'Appel', price: 1 });
    cart.removeItem(1)
    expect(cart.getItemCount()).toBe(0);
  });

  test('clear maakt cart leeg', () => {
    // TODO: Voeg 2 producten toe
    // TODO: Roep clear() aan
    // TODO: Check of getItemCount() 0 is
    cart = new ShoppingCart();
    cart.addItem({ id: 1, name: 'Iphone 15', price: 589});
    cart.addItem({ id: 2, name: 'Samsung Galaxy A15', price: 185});
    cart.clear()
    expect(cart.getItemCount()).toBe(0);
  });

});
