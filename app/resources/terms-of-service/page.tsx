import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Scale, FileText, AlertTriangle, Shield, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | LifeLink",
  description:
    "Terms and conditions for using LifeLink blood donation services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-red-100 text-red-700 rounded-full mb-4">
            Legal Information
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Please read these Terms of Service carefully before using the
            LifeLink website and blood donation services. These terms establish
            the rules, obligations, and restrictions for using our platform and
            services.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last Updated: June 1, 2023
          </p>
        </div>

        <div className="mb-12 space-y-8">
          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <FileText size={20} />
                  <span>Acceptance of Terms</span>
                </CardTitle>
                <CardDescription className="text-red-100">
                  Your agreement to these terms
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p>
                    By accessing or using the LifeLink website, mobile
                    applications, and blood donation services (collectively, the
                    "Services"), you agree to be bound by these Terms of
                    Service. If you do not agree to all of these terms, you may
                    not use our Services.
                  </p>
                  <p>
                    We may modify these Terms at any time. Your continued use of
                    the Services after any changes indicates your acceptance of
                    the modified Terms. It is your responsibility to review
                    these Terms periodically.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg mt-4">
                    <p className="font-medium text-gray-900">
                      These Terms of Service constitute a legally binding
                      agreement between you and LifeLink.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle>Eligibility and Registration</CardTitle>
                <CardDescription className="text-blue-100">
                  Requirements for using our services
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Account Creation
                </h3>
                <p className="mb-4">
                  To use certain features of our Services, you may need to
                  register for an account. When you register, you agree to
                  provide accurate, current, and complete information about
                  yourself and to update this information to keep it accurate,
                  current, and complete.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
                  Eligibility for Blood Donation
                </h3>
                <p className="mb-4">
                  To donate blood through our Services, you must meet all
                  eligibility requirements established by applicable blood
                  donation laws, regulations, and our blood donation policies.
                  These eligibility requirements may include:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-6 mb-4 list-disc">
                  <li>
                    Being at least 17 years of age (16 with parental consent in
                    some jurisdictions)
                  </li>
                  <li>Weighing at least 110 pounds (50 kg)</li>
                  <li>Being in good general health</li>
                  <li>Meeting specific criteria regarding medical history</li>
                  <li>Complying with donation frequency limitations</li>
                  <li>Meeting hemoglobin level requirements</li>
                </ul>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
                  <p className="text-gray-700">
                    Please note that eligibility criteria may vary depending on
                    location, type of donation, and current blood supply needs.
                    We reserve the right to defer or reject potential donors
                    based on these criteria.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Scale size={20} />
                  <span>User Responsibilities</span>
                </CardTitle>
                <CardDescription className="text-green-100">
                  Your obligations when using our services
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p>When using our Services, you agree to:</p>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Provide accurate, truthful, and complete information about your health history and eligibility",
                      "Follow all pre-donation and post-donation instructions provided by our staff",
                      "Use our Services only for lawful purposes and in accordance with these Terms",
                      "Respect the privacy and rights of other users",
                      "Keep your account information and password secure",
                      "Inform us immediately of any unauthorized use of your account",
                      "Not impersonate any person or entity or misrepresent your affiliation with a person or entity",
                      "Not attempt to gain unauthorized access to our systems or interfere with the proper working of our Services",
                      "Notify us of any changes in your health that might affect your eligibility to donate blood",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-white p-4 rounded-lg border border-gray-100"
                      >
                        <div className="mr-3 mt-1 text-green-500 font-bold">
                          ✓
                        </div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle size={20} />
                  <span>Limitation of Liability</span>
                </CardTitle>
                <CardDescription className="text-amber-100">
                  Limits on our responsibility
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-6">
                  To the maximum extent permitted by applicable law, LifeLink
                  and its officers, employees, agents, partners, and licensors
                  shall not be liable for:
                </p>
                <div className="space-y-3 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500">
                    <p>
                      Any indirect, incidental, special, consequential, or
                      punitive damages
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500">
                    <p>
                      Loss of profits, data, use, goodwill, or other intangible
                      losses
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500">
                    <p>
                      Damages resulting from any (i) errors or inaccuracies in
                      content, (ii) personal injury or property damage resulting
                      from your use of the Services, (iii) unauthorized access
                      to our servers or data, (iv) service interruptions, or (v)
                      viruses or malicious code transmitted through our Services
                    </p>
                  </div>
                </div>
                <p>
                  The limitations of liability in this section shall apply
                  whether or not LifeLink has been advised of or should have
                  been aware of the possibility of any such losses arising.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Shield size={20} />
                  <span>Privacy and Data Protection</span>
                </CardTitle>
                <CardDescription className="text-purple-100">
                  How we handle your information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">
                  Our collection and use of your personal information is
                  governed by our Privacy Policy, which is incorporated into
                  these Terms of Service by reference. By using our Services,
                  you consent to the collection, use, and sharing of your
                  information as described in our Privacy Policy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">
                      Health Information
                    </h4>
                    <p className="text-gray-700">
                      Due to the nature of blood donation, we collect certain
                      health information from donors. This information is
                      handled in accordance with applicable laws and regulations
                      governing health data protection.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">
                      Donor Records
                    </h4>
                    <p className="text-gray-700">
                      We maintain records of donations, test results, and donor
                      eligibility for safety purposes and to comply with
                      regulations governing blood donation services.
                    </p>
                  </div>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg mt-6">
                  <p className="font-medium">
                    To view our complete Privacy Policy, please visit the
                    Privacy Policy section of our website.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle>Intellectual Property</CardTitle>
                <CardDescription className="text-blue-100">
                  Ownership and use of content
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Intellectual Property
                </h3>
                <p className="mb-6">
                  The LifeLink name, logo, website, and all content, features,
                  and functionality thereof, are owned by LifeLink, its
                  licensors, or other providers and are protected by copyright,
                  trademark, patent, trade secret, and other intellectual
                  property laws.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Limited License
                </h3>
                <p className="mb-6">
                  Subject to these Terms, we grant you a limited, non-exclusive,
                  non-transferable, and revocable license to access and use our
                  Services for your personal, non-commercial use. This license
                  does not include the right to:
                </p>
                <ul className="space-y-2 mb-6 ml-6 list-disc">
                  <li>
                    Modify, reproduce, or create derivative works based upon our
                    Services
                  </li>
                  <li>
                    Use data mining, robots, or similar data gathering methods
                  </li>
                  <li>
                    Circumvent or disable any security or technological features
                    of our Services
                  </li>
                  <li>
                    Use our Services for commercial purposes without our prior
                    written consent
                  </li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p>
                    Any unauthorized use of our Services or content may violate
                    copyright, trademark, and other laws and may result in
                    termination of your access to our Services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>Appointment and Donation Policies</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Rules regarding blood donation appointments
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Scheduling Appointments
                    </h3>
                    <p>
                      You may schedule blood donation appointments through our
                      website, mobile app, or by contacting our donor services
                      team. We strive to accommodate your preferred donation
                      time, but availability is subject to capacity and staffing
                      limitations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Cancellations and Rescheduling
                    </h3>
                    <p className="mb-3">
                      If you need to cancel or reschedule your appointment,
                      please do so at least 24 hours in advance to allow us to
                      offer your slot to another donor. You can manage your
                      appointments through your online account or by contacting
                      donor services.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-medium">
                        Repeated no-shows for scheduled appointments may result
                        in limitations on future appointment bookings.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Walk-In Donations
                    </h3>
                    <p>
                      While appointments are preferred, we accept walk-in donors
                      when capacity allows. Please note that donors with
                      appointments will be prioritized, and walk-in donors may
                      experience longer wait times.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Donation Frequency
                    </h3>
                    <p>
                      For your safety, there are limits on how frequently you
                      can donate. These limits vary by donation type:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Whole Blood
                        </h4>
                        <p>Every 56 days (8 weeks)</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Double Red Cells
                        </h4>
                        <p>Every 112 days (16 weeks)</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Platelets
                        </h4>
                        <p>Every 7 days, up to 24 times per year</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Plasma
                        </h4>
                        <p>Every 28 days (4 weeks)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We reserve the right to terminate or suspend your account and
                  access to our Services, at our sole discretion, without
                  notice, for conduct that we believe violates these Terms or is
                  harmful to other users, us, or third parties, or for any other
                  reason.
                </p>
                <p>
                  Upon termination, your right to use the Services will
                  immediately cease. All provisions of these Terms that by their
                  nature should survive termination shall survive, including
                  ownership provisions, warranty disclaimers, indemnity, and
                  limitations of liability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the jurisdiction in which LifeLink's
                  principal place of business is located, without regard to its
                  conflict of law provisions. Any legal action or proceeding
                  relating to these Terms shall be brought exclusively in the
                  courts located in that jurisdiction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Severability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If any provision of these Terms is found to be unenforceable
                  or invalid, that provision shall be limited or eliminated to
                  the minimum extent necessary so that these Terms shall
                  otherwise remain in full force and effect and enforceable.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                <CardTitle>Contact Information</CardTitle>
                <CardDescription className="text-red-100">
                  How to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">
                  If you have questions or concerns about these Terms of
                  Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">
                    LifeLink Blood Donation Services
                  </h3>
                  <p className="mb-1">123 Main Street</p>
                  <p className="mb-1">Anytown, USA 12345</p>
                  <p className="mb-1">
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href="mailto:legal@lifelink.org"
                      className="text-red-600 hover:underline"
                    >
                      legal@lifelink.org
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                      href="tel:+15551234567"
                      className="text-red-600 hover:underline"
                    >
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-12">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700">
                This Terms of Service document is provided for informational
                purposes and does not create a legal relationship between you
                and LifeLink. The actual terms of blood donation services may
                vary. This content should be reviewed by legal counsel before
                use in a real-world context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
