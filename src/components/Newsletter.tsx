"use client"

import { useState } from "react"
import Image from "next/image"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      toast.error("Invalid email", {
        description: "Please enter a valid email address.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Interest Registration",
          email,
          phone: "Not provided",
          subject: "Register Interest - The Heights",
          message: "I would like to register my interest in The Heights Country Club and Wellness development by Emaar.",
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to register")
      }

      toast.success("Registration successful!", {
        description: "Thank you for your interest. We'll keep you updated on the latest developments.",
      })
      setEmail("")
    } catch (err) {
      toast.error("Registration failed", {
        description: err instanceof Error ? err.message : "Something went wrong. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/height-brochure-images/4.jpg"
              alt="The Heights Newsletter"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1F2937]/90"></div>
          </div>
          <div className="relative p-8 md:p-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Register Your Interest Today
            </h3>
            <p className="text-white/80 mb-6">
              Be among the first to receive details of the first-ever launch within The Heights community by Emaar.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Register Now"
                )}
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
