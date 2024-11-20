"use client"
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Code, Palette, Zap, Layers, CheckCircle, Award, Users, Briefcase, Menu } from 'lucide-react'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

const list = [
  { item: 1, url: 'https://simple-img-viewer.vercel.app/' },
  { item: 2, url: 'https://paddle-billing-subscription-starter-delta-nine.vercel.app/' },
  { item: 3, url: 'https://rhz-ten.vercel.app/' },
  { item: 4, url: 'https://app-minier.vercel.app/' },
  { item: 5, url: 'https://merva-ai.vercel.app/' },
  { item: 6, url: 'https://pos-sys-ebon.vercel.app/' },
]

export default function WebDesignLanding() {
  const [email, setEmail] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('تم إرسال النموذج بالبريد الإلكتروني:', email)
    setEmail('')
  }
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="flex flex-col text-white">
      <video className='app' loop={true} muted={true} controls={false} autoPlay>
        <source src='/bg-app.mp4'/>
      </video>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 ">
          <div className="container mx-auto min-h-screen ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-32">
                <h1 className="shadow text-6xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-200">
                  ارفع من مستوى حضورك على الإنترنت
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  نحن نصمم مواقع إلكترونية مبهرة ومتجاوبة تجذب جمهورك وتحقق النتائج.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">ابدأ الآن</Button>
                <Button variant="outline" size="lg" className="border-red-600 text-red-400 hover:bg-red-900">تعرف أكثر</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-red-700 px-4 md:px-6">
          <div className="container mx-auto" data-aos="fade-right">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-black-400">خدماتنا</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 mb-4 text-red-400" />
                <h3 className="text-xl font-bold mb-2 text-red-300">تطوير مواقع مخصصة</h3>
                <p className="text-gray-300">حلول مخصصة لتلبية احتياجات عملك الفريدة.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Palette className="h-12 w-12 mb-4 text-red-400" />
                <h3 className="text-xl font-bold mb-2 text-red-300">تصميم واجهات وتجربة المستخدم</h3>
                <p className="text-gray-300">تجارب مستخدم بديهية وجذابة بصريًا.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-red-400" />
                <h3 className="text-xl font-bold mb-2 text-red-300">تحسين الأداء</h3>
                <p className="text-gray-300">مواقع سريعة للغاية لتعزيز تفاعل المستخدمين.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
