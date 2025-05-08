import { useState } from "react";
// import { EyeIcon, EyeOffIcon } from "lucide-react";
// import headerImg from "@/assets/myajoImg.jpg"

export default function JoinAjoGroup() {
  const [referralCode, setReferralCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Submitted group info", { referralCode});
  };

  return (
    <div className="flex min-h-screen w-screen md:w-[50vw] rounded-0 md:rounded-lg md:min-h-full md:shadow-lg md:my-[2rem] bg-white rounded-0 flex-col items-center text-start justify-center p-4">
      {/* <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-sm"> */}
      <div className="md:px-5 space-y-10 px-3 w-full">
        <div className="flex flex-col items-start space-y-3">
          <h1 className="text-2xl font-semibold text-gray-900">
          Join an Àjo Group
          </h1>
          <p className=" text-gray-800">Got a referral code from a trusted Àjo Agent? <br/> 
          <span className=" text-gray-600"> Let&apos;s get you in!</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="referralCode"
              className="block text-sm font-semibold text-gray-900"
            >
             Referral Code
            </label>
            <input
              id="referralCode"
              type="referralCode"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              placeholder="Input/Paste referral Code"
              required
              className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
            />
          </div>


          <div className="space-y-2">
            <label
              htmlFor="accountNumber"
              className="block text-sm font-semibold text-gray-900"
            >
              Bank Account Number
            </label>
            <input
              id="accountNumber"
              type="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter the amount to contribute"
              required
              className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
            />
          </div>



          <div className="space-y-2">
            <label
              htmlFor="bankName"
              className="block text-sm font-medium text-gray-900"
            >
              Bank Name
            </label>
            <div className="relative">
              <input
                id="bankName"
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Select Bank Name"
                required
                className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
              />
            </div>
          </div>



          <div className="py-2 bg-[#827A73] mt-10">
            <p className="text-center px-5 text-black">Only join groups from people you trust. MyÀjo protects your funds with smart contracts, but community trust is key."</p>
          </div>

          <button
            type="submit"
            className="mb-5 w-full rounded-md bg-[#5D3A00] p-3 text-center font-medium text-white hover:bg-[#7a4f26] focus:outline-none"
          >
            Join Group
          </button>
        </form>
      </div>
    </div>
  );
}
