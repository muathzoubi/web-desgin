"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import AOS from "aos"
import {
  Award,
  Briefcase,
  CheckCircle,
  Code,
  Layers,
  Menu,
  Palette,
  Users,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import "aos/dist/aos.css"
import { PricingTable } from "@/components/ui/price-table"

// You can also use <link> for styles
// ..
const list = [
  { item: 1, url: "https://simple-img-viewer.vercel.app/", name: 'Image Viewer App' },
  {
    item: 2,
    url: "https://designwave.store/", name: 'Design wave Site'
  },
  { item: 3, url: "https://muathalzoubi.netlify.app/", name: 'Protfolio Site' },
  { item: 4, url: "https://app-investment.netlify.app/", name: 'Investment App' },
  { item: 5, url: "https://merva-ai.netlify.app/", name: 'Merva AI App' },
  { item: 6, url: "https://possys-app.netlify.app/", name: 'Point of sales App' },
  { item: 7, url: "https://normar.netlify.app/", name: 'Normar Dental Lab' },
  { item: 8, url: "https://babalous.netlify.app", name: 'BAbalous Site' },
  { item: 9, url: "https://web-desgin-app.netlify.app/", name: 'Web desgin portfolio site' },
]
export default function WebDesignLanding() {
  const [email, setEmail] = useState("")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted with email:", email)
    setEmail("")
  }
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="flex flex-col text-white">
      <video className="app" loop={true} muted={true} controls={false} autoPlay>
        <source src="/bg-app.mp4" />
      </video>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 ">
          <div className="container mx-auto  min-h-screen ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-32">
                <h1 className=" shdow text-6xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-200  ">
                  Elevate Your Online Presence
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  We create stunning, responsive websites that captivate your
                  audience and drive results.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-red-600 text-white hover:bg-red-700 mx-4"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-600 text-red-400 hover:bg-red-900"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-red-700 px-4 md:px-6"
        >
          <div className="container mx-auto" data-aos="fade-right">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-balck-400">
              Our Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 mb-4 text-red-400" />
                <h3 className="text-xl font-bold mb-2 text-red-300">
                  Custom Web Development
                </h3>
                <p className="text-gray-300">
                  Tailored solutions to meet your unique business needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Palette className="h-12 w-12 mb-4 text-red-400" />
                <h3 className="text-xl font-bold mb-2 text-red-300">
                  UI/UX Design
                </h3>
                <p className="text-gray-300">
                  Intuitive and visually appealing user experiences.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-red-400" />
                <h3 className="text-xl font-bold mb-2 text-red-300">
                  Performance Optimization
                </h3>
                <p className="text-gray-300">
                  Lightning-fast websites for better user engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="background"
          className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6"
        >
          <div className="container mx-auto" data-aos="fade-left">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4" data-aos="fade-up-right">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-400">
                  Our Professional Background
                </h2>
                <p className="text-gray-300 md:text-lg">
                  With over a decade of experience in web design and
                  development, our team of experts has successfully delivered
                  hundreds of projects across various industries. We combine
                  cutting-edge technology with creative design to bring your
                  vision to life.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span>10+ years of industry experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span>500+ successful projects delivered</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span>98% client satisfaction rate</span>
                  </li>
                </ul>
              </div>
              <div
                className="grid grid-cols-2 gap-4 md:gap-6"
                data-aos="fade-in"
              >
                <div className="flex flex-col items-center space-y-2 border border-red-700 rounded-lg p-4 bg-red-900 bg-opacity-50">
                  <Award className="h-10 w-10 text-red-400" />
                  <h3 className="text-lg font-bold text-red-300">
                    Award-Winning
                  </h3>
                  <p className="text-center text-sm text-gray-300">
                    Recognized for excellence in web design
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-red-700 rounded-lg p-4 bg-red-900 bg-opacity-50">
                  <Users className="h-10 w-10 text-red-400" />
                  <h3 className="text-lg font-bold text-red-300">
                    Expert Team
                  </h3>
                  <p className="text-center text-sm text-gray-300">
                    Skilled professionals in various domains
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-red-700 rounded-lg p-4 bg-red-900 bg-opacity-50">
                  <Briefcase className="h-10 w-10 text-red-400" />
                  <h3 className="text-lg font-bold text-red-300">
                    Industry Focus
                  </h3>
                  <p className="text-center text-sm text-gray-300">
                    Specialized in multiple sectors
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-red-700 rounded-lg p-4 bg-red-900 bg-opacity-50">
                  <Layers className="h-10 w-10 text-red-400" />
                  <h3 className="text-lg font-bold text-red-300">Full-Stack</h3>
                  <p className="text-center text-sm text-gray-300">
                    Comprehensive web solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="portfolio"
          className="w-full py-12 md:py-24 lg:py-32 bg-red-900 px-4 md:px-6"
          data-aos="fade-up-right"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-red-400">
              Our Portfolio
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((item) => (
                <div
                  key={item.item}
                  className="relative aspect-video overflow-hidden rounded-lg"
                >
                  <img
                    src={`/${item.item}.png`}
                    alt={`Portfolio item ${item}`}
                    className="object-cover"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Link href={item.url}>
                      {" "}
                      <Button
                        variant="outline"
                        className="text-red-400 border-red-400 hover:bg-red-900"
                      >
                        View Project
                      </Button>

                    </Link>
                    <h3 className="pt-4 text-red-200">{item.name}</h3>

                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6"
          data-aos="fade-up-left"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-red-400">
              Our Technologies
            </h2>

            <div className="slider">
              <div className="slide-track">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div className="slide" key={i}>
                    <img src={`/tec/${i}.svg`} height={90} width={100} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="container mx-auto py-10 bg-red-900">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Website Pricing Guide
            </h1>
            <PricingTable />
            <div className="mt-8 text-sm text-gray-600">
              <p>
                Note: These prices are estimates and can vary based on specific
                requirements, complexity, and customization needs.
              </p>
              <p>Factors that can influence pricing include:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Design complexity</li>
                <li>Number of pages or products</li>
                <li>Custom functionality</li>
                <li>Integration with third-party services</li>
                <li>Content creation</li>
                <li>Ongoing maintenance and support</li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6"
        >
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-400">
                  Let's Create Something Amazing
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Ready to take your online presence to the next level? Get in
                  touch with us today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-4"
                  action="https://formsubmit.co/moathaza@gmail.com"
                  method="POST"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-red-900 border-red-700 text-white placeholder-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white  "
                  />
                  <textarea
                    placeholder="Tell us about your project"
                    required
                    className="bg-red-900 border-red-700 text-white placeholder-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white  "
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Link href={"https://www.instagram.com/rhz_solutions/"}>
          <img src={`/mes.png`} className="chat" height={80} />
        </Link>
      </main>
    </div>
  )
}
