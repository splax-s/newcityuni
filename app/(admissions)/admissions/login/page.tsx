"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { login } from '../../../../services/api/authService'
import { useAppDispatch } from '../../../../store/hooks'
import { setSelectedProgram } from '@/store/authSlice'
import { programs } from '@/data/programs'

export default function AdmissionsLoginPage() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const searchParamsString = searchParams ? searchParams.toString() : '';

  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const checked = (e.target as HTMLInputElement).checked
    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: checked }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const payload = { identifier: form.email, password: form.password }
      const res = await login(payload)
      // If API returns token or user info, persist as needed. We'll try common fields.
      // Safe, minimal approach: store whole response in localStorage under 'auth'
      try {
        localStorage.setItem('auth', JSON.stringify(res))
      } catch {
        // ignore storage errors
      }
      // If there's a persisted selectedProgram in localStorage already, ensure Redux has it
      try {
        const raw = localStorage.getItem('selectedProgram')
        if (raw) {
          const parsed = JSON.parse(raw) as { slug: string; title: string }
          if (parsed?.slug) {
            dispatch(setSelectedProgram(parsed))
          }
        }
      } catch {
        // ignore
      }
      router.push('/admissions/dashboard')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      setError(msg || 'Login failed')
    } finally {
      setSubmitting(false)
    }
  }

  // On mount, capture `program` query param (or fallback to persisted selection) and store in Redux
  useEffect(() => {
    try {
      const params = new URLSearchParams(searchParamsString || '')
      const slug = params.get('program')
      if (slug) {
        const p = programs.find((pr) => pr.slug === slug)
        const title = p ? p.title : slug
        dispatch(setSelectedProgram({ slug, title }))
        try {
          localStorage.setItem('selectedProgram', JSON.stringify({ slug, title }))
        } catch {}
        return
      }

      // fallback: try to read previously stored selection
      const raw = localStorage.getItem('selectedProgram')
      if (raw) {
        const parsed = JSON.parse(raw) as { slug: string; title: string }
        if (parsed?.slug) dispatch(setSelectedProgram(parsed))
      }
    } catch {
      // ignore
    }
  }, [searchParamsString, dispatch])

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[40%] h-56 md:h-auto relative">
        <Image src="/signup.svg" alt="Admissions" fill className="object-cover" />
      </div>

      <div className="w-full md:flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back 👋</h1>
          <p className="text-gray-600 mb-6">Log in to continue your application.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full text-black border px-3 py-2 rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} required className="w-full text-black border px-3 py-2 rounded" />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="remember" checked={!!form.remember} onChange={handleChange} className="w-4 h-4" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-[#61213C] underline">Forgot password?</a>
            </div>

            <button type="submit" disabled={submitting} className="w-full bg-[#61213C] text-white px-4 py-2 rounded hover:bg-[#724456]">
              {submitting ? 'Logging in…' : 'Log in'}
            </button>
            {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
          </form>

          <p className="text-sm text-gray-700 mt-4">
            Don’t have an account?{' '}
            <Link href="/admissions/signup" className="text-[#61213C] underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
