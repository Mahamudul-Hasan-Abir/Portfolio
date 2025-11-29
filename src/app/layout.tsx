// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import DesktopNav from "@/components/Navbar/DesktopNav";
// import MobileNav from "@/components/Navbar/PhoneNav";
// import Container from "@/components/Container/Container";
// import Header from "@/components/Header/Header";
// import { Toaster } from "sonner";
// import ResponsivePortfolio from "@/ResponsivePortfolio/ResponsivePortfolio";
// import { GoogleTagManager } from "@next/third-parties/google";
// import dynamic from "next/dynamic";

// const FacebookPixel = dynamic(
//   () => import("@/components/Analytics/FacebookPixel/FacebookPixelHeader")
// );
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "MH Abir | Portfolio",
//   description:
//     "Passionate MERN stack developer crafting full-stack web applications with MongoDB, Express, React, Next.js and Node.js.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`relative ${geistSans.variable} ${geistMono.variable} antialiased
//          lg:bg-[url('/background-one.jpg')]
//          lg:bg-cover
//          lg:bg-no-repeat
//          lg:bg-center
//          bg-none`}
//       >
//         {/* Show DesktopNav on large screens and above */}
//         <div className="hidden lg:block">
//           <DesktopNav />
//         </div>

//         {/* Show MobileNav on small and medium screens */}
//         <div className="block lg:hidden">
//           <MobileNav />
//         </div>
//         <Container>
//           <div className="grid grid-cols-12 lg:gap-10 mt-20">
//             <div className="lg:col-span-4 col-span-12 lg:sticky lg:top-20 h-fit">
//               <ResponsivePortfolio></ResponsivePortfolio>
//             </div>

//             <div className="col-span-12 lg:col-span-8 mb-20 ">
//               <div className="grid grid-cols-12">
//                 <div className="col-span-3 xl:col-span-4"></div>
//                 <div className="col-span-9 xl:col-span-8">
//                   <Header></Header>
//                 </div>
//               </div>
//               <div>
//                 <GoogleTagManager gtmId={"GTM-NSVDX2JQ"} />
//                 <FacebookPixel />
//                 {children}
//                 <Toaster></Toaster>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DesktopNav from "@/components/Navbar/DesktopNav";
import MobileNav from "@/components/Navbar/PhoneNav";
import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import { Toaster } from "sonner";
import ResponsivePortfolio from "@/ResponsivePortfolio/ResponsivePortfolio";

import FacebookPixelWrapper from "@/components/Analytics/FacebookPixel/FacebookPixelClientWrapper";
import ClarityClient from "@/components/Analytics/MicrosoftClarity/ClarityClient";
import GoogleAnalyticsClient from "@/components/Analytics/GoogleAnalytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MH Abir | Portfolio",
  description:
    "Passionate MERN stack developer crafting full-stack web applications with MongoDB, Express, React, Next.js and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased 
         lg:bg-[url('/background-one.jpg')] 
         lg:bg-cover 
         lg:bg-no-repeat 
         lg:bg-center 
         bg-none`}
      >
        <div className="hidden lg:block">
          <DesktopNav />
        </div>

        <div className="block lg:hidden">
          <MobileNav />
        </div>

        <Container>
          <div className="grid grid-cols-12 lg:gap-10 mt-20">
            <div className="lg:col-span-4 col-span-12 lg:sticky lg:top-20 h-fit">
              <ResponsivePortfolio />
            </div>

            <div className="col-span-12 lg:col-span-8 mb-20 ">
              <div className="grid grid-cols-12">
                <div className="col-span-3 xl:col-span-4" />
                <div className="col-span-9 xl:col-span-8">
                  <Header />
                </div>
              </div>

              <div>
                {/* <GoogleTagManager gtmId="GTM-NSVDX2JQ" /> */}
                <FacebookPixelWrapper />
                <ClarityClient />
                <GoogleAnalyticsClient />
                {children}
                <Toaster />
              </div>
            </div>
          </div>
        </Container>
      </body>
    </html>
  );
}
