import React, {useCallback, useEffect, useState} from "react";
import NavBar from "../components/page-navigation/NavBar";
import Footer from "../components/page-navigation/Footer";
import {useParams} from "react-router-dom";
import qs from "query-string";
import {useDispatch, useSelector} from "react-redux";
import {single} from "../redux/actions/products";
import Comments from "../components/comments/Comments";
import Requirement from "../components/single/Requirement";
import SingleInformation from "../components/single/SingleInformation";
import SingleArticle from "../components/single/SingleArticle";

function Single() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const singleData = useSelector((store) => store.products.singleData.product || []);
    const singleDataRequestStatus = useSelector((store) => store.products.singleDataRequestStatus);
    console.log(singleData);
    useEffect(() => {
        (async () => {
            setLoading(true)
            await dispatch(single(id));
            setLoading(false)
        })()
    }, [id]);

    if (loading) return <div>Loading...</div>
    return (<>
        <NavBar/>
        <div className="single__block">
            <SingleArticle singleData={singleData}/>
            <Requirement singleData={singleData}/>
        </div>
        <SingleInformation singleData={singleData}/>
        <Comments id={id}/>
        <Footer/>
    </>)
}

export default Single;
