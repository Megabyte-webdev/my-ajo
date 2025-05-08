import successImg from "@/assets/successImg.svg";
import { CopyIcon } from "lucide-react";

export default function SuccessfullyCreated() {
  return (
    <div className="flex min-h-screen rounded-0 md:rounded-lg md:min-h-full md:shadow-lg md:my-[2rem] bg-white rounded-0 flex-col items-center text-start justify-center pb-4 w-full">
      {/* <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-sm"> */}
      <div className="my-5 h-[50%]">
        <img src={successImg} alt="" />
      </div>
      <div className="md:px-5 space-y-5 px-3">
        <div className="flex flex-col items-start space-y-1 max-w-[500px]">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">
            You&apos;ve successfully created your Àjo group 🎉
          </h1>
          <p className=" text-gray-800">
            Nice work! Your Àjo group is set up and ready to go. Share your
            referral code to invite trusted members.
          </p>
        </div>

        <div className="py-8 text-gray-800">
          <p className="mb-2">Your Group Code:</p>
          <div className="flex items-center justify-between bg-gray-200 rounded-lg p-3">
            <p className="cursor-pointer font-bold ">AJO-8Y72XF</p>
            <div className="cursor-pointer hover:bg-gray-400 p-2 rounded-lg transition-all">
              <CopyIcon />
            </div>
          </div>
        </div>

        <div className="flex items-center justofy-center space-x-10">
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-[#5D3A00] p-3 text-center font-medium text-white hover:bg-[#7a4f26] focus:outline-none text-nowrap"
          >
            Share Code
          </button>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-[#5D3A00] p-3 text-center font-medium text-white hover:bg-[#7a4f26] focus:outline-none text-nowrap"
          >
            View Dashboard
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
