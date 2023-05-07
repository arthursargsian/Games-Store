import React, {useCallback, useEffect, useState} from "react";

function SmallImages({images}) {
    const [imagesList, setImagesList] = useState([]);

    useEffect(() => {
        if (images) {
            [...images].forEach((item) => {
                const url = URL.createObjectURL(item);
                setImagesList(imagesList => [...imagesList, url]);
            });
        }
    }, [images]);

    return (
        <>
            <div className="gallery-list">
                {imagesList?.map((item, i) => (
                    <figure key={i} className="gallery-images">
                        <img src={item} alt=""/>
                    </figure>
                ))}
            </div>
        </>
    );
}

export default SmallImages;
