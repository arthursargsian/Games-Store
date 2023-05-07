import React from "react";
import PeopleHeader from "./PeopleHeader";
import PeopleList from "./PeopleList";
import ProductControl from "../product/ProductControl";
import {useSelector} from "react-redux";

function DashboardPeople({role}) {
    const resultSearch = useSelector((store) => store.util.search.value);

    return (
        <>
            <div className="column is-10" id="page-content">
                <div className="content-body">
                    <div className="card">
                        <PeopleHeader role={role}/>
                        <div className="card-content">
                            {role === "table" ? <ProductControl resultSearch={resultSearch}/> :
                                <PeopleList resultSearch={resultSearch} role={role}/>}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DashboardPeople;
