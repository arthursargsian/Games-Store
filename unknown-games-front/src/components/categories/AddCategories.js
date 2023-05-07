import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCategories, getCategories} from "../../redux/actions/categories";
import {ReactComponent as Delete} from "../../assets/img/svg/delete.svg";
import {deleteCategory} from "../../redux/actions/categories";

function AddCategories() {
    const dispatch = useDispatch();
    const [addCategory, setAddCategory] = useState("");
    const categories = useSelector((store) => store.categories.categoriesList);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const handleDdeleteCategory = useCallback((name) => {
        dispatch(deleteCategory(name));
    }, []);

    const handleAddCategory = useCallback(() => {
        if (addCategory) dispatch(addCategories(addCategory));
        setAddCategory("");
    }, [addCategory]);

    return (<>
        <div className="categories-box">
            <input value={addCategory} className="add-cat" type="text"
                   onChange={(ev) => setAddCategory(ev.target.value)}
                   placeholder="Add category"/>
            <button onClick={handleAddCategory} className="add-btn">Add</button>
            <table className="tg-cat">
                <thead className="thaed-cat">
                {categories?.map((item) => (<tr key={item.id}>
                    <td>{item.name} <span onClick={() => handleDdeleteCategory(item.name)}
                                          className="delete-cat"><Delete/></span></td>
                </tr>))}
                </thead>
            </table>
        </div>
    </>);
}

export default AddCategories;
