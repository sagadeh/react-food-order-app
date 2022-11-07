import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        <span className={classes["red-bold"]}>Landmark.ph</span> offers a
        convenient way for shoppers to buy groceries online without ever leaving
        the comfort of their homes.
      </p>
      <p>
        Just like its physical stores,{" "}
        <span className={classes["red-bold"]}>Landmark.ph</span> carries an
        extensive product selection – from fresh and frozen produce, groceries,
        home care essentials, personal care items and other rare finds and
        exclusive merchandise – all ready to be added to carts and delivered to
        people on demand.
      </p>
    </section>
  );
};

export default MealsSummary;
