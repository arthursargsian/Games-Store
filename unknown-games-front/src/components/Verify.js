import React, {useEffect, useState} from "react";
import Utils from "../Utils";

function Verify() {
    const [status, setStats] = useState(false);

    useEffect(() => {
        setStats(Utils.getAdmin() || Utils.getUser());
    }, []);

    return (
        <>
            {!status?.verified || status !== null ? <header className="verify">
                <h2>You did not pass verification</h2>
                <button><a href="https://ethereal.email/">Verify</a></button>
            </header> : null}
        </>
    );
}

export default Verify;
