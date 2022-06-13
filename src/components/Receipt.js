import React, { useEffect, useState } from "react";

const Receipt = () => {
  const [values, setValues] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setValues(data);
      localStorage.removeItem("data");
    }
  }, []);

  return (
    <div className="flex flex-col  w-3/5 m-20 mx-auto border-8 border-cyan-400">
      <div className="flex justify-center items-center">
        <h1 className="text-cyan-700 text-7xl mt-20 h-40  font-bold">
          NAME OF THE HOSPITAL
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-5xl mt-0 h-20">
          Dr. John Killer <span className="text-2xl">M.B.B.S.,M.S.(ortho)</span>
        </h1>
      </div>
      <div>
        <div className="flex justify-center items-center">
          751 Victoria 123 Street,South Statue 204
        </div>
        <div className="flex justify-center items-center">
          Hometown, US 1234
        </div>
        <div className="flex justify-center items-center">
          PH: (207) 808 2014 2014
        </div>
        <div className="flex justify-center items-center">
          FAX: (207) 808 2015 2202
        </div>
      </div>
      <div className="flex mt-5 justify-center items-center">
        <div className=" mt-5 flex justify-center items-center ">
          <div className="bg-cyan-400 h-1 w-96"></div>
        </div>
      </div>

      <div className="flex  justify-end mt-10 mb-10 mr-10">
        <h1>
          S.NO. : <span className="underline decoration-1"> __________ </span>
        </h1>
      </div>
      <div className="flex  ">
        <div className="flex grow ml-20 h-10">
          Patient Name:{" "}
          <div className=" ml-2 flex-col">
            <div>
              {" "}
              {values.firstname} {values.lastname}
            </div>
            <div className="bg-slate-400 h-1 w-80"></div>
          </div>
        </div>
        <div className="flex grow h-40">
          Age:{" "}
          <div className="ml-2 flex-col">
            <div> {values.age}</div>
            <div className="bg-slate-400 h-1 w-20"></div>
          </div>
        </div>
        <div className="flex grow mr-20 h-10">
          Gender:{" "}
          <div className="ml-2 flex-col">
            <div> {values.gender}</div>
            <div className="bg-slate-400 h-1 w-20"></div>
          </div>
        </div>
      </div>
      <div className="flex -mt-20">
        <div className="flex grow ml-20  h-40 ">
          Medicine:{" "}
          <div className=" ml-2 flex-col">
            <div> {values.medicine}</div>
            <div className="bg-slate-400 h-1 w-96"></div>
          </div>
        </div>
        <div className="flex grow ml-2 mr-40 h-40">
          Date:{" "}
          <div className="ml-2 flex-col">
            <div> {values.date}</div>
            <div className="bg-slate-400 h-1 w-60"></div>
          </div>
        </div>
      </div>

      <div className="flex-col ml-20 mr-20 -mt-20 items-center">
        <h1 className="mt-0  text-6xl">Rx</h1>
        <h1 className="mt-5 ml-10 h-60 text-2xl">{values.notes}</h1>
      </div>
      <div className="flex  justify-end mt-10 mb-10 mr-10">
        <h1>
          Doctor's Signature :{" "}
          <span className="underline decoration-1"> __________ </span>
        </h1>
      </div>

      <div className="flex mb-5 justify-center items-center">
        <div className=" mt-5 flex justify-center items-center ">
          <div className="bg-cyan-400 h-1  w-96"></div>
        </div>
      </div>
      <div className="flex mb-5 justify-center items-center">
        www.hospitalmail.com
      </div>
    </div>
  );
};

export default Receipt;
