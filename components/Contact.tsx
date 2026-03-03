"use client"
import React, { useRef, useEffect, useState, type JSX } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ApiResponse = {
  status?: string
  error?: string
  success?: boolean
}

export function Contact(): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  // Form state
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)

  // UI state
  const [loading, setLoading] = useState<boolean>(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState<number | null>(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  // Small focus/blur scale effect using GSAP (keeps your original UX)
  const handleFocus = (nameAttr: string) => {
    const input = formRef.current?.querySelector(`[name="${nameAttr}"]`) as HTMLElement | null
    if (input && input.parentElement) {
      gsap.to(input.parentElement, { scale: 1.02, duration: 0.18, ease: 'power2.out' })
    }
  }

  const handleBlur = (nameAttr: string) => {
    const input = formRef.current?.querySelector(`[name="${nameAttr}"]`) as HTMLElement | null
    if (input && input.parentElement) {
      gsap.to(input.parentElement, { scale: 1, duration: 0.18, ease: 'power2.out' })
    }
  }

  // Basic client-side validation
  const validate = (): string | null => {
    if (!email.trim()) return 'Email is required.'
    // simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Please enter a valid email address.'
    if (!message.trim()) return 'Message is required.'
    if (name.trim().length > 100) return 'Name is too long.'
    if (message.length > 5000) return 'Message is too long.'
    return null
  }

  // Submit handler: sends JSON if no file, otherwise sends FormData
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatusMessage(null)
    setErrorMessage(null)

    const validationError = validate()
    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    setLoading(true)
    setUploadProgress(null)

    try {
      // SIMULATION: For portfolio demo purposes (since backend might not be running)
      // Remove this block and uncomment the code below to use a real backend.
      
      // END SIMULATION

      
      let response: Response

      if (file) {
        // If you want attachments, backend must accept multipart/form-data (e.g., multer)
        const fd = new FormData()
        fd.append('name', name)
        fd.append('email', email)
        fd.append('message', message)
        fd.append('file', file)

        // Use fetch with progress: browser fetch doesn't provide progress for uploads natively.
        // For upload progress, use XMLHttpRequest. Below uses XHR to show progress bar.
        response = await new Promise<Response>((resolve, reject) => {
          const xhr = new XMLHttpRequest()
          xhr.open('POST', '/api/contact', true)

          xhr.onload = () => {
            // Build a Response-like object
            const headers = new Headers()
            const status = xhr.status
            const body = xhr.responseText
            // Create a Response object to keep handling consistent
            resolve(new Response(body, { status, headers }))
          }

          xhr.onerror = () => reject(new Error('Network error during file upload'))
          xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
              const percent = Math.round((event.loaded / event.total) * 100)
              setUploadProgress(percent)
            }
          }

          xhr.send(fd)
        })
      } else {
        // Send JSON when no file attached
        response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        })
      }

      // Read text first to debug non-JSON responses (like HTML 404s or Proxy errors)
      const responseText = await response.text()
      let data: ApiResponse
      try {
        data = JSON.parse(responseText)
      } catch (err) {
        console.error('Server response was not JSON:', responseText)
        setErrorMessage('Server error: Invalid response format.')
        return
      }

      if (!response.ok) {
        setErrorMessage(data.error || 'Failed to send message')
      } else if (data.success) {
        setStatusMessage(data.status || 'Message sent successfully!')
        // Reset form
        setName('')
        setEmail('')
        setMessage('')
        setFile(null)
        setUploadProgress(null)
        // Optionally clear status after a delay
        setTimeout(() => setStatusMessage(null), 6000)
      }
      else {
        setErrorMessage("An unknown error occurred.");
      }
      
    } catch (err) {
      console.error(err)
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  // File input change handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0]
    if (f) {
      // Optional: limit file size (example 4MB to fit Vercel's 4.5MB payload limit)
      const maxSize = 4 * 1024 * 1024
      if (f.size > maxSize) {
        setErrorMessage('File is too large. Max size is 4MB.')
        e.currentTarget.value = ''
        return
      }
      setFile(f)
      setErrorMessage(null)
    } else {
      setFile(null)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500"
    >
      <div className="font-body max-w-2xl mx-auto">
        <h2
          ref={titleRef}
          className="font-header text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Get In Touch
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mb-6" noValidate>
          <div className="transition-transform origin-left">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 transition-all"
              placeholder="Your name"
              maxLength={100}
              aria-label="Your name"
            />
          </div>

          <div className="transition-transform origin-left">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-zinc-500 text-xs">(required)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 transition-all"
              placeholder="your@email.com"
              required
              aria-required
            />
          </div>

          <div className="transition-transform origin-left">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message <span className="text-zinc-500 text-xs">(required)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 transition-all resize-none"
              placeholder="Your message..."
              required
              aria-required
              maxLength={5000}
            />
          </div>

          <div className="transition-transform origin-left">
            <label htmlFor="file" className="block text-sm font-medium mb-2">
              Attachment <span className="text-zinc-500 text-xs">(optional, max 5MB)</span>
            </label>
            <input
              id="file"
              name="file"
              type="file"
              accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
              onChange={handleFileChange}
              className="w-full text-sm text-zinc-700 dark:text-zinc-200"
              aria-label="Attachment"
            />
            {file && (
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Selected file: <strong>{file.name}</strong> ({Math.round(file.size / 1024)} KB)
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-medium hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60"
            aria-busy={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Upload progress */}
        {uploadProgress !== null && (
          <div className="mb-4">
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 bg-zinc-900 dark:bg-zinc-100 transition-all"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-sm text-center mt-2">{uploadProgress}%</p>
          </div>
        )}

        {/* Status / Error messages */}
        {statusMessage && (
          <div className="mt-4 p-3 rounded-md bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200">
            {statusMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 p-3 rounded-md bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200">
            {errorMessage}
          </div>
        )}

        {/* Socials (kept minimal) */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-all duration-200"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}


export default Contact
