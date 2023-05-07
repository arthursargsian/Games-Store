import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {allUsers, deleteUser} from "../../redux/actions/register";
import _ from "lodash";

function PeopleList({role, search}) {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.register.allUsers);
    const usersStatus = useSelector((store) => store.register.allUsersStatus);
    const admins = useSelector((store) => store.register.allAdmins);
    const adminsStatus = useSelector((store) => store.register.allAdmins);

    useEffect(() => {
        dispatch(allUsers());
    }, []);

    const handleDeleteUser = useCallback((id) => {
        dispatch(deleteUser(id));
    }, []);

    return (<>
        <table className="table is-hoverable is-bordered is-fullwidth" id="datatable">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {role === "user" ? <>
                {usersStatus === "success" ? users.map((item) => (<tr key={item.uuid}>
                    <td>{`${item.firstName} ${item.lastName}`}</td>
                    <td className="user-delete">{item.email}
                        <button onClick={() => handleDeleteUser(item.uuid)}>Delete</button>
                    </td>
                </tr>)) : null}
            </> : null}

            {role === "admin" ? <>
                {admins.map((item) => (<tr key={item.uuid}>
                    <td>{`${item.firstName} ${item.lastName}`}</td>
                    <td>{item.email}</td>
                </tr>))}
            </> : null}
            </tbody>
        </table>
    </>);
}

export default PeopleList;
