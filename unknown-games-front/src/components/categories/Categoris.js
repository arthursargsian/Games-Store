import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getCategoriesList, indexCat} from "../../redux/actions/categories";
import _ from "lodash";

function Categoris() {
    const all = {name: "All"}
    const dispatch = useDispatch();
    const [activeClass, setActiveClass] = useState("");
    const categories = useSelector((store) => store.categories.categoriesList);
    const page = useSelector((store) => store.util.page.page);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const handleCategory = useCallback((name, index) => {
        if (name !== "All") dispatch(getCategoriesList({name, page}));
        dispatch(indexCat(index));
        setActiveClass(index);
    }, [page]);

    return (
        <>
            <div className="categories">
                {[all, ...categories].map((item, index) => (
                    <p key={_.uniqueId()} onClick={() => handleCategory(item.name, index)}
                       className={activeClass === index ? "cat-tit active-category" : "cat-tit"}>{item.name}</p>
                ))}
            </div>
        </>
    );
}

export default Categoris;
