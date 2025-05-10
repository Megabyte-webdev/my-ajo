import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import headerImg from "@/assets/logo.png";
import { Link } from "react-router-dom";
import SEOHelmet from "@/engine/SEOHelmet";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup with:", { name, email, password });
  };

  return (
    <div className="flex flex-col md:flex-row max-w-[1200px] min-h-screen bg-white md:my-3 mx-auto md:rounded-lg md:shadow-lg overflow-hidden">
      <SEOHelmet title="Register" />
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto bg-[#D9B28C]/80">
        <img
          src={headerImg}
          alt="Signup Visual"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="text-left w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-10 space-y-6">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 sora-header">
            Create your MyAjo account
          </h1>
          <p className="text-gray-800 mt-1">
            Register, let&apos;s start smart saving!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-900">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-900">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-900">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="confirmedPassword" className="block text-sm font-bold text-gray-900">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmedPassword"
                type={showPassword ? "text" : "password"}
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="w-full rounded-lg border-0 bg-[#f0d9b5] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#5D3A00] p-3 text-white font-medium hover:bg-[#7a4f26] transition-colors"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#8B5A2B] hover:underline font-medium">Log in</Link>
        </p>
      </div>
    </div>
  );
}
