"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'

export default function AdmissionsSignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({ fullname: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission (replace with real API call later)
    await new Promise((res) => setTimeout(res, 800));
    setSubmitting(false);
    // After creating account, go to admissions dashboard
    router.push('/admissions/dashboard');
  };

  // Image for the signup page
  const imageSrc = "/signup.svg";

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left image column */}
      <div className="w-full md:w-[40%] h-56 md:h-auto relative">
        <Image
          src={imageSrc}
          alt={"Admissions"}
          fill
          className="object-cover"
        />
      </div>

      {/* Right form column */}
      <div className="w-full md:flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Start Your Application
          </h1>
          <p className="text-gray-600 mb-6">
            Create an account to apply for admission.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                required
                className="w-full text-black border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full text-black border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full text-black border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full text-black border px-3 py-2 rounded"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#61213C] text-white px-4 py-2 rounded hover:bg-[#724456]"
            >
              {submitting ? "Creating Account…" : "Create Account"}
            </button>
          </form>

          {/* Terms and Policy */}
          <p className="text-xs text-gray-600 mt-4">
            By creating an account, you agree to our{" "}
            <a href="/terms" className="text-[#61213C] underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-[#61213C] underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Login link */}
          <p className="text-sm text-gray-700 mt-4">
            Already have an account?{' '}
            <Link href="/admissions/login" className="text-[#61213C] underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
