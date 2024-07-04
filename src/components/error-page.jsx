import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page" className="p-10">
            <h1 className="text-2xl font-bold">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">Back to home</Link>
            
        </div>
    );
}