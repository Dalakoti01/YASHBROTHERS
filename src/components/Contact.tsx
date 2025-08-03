import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, InstagramIcon, FacebookIcon, TwitterIcon, GlobeIcon, CalendarIcon, CreditCardIcon, ShieldIcon, HeartIcon } from 'lucide-react';
import toast from 'react-hot-toast';
const Contact = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-medium text-[#D4AF37] uppercase tracking-widest mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#2E2E2E]">
            Visit Our Boutique
          </h3>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#F5F1E8] p-8 rounded-sm shadow-lg">
            <h4 className="text-xl font-bold mb-6 text-[#2E2E2E] border-b border-[#D4AF37] pb-2">
              Visit Our Showroom
            </h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="font-medium">Main Showroom</p>
                  <p className="text-gray-600 mt-1">
                    42, Chandpole Bazaar
                    <br />
                    Jaipur, Rajasthan 302001
                    <br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="font-medium">Branch Location</p>
                  <p className="text-gray-600 mt-1">
                    15, M.I. Road
                    <br />
                    Jaipur, Rajasthan 302001
                    <br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <GlobeIcon className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="font-medium">International Inquiries</p>
                  <p className="text-gray-600 mt-1">
                    We ship worldwide and handle international orders with care.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F1E8] p-8 rounded-sm shadow-lg">
            <h4 className="text-xl font-bold mb-6 text-[#2E2E2E] border-b border-[#D4AF37] pb-2">
              Contact Details
            </h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="font-medium">Call Us</p>
                  <p className="text-gray-600 mt-1">Sales: +91 141 2222 3333</p>
                  <p className="text-gray-600">
                    Customer Support: +91 98765 43210
                  </p>
                  <p className="text-gray-600">WhatsApp: +91 98765 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="font-medium">Email Us</p>
                  <p className="text-gray-600 mt-1">
                    General Inquiries: info@yashbrother.com
                  </p>
                  <p className="text-gray-600">
                    Support: support@yashbrother.com
                  </p>
                  <p className="text-gray-600">
                    Custom Orders: custom@yashbrother.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CalendarIcon className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="font-medium">Book an Appointment</p>
                  <p className="text-gray-600 mt-1">
                    Schedule a private consultation with our jewelry experts.
                  </p>
                  <button onClick={() => toast.success("Appointment request received. We'll contact you shortly.")} className="mt-2 text-[#D4AF37] hover:underline">
                    Request Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F1E8] p-8 rounded-sm shadow-lg">
            <h4 className="text-xl font-bold mb-6 text-[#2E2E2E] border-b border-[#D4AF37] pb-2">
              Business Hours & Information
            </h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="font-medium">Opening Hours</p>
                  <p className="text-gray-600 mt-1">
                    Monday - Saturday: 10:00 AM - 8:00 PM
                  </p>
                  <p className="text-gray-600">Sunday: 12:00 PM - 6:00 PM</p>
                  <p className="text-gray-600 mt-2 italic">
                    Special hours during festival seasons
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CreditCardIcon className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="font-medium">Payment Options</p>
                  <p className="text-gray-600 mt-1">
                    We accept all major credit cards, UPI, net banking, and cash
                    payments.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldIcon className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="font-medium">Certifications</p>
                  <p className="text-gray-600 mt-1">
                    All our jewelry comes with authenticity certificates and
                    hallmarking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h4 className="text-xl font-bold mb-6 text-[#2E2E2E]">Follow Us</h4>
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-[#D4AF37] text-white p-3 rounded-full hover:bg-opacity-90 transition-all">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="bg-[#D4AF37] text-white p-3 rounded-full hover:bg-opacity-90 transition-all">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="bg-[#D4AF37] text-white p-3 rounded-full hover:bg-opacity-90 transition-all">
              <TwitterIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-6 text-gray-600">
            Stay connected for updates on new collections, special events, and
            exclusive offers.
          </p>
        </div>
      </div>
    </section>;
};
export default Contact;