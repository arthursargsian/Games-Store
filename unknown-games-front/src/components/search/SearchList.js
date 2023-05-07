import React, {useCallback, useEffect} from "react";
import {games} from "../../json/data";
import {useDispatch, useSelector} from "react-redux";
import {productsGames} from "../../redux/actions/products";
import {useNavigate} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Empty from "../page-navigation/Empty";

function SearchList(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {gamesList, h, gamesGap, card, nameFs, gapBellow, starMargin, starsSize} = props.size;
    const {result, status} = props.params;

    const handleOpenSingle = useCallback((id) => {
        navigate(`/single/${id}`)
    }, [navigate]);

    return (
        <>
            <div className="games" style={{width: gamesList, gap: gamesGap}}>
                {result.length ? result?.map((item) => (
                    <div onClick={() => handleOpenSingle(item?.id)} key={item?.id} className={`games__card`}
                    >
                        <figure className={`games__img ${card}`} style={{height: h}}>
                            <img src={`http://localhost:5000/images/big/${item.big_img}`} alt="x"/>
                        </figure>
                        <div style={{gap: gapBellow}} className="desc-below">
                            <div style={{margin: starMargin}}>
                                <ReactStars size={starsSize} edit={false} value={item.rating}/>
                            </div>
                            <h3 style={{fontSize: nameFs}} className="games__category">{item?.name}</h3>
                            <div className="single__payment" style={{marginTop: -1}}>
                                <h3 className="buy__price">{item?.disc_price ? `${item?.disc_price}$` : `${item?.price}$`}</h3>
                                <h4 className="buy__disc-price">{item?.disc_price ? `${item?.price}$` : null}</h4>
                            </div>
                        </div>
                    </div>
                )) : <Empty/>}
            </div>
        </>
    );
}

export default SearchList;
