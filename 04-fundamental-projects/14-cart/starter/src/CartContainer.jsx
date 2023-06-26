import CartItem from './CartItem';
import { useGlobalContext } from './Context';
const CartContainer = () => {
  const {items, clearCart} = useGlobalContext();
  const itemsArray = Array.from(items)
  const getTotal = () => {
    let total = 0;
    itemsArray.forEach((item) => {
      total+= +item[1].price * item[1].amount;
    })
    return total
  }
  if (items.size === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {itemsArray.map((cartItem) => {
          return <CartItem key={cartItem[0]} {...cartItem[1]} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${getTotal()}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={() => clearCart()}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
