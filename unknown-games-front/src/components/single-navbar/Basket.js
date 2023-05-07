import React, {useCallback, useEffect} from "react";
import ReactStars from "react-rating-stars-component";
import Paginate from "../page-navigation/Paginate";
import {ReactComponent as Delete} from "../../assets/img/svg/delete.svg";
import img from "../../assets/img/game.avif"
import {useDispatch, useSelector} from "react-redux";
import {listItemBasket} from "../../redux/actions/payment";
import Check from "../payment/Check";
import {deleteItemBasket} from "../../redux/actions/payment";
import Empty from "../page-navigation/Empty";


function Basket({admin}) {
    const dispatch = useDispatch();

    const getItemListBasket = useSelector((store) => store.payment.getIistItemBasket.data);
    const totalPrice = useSelector((store) => store.payment.getIistItemBasket.totalPrice);
    const totalPages = useSelector((store) => store.payment.getIistItemBasket.totalPages);
    const getIistItemBasketStatus = useSelector((store) => store.payment.getIistItemBasketStatus);
    const page = useSelector((store) => store.util.page.page);

    useEffect(() => {
        dispatch(listItemBasket(page));
    }, [page]);

    const handleDeleteItemBasket = useCallback((id) => {
        dispatch(deleteItemBasket(id));
    }, [dispatch]);

    return (
        <div className="basket-box">
            {getItemListBasket?.length ? <div className="basket-block">
                <table className="table basket is-hoverable is-bordered is-fullwidth wishlist" id="datatable">
                    <thead>
                    <tr className="table-tab">
                        <th>Cover</th>
                        <th>Title</th>
                        <th style={{width: admin === "admin" ? 500 : 650}}>Description</th>
                        <th style={{width: admin === "admin" ? 200 : null}}>Rating</th>
                        <th style={{width: admin === "admin" ? 200 : null}}>Price</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getIistItemBasketStatus ? getItemListBasket.map((item) => (
                        <tr className="wishlist-tr" key={item.product.id}>
                            <td className="table-img tab"><img
                                src={`http://localhost:5000/images/big/${item.product.big_img}`}
                                alt=""/></td>
                            <td className="wishlist-tit"><p>{item.product.name}</p></td>
                            <td className="single__payment">
                                <div className="desc-table"><p>{item.product.desc}</p></div>
                            </td>
                            <td className="wishlist-rating"><ReactStars size={30} edit={false}
                                                                        value={item.product.rating}/>
                            </td>
                            <td>
                                <div
                                    style={{marginTop: 50, justifyContent: "center", display: "flex", gap: 10}}>
                                    <h3 className="buy__price">{item?.product.disc_price ? `${item?.product.disc_price}$` : `${item?.product.price}$`}</h3>
                                    <del><h4
                                        className="buy__disc-price">{item?.product.disc_price ? `${item?.product.price}$` : null}</h4>
                                    </del>
                                </div>
                            </td>
                            <td onClick={() => handleDeleteItemBasket(item.product.id)}
                                className="table-btn tab wishlist-delete"
                            >
                                <div className="tab-block del-block">
                                    <span className="del" style={{marginTop: 11}}><Delete/></span>
                                </div>
                            </td>
                        </tr>
                    )) : null}
                    </tbody>
                </table>
                <Check totalPrice={totalPrice}/>
            </div> : <Empty role={admin}/>}
            <div className="wishlist-paginate">
                {totalPages <= 1 ? <Paginate totalPages={totalPages === 1 ? 0 : totalPages}/> : null}
            </div>
        </div>
    );
}

export default Basket;
