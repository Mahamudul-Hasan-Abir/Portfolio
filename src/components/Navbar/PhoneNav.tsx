"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, FileText, Folder, Mail } from "lucide-react";
import Container from "../Container/Container";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/abir.png";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Container>
      <nav className="flex items-center justify-between py-5">
        {/* Logo */}

        <Link href={"/"}>
          <div className="w-20 h-20 aspect-square relative">
            <Image
              className="object-contain"
              fill
              src={logo}
              alt="logo"
            ></Image>
          </div>
        </Link>

        {/* Sheet Trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
              <Menu className="h-7 w-7 text-white" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[250px]">
            <ul className="mt-10 space-y-3">
              <li>
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-4 py-2 rounded-md focus:outline-none focus:bg-gradient-to-r from-[#FA5252] to-[#DD2476] focus:text-white"
                >
                  <Home className="w-5 h-5" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="resume"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-4 py-2 rounded-md focus:outline-none focus:bg-gradient-to-r from-[#FA5252] to-[#DD2476] focus:text-white"
                >
                  <FileText className="w-5 h-5" />
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="projects"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-4 py-2 rounded-md focus:outline-none focus:bg-gradient-to-r from-[#FA5252] to-[#DD2476] focus:text-white"
                >
                  <Folder className="w-5 h-5" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-4 py-2 rounded-md focus:outline-none focus:bg-gradient-to-r from-[#FA5252] to-[#DD2476] focus:text-white"
                >
                  <Mail className="w-5 h-5" />
                  Contact
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </Container>
  );
};

export default MobileNav;
