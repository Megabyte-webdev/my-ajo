import { useState } from "react";
// import { EyeIcon, EyeOffIcon } from "lucide-react";
// import headerImg from "@/assets/myajoImg.jpg"

export default function CreateGroup() {
  const [groupName, setGroupName] = useState("");
  const [contributionAmount, setContributionAmount] = useState("");
  const [numberOfMembers, setNumberOfMembers] = useState("");
  const [frequency, setFrequency] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Submitted group info", { groupName, contributionAmount });
  };

  return (
    <div className="flex min-h-screen w-screen md:w-[50vw] rounded-0 md:rounded-lg md:min-h-full md:shadow-lg md:my-[2rem] bg-white rounded-0 flex-col items-center text-start justify-center p-4">
      {/* <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-sm"> */}
      <div className="md:px-5 space-y-10 px-3 w-full">
        <div className="flex flex-col items-start space-y-1">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create Ajo group
          </h1>
          <p className=" text-gray-600">Let&apos;s get the group details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="groupName"
              className="block text-sm font-medium text-gray-700"
            >
              Group Name
            </label>
            <input
              id="groupName"
              type="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter your group name"
              required
              className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="contributionAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Contribution Amount {"($)"}
            </label>
            <input
              id="contributionAmount"
              type="contributionAmount"
              value={contributionAmount}
              onChange={(e) => setContributionAmount(e.target.value)}
              placeholder="Enter the amount to contribute"
              required
              className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="numberOfMembers"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Members
            </label>
            <div className="relative">
              <input
                id="numberOfMembers"
                type="number"
                value={numberOfMembers}
                onChange={(e) => setNumberOfMembers(e.target.value)}
                placeholder="Enter number of members"
                required
                className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Frequency {"(Weekly/Monthly)"}
            </label>
            <div className="relative">
              <input
                id="frequency"
                type="text"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                placeholder="Select how frequent members contribute"
                required
                className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="my-5 w-full rounded-md bg-[#5D3A00] p-3 text-center font-medium text-white hover:bg-[#7a4f26] focus:outline-none"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
}
