"use client";
import { Toaster, toast } from "react-hot-toast";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckPass from "@/Components/CheckPass";
import Link from "next/link";

const page = () => {
  const tost = () => {
    toast.success("Copied to clipboard", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pass);
  };
  const [pass, setpass] = useState("");
  return (
    <>
      <div className="container">
        <div className="col-md-5 mx-auto">
          <h3 className="text-center text-2xl font-bold my-9">
            Check Your Password
          </h3>
          <form className="form-group">
            <input
              type="password"
              placeholder="Password"
              autoFocus
              className="form-control my-2"
              onChange={(e) => setpass(e.target.value)}
            />
            <CheckPass password={pass} />
          </form>
        </div>
      </div>
      <div className="flex justify-center ">
      <button
        onClick={() => {
          handleCopy();
          tost();
        }}
        onChange={(e) => setpass(e.target.value)}
        className="button flex mx-1 bg-blue-500 p-2 px-3 rounded text-white"
      >
        Copy Password
      </button>
      <button>
        <Link
          href="/passGen"
          className="button flex justify-center mx-auto bg-blue-500 p-2 px-3 rounded text-white no-underline "
        >
          Pass Generator
        </Link>
      </button>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
};

export default page;
