import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { ImCalendar } from "react-icons/im";
import Image from "next/image";
import { RiDownload2Line } from "react-icons/ri";

const Portfolio = () => {
  return (
    <div>
      <div className="border rounded-2xl shadow-md my-40 bg-white relative">
        <div className="size-60 overflow-hidden absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]">
          <div className="relative">
            {/* <Image
              src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736078552/user_profiles/jxqioeeeecumycy7tuwe.jpg"
              alt="Mahamudul Hasan Abir photo"
              width={500}
              height={500}
            ></Image> */}
            {/* <Image
              src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1747265040/your_folder_name/1747265036861-cv%204.jpg.jpg"
              alt="Mahamudul Hasan Abir photo"
              width={500}
              height={500}
            ></Image> */}
            <Image
              src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1754846743/Abir_hscgxs.png"
              alt="Mahamudul Hasan Abir photo"
              width={600}
              height={600}
            ></Image>
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-center pt-30">
          Mahamudul Hasan Abir
        </h1>
        <p className="text-[#7B7B7B] py-5 text-center">Web Developer</p>
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://www.facebook.com/mh.abir.94695"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#f3f6f6] flex justify-center items-center rounded-md transition-transform duration-300 hover:scale-110"
          >
            <FaFacebookF className="size-4 text-[#1973ea]" />
          </a>
          <div className="p-3 bg-[#f3f6f6] flex justify-center items-center rounded-md transition-transform duration-300 hover:scale-110">
            <FaTwitter className="size-4 text-[#1d9cea]"></FaTwitter>
          </div>
          <a
            href="https://github.com/Mahamudul-Hasan-Abir"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#f3f6f6] flex justify-center items-center rounded-md transition-transform duration-300 hover:scale-110"
          >
            <TbBrandGithubFilled className="size-4"></TbBrandGithubFilled>
          </a>
          <a
            href="https://www.linkedin.com/in/mahamudul-hasan-abir-4936901b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#f3f6f6] flex justify-center items-center rounded-md transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedinIn className="size-4 text-[#0172b1]"></FaLinkedinIn>
          </a>
        </div>
        <div className="bg-[#f3f6f6] p-5 m-5 rounded-2xl">
          <div className="flex gap-3">
            <div className="p-4 shadow-md bg-white flex justify-center items-center  rounded-md   ">
              <FaMobileScreen className="size-4 text-[#e93b81]"></FaMobileScreen>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs text-[#44566C] ">phone</p>
              <p className="dark:text-white break-all">
                <a
                  className="hover:text-[#FA5252] duration-300 transition"
                  href="tel:+1234567890"
                >
                  +8801941992390
                </a>
              </p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex gap-3">
            <div className="p-4 shadow-md bg-white flex justify-center items-center  rounded-md   ">
              <FaLocationDot className="size-4 text-[#6ab5b9]"></FaLocationDot>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs text-[#44566C] ">Location</p>
              <p className="dark:text-white break-all">
                <p className="hover:text-[#FA5252] duration-300 transition">
                  South Bonosree,Dhaka
                </p>
              </p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex gap-3">
            <div className="p-4 shadow-md bg-white flex justify-center items-center  rounded-md   ">
              <IoIosMailOpen className="size-4 text-[#fd7590]"></IoIosMailOpen>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs text-[#44566C] ">Email</p>
              <p className="dark:text-white break-all">
                <p className="hover:text-[#FA5252] duration-300 transition">
                  mhabir27@gamil.com
                </p>
              </p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex gap-3">
            <div className="p-4 shadow-md bg-white flex justify-center items-center  rounded-md   ">
              <ImCalendar className="size-4 text-[#c17ceb]"></ImCalendar>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs text-[#44566C] ">Birthday</p>
              <p className="dark:text-white break-all">
                <p className="hover:text-[#FA5252] duration-300 transition">
                  April 27, 2000
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="/Mahamudul-Hasan-Abir-Resume.pdf"
            download
            className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] font-semibold px-8 py-3 flex justify-center items-center text-white gap-2 rounded-4xl text-lg mb-5"
          >
            <RiDownload2Line className="size-6" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
