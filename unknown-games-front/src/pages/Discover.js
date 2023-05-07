import React, {useEffect} from "react";
import Slider from "../components/Slider";
import NavBar from "../components/page-navigation/NavBar";
import Footer from "../components/page-navigation/Footer";
import MixedGamesList from "../components/product/MixedGamesList";
import Paginate from "../components/page-navigation/Paginate";
import {useSelector} from "react-redux";
import Chat from "../components/chat/Chat";

function Discover() {
    const totalPages = useSelector((store) => store.products.productsData.totalPages);
    const page = useSelector((store) => store.util.page.page);

    return (
        <div className="wrapper">
            <NavBar/>
            <div className="container-co">
                <Slider/>
                <div className="mixed">
                    <MixedGamesList size={{
                        gamesList: "100%", gamesGap: 40, h: 400, card: "discover-block", nameFs: 18,
                        gapBellow: 7,
                        starMargin: "-10px 0 -10px -4px",
                        starsSize: 30,
                    }}/>
                </div>
            </div>
            <div>
                <Paginate totalPages={totalPages === 1 ? 0 : totalPages}/>
            </div>
            {/*<Chat/>*/}
            <Footer/>
        </div>
    );
}

export default Discover;
