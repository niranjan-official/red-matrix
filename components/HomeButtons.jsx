import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const HomeButtons = () => {
  return (
    <div className="flex gap-6">
      <Dialog>
        <DialogTrigger asChild>
          <button className="btn mt-4">I'm a Brand</button>
        </DialogTrigger>
        <DialogContent className="h-max backdrop-blur-lg shadow-md  text-white mt-4">
          <h1 className="text-2xl text-center">
            Do you want to discuss your Influencer Marketing needs?
          </h1>
          <form className="h-full flex flex-col gap-6 items-center sm:px-10">
            <input type="text" placeholder="Full Name" required />
            <input type="number" placeholder="Phone Number" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Budget Overview" required />
            <input type="text" placeholder="Company Name" required />
            <input
              type="text"
              placeholder="Message"
              className="h-16"
              required
            />
            <button className="py-2 px-5 bg-violet-600 rounded-3xl hover:bg-violet-800">
              Book now
            </button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <button className="btn mt-4">I'm Influencer</button>
        </DialogTrigger>
        <DialogContent className="max-h-[500px] backdrop-blur-lg shadow-md  text-white mt-4 overflow-y-scroll">
          <h1 className="text-2xl text-center">
            Let's Influence Together! Start your journey today.
          </h1>
          <form className="h-full flex flex-col gap-6 items-center sm:px-10">
            <input type="text" placeholder="Full Name" required />
            <input type="number" placeholder="Phone Number" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Youtube channel link"/>
            <input type="text" placeholder="No: of subscribers" />
            <input type="text" placeholder="Instagram Profile link" />
            <input type="text" placeholder="No: of Followers" />
            <input
              type="text"
              placeholder="About you"
              className="h-16"
              required
            />
            <button className="py-2 px-5 bg-violet-600 rounded-3xl hover:bg-violet-800">
              Book now
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomeButtons;
