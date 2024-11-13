import React from "react";
import Image from "next/image";
export default function loading() {
  return (
    // <div className="flex justify-center
    // mt-16">
    <Image
      width={25}
      height={25}
      alt="Image"
      className=""
      src="spinner.svg"
    ></Image>
    // </div>
  );
}
