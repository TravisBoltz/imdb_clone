"use client";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Error({ error }) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <section className="flex flex-col items-center justify-center ">
            <Image src="/error.png" alt="error" width={500} height={500} />
            <button className="border-2 rounded-xl p-2 mt-4" onClick={() => window.location.reload()}>Try Again</button>
        </section>
    );
}
