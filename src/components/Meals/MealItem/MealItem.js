import { useDispatch } from "react-redux";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { cartActions } from "../../../store/cart-slice";

const MealItem = (props) => {
  const dispatch = useDispatch();

  const price = `${props.price.toFixed(2)}`;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const addToCartHandler = (amount) => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      })
    );
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>P{numberWithCommas(price)}</div>
        <img className={classes.productImage} src={props.productImage} alt="" />
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
