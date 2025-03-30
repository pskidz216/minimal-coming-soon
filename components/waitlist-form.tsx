"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function WaitlistForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // This is the URL for a Google Form submission
      // You'll need to replace this with your actual Google Form URL
      const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"

      // These field names need to match your Google Form field names
      // You can find these by inspecting the form HTML
      const formData = new FormData()
      formData.append("entry.123456789", name) // Replace with your actual name field entry ID
      formData.append("entry.987654321", email) // Replace with your actual email field entry ID

      // Using a no-cors request to submit to Google Forms
      // Note: This won't return a success/error response due to CORS restrictions
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })

      // Since we can't get a real response due to CORS, we assume success
      setIsSubmitted(true)
      setName("")
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-3 sm:py-4 text-center">
        <CheckCircle2 className="h-8 w-8 sm:h-12 sm:w-12 text-green-500 mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-light text-white mb-1 sm:mb-2">Thank you for joining!</h3>
        <p className="text-gray-400 text-sm">We'll keep you updated on our launch.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-[#252525] border-gray-700 text-white placeholder:text-gray-500 rounded-xl text-sm sm:text-base h-9 sm:h-10"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[#252525] border-gray-700 text-white placeholder:text-gray-500 rounded-xl text-sm sm:text-base h-9 sm:h-10"
        />
      </div>
      {error && <p className="text-red-400 text-xs sm:text-sm">{error}</p>}
      <Button
        type="submit"
        className="w-full bg-white hover:bg-gray-200 text-black rounded-xl text-sm sm:text-base h-9 sm:h-10"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  )
}

