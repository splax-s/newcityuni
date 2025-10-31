"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link'
import { register } from '@/services/api';
import { useAppDispatch } from '../../../../store/hooks';
import { setSelectedProgram } from '@/store/authSlice';
import { programs } from '@/data/programs';

export default function AdmissionsSignupClient() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const [form, setForm] = useState({ fullname: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    setFormError(null);
    setSubmitting(true);
    try {
      await register({
        full_name: form.fullname,
        email: form.email,
        phone: form.phone,
        password: form.password,
        confirm_password: form.confirmPassword,
      });
      router.push('/admissions/dashboard');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('Register error:', msg);
      setFormError(msg || 'Registration failed');
    } finally {
      setSubmitting(false);
    }
  };

  const searchParamsString = searchParams ? searchParams.toString() : '';

  useEffect(() => {
    try {
      const params = new URLSearchParams(searchParamsString || '');
      const slug = params.get('program');
      if (slug) {
        const p = programs.find((pr) => pr.slug === slug);
        const title = p ? p.title : slug;
        dispatch(setSelectedProgram({ slug, title }));
        try {
          localStorage.setItem('selectedProgram', JSON.stringify({ slug, title }));
        } catch {
          // ignore storage failures
        }
      }
    } catch {
      // ignore
    }
  }, [searchParamsString, dispatch]);

  const imageSrc = "/signup.svg";

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[40%] h-56 md:h-auto relative">
        <Image
          src={imageSrc}
          alt={"Admissions"}
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full md:flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Start Your Application
          </h1>
          <p className="text-gray-600 mb-6">
            Create an account to apply for admission.
          </p>

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

            {formError && <div className="text-red-600 mt-3">{formError}</div>}

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

          <p className="text-sm text-gray-700 mt-4">
            Already have an account?{' '}
            <Link href="/admissions/login" className="text-[#61213C] underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
