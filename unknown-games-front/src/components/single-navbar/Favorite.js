import React, {useEffect} from "react";
import ReactStars from "react-rating-stars-component";
import img from "../../assets/img/game.avif";
import {useDispatch, useSelector} from "react-redux";
import {getAllItemFavorite} from "../../redux/actions/favorite";
import Empty from "../page-navigation/Empty";
import {useNavigate} from "react-router-dom";
import Paginate from "../page-navigation/Paginate";
import Footer from "../page-navigation/Footer";

function Favorite({role}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favoriteListData = useSelector((store) => store.favorite.favoriteList?.data);
    const totalPages = useSelector((store) => store.favorite.favoriteList.totalPages);
    const favoriteListStaus = useSelector((store) => store.favorite.favoriteListStatus);
    const page = useSelector((store) => store.util.page.page);

    useEffect(() => {
        dispatch(getAllItemFavorite(page));
    }, [page]);

    console.log()

    return (
        <>
            <div style={{justifyContent: role === "user" ? "center" : "unset"}} className={"favorite"}>
                <div className="games favorite-block">
                    {favoriteListData ? favoriteListData?.map((item) => (
                        <div onClick={() => navigate(`/single/${item?.productId}`)}
                             className={`games__card favorite-card`}
                             key={item.productId}>
                            <figure className="games__img browse-block favorite-wi">
                                <img src={`http://localhost:5000/images/big/${item?.product.big_img}`} alt="x"/>
                            </figure>
                            <div className="desc-below favorite-below">
                                <div className="favorite-stars">
                                    <ReactStars size={20} edit={false} value={item?.product.rating}/>
                                </div>
                                <h3 style={{fontSize: 16}} className="games__category">{item.product.name}</h3>
                                <div className="single__payment" style={{marginTop: -1}}>
                                    <h3 className="buy__price">{item?.product.disc_price ? `${item?.product.disc_price}$` : `${item?.product.price}$`}</h3>
                                    <h4 className="buy__disc-price">{item?.product.disc_price ? `${item?.product.price}$` : null}</h4>
                                </div>
                            </div>
                        </div>
                    )) : <Empty/>}
                </div>
            </div>
            <Paginate totalPages={totalPages === 1 ? 0 : totalPages}/>
        </>
    );
}

export default Favorite;
