// import { MdOutlineAttachEmail } from "react-icons/md";

// const Contact = () => {
//   return (
//     <div className="rounded-2xl md:shadow-md md:border-1 md:p-12 mt-20 ">
//       <div className="flex md:gap-8 gap-3 items-center">
//         <div className="text-4xl font-extrabold">
//           <h1>Contact</h1>
//         </div>
//         <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-[2px] md:w-40 w-20"></div>
//       </div>

//       <div className="grid grid-cols-2 gap-5 mt-20">
//         <div className="bg-amber-100 col-span-2 md:col-span-1 p-5 rounded-2xl flex gap-5">
//           <div>
//             <MdOutlineAttachEmail className="size-10"></MdOutlineAttachEmail>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">Phone:</h3>
//             <p className="font-semibold">+8801941992390</p>
//           </div>
//         </div>
//         <div className="bg-cyan-100 col-span-2 md:col-span-1 p-5 rounded-2xl flex gap-5">
//           <div>
//             <MdOutlineAttachEmail className="size-10"></MdOutlineAttachEmail>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">Phone:</h3>
//             <p className="font-semibold">+8801941992390</p>
//           </div>
//         </div>
//       </div>
//       <div className="bg-gray-100 rounded-2xl">
//         <h3>I&apos;m always open to discussing product</h3>
//         <form action=""></form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
"use client";

import { MdOutlineAttachEmail } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message Sent successfully");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="rounded-2xl md:shadow-md md:border-1 md:p-12 mt-20 bg-white">
      <div className="flex md:gap-8 gap-3 items-center">
        <div className="text-4xl font-extrabold">
          <h1>Contact</h1>
        </div>
        <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-[2px] md:w-40 w-20"></div>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-20">
        <div className="bg-amber-100 col-span-2 md:col-span-1 p-5 rounded-2xl flex gap-5">
          <MdOutlineAttachEmail className="size-10" />
          <div>
            <h3 className="text-xl font-bold">Phone:</h3>
            <p className="font-semibold">+8801941992390</p>
          </div>
        </div>
        <div className="bg-cyan-100 col-span-2 md:col-span-1 p-5 rounded-2xl flex gap-5">
          <MdOutlineAttachEmail className="size-10" />
          <div>
            <h3 className="text-xl font-bold">Email:</h3>
            <p className="font-semibold">mhabir27@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-2xl p-8 mt-12">
        <h3 className="text-2xl font-semibold mb-6">
          I&apos;m always open to discussing product ideas or partnerships.
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" variant={"outline"}>
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
