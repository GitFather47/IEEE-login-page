"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <Image
            src="/ieeeaiubsblogo.png" // This is in the public folder
            alt="IEEE AIUB SB Logo"
            width={150}
            height={150}
          />
        </div>
        <p className="text-sm text-center mb-9 font-medium">Sign in with your IEEE email account</p>

        <form>
          <div className="mb-4">
    
            {/* <Label htmlFor="email">Email</Label> */}
            <Input
              type="text"
              id="email"
              name="email"
              className="mt-1"
              placeholder="Enter your IEEE email"
            />
          </div>
          <div className="mb-6">
            {/*<Label htmlFor="password">Password</Label>*/}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="mt-1 pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <Checkbox id="remember-me" className="mr-2" />
            <Label htmlFor="remember-me">Remember me</Label>
          </div>
          <Button type="submit" className="w-full bg-black text-white">
            Log In
          </Button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          <a href="#" className="text-[#046799] hover:text-[#035080]">
            Need help accessing your account?
          </a>
        </p>
      </div>
    </div>
  );
}