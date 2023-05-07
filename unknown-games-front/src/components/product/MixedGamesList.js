import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {productsGames} from "../../redux/actions/products";
import {useNavigate, useParams} from "react-router-dom";
import Paginate from "../page-navigation/Paginate";
import ReactStars from "react-rating-stars-component";
import empty from "../../assets/img/empty-illustration_1.gif";


function MixedGamesList(props) {
    const {current_page} = useParams();
    const {gamesList, h, gamesGap, card, nameFs, gapBellow, starMargin, starsSize} = props.size;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((store) => store.products.productsData);
    const productsDataRequestStatus = useSelector((store) => store.products.productsDataRequestStatus);
    const page = useSelector((store) => store.util.page.page);
    const currentPage = useSelector((store) => store.products.productsData.currentPage);

    useEffect(() => {
        dispatch(productsGames({page, currentPage}));
    }, [page,currentPage,current_page]);

    const handleOpenSingle = useCallback((id) => {
        navigate(`/single/${id}`)
    }, [navigate]);

    return (
        <>
            <div className="games" style={{width: gamesList, gap: gamesGap}}>
                {productsDataRequestStatus === "success" ? products.data.map((item) => (
                    <div onClick={() => handleOpenSingle(item.id)} key={item.id} className={`games__card`}>
                        <figure className={`games__img ${card}`} style={{height: h}}>
                            <img src={`http://localhost:5000/images/big/${item.big_img}`} alt="x"/>
                        </figure>
                        <div style={{gap: gapBellow}} className="desc-below">
                            <div style={{margin: starMargin}}>
                                <ReactStars size={starsSize} edit={false} value={item.rating}/>
                            </div>
                            <h3 style={{fontSize: nameFs}} className="games__category">{item.name}</h3>
                            <div className="single__payment" style={{marginTop: -1}}>
                                <h3 className="buy__price">{item?.disc_price ? `${item?.disc_price}$` : `${item?.price}$`}</h3>
                                <h4 className="buy__disc-price">{item?.disc_price ? `${item?.price}$` : null}</h4>
                            </div>
                        </div>
                    </div>
                )) : <img className="loading" src="https://cdn.dribbble.com/users/3742211/screenshots/9195657/media/6796a544d6f9ef1293d8d8d9e60d38d5.gif" alt=""/>}
            </div>
        </>
    );
}

export default MixedGamesList;
