import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Shield,
  Eye,
  Users,
  Lock,
  Database,
  Bell,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | LifeLink",
  description:
    "Learn about how LifeLink collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-4">
            Legal Information
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At LifeLink, we are committed to protecting your privacy and
            safeguarding your personal information. This Privacy Policy explains
            how we collect, use, disclose, and protect information about our
            donors, volunteers, and website visitors.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <span className="inline-flex items-center gap-1.5">
              <Bell size={14} />
              Last Updated: June 1, 2023
            </span>
          </p>
        </div>

        <div className="mb-12 space-y-8">
          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Users size={20} />
                  <span>Information We Collect</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Types of personal and technical data we gather
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Personal Information
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>
                          Contact details (name, email address, phone number,
                          mailing address)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>Date of birth and age</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>Gender</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>Government-issued identification</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>Health information</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>Blood type and donation history</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>Employment information</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>Emergency contact information</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Technical Information
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>IP address</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>Browser and device information</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>Cookies and similar technologies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>
                          Pages viewed and actions taken on our website
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-blue-500">•</div>
                        <span>Referral source</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardTitle>How We Collect Information</CardTitle>
                <CardDescription className="text-green-100">
                  Methods we use to gather your information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Direct interactions when you register as a donor or volunteer",
                    "When you schedule or complete a blood donation",
                    "When you contact us via email, phone, or our website",
                    "When you participate in surveys or feedback forms",
                    "Through automated technologies when you visit our website",
                    "From third parties with your consent (such as healthcare providers)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-2 mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <CardTitle>How We Use Your Information</CardTitle>
                <CardDescription className="text-amber-100">
                  Purposes for which we process your data
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    "Processing and managing blood donations",
                    "Determining donor eligibility",
                    "Communicating about appointments and donation opportunities",
                    "Providing donor services and support",
                    "Maintaining accurate records of donations",
                    "Contacting you about emergency donation needs",
                    "Sending thank-you messages and donation impact updates",
                    "Analyzing and improving our services",
                    "Complying with legal and regulatory requirements",
                    "Preventing and detecting fraud",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-2 mt-1 text-amber-500">✓</div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Shield size={20} />
                  <span>Information Sharing and Disclosure</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Who we share your information with
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <p>
                      Healthcare providers and hospitals receiving blood
                      donations
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <p>Service providers who help us operate our services</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <p>
                      Research institutions (in anonymized form) for blood
                      donation research
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <p>Government agencies when required by law</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <p>Blood donation regulatory bodies</p>
                  </li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-medium text-gray-900">
                    We will never sell your personal information to third
                    parties for marketing purposes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Lock size={20} />
                  <span>Data Security</span>
                </CardTitle>
                <CardDescription className="text-purple-100">
                  How we protect your information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your personal information from unauthorized access,
                  disclosure, alteration, or destruction. These measures
                  include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p className="font-medium">Encryption of sensitive data</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p className="font-medium">Secure storage systems</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p className="font-medium">
                      Access controls and authentication
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p className="font-medium">Regular security assessments</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p className="font-medium">
                      Staff training on data protection
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    While we take all reasonable steps to protect your
                    information, no method of transmission over the internet or
                    electronic storage is 100% secure. We cannot guarantee
                    absolute security of your data.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader className="bg-gray-50">
                <CardTitle>Your Rights and Choices</CardTitle>
                <CardDescription>
                  Rights you have regarding your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[
                    "The right to access your personal information",
                    "The right to correct inaccurate or incomplete information",
                    "The right to request deletion of your information",
                    "The right to restrict or object to processing",
                    "The right to data portability",
                    "The right to withdraw consent",
                  ].map((right, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-2 mt-1 text-green-500">✓</div>
                      <p>{right}</p>
                    </div>
                  ))}
                </div>

                <p>
                  To exercise these rights or to manage your communication
                  preferences, please contact us using the information provided
                  at the end of this policy.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Cookies and Similar Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our website uses cookies and similar technologies to enhance
                  your experience, analyze usage, and assist in our marketing
                  efforts. You can control cookies through your browser
                  settings, although restricting cookies may impact your
                  experience on our website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our services are not directed to individuals under the age of
                  16, and we do not knowingly collect personal information from
                  children. If you believe we have inadvertently collected
                  information from a child, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal requirements. We will notify
                  you of any material changes by posting the updated policy on
                  our website with a new "Last Updated" date. We encourage you
                  to review the policy periodically.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle>Contact Us</CardTitle>
                <CardDescription className="text-blue-100">
                  How to reach us with privacy-related questions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or our data practices, please contact us at:
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
                      href="mailto:privacy@lifelink.org"
                      className="text-blue-600 hover:underline"
                    >
                      privacy@lifelink.org
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                      href="tel:+15551234567"
                      className="text-blue-600 hover:underline"
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
                This Privacy Policy is provided for informational purposes and
                does not create a legal relationship between you and LifeLink.
                The actual privacy practices of blood donation organizations may
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
