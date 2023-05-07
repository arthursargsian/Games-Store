import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {lastfavorite} from "../../redux/actions/favorite";
import img from "../../assets/img/game.avif";
import ReactStars from "react-rating-stars-component";
import {useNavigate} from "react-router-dom";
import _ from "lodash";

function LastFavorite({role}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lastFavoriteList = useSelector((store) => store.favorite.lastFavoriteList);
    const lastFavoriteListStatus = useSelector((store) => store.favorite.lastFavoriteListStatus);

    useEffect(() => {
        dispatch(lastfavorite());
    }, []);

    return (
        <>
            {lastFavoriteList.length ? <div className="last-favorite">
                <div style={{width: role === "user" ? "82%" : 1495}} className="games favorite-block">
                    {lastFavoriteListStatus ? lastFavoriteList?.map((item) => (
                        <div onClick={() => navigate(`/single/${item.id}`)} className={`games__card`}
                             key={_.uniqueId()}>
                            <figure className="games__img browse-block favorite-wi">
                                <img src={`http://localhost:5000/images/big/${item?.big_img}`} alt="x"/>
                            </figure>
                            <div className="desc-below favorite-below">
                                <div className="favorite-stars">
                                    <ReactStars size={20} edit={false} value={item?.rating}/>
                                </div>
                                <h3 style={{fontSize: 16}} className="games__category">{item.name}</h3>
                                <div className="single__payment" style={{marginTop: -1}}>
                                    <h3 className="buy__price">{item?.disc_price ? `${item?.disc_price}$` : `${item?.price}$`}</h3>
                                    <h4 className="buy__disc-price">{item?.disc_price ? `${item?.price}$` : null}</h4>
                                </div>
                            </div>
                        </div>
                    )) : "loading..."}
                </div>
            </div> : <h2 className="favorite-msg">{lastFavoriteList.msg}</h2>}
        </>
    );
}

export default LastFavorite;
