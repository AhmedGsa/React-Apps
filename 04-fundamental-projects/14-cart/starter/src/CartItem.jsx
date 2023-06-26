import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./Context";
const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, incAmount, decAmount } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => incAmount(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decAmount(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
