import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {single} from "../../redux/actions/products";
import ReactStars from "react-rating-stars-component";

function PaymentCard({id}) {
    const dispatch = useDispatch();
    const paymentData = useSelector((store) => store.products.singleData.product || []);

    useEffect(() => {
        dispatch(single(id));
    }, []);

    return (
        <>
            <div className="single__article">
                <img className="single__img pay-img" src={`http://localhost:5000/images/big/${paymentData.big_img}`} alt="X"/>
                <h2 className="pay-tit">{paymentData.name}</h2>
                <div className="single__payment" style={{marginTop: -3}}>
                    <h2 className="buy__price pay-disc">{paymentData?.disc_price ? `${paymentData?.disc_price}$` : `${paymentData?.price}$`}</h2>
                    <h3 className="buy__disc-price pay-price">{paymentData?.disc_price ? `${paymentData?.price}$` : null}</h3>
                </div>
                <br/>
            </div>
        </>
    );
}

export default PaymentCard;
