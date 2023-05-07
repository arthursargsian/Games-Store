import React, {useState, Fragment, useEffect, useCallback} from "react";
import Carousel from "nuka-carousel";
import {images} from "../json/data";
import {useDispatch, useSelector} from "react-redux";
import {carousel} from "../redux/actions/util";
import {useNavigate} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import _ from "lodash";

function Slider() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [indexImage, setIndexImage] = useState(1);
    const [activeCarouel, setActiveCarousel] = useState(1);
    const [slideIndex, setSlideIndex] = useState(1);
    const carouselList = useSelector((store) => store.util.carouselList);
    const time = 5000;
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        dispatch(carousel());
        AOS.init({
            duration: 200,
            easing: 'ease-in-out',
        });
        const interval = setInterval(() => {
            setActiveCarousel((prevIndex) => (prevIndex + 1) % images.length);
            ;
        }, time);
        return () => clearInterval(interval);
    }, []);

    const handleClickMap = useCallback((index) => {
        setIndexImage(index);
        setActiveCarousel(index);
    }, []);

    const handleGoToSingle = useCallback((id) => {
        navigate(`/single/${id}`);
    }, []);

    return (
        <>
            <div className={"block"}>
                <div className={"slider"}>
                    <Carousel
                        renderCenterRightControls={false}
                        renderCenterLeftControls={false}
                        slideIndex={indexImage}
                        className="carousel"
                        autoplay={true}
                        autoplayInterval={time}
                        wrapAround={true}
                        dragging={false}
                        disableAnimation={false}
                        speed={0}
                        pauseOnHover={false}
                    >
                        {carouselList.map((item, i) => (
                            <Fragment key={_.uniqueId()}>
                                <div onClick={() => handleGoToSingle(item.id)} className="slide-layout">
                                    <div className="carousel-desc">
                                        <h2 data-aos="fade-left">{item.name}</h2>
                                        {/*<span data-aos="fade-left">COMMING SOON</span>*/}
                                        <h3 data-aos="fade-left">{item.desc.slice(0, 200)}</h3>
                                        <div data-aos="fade-left" className="price-block" style={{marginTop: -1}}>
                                            <span data-aos="fade-left">STARTING AT</span>
                                            <div data-aos="fade-left" className="price-box">
                                                <h3 data-aos="fade-left">{item?.disc_price ? `${item?.disc_price}$` : `${item?.price}$`}</h3>
                                                <h4 data-aos="fade-left">{item?.disc_price ? `${item?.price}$` : null}</h4>
                                            </div>
                                        </div>
                                        <button
                                            className="carousel-buy">READ MORE
                                        </button>
                                    </div>
                                </div>
                                <img className="slide-img"
                                     src={`http://localhost:5000/images/small/${item.small_img[0]?.name}`} alt="X"/>
                            </Fragment>
                        ))}
                    </Carousel>
                </div>
                <div className="map">
                    {carouselList.map((item, index) => (
                        <div key={_.uniqueId()} onClick={() => handleClickMap(index)}
                             className={activeCarouel === index ? "map-boxes active-carousel" : "map-boxes"}>
                            <div className="desc-box">
                                <h4 className={activeCarouel === index ? "map-title active-txt" : "map-title"}>{item.name}</h4>
                                <p className={activeCarouel === index ? "map-desc active-txt" : "map-desc"}>{item.desc.slice(0, 50)}</p>
                            </div>
                            <img
                                className="map-img"
                                src={`http://localhost:5000/images/big/${item.big_img}`}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Slider;
