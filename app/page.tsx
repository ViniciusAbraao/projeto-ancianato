import { Button } from "@/components/ui/button"
import { Calendar, Heart, Info, Mail, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Logo.png" // Substitua pelo caminho da sua imagem
              alt="Logo Org"
              width={200} // Ajuste o tamanho conforme necessário
              height={200}
              className="mx-6" // Ajuste o tamanho conforme necessário
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#home" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Home
            </Link>
            <Link href="#who-we-are" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Who We Are
            </Link>
            <Link href="#transparency" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Transparency
            </Link>
            <Link href="#how-to-help" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              How To Help
            </Link>
            <Link href="#events" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Events & Activities
            </Link>
            <Link href="#contact" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden" size="icon">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Home Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 bg-blue-900/80 z-10" />
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container px-4 md:px-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Making a Difference Together
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-white/90 md:text-xl">
                  Join us in our mission to create positive change in our community and beyond.
                </p>
                <div className="space-x-4">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Get Involved</Button>
                  <Button variant="outline" className="bg-white text-blue-700 hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section - Removed "Our Team" as requested */}
        <section id="who-we-are" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  Who We Are
                </h2>
                <p className="text-gray-600 md:text-lg">
                  Founded in 2010, our organization has been dedicated to making a positive impact in our community. We
                  believe in the power of collective action and the importance of transparency in everything we do.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Our team consists of passionate individuals from diverse backgrounds, all united by a common goal: to
                  create meaningful change and build a better future for all.
                </p>
                {/* Removed "Our Team" section as requested */}
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?height=400&width=600" alt="Team photo" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section id="transparency" className="py-16 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">
                Our Commitment
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Transparency
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-600 md:text-lg">
                We believe in being open and honest about our operations, finances, and impact.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Info className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">Financial Reports</h3>
                <p className="text-gray-600 mb-4">
                  We publish detailed financial reports quarterly, showing exactly how donations are used.
                </p>
                <Button variant="link" className="text-blue-700 p-0">
                  View Reports →
                </Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Info className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">Impact Metrics</h3>
                <p className="text-gray-600 mb-4">
                  We measure and share the real-world impact of our programs and initiatives.
                </p>
                <Button variant="link" className="text-blue-700 p-0">
                  See Our Impact →
                </Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Info className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">Governance</h3>
                <p className="text-gray-600 mb-4">
                  Learn about our leadership structure and decision-making processes.
                </p>
                <Button variant="link" className="text-blue-700 p-0">
                  Our Governance →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How To Help Section */}
        <section id="how-to-help" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Volunteers helping"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">Get Involved</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  How To Help
                </h2>
                <p className="text-gray-600 md:text-lg">
                  There are many ways you can contribute to our mission and make a difference. Whether through
                  donations, volunteering, or spreading awareness, every action counts.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Donate</h3>
                      <p className="text-gray-600">Your financial support helps us continue our important work.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Volunteer</h3>
                      <p className="text-gray-600">
                        Join our team of dedicated volunteers making a difference on the ground.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Spread the Word</h3>
                      <p className="text-gray-600">
                        Share our mission with your network and help us reach more people.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Removed the "Get Involved Now" button as requested */}
              </div>
            </div>
          </div>
        </section>

        {/* Events & Activities Section */}
        <section id="events" className="py-16 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">Join Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Events & Activities
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-600 md:text-lg">
                Discover upcoming events and activities where you can get involved and make a difference.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Community cleanup event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>June 15, 2025</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>City Park</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Community Cleanup Day</h3>
                  <p className="text-gray-600">
                    Join us for a day of cleaning up our local parks and streets to create a cleaner environment.
                  </p>
                  {/* Removed the "Register Now" button as requested */}
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Fundraising gala"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>July 10, 2025</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>Grand Hotel</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Annual Fundraising Gala</h3>
                  <p className="text-gray-600">
                    An elegant evening of dinner, entertainment, and fundraising for our key initiatives.
                  </p>
                  {/* Removed the "Get Tickets" button as requested */}
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Workshop event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>August 5, 2025</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>Community Center</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Educational Workshop Series</h3>
                  <p className="text-gray-600">
                    Learn practical skills and knowledge to help make a difference in your community.
                  </p>
                  {/* Removed the "Sign Up" button as requested */}
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button className="bg-red-600 hover:bg-red-700 text-white">View All Events</Button>
            </div>
          </div>
        </section>

        {/* Contact Section - Removed form as requested */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  Contact Us
                </h2>
                <p className="text-gray-600 md:text-lg">
                  Have questions or want to get involved? We'd love to hear from you. Use the contact information below
                  to reach out to us.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Address</h3>
                      <p className="text-gray-600">123 Main Street, City, State 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Email</h3>
                      <p className="text-gray-600">info@organizationname.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-red-600 mt-1"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Phone</h3>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* More compact footer */}
      <footer className="bg-blue-400 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image src="/images/Logo.png" alt="Logo Org" width={150} height={150} className="mx-2" />
              <div className="text-sm">
                <p>&copy; {new Date().getFullYear()} OrganizationName. All rights reserved.</p>
              </div>
            </div>
            <div>
              <ul className="flex flex-wrap gap-4 justify-center">
                <li>
                  <Link href="#home" className="text-sm hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#who-we-are" className="text-sm hover:text-white">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="#transparency" className="text-sm hover:text-white">
                    Transparency
                  </Link>
                </li>
                <li>
                  <Link href="#how-to-help" className="text-sm hover:text-white">
                    How To Help
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-sm hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

