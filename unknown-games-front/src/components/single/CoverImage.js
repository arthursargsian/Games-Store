import React, {useCallback, useEffect, useState} from "react";
import {ReactComponent as AddImage} from "../../assets/img/svg/add_image.svg";
import {useDispatch} from "react-redux";
import {coverProduct} from "../../redux/actions/util";


function CoverImage({image}) {
    const dispatch = useDispatch();

    const [imageUrl, setImageUrl] = useState("");
    const [cover, setCover] = useState("");

    const handleAddFile = useCallback((ev) => {
        const [file] = ev.target.files;
        const url = URL.createObjectURL(file);
        setImageUrl(url);
        setCover(ev.target.files[0]);
    }, [cover,imageUrl]);

    useEffect(()=>{
        dispatch(coverProduct({cover}));
    },[cover]);

    return (
        <>
            <label>
                <div className="block-cover">
                    {imageUrl ? <img className="cover-image" src={imageUrl} alt="x"/> :
                        <div className="addImage"><AddImage/></div>}
                </div>
                <input
                    type="file"
                    className="file-btn"
                    accept="iamge/*"
                    onChange={(ev) => handleAddFile(ev)}
                />
            </label>
        </>
    );
}

export default CoverImage;
