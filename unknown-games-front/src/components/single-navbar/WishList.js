import React, {useCallback, useEffect, useMemo} from "react";
import img from "../../assets/img/game.avif";
import {ReactComponent as Delete} from "../../assets/img/svg/delete.svg";
import Paginate from "../page-navigation/Paginate";
import {useDispatch, useSelector} from "react-redux";
import ReactStars from "react-rating-stars-component";
import {deleteWishListItem, getWishList} from "../../redux/actions/wishlist";
import {useNavigate} from "react-router-dom";
import Empty from "../page-navigation/Empty";


function WishList({role}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishList = useSelector((store) => store.wishlist.wishlist.data)
    const totalPages = useSelector((store) => store.wishlist.wishlist.totalPages);
    const page = useSelector((store) => store.util.page.page);

    useEffect(() => {
        dispatch(getWishList(page));
    }, [page]);

    const handleDeleteItem = useCallback((id) => {
        dispatch(deleteWishListItem(id));
    }, []);

    const handleOpenSingle = useCallback((id) => {
        navigate(`/single/${id}`);
    }, [navigate]);

    return (
        <>
            <div className="wishlist-table">
                {wishList?.length ?
                    <table className="table is-hoverable is-bordered is-fullwidth wishlist" id="datatable">
                        <thead>
                        <tr className="table-tab">
                            <th>Cover</th>
                            <th>Title</th>
                            <th style={{width: 650}}>Description</th>
                            <th>Rating</th>
                            <th style={{width: 250}}>Price</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {wishList?.map((item) => (
                            <tr className="wishlist-tr" key={item.wishlist_id}>
                                <td onClick={() => handleOpenSingle(item.productId)} className="table-img tab"><img
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
                                        style={{marginTop: 50, justifyContent: "center", display: "flex", gap: 20}}>
                                        <h3 className="buy__price">{item?.product.disc_price ? `${item?.product.disc_price}$` : `${item?.product.price}$`}</h3>
                                        <del><h4
                                            className="buy__disc-price">{item?.product.disc_price ? `${item?.product.price}$` : null}</h4>
                                        </del>
                                    </div>
                                </td>
                                <td className="table-btn tab wishlist-delete"
                                    onClick={() => handleDeleteItem(item.productId)}>
                                    <div className="tab-block del-block">
                                        <span className="del" style={{marginTop: 11}}><Delete/></span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table> : <Empty role={role}/>}
                <div className="wishlist-paginate">
                    {totalPages <= 1 ? <Paginate totalPages={totalPages === 1 ? 0 : totalPages}/> : null}
                </div>
            </div>
        </>
    );
}

export default WishList;
