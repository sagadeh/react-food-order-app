import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { cartActions } from "./store/cart-slice";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    setCartIsShown(true);
    dispatch(cartActions.hideCheckoutForm());
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
