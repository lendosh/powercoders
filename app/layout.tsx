import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React, {Fragment} from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Web Portfolio of Vladyslav",
    description: "Test task #3",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
        <body className={`${inter.className} flex flex-col items-center justify-center max-h-screen px-4 sm:px-16 lg:px-32`}>
        <Header/>
        <Fragment>
            {children}
        </Fragment>
        <Footer/>
        </body>
        </html>
    );
}
