import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'

function Footer() {
  const paymentMethods = [
    { name: "Cash", type: "regular" },
    { name: "Debit Card", type: "regular" },
    { name: "VISA Card", type: "regular" },
    { name: "Master Card", type: "regular" },
    { name: "American Express", type: "regular" },
    { name: "Discover Card", type: "regular" },
    { name: "Diners Club", type: "regular" },
    { name: "Apple Pay", type: "digital" },
    { name: "Google Pay", type: "digital" },
    { name: "NFC Payment", type: "digital" },
  ]

  const hours = [
    { day: "Sunday", hours: "Closed" },
    { day: "Monday", hours: "09:00 AM – 07:00 PM" },
    { day: "Tuesday", hours: "09:00 AM – 07:00 PM" },
    { day: "Wednesday", hours: "09:00 AM – 07:00 PM" },
    { day: "Thursday", hours: "09:00 AM – 07:00 PM" },
    { day: "Friday", hours: "09:00 AM – 07:00 PM" },
    { day: "Saturday", hours: "closed" },
  ]

  return (
    <>
    <footer className="relative bg-black text-white py-16">
      {/* Striped Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 1px,
            #333 1px,
            #333 2px
          )`
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Location & Payments Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-4">LOCATION</h2>
              <div className="space-y-1">
                <p className="font-semibold">Studio-D BarberShop</p>
                <p>900 S Miami Ave #266</p>
                <p>Miami, FL 33130</p>
                <p className="mt-2">(305) 349-4969</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4">PAYMENTS</h2>
              <div className="grid grid-cols-2 gap-2">
                {paymentMethods.map((method, index) => (
                  <div key={index}>{method.name}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Logo & Social Section */}
          <div className="flex flex-col items-center justify-between text-center">
            <div className="text-4xl font-light tracking-widest mb-8">BARBERSHOP</div>
            
            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <Link href="#" className="hover:opacity-80">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Facebook className="w-6 h-6" />
              </Link>
            </div>

            {/* Copyright */}
            <div className="space-y-2">
              <p>Copyright © 2024</p>
              <p>Studio-D BarberShop</p>
              <p>All Rights Reserved.</p>
            </div>

            {/* Links */}
            <div className="mt-8 space-x-4 text-sm">
              <Link href="#" className="hover:underline">PRIVACY POLICY</Link>
              <span>|</span>
              <Link href="#" className="hover:underline">TERMS OF SERVICE</Link>
              <span>|</span>
              <Link href="#" className="hover:underline">ACCESSIBILITY</Link>
              <span>|</span>
              <Link href="#" className="hover:underline">SITEMAP</Link>
            </div>
          </div>

          {/* Hours & Parking Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-4">HOURS</h2>
              <div className="space-y-1">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p>Valet & Garage Parking Available.</p>
              <p>We Validate Garage Parking Only.</p>
              <p className="mt-4">Located on The Second Floor of</p>
              <p>Mary Brickell Village</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer