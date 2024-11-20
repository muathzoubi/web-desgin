import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, ChevronDownIcon, MapPinIcon, SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 rtl flex flex-col">
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[200px] sm:h-[300px] bg-blue-900">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Promotional banner"
            width={1200}
            height={300}
            className="object-cover w-full h-full opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-2xl sm:text-4xl font-bold mb-4">خصم 10%</h1>
              <Button variant="secondary" size="lg">
                احجز الآن
              </Button>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="max-w-6xl mx-auto -pt-32 sm:-pt-32 px-4">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="من" />
                    <MapPinIcon className="ml-2 h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kuwait">الكويت</SelectItem>
                    <SelectItem value="dubai">دبي</SelectItem>
                    <SelectItem value="cairo">القاهرة</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="إلى" />
                    <MapPinIcon className="ml-2 h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="istanbul">اسطنبول</SelectItem>
                    <SelectItem value="london">لندن</SelectItem>
                    <SelectItem value="paris">باريس</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="التاريخ" />
                    <CalendarIcon className="ml-2 h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">اليوم</SelectItem>
                    <SelectItem value="tomorrow">غداً</SelectItem>
                    <SelectItem value="next-week">الأسبوع القادم</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="w-full">
                  <SearchIcon className="ml-2 h-4 w-4" />
                  بحث
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Promotional Banners */}
        <div className="max-w-6xl mx-auto mt-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=150&width=400&text=Promo ${i}`}
                  alt={`Promotional banner ${i}`}
                  width={400}
                  height={150}
                  className="w-full"
                />
              </Card>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div className="max-w-6xl mx-auto mt-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-right">عروض السفر المميزة والشعبية</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "الأهرامات", price: "99 د.ك" },
              { name: "الصحراء", price: "149 د.ك" },
              { name: "المدينة", price: "199 د.ك" },
              { name: "القصر", price: "299 د.ك" },
            ].map((destination, i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=${destination.name}`}
                  alt={destination.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="py-14">
                  <h3 className="font-bold text-right">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground text-right">من {destination.price}</p>
                  <Button variant="link" className="p-0 mt-2">
                    احجز الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="max-w-6xl mx-auto mt-12 px-4  mb-12">
          <h2 className="text-2xl font-bold mb-6 text-right">الخدمات الإضافية عند السفر</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "السيارة والتأمين على السفر",
              "تأمين السفر",
              "نقل بالحافلات",
              "غرف فندقية",
            ].map((service, i) => (
              <Card key={i} className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">{service}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}