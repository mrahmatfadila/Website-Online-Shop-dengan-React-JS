import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-3 text-lg">Sorry Brother! telah terjadi kesalahan yang tidak terduga :)</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    );
};

export default ErrorPage;