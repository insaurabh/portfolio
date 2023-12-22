import { useRouteError } from "react-router-dom";


const NotFound = () => {
    const routeError = useRouteError();
    console.log('routeError', routeError)
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{routeError?.statusText || routeError?.message}</i>
            </p>
        </div>
    )
}

export default NotFound;