"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import {
  Rocket,
  Brain,
  Code,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  Sparkles,
  Trophy,
  Target,
  Star,
  DollarSign,
  Tv,
  Building,
  Users,
  TrendingUp,
  Download,
} from "lucide-react"

export default function CampusAIProgram() {
  const [isVisible, setIsVisible] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Play className="w-4 h-4" />,
      title: "Masterclass",
      description: "Dive into AI with expert video training",
    },
    {
      icon: <Code className="w-4 h-4" />,
      title: "Hands-on Projects",
      description: "Build real AI agents, no prior coding needed",
    },
    {
      icon: <Zap className="w-4 h-4" />,
      title: "No-Code Platform",
      description: "Create multilingual and multimodal AI assistants with ease",
    },
    {
      icon: <Brain className="w-4 h-4" />,
      title: "Master Prompting",
      description: "Learn the art of talking to LLMs",
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      title: "Explore Top AI Models",
      description: "Work with BharatGPT, ChatGPT, Gemini, Llama, and Bhashini",
    },
  ]

  const outcomes = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "CoRover Certified AI Professional",
      description: "Industry-recognized certification",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Become an AI Developer",
      description: "Master AI development skills",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Turn ideas into products",
      description: "Entrepreneurship made simple",
    },
  ]

  const incentives = [
    {
      icon: <Trophy className="w-4 h-4" />,
      title: "Monthly Best AI Agent Award with cash prize",
    },
    {
      icon: <Star className="w-4 h-4" />,
      title: "Certification and recognition at district, state, and national levels",
    },
    {
      icon: <DollarSign className="w-4 h-4" />,
      title: "Revenue sharing model for successful AI agents",
    },
    {
      icon: <Tv className="w-4 h-4" />,
      title: "Media/TV showcase opportunity",
    },
    {
      icon: <Building className="w-4 h-4" />,
      title: "Internship and placement opportunities with top companies",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-blue-50/40">
      <Navigation onEnrollClick={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <section id="program" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Liquid Glass Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-orange-100/40 to-blue-100/50" />
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/30 via-transparent to-blue-200/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.7),transparent_50%)]" />
        </div>

        {/* Enhanced Floating Liquid Glass Orbs */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-orange-300/50 to-red-300/40 rounded-full blur-3xl animate-pulse backdrop-blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-300/50 to-indigo-300/40 rounded-full blur-3xl animate-pulse delay-1000 backdrop-blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-200/60 to-blue-200/50 rounded-full blur-2xl animate-pulse delay-500 backdrop-blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-red-200/40 to-orange-200/50 rounded-full blur-2xl animate-pulse delay-700 backdrop-blur-3xl" />

        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Brand Header */}
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <div className="flex items-center justify-center mb-8">
                <Image src="/corover-logo.png" alt="CoRover.ai Logo" width={200} height={60} className="h-12 w-auto" />
              </div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600 text-sm font-medium">
                Campus AI Program
              </p>
            </div>

            {/* Main Title */}
            <div
              className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-orange-700 to-blue-700 bg-clip-text text-transparent">
                Campus AI Program
              </h1>

              <p className="text-xl bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">
                Experience the Future. Build with AI.
              </p>

              <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Transform your career with comprehensive AI training, hands-on projects, and industry certification.
                Join the AI revolution and become a certified AI professional.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <Button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 hover:from-orange-700 hover:via-red-600 hover:to-blue-700 text-white px-8 py-3 rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="border-2 border-white/60 text-slate-700 hover:bg-white/40 px-8 py-3 rounded-2xl bg-white/20 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Brochure
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              {[
                { number: "10K+", label: "Students Enrolled", icon: <Users className="w-4 h-4" /> },
                { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-4 h-4" /> },
                { number: "50+", label: "Partner Companies", icon: <Building className="w-4 h-4" /> },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/30 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border-2 border-white/40 hover:shadow-orange-500/10 transition-all duration-300 hover:bg-white/40 hover:border-white/60 hover:-translate-y-1">
                    <div className="flex items-center justify-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section id="features" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/20 to-orange-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-white/40 backdrop-blur-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600 px-6 py-3 text-sm mb-6 rounded-full border-2 border-white/50 shadow-xl">
              Program Features
            </Badge>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-orange-700 to-blue-700 bg-clip-text text-transparent mb-4">
              What's Inside?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive AI training designed to transform you into an industry-ready AI professional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/25 backdrop-blur-2xl border-2 border-white/50 hover:border-white/70 rounded-3xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-white/40 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes Section */}
      <section id="outcomes" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 via-white/80 to-blue-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-white/40 backdrop-blur-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 px-6 py-3 text-sm mb-6 rounded-full border-2 border-white/50 shadow-xl">
              Career Outcomes
            </Badge>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-orange-700 bg-clip-text text-transparent mb-4">
              Your AI Career Awaits
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Transform your future with industry-recognized certifications and real-world AI skills
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/25 backdrop-blur-2xl border-2 border-white/50 hover:border-white/70 rounded-3xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-white/40 shadow-lg">
                    {outcome.icon}
                  </div>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-slate-900 to-orange-700 bg-clip-text text-transparent mb-3">
                    {outcome.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incentives Section */}
      <section id="incentives" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-orange-50/40 to-blue-50/50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-transparent to-blue-100/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-white/50 backdrop-blur-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600 px-6 py-3 text-sm mb-6 rounded-full border-2 border-white/60 shadow-xl">
              Rewards & Recognition
            </Badge>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-orange-700 to-blue-700 bg-clip-text text-transparent mb-4">
              Incentives and Recognition
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Exceptional rewards for exceptional talent - your success is our priority
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {incentives.map((incentive, index) => (
              <Card
                key={index}
                className="group bg-white/30 backdrop-blur-2xl border-2 border-white/50 hover:border-white/70 transition-all duration-300 hover:scale-105 hover:bg-white/40 rounded-3xl overflow-hidden relative shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500/30 to-blue-500/30 backdrop-blur-xl rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border-2 border-white/50 shadow-lg">
                      {incentive.icon}
                    </div>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">{incentive.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-slate-500">*Terms & Conditions applied</p>
          </div>
        </div>
      </section>

      {/* NEP Compliance Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-green-50/30 to-blue-50/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-2xl rounded-full flex items-center justify-center border-2 border-white/50 shadow-xl">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-green-700 bg-clip-text text-transparent mb-1">
                Be NEP 2020 Compliant
              </h3>
              <p className="text-slate-700">
                Build AI talent by fostering innovation, critical thinking, and future-readiness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Carousel */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-orange-50/20 to-blue-50/30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-orange-700 to-blue-700 bg-clip-text text-transparent mb-8">
              Trusted by Leading Enterprises
            </h2>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-12 items-center">
                {/* First set of logos */}
                <div className="flex space-x-12 items-center min-w-max">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8d/LIC_Logo.svg"
                    alt="LIC"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahindra_Logo.svg"
                    alt="Mahindra"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"
                    alt="TATA"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
                    alt="NVIDIA"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg"
                    alt="SBI"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <div className="flex items-center justify-center h-8 px-4 bg-white/40 backdrop-blur-xl rounded-xl border-2 border-white/50 shadow-lg">
                    <span className="text-sm font-medium text-slate-600">BHIM UPI</span>
                  </div>
                  <div className="flex items-center justify-center h-8 px-4 bg-white/40 backdrop-blur-xl rounded-xl border-2 border-white/50 shadow-lg">
                    <span className="text-sm font-medium text-slate-600">NPCIL</span>
                  </div>
                  <div className="flex items-center justify-center h-8 px-4 bg-white/40 backdrop-blur-xl rounded-xl border-2 border-white/50 shadow-lg">
                    <span className="text-sm font-medium text-slate-600">INDIA POST</span>
                  </div>
                  <div className="flex items-center justify-center h-8 px-4 bg-white/40 backdrop-blur-xl rounded-xl border-2 border-white/50 shadow-lg">
                    <span className="text-sm font-medium text-slate-600">Delhi Metro</span>
                  </div>
                  <div className="flex items-center justify-center h-8 px-4 bg-white/40 backdrop-blur-xl rounded-xl border-2 border-white/50 shadow-lg">
                    <span className="text-sm font-medium text-slate-600">BSNL</span>
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex space-x-12 items-center min-w-max">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8d/LIC_Logo.svg"
                    alt="LIC"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahindra_Logo.svg"
                    alt="Mahindra"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"
                    alt="TATA"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
                    alt="NVIDIA"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg"
                    alt="SBI"
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <div className="flex items-center justify-center h-8 px-4 bg-white/40 backdrop-blur-xl rounded-xl border-2 border-white/50 shadow-lg">
                    <span className="text-sm font-medium text-slate-600">BHIM UPI</span>
                  </div>
                  <div className="flex items-center justify-center h-8 px-4 bg-white/40 backdrop-blur-xl rounded-xl border-2 border-white/50 shadow-lg">
                    <span className="text-sm font-medium text-slate-600">NPCIL</span>
                  </div>
                  <div className="flex items-center justify-center h-8 px-4 bg-white/40 backdrop-blur-xl rounded-xl border-2 border-white/50 shadow-lg">
                    <span className="text-sm font-medium text-slate-600">INDIA POST</span>
                  </div>
                  <div className="flex items-center justify-center h-8 px-4 bg-white/40 backdrop-blur-xl rounded-xl border-2 border-white/50 shadow-lg">
                    <span className="text-sm font-medium text-slate-600">Delhi Metro</span>
                  </div>
                  <div className="flex items-center justify-center h-8 px-4 bg-white/40 backdrop-blur-xl rounded-xl border-2 border-white/50 shadow-lg">
                    <span className="text-sm font-medium text-slate-600">BSNL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-orange-50/30 to-blue-50/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-orange-700 to-blue-700 bg-clip-text text-transparent mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students already building their AI careers with CoRover's industry-leading program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 hover:from-orange-700 hover:via-red-600 hover:to-blue-700 text-white px-8 py-3 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 backdrop-blur-sm border-2 border-white/40 rounded-2xl"
            >
              Enroll Now - Limited Seats
              <Rocket className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/60 text-slate-700 hover:bg-white/40 px-8 py-3 bg-white/20 backdrop-blur-xl transition-all duration-300 rounded-2xl shadow-xl"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
