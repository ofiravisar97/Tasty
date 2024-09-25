import {FaFaceSadCry} from "react-icons/fa6";

const ErrorPage = () => {
    return <div className="h-screen w-screen flex flex-col gap-8 items-center justify-center">
        <FaFaceSadCry className="size-8 lg:size-16"/>
        Something went wrong.
    </div>
}

export default ErrorPage;