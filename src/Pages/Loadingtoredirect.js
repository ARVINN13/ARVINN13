import React, {useEffect, useState} from "react";
import  { useHistory } from "react-router-dom";

const Loadingtoredirect = () => {
    const [count, setCount] = useState(0);
    const history = useHistory();
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);
        count === 0 && history.push("/");
        return () => clearInterval(interval);

    }, [count, history]);

    return(
        <>
        <p> Redirecting you in {count} seconds </p>
         </>
    );
};

export default Loadingtoredirect;