import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBasketSecret} from "../../redux/actions/payment";
import {useNavigate} from "react-router-dom";

function Check({totalPrice}) {
    const navigate = useNavigate();
    return (
        <>
            <div className="check">
                <div className="total">
                    <h2>Total:</h2>
                    <h2>{`${totalPrice}$`}</h2>
                </div>
                <div className="checkout">
                    <button disabled={totalPrice === 0} onClick={()=> navigate("/card-basket")} className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </>
    );
}

export default Check;
