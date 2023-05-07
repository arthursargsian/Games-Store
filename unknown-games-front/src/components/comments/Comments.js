import React, {useCallback, useEffect, useState} from "react";
import userImg from "../../assets/img/user1.png"
import WrightComment from "./WrightComment";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../redux/actions/comments";
import {ReactComponent as Dots} from "../../assets/img/svg/dots.svg";
import {deleteComments} from "../../redux/actions/util";


function Comments({id}) {
    const dispatch = useDispatch();
    const [modalDelete, setModalDelete] = useState(false);
    const [indexComments, setIndexComments] = useState(false);
    const comments = useSelector((store) => store.comments.commentsList);
    const commentsStatus = useSelector((store) => store.comments.commentsStatus);

    useEffect(() => {
        dispatch(getComments(id));
    }, []);

    const handleDeleteComment = useCallback(() => {
        dispatch(deleteComments(id));
    }, [id]);

    const handleOpneCommentPanel = useCallback((index) => {
        setModalDelete(!modalDelete);
        setIndexComments(index);
    }, [modalDelete, indexComments]);

    return (<>
        <div className="comments-block">
            {commentsStatus === "success" ? comments.map((item, index) => (
                <div className="comment" key={item.id}>
                    <div className="comment-contacts">
                        <figure className="comment-user">
                            <img className="comment-img" src={userImg} alt="x"/>
                        </figure>
                        <div className="name-time">
                            <h6 className="comment-name">{`${item.firstName} ${item.lastName}`}</h6>
                            <span onClick={() => handleOpneCommentPanel(index)} className="dots"><Dots/></span>
                            {/*{index === indexComments ? modalDelete ? <div className="dots-box">*/}
                            {/*    <p onClick={handleDeleteComment}>Delete</p>*/}
                            {/*</div> : null : null}*/}
                        </div>
                    </div>
                    <div className="comment-text-block">
                        <h3 className="comment-text-block">{item.message}</h3>
                    </div>
                </div>
            )) : null}

            <WrightComment id={id}/>
        </div>
    </>);
}

export default Comments;
