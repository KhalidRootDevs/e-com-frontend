"use client";
import { ErrorProps } from "next/error";
import React from "react";

const ErrorPage: React.FC<ErrorProps> = ({ statusCode }) => {

    console.log('ErrorPage rendered', statusCode)

  return (
    <div>
      <div>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on admin"}</div>
    </div>
  );
};

export default ErrorPage;
