import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function JoinIn() {
  const { register, handleSubmit } = useForm();
  const [strength, setStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Join In Data:", data);
  };

  // 🔹 Password strength logic (0-3)
  const checkStrength = (password) => {
    let score = 0;
    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score++;
    setStrength(score);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className="w-full rounded-lg  px-4 py-2 text-sm sm:text-xl focus:outline-none focus:ring-2 bg-white focus:ring-purple-500"
      />

      {/* Password with icon */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"} // 👁️ toggle here
          placeholder="Password"
          {...register("password", { required: true })}
          onChange={(e) => checkStrength(e.target.value)}
          className="w-full rounded-lg  px-4 py-2 text-sm sm:text-xl focus:outline-none focus:ring-2 bg-white focus:ring-purple-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Password strength bar */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <span
            className={`h-1 w-8 rounded ${
              strength >= 1 ? "bg-red-500" : "bg-white"
            }`}
          ></span>
          <span
            className={`h-1 w-8 rounded ${
              strength >= 2 ? "bg-yellow-500" : "bg-white"
            }`}
          ></span>
          <span
            className={`h-1 w-8 rounded ${
              strength >= 3 ? "bg-green-500" : "bg-white"
            }`}
          ></span>
        </div>
        <span className="text-xs font-medium text-gray-500">
          Password strength
        </span>
      </div>

      {/* Terms */}
      <p className="text-xs text-gray-500">
        By continuing, you agree to our{" "}
        <a href="#" className="text-[#8165a2] underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-[#8165a2] underline">
          Privacy Policy
        </a>
        .
      </p>

      {/* Continue button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-[#8165a2] py-2 text-white font-semibold hover:bg-purple-700"
      >
        Continue
      </button>

      {/* Divider */}
      <div className="flex items-center gap-2 my-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-sm text-gray-500">Or connect with</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Google button */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 rounded-lg border border-purple-400 py-2 text-sm font-medium"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="h-5 w-5"
        />
        Continue with Google
      </button>

      {/* Facebook button */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 rounded-lg border border-purple-400 py-2 text-sm font-medium"
      >
        <img
          src="https://www.svgrepo.com/show/355037/facebook.svg"
          alt="Facebook"
          className="h-5 w-5"
        />
        Continue with Facebook
      </button>
    </form>
  );
}
