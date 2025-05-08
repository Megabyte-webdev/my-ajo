import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ChooseRolePage() {
  const [selectedRole, setSelectedRole] = useState<"agent" | "member">("agent");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(false);
  };

  return (
    // <div className="flex min-h-screen rounded-0 md:rounded-lg md:min-h-full md:shadow-lg md:bg-white rounded-0 flex-col items-center text-start justify-center bg-[#f8f5f0] pb-4 w-full">
    <div className="flex min-h-screen rounded-0 md:rounded-lg md:min-h-full md:shadow-lg md:my-[2rem] bg-white rounded-0 flex-col items-center text-start justify-center pb-4 w-full">
      <div className="w-full md:max-w-md p-6 space-y-16">
        <div className="space-y-1 mb-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Choose your role
          </h1>
          <p className="text-gray-600">How will you use MyAjo?</p>
        </div>

        <RadioGroup
          value={selectedRole}
          onValueChange={(value: any) =>
            setSelectedRole(value as "agent" | "member")
          }
          className="space-y-4"
        >
          <div className="flex items-start space-x-3">
            <div className="flex items-center">
              <RadioGroupItem
                value="agent"
                id="agent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agent" className="font-medium text-gray-800">
                As an Ajo Agent
              </Label>
              {selectedRole === "agent" && (
                <p className="text-sm text-gray-600">
                  You&apos;ll be able to create a savings group, invite members,
                  set contribution details, and manage how the money rotates.
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex h-6 items-center">
              <RadioGroupItem
                value="member"
                id="member"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="member" className="font-medium text-gray-800">
                As an Ajo Member
              </Label>
              {selectedRole === "member" && (
                <p className="text-sm text-gray-600">
                  Join a group using a referral code from a trusted admin.
                  Contribute regularly, and when it&apos;s your turn, get your
                  payout automatically.
                </p>
              )}
            </div>
          </div>
        </RadioGroup>

        <Button
          className="w-full bg-[#8B5A2B] py-6 text-white hover:bg-[#7a4f26]"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </span>
          ) : (
            `Proceed as ${selectedRole === "agent" ? "an Agent" : "a Member"}`
          )}
        </Button>
      </div>
    </div>
    // </div>
  );
}
