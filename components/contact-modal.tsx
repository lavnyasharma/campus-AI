"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Mail, Phone, User, ArrowRight } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* Enhanced Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

      {/* Enhanced Modal */}
      <div className="relative w-full max-w-lg mx-auto bg-white/80 backdrop-blur-3xl rounded-3xl border-2 border-white/60 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/40">
          <h2 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-orange-700 to-blue-700 bg-clip-text text-transparent">
            Get Started Today
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="w-8 h-8 rounded-xl hover:bg-white/30 backdrop-blur-sm text-slate-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-slate-700 mb-6 text-sm font-medium">
            Ready to start your AI journey? Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-600" />
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10 bg-white/60 backdrop-blur-xl border-2 border-white/60 rounded-xl shadow-lg text-slate-800 placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-600" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-white/60 backdrop-blur-xl border-2 border-white/60 rounded-xl shadow-lg text-slate-800 placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-600" />
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="pl-10 bg-white/60 backdrop-blur-xl border-2 border-white/60 rounded-xl shadow-lg text-slate-800 placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">Message (Optional)</label>
              <Textarea
                placeholder="Tell us about your interest in the AI program..."
                rows={3}
                className="bg-white/60 backdrop-blur-xl border-2 border-white/60 rounded-xl shadow-lg text-slate-800 placeholder:text-slate-500"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 hover:from-orange-700 hover:via-red-600 hover:to-blue-700 text-white py-3 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 backdrop-blur-sm border-2 border-white/30 rounded-xl">
              Send Message
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
