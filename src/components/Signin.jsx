import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Sign In Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

      {/* Remember + Forgot */}
      <div className="flex justify-between text-sm items-center">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register("remember")}
            className="h-4 w-4 border-purple-500 text-purple-600"
          />
          <span>Remember me</span>
        </label>
        <button type="button" className="flex items-center text-[#8165a2]">
          <Lock className="h-4 w-4 mr-1" /> Forgot password?
        </button>
      </div>

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

      {/* Social logins */}
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
