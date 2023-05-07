import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {sendComment} from "../../redux/actions/comments";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Utils from "../../Utils";
import {useNavigate} from "react-router-dom";


function WrightComment({id}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const [statsus, setStatus] = useState([]);

    useEffect(() => {
        setStatus(Utils.getUser() || Utils.getAdmin());
    }, []);

    const handleSendComment = useCallback((status) => {
        if (Utils.adminToken() || Utils.userToken()) {
            if (status.verified) {
                if (id && comment) {
                    dispatch(sendComment({id, comment}));
                    // window.location.reload();
                } else {
                    toast.error("Imput Empty", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            } else {
                toast.error("You have not passed verification", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } else {
            navigate("/sign-in");
        }
    }, [comment, id]);

    return (
        <>
            <ToastContainer/>
            <div className="comment-wc">
                <textarea onChange={(ev) => setComment(ev.target.value)} placeholder="You can write your opinion"
                          cols="30"
                          rows="10"></textarea>
                <button onClick={() => handleSendComment(Utils.getUser() || Utils.getAdmin())}>Comment</button>
            </div>

        </>
    );
}

export default WrightComment;
