'use client'
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profile from '@/public/images/profile.jpg';
import SideBar from "@/components/Elements/SideBar";
import { useState } from "react";
import Link from "next/link";

export default function Layout({children}){
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
    return (
      <>
        <div className="flex relative bg-[#f3f6f4]">
          <ToastContainer theme="dark" />
          {showNav ? (
            <SideBar closeNav={closeNavHandler} showNav={showNav} />
          ) : (
            <></>
            
          )}

          <div className="flex flex-col w-full">
            <div className="flex justify-between py-3 item-center max-h-[60px] px-12 border border-b border-black">
              <Link href="/admin">
                <h3 className="text-xl font-semibold cursor-pointer">
                  Admin Panel
                </h3>
              </Link>

              <Image
                onClick={showNavHandler}
                src={profile}
                alt=""
                width={12}
                height={12}
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </div>
            {children}
          </div>
        </div>
      </>
    );
}