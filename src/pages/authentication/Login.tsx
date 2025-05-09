import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import headerImg from "@/assets/logo.png";
import { Link } from "react-router-dom";
import SEOHelmet from "@/engine/SEOHelmet";

// Reusable Input Component
const InputField: React.FC<{
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
}> = ({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  showPassword,
  togglePasswordVisibility,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-bold text-gray-900">
      {label}
    </label>
    <div className="relative">
      <input
        id={id}
        type={showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-lg border-0 bg-[#D9B28C] p-3 text-gray-900 placeholder-gray-500 focus:border-[#8B5A2B] focus:outline-none"
      />
      {togglePasswordVisibility && (
        <div
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        >
          {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
        </div>
      )}
    </div>
  </div>
);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="flex flex-col md:flex-row max-w-[1200px] min-h-screen bg-white md:my-3 mx-auto md:rounded-lg md:shadow-lg overflow-hidden">
      <SEOHelmet title="Login" />
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto bg-[#D9B28C]/80">
        <img
          src={headerImg}
          alt="Login Visual"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-10 space-y-6 text-left">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 sora-header">
            Welcome back to MyÀjo
          </h1>
          <p className="text-gray-800 mt-1">
            Log in to manage your group and contributions
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="Email address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />

          <InputField
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            showPassword={showPassword}
            togglePasswordVisibility={() => setShowPassword(!showPassword)}
          />

          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-[#5D3A00] p-3 text-center font-medium text-white hover:bg-[#7a4f26] transition-colors"
          >
            Log in
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4 font-medium">
            Forgot password? <span className="text-[#8C5C2C]"> <Link to="password-reset" className="text-[#8C5C2C] hover:underline">Reset</Link></span>
        </p>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-[#8C5C2C] hover:underline font-medium">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
