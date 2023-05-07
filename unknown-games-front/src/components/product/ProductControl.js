import React, {useCallback, useEffect, useRef, useState} from "react";
import img from "../../assets/img/game.avif";
import {ReactComponent as Update} from "../../assets/img/svg/update.svg";
import {ReactComponent as Delete} from "../../assets/img/svg/delete.svg";
import {useDispatch, useSelector} from "react-redux";
import {productsDelete, productsGames} from "../../redux/actions/products";
import {searchInp, searchProducts} from "../../redux/actions/search";
import moment from "moment";
import Paginate from "../page-navigation/Paginate";
import {useNavigate} from "react-router-dom";


function ProductControl({resultSearch}) {
    const dispatch = useDispatch();
    const searchRef = useRef();
    const navigate = useNavigate();
    const [deleteProduct, setDeleteProduct] = useState();
    const searchResult = useSelector((store) => store.searchProduct.searchResult);
    const searchResultRequestStatus = useSelector((store) => store.searchProduct.searchResultRequestStatus);
    const totalPages = useSelector((store) => store.products.productsData.totalPages);
    const products = useSelector((store) => store.products.productsData.data);
    const productsDataRequestStatus = useSelector((store) => store.products.productsDataRequestStatus);
    const page = useSelector((store) => store.util.page.page);
    const currentPage = useSelector((store) => store.products.productsData.currentPage);

    useEffect(() => {
        dispatch(productsGames({page, currentPage}));
        navigate(`?page=${currentPage}`);
    }, [page, currentPage]);

    useEffect(() => {
        if (deleteProduct) dispatch(productsDelete(deleteProduct));
    }, [deleteProduct]);

    useEffect(() => {
        if (resultSearch) {
            clearTimeout(searchRef.current)
            searchRef.current = setTimeout(() => {
                dispatch(searchProducts(resultSearch));
            }, 300);
        }
    }, [resultSearch]);

    return (
        <>

            <table className="table is-hoverable is-bordered is-fullwidth" id="datatable">
                <thead>
                <tr>
                    <th>Cover</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Data</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {resultSearch ? searchResult?.map((item) => (
                        <tr key={item.id}>
                            <td className="table-img tab"><img src={`http://localhost:5000/images/big/${item.big_img}`}
                                                               alt=""/></td>
                            <td className="table-txt tab">{item.name}</td>
                            <td className="table-txt tab">
                                <div>{item.desc}</div>
                            </td>
                            <td className="table-btn tab">
                                <div className="data">
                                    <p className="data-fonts">Created
                                        - {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                    <p className="data-fonts">Updated
                                        - {moment(item.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                </div>
                            </td>
                            <td className="table-btn tab">
                                <div className="tab-block upd-block"><span className="upd"><Update/></span>
                                </div>
                            </td>
                            <td className="table-btn tab">
                                <div className="tab-block del-block"><span
                                    onClick={() => setDeleteProduct(item.id)}
                                    className="del"><Delete/></span></div>
                            </td>
                        </tr>))
                    :
                    products?.map((item) => (
                        <tr key={item.id}>
                            <td className="table-img tab"><img src={`http://localhost:5000/images/big/${item.big_img}`}
                                                               alt=""/></td>
                            <td className="table-txt tab">{item.name}</td>
                            <td className="table-txt tab">
                                <div>{item.desc}</div>
                            </td>
                            <td className="table-btn tab">
                                <div className="data">
                                    <p className="data-fonts">Created
                                        - {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                    <p className="data-fonts">Updated
                                        - {moment(item.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                </div>
                            </td>
                            <td className="table-btn tab">
                                <div className="tab-block upd-block"><span
                                    onClick={() => navigate(`/admin/dashboard-table/products-generator/update?id=${item.id}`)}
                                    className="upd"><Update/></span>
                                </div>
                            </td>
                            <td className="table-btn tab">
                                <div className="tab-block del-block"><span
                                    onClick={() => setDeleteProduct(item.id)}
                                    className="del"><Delete/></span></div>
                            </td>
                        </tr>))
                }
                </tbody>
            </table>
            {!resultSearch ? <Paginate totalPages={totalPages === 1 ? 0 : totalPages}/> : null}
        </>
    );
}

export default ProductControl;

