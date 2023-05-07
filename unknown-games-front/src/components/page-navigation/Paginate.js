import React, {useState, useCallback, useEffect} from "react";
import ReactPaginate from "react-paginate";
import {useDispatch} from "react-redux";
import {paginateGenerator} from "../../redux/actions/util";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import qs from "query-string";


function Paginate({totalPages}) {
    const {current_page} = useSearchParams;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(paginateGenerator(page));
        navigate(`?current_page=${page}`);
    }, [page]);

    return (
        <>
            <ReactPaginate
                className="page"
                marginPagesDisplayed={1}
                nextLabel=">"
                forcePage={page - 1}
                onPageChange={(ev) => setPage(ev.selected + 1)}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                activeClassName="active-page"
            />
        </>
    );
}

export default Paginate;
