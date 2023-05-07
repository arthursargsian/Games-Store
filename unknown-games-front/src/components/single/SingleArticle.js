import React, {useCallback} from "react";
import ReactStars from "react-rating-stars-component";
import Utils from "../../Utils";
import {sendRating} from "../../redux/actions/products";
import {addWishListItem, deleteWishListItemSingle} from "../../redux/actions/wishlist";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as Hart} from "../../assets/img/svg/hart.svg";
import {ReactComponent as Basket} from "../../assets/img/svg/basket.svg";
import {ReactComponent as Favorite} from "../../assets/img/svg/favorite-.svg";
import {addItemBasket, deleteItemBasketSingle} from "../../redux/actions/payment";
import {toast, ToastContainer} from "react-toastify";
import {addFavoriteGame, deleteItemFavorite} from "../../redux/actions/favorite";

function SingleArticle({singleData}) {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const basket = useSelector((store) => store.products.singleData.basket?.count);
    const q = useSelector((store) => store.products.singleData.basket);
    const wishlist = useSelector((store) => store.products.singleData.wishlist?.count);
    const favorite = useSelector((store) => store.products.singleData.favorite?.count);

    const ratingChanged = useCallback((rating) => {
        if (Utils.userToken() || Utils.adminToken()) {
            dispatch(sendRating({rating, id}));
        } else {
            navigate("/sign-in");
        }
    }, [id]);

    const handleAddItemBasket = useCallback((id) => {
        const status = Utils.getUser() || Utils.getAdmin();
        if (Utils.userToken() || Utils.adminToken()) {
            if (status.verified) {

            } else {
                toast.error("You have not passed verification", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } else {
            navigate("/sign-in");
        }
    }, []);

    const handleAddItemFavorite = useCallback((id, status) => {
        if (Utils.userToken() || Utils.adminToken()) {
            if (status.verified) {

            } else {
                toast.error("You have not passed verification", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } else {
            navigate("/sign-in");
        }
    }, []);

    const handleBuyBtn = useCallback((status) => {
        if (status.verified) {
            navigate(`/card/${id}`);
        } else {
            toast.error("You have not passed verification", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, []);

    const handleSingleNavBar = useCallback((id, path) => {
        const status = Utils.getUser() || Utils.getAdmin();
        if (Utils.userToken() || Utils.adminToken()) {
            if (status.verified) {
                if (path === "wishlist") {
                    if (!wishlist) {
                        dispatch(addWishListItem(id));
                    } else {
                        dispatch(deleteWishListItemSingle(id));
                    }
                }
                if (path === "basket") {
                    if (!basket) {
                        dispatch(addItemBasket(id));
                    } else {
                        dispatch(deleteItemBasketSingle(id));
                    }
                }
                if (path === "favorite") {
                    if (!favorite) {
                        dispatch(addFavoriteGame(id));
                    } else {
                        dispatch(deleteItemFavorite(id));
                    }
                }
            } else {
                toast.error("You have not passed verification", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } else {
            navigate("/sign-in");
        }
    }, [wishlist, basket, favorite]);

    return (<div style={{display: "flex", flexDirection: "column"}}>
        <ToastContainer/>
        <div className="single__article">
            <div className="image-class">
                <img className="single__img" src={`http://localhost:5000/images/big/${singleData.big_img}`}
                     alt="X"/>
            </div>
        </div>
        <div className="single__payment btn-prc">
            <button className="buy__btn" onClick={() => handleBuyBtn(Utils.getUser() || Utils.getAdmin())}>Buy
            </button>
            <h2 className="buy__price">{singleData?.disc_price ? `${singleData?.disc_price}$` : `${singleData?.price}$`}</h2>
            <h3 className="buy__disc-price">{singleData?.disc_price ? `${singleData?.price}$` : null}</h3>
        </div>
        <br/>
        <div className="single-rat">
            <ReactStars size={40} count={5} isHalf={false} value={singleData.rating} color={"grey"} activeColor={"gold"}
                        onChange={ratingChanged}/>
            <Hart onClick={() => handleSingleNavBar(id, "wishlist")}
                  className={wishlist ? "singlebtn-on" : "singlebtn-off"}/>
            <div className="basket-icon">
                <Basket onClick={() => handleSingleNavBar(id, "basket")}
                        className={basket ? "singlebtn-on" : "singlebtn-off"}/>
            </div>
            <div className="favorite-icon">
                <Favorite onClick={() => handleSingleNavBar(id, "favorite")}
                          className={favorite ? "singlebtn-on" : "singlebtn-off"}/>
            </div>
        </div>
    </div>);
}

export default SingleArticle;
