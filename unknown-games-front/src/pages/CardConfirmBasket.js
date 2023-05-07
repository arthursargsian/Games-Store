import React, {useCallback, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {paymentConfirm, paymentConfirmBasket} from "../redux/actions/payment";
import {saveAs} from "file-saver";
import NavBar from "../components/page-navigation/NavBar";
import {toast, ToastContainer} from "react-toastify";
import {ReactComponent as Dwonload} from "../assets/img/svg/download.svg";

function CardConfirmBasket() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries([...searchParams]);
    const torrents = useSelector((store) => store.payment.clientSecretBasket);

    const handleDownlaod = useCallback(() => {
        if (query.payment_intent) dispatch(paymentConfirmBasket(query.payment_intent));
            try {
                // for (let i = 0; i < JSON.parse(torrents).length; i++) {
                //     const response = await fetch(`http://localhost:5000/files/${torrents[i]}`);
                //     const blob = await response.blob();
                //     saveAs(blob, "Torrent.torrent");
                // }
                JSON.parse(torrents).forEach(async (item) => {
                    const response = await fetch(`http://localhost:5000/files/${item}`);
                    const blob = await response.blob();
                    saveAs(blob, "Torrent.torrent");
                });
                toast.success("Download completed successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } catch (error) {
                console.error(error);
            }
    }, [torrents]);

    return (<>
        <NavBar/>
        <ToastContainer/>
        <div className="download-block">
            <button onClick={handleDownlaod} className="download-btn"><Dwonload/>
                <span>Download Games from Basket</span>
            </button>
        </div>
    </>);
}

export default CardConfirmBasket;
