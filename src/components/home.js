import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Home = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const balance = useSelector((state) => state.amount);
  return (
    <>
      <div>This is Home Page</div>
      <div>
        <h2>Buy Adidas Shoe 50 Rupees</h2>
        {/* <button
          className="btn btn-primary"
          onClick={() => dispatch(actionCreators.withdrawMoney(50))}
        >
          -
        </button> */}
        <button className="btn btn-primary" onClick={() => withdrawMoney(50)}>
          -
        </button>
        Add to Cart
        {/* <button
          className="btn btn-primary"
          onClick={() => dispatch(actionCreators.depositMoney(50))}
        >
          +
        </button> */}
        <button className="btn btn-primary" onClick={() => depositMoney(50)}>
          +
        </button>
        <h5>Your Cart Balance {balance}</h5>
      </div>
    </>
  );
};

export default Home;
