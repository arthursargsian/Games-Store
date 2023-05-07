import React, {useCallback, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {paymentConfirm} from "../redux/actions/payment";
import {saveAs} from "file-saver";
import {ReactComponent as Dwonload} from "../assets/img/svg/download.svg";
import NavBar from "../components/page-navigation/NavBar";
import {toast, ToastContainer} from "react-toastify";

function CardConfirm() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries([...searchParams]);
    const torrent = useSelector((store) => store.payment.torrent.download_link);
    const torrentName = useSelector((store) => store.payment.torrent.product_name);

    const handleDownlaod = useCallback(() => {
        if (query.payment_intent) dispatch(paymentConfirm(query.payment_intent));
        (async () => {
            try {
                const response = await fetch(`http://localhost:5000/files/${torrent}`);
                const blob = await response.blob();
                saveAs(blob, `${torrentName}.torrent`);
            } catch (error) {
                console.error(error);
            }
        })();
        toast.success("Download completed successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }, []);

    return (
        <>
            <NavBar/>
            <ToastContainer/>
            <div className="download-block">
                <button onClick={handleDownlaod} className="download-btn"><Dwonload/> <span>Download Game</span>
                </button>
            </div>
        </>);
}

export default CardConfirm;
