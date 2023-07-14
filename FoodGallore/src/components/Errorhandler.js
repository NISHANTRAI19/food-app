import { useRouteError } from "react-router-dom";
import { ERROR_URL } from "../utils/constants"
const ErrorHandler = () => {

    const err = useRouteError();

    return (<div className="errorhandling">
        <h1>You seem lost stranger<br />Error:{err.status}</h1>

        <h2>{err.statusText}</h2>
        <h2>

            {err.data}
        </h2>

        <img src={ERROR_URL}></img>
    </div>
    )

}

export default ErrorHandler;