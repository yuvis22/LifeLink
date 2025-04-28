import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Users,
  Target,
  Award,
  Droplets,
  Calendar,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us | LifeLink Blood Donor Network",
  description:
    "Learn about our mission, vision, and the dedicated team behind LifeLink Blood Donor Network.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center justify-center p-2 bg-rose-100 rounded-full mb-4">
          <Heart className="h-6 w-6 text-rose-600 fill-rose-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span className="text-rose-600">LifeLink</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We&apos;re on a mission to create a world where no one dies waiting
          for blood. Every donation matters, every donor is a hero.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              LifeLink was founded in 2021 with a simple but powerful vision: to
              revolutionize how people connect for blood donation. Our founders,
              a team of healthcare professionals and tech innovators, saw
              firsthand the critical gaps in the blood donation system.
            </p>
            <p className="text-gray-600 mb-4">
              What began as a small pilot project in one city has grown into a
              nationwide network, connecting thousands of donors with recipients
              in need. Today, LifeLink is at the forefront of blood donation
              innovation, leveraging technology to save lives.
            </p>
            <p className="text-gray-600">
              Our platform has facilitated over 50,000 successful donations,
              helping hospitals maintain adequate blood supplies and providing a
              lifeline for patients with rare blood types or emergency needs.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg relative h-80">
            <Image
              src="https://images.pexels.com/photos/6823559/pexels-photo-6823559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="LifeLink team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16 px-4 rounded-2xl mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg bg-white h-full">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-rose-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To revolutionize blood donation by making it accessible,
                  efficient, and personal. We connect donors directly with
                  recipients, reducing wait times and saving more lives through
                  our innovative platform and community-centered approach.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white h-full">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-rose-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  A world where no one dies waiting for blood. We envision a
                  global network where blood donation is a regular practice,
                  where supply meets demand, and where the dignity and needs of
                  both donors and recipients are respected and celebrated.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-rose-100 rounded-full p-4 inline-flex mx-auto mb-4">
              <Users className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Community First
            </h3>
            <p className="text-gray-600">
              We believe in the power of community to save lives. Every donor,
              recipient, and advocate is part of our extended family.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-rose-100 rounded-full p-4 inline-flex mx-auto mb-4">
              <Award className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Excellence
            </h3>
            <p className="text-gray-600">
              We uphold the highest standards in everything we do, from our
              platform&apos;s security to the quality of donor-recipient
              matches.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-rose-100 rounded-full p-4 inline-flex mx-auto mb-4">
              <Droplets className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Accessibility
            </h3>
            <p className="text-gray-600">
              We&apos;re committed to making blood donation accessible to
              everyone, breaking down barriers of distance, information, and
              opportunity.
            </p>
          </div>
        </div>
      </div>

      {/* Key Milestones */}
      <div className="bg-gray-50 py-16 px-4 rounded-2xl mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to transform blood donation
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="bg-white rounded-full p-3 shadow-md flex-shrink-0">
                <Calendar className="h-6 w-6 text-rose-600" />
              </div>
              <div className="md:ml-4">
                <div className="text-xl font-semibold text-gray-900">2021</div>
                <p className="text-gray-600">
                  LifeLink founded by Dr. Sarah Chen and tech entrepreneur James
                  Patel
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="bg-white rounded-full p-3 shadow-md flex-shrink-0">
                <Calendar className="h-6 w-6 text-rose-600" />
              </div>
              <div className="md:ml-4">
                <div className="text-xl font-semibold text-gray-900">2022</div>
                <p className="text-gray-600">
                  Launch of our mobile app, expanding access to blood donation
                  services
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="bg-white rounded-full p-3 shadow-md flex-shrink-0">
                <Calendar className="h-6 w-6 text-rose-600" />
              </div>
              <div className="md:ml-4">
                <div className="text-xl font-semibold text-gray-900">2023</div>
                <p className="text-gray-600">
                  Reached 25,000 successful donations through our platform
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="bg-white rounded-full p-3 shadow-md flex-shrink-0">
                <Calendar className="h-6 w-6 text-rose-600" />
              </div>
              <div className="md:ml-4">
                <div className="text-xl font-semibold text-gray-900">2024</div>
                <p className="text-gray-600">
                  Expanded to nationwide coverage with partner hospitals in 50
                  states
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="bg-white rounded-full p-3 shadow-md flex-shrink-0">
                <Calendar className="h-6 w-6 text-rose-600" />
              </div>
              <div className="md:ml-4">
                <div className="text-xl font-semibold text-gray-900">2025</div>
                <p className="text-gray-600">
                  Launch of LifeLink International, bringing our platform to
                  global communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join Our Mission
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you&apos;re a donor, medical professional, or supporter,
          there&apos;s a place for you in the LifeLink community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-rose-600 hover:bg-rose-700 text-white"
            size="lg"
            asChild
          >
            <Link href="/schedule">Donate Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/find-donor">Find a Donor</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
