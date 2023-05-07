import React, {useCallback, useEffect, useState} from "react";
import NavBar from "../components/page-navigation/NavBar";
import MixedGamesList from "../components/product/MixedGamesList";
import Footer from "../components/page-navigation/Footer";
import Categoris from "../components/categories/Categoris";
import {useDispatch, useSelector} from "react-redux";
import SearchList from "../components/search/SearchList";
import Paginate from "../components/page-navigation/Paginate";

function Browse() {
    const search = useSelector((store) => store.searchProduct.search);
    const categoreisIndex = useSelector((store) => store.categories.categoreisIndex.index);

    const categoriesProductList = useSelector((store) => store.categories.categoriesProductList || []);
    const categoriesProductStatus = useSelector((store) => store.categories.categoriesProductStatus || []);

    const searchResult = useSelector((store) => store.searchProduct.searchResult);
    const searchResultRequestStatus = useSelector((store) => store.searchProduct.searchResultRequestStatus);
    const totalPages = useSelector((store) => store.products.productsData.totalPages);
    return (<>
        <div className="wrapper">
            <NavBar/>
            <div style={{display: "flex", alignItems: "flex-start", marginTop: 50}}>
                {search.value ? <SearchList size={{
                    gamesList: "72%",
                    gamesGap: 20,
                    h: 300,
                    card: "browse-block",
                    nameFs: 16,
                    gapBellow: 0,
                    starMargin: "-13px 0 -3px -4px",
                    starsSize: 20,
                }} params={{
                    result: searchResult, status: searchResultRequestStatus
                }}/> : !search.value && categoriesProductList && categoreisIndex ? <SearchList size={{
                        gamesList: "72%",
                        gamesGap: 20,
                        h: 300,
                        card: "browse-block",
                        nameFs: 16,
                        gapBellow: 0,
                        starMargin: "-13px 0 -3px -4px",
                        starsSize: 20,
                    }} params={{result: categoriesProductList || [], status: categoriesProductStatus}}/> :
                    <MixedGamesList
                        size={{
                            gamesList: "72%",
                            gamesGap: 20,
                            h: 300,
                            card: "browse-block",
                            nameFs: 16,
                            gapBellow: 0,
                            starMargin: "-13px 0 -3px -4px",
                            starsSize: 20,
                        }}/>}
                <Categoris/>
            </div>
            {totalPages && !search.value && !categoriesProductList.length ?
                <Paginate totalPages={totalPages === 1 ? 0 : totalPages}/> : null}
            <Footer/>
        </div>
    </>);
}

export default Browse;
