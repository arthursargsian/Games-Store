import React, {useCallback, useEffect, useRef, useState} from "react";
import {ReactComponent as SearchIcon} from "../../assets/img/svg/search.svg";
import {searchInp, searchProducts} from "../../redux/actions/search";
import {useDispatch} from "react-redux";
import SearchList from "./SearchList";
import {useNavigate} from "react-router-dom";

function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchRef = useRef()
    const [searchInStore, setSearchInStore] = useState("");

    useEffect(() => {
        if (searchInStore) {
            clearTimeout(searchRef.current)
            searchRef.current = setTimeout(() => {
                dispatch(searchProducts(searchInStore));
            }, 300)
        }
        dispatch(searchInp(searchInStore));
    }, [searchInStore]);

    const handleSearchInStore = useCallback(async (ev) => {
        ev.preventDefault();
        if (searchInStore) {
            await dispatch(searchProducts(searchInStore));
            navigate("/browse");
        }
    }, [searchInStore]);

    return (
        <>
            <form className="search" onClick={(ev) => handleSearchInStore(ev)}>
                <input type="text" value={searchInStore} className="search__input" placeholder="Search Store"
                       onChange={(ev) => setSearchInStore(ev.target.value)}/>
                <button type="submit" className="search__btn"><SearchIcon
                    className="search-icon"/></button>
            </form>
        </>
    );
}

export default Search;
