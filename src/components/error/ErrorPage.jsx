import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-primary font-bold text-9xl">404</h1>

        <h3 className="text-secondary font-bold text-2xl">Page Not Found!</h3>

        <p>
          <i>The Page you are looking for doesn't exist.</i>
        </p>

        <button className="cursor-pointer rounded-[20px] bg-[#6C009F] text-white text-[1.2em] py-[12.5px] px-[30px] font-bold mt-12 xs:mt-4">Back To Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
