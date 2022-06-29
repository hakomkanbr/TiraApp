import React from "react";
import LoaderComponent from "./loade.style"

const Loader = () => (
    <LoaderComponent>
        <svg className="isoContentLoader" viewBox="0 0 50 50">
            <circle
                className="isoContentLoader"
                cx="25"
                cy="25"
                r="25"
                fill="none"
                strokeWidth="3.6"
            />
        </svg>
    </LoaderComponent>
)


export default Loader;