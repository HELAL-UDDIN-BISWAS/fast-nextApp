"use client";
import { Spinner } from "keep-react";

const loading = () => {
    return (
        <div className="flex items-center justify-center text-center w-full h-[90vh mx-auto]">
    <Spinner color="success" size="lg" />
        </div>
    );
};

export default loading;