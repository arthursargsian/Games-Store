import React, {useCallback, useEffect, useState} from "react";
import Modal from "react-modal";
import CreateAdmin from "./CreateAdmin";
import {useDispatch, useSelector} from "react-redux";
import {dashboardSearch} from "../../redux/actions/util";
import ProductsGenerator from "../product/ProductsGenerator";
import {useNavigate} from "react-router-dom";

function PeopleHeader({role}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [registerAdmin, setRegisterAdmin] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(dashboardSearch(search.trim()));
    }, [search]);

    return (
        <>
            <div className="card-filter">
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input"
                            id="table-search"
                            type="text"
                            placeholder="Search for records..."
                            onChange={(ev) => setSearch(ev.target.value)}
                        />
                        <span className="icon is-left">
                            <i className="fa fa-search"/>
                        </span>
                    </div>
                </div>
                <div className="field has-addons">
                    {role === "admin" ? <p className="control">
                        <button onClick={() => setRegisterAdmin(true)} className="button">
                            <span>Create Admin</span>
                        </button>
                    </p> : null}
                    {role === "table" ? <p className="control">
                        <button onClick={() => navigate(`/admin/dashboard-table/products-generator/create`)}
                                className="button">
                            <span>Create Product</span>
                        </button>
                    </p> : null}
                    <p className="control">
                        <button onClick={() => window.history.go(0)} className="button" id="table-reload">
                            <span>Reload</span>
                        </button>
                    </p>
                </div>
                <Modal isOpen={registerAdmin} onRequestClose={() => setRegisterAdmin(false)} style={customStyles}>
                    <CreateAdmin/>
                </Modal>
            </div>

        </>);
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        height: 900,
        background: 'transparent',
        border: 0,
        display: "flex",
        justifyContent: "center",
    },
};

export default PeopleHeader;
