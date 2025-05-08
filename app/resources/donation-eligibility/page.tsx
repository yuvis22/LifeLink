import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Donation Eligibility | LifeLink",
  description:
    "Learn about blood donation eligibility requirements, restrictions, and what to expect during the screening process.",
};

export default function DonationEligibilityPage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-rose-100 text-rose-700 rounded-full mb-4">
            Donor Information
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Donation Eligibility
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Blood donation saves lives, but to ensure the safety of both donors
            and recipients, there are certain eligibility requirements that must
            be met. This guide covers the basic requirements, temporary and
            permanent deferrals, and what to expect during the screening
            process.
          </p>
        </div>

        <Card className="mb-10 border-none shadow-lg overflow-hidden">
          <CardHeader className="bg-gray-800 text-white">
            <CardTitle className="text-2xl">General Requirements</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p>
                To donate blood, you must be in good health and meet these basic
                requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Be at least 17 years old (16 with parental consent in some
                  states)
                </li>
                <li>Weigh at least 110 pounds (50 kg)</li>
                <li>Be in good general health</li>
                <li>Not have donated blood in the last 56 days</li>
                <li>Not have any active infections or illnesses</li>
              </ul>
              <p className="mt-4">
                If you&apos;re unsure about your eligibility, please consult
                with your healthcare provider or contact us for more
                information.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-10 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
            <CardTitle className="text-2xl">
              Basic Eligibility Requirements
            </CardTitle>
            <CardDescription className="text-rose-100">
              What you need to qualify as a donor
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="mr-4 flex-shrink-0 bg-rose-100 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-rose-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Age</h3>
                  <p className="text-gray-600">
                    Must be at least 17 years old (16 years in some states with
                    parental consent)
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="mr-4 flex-shrink-0 bg-rose-100 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-rose-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Weight
                  </h3>
                  <p className="text-gray-600">
                    Must weigh at least 110 pounds (50 kg)
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="mr-4 flex-shrink-0 bg-rose-100 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-rose-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Health
                  </h3>
                  <p className="text-gray-600">
                    Must be in good general health and feeling well on the day
                    of donation
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="mr-4 flex-shrink-0 bg-rose-100 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-rose-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Identification
                  </h3>
                  <p className="text-gray-600">Must present a valid ID</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="overflow-hidden">
            <CardHeader className="bg-amber-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle size={20} />
                <span>Temporary Deferrals</span>
              </CardTitle>
              <CardDescription className="text-amber-100">
                Conditions that temporarily prevent donation
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-amber-500">•</div>
                  <p>
                    <span className="font-medium">
                      Recent illness or infection:
                    </span>{" "}
                    Wait until you're fully recovered
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-amber-500">•</div>
                  <p>
                    <span className="font-medium">
                      Low iron levels or anemia:
                    </span>{" "}
                    Wait until your iron levels return to normal
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-amber-500">•</div>
                  <p>
                    <span className="font-medium">Pregnancy:</span> Wait 6 weeks
                    after giving birth
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-amber-500">•</div>
                  <p>
                    <span className="font-medium">
                      Recent tattoos or piercings:
                    </span>{" "}
                    Wait 3-12 months, depending on local regulations
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-amber-500">•</div>
                  <p>
                    <span className="font-medium">Recent travel:</span> Travel
                    to certain regions may require waiting periods
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-amber-500">•</div>
                  <p>
                    <span className="font-medium">Recent surgery:</span> Wait
                    until fully healed (usually 6-12 months)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-amber-500">•</div>
                  <p>
                    <span className="font-medium">Recent donation:</span> Wait
                    at least 8 weeks between whole blood donations
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="bg-red-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <XCircle size={20} />
                <span>Permanent Deferrals</span>
              </CardTitle>
              <CardDescription className="text-red-100">
                Conditions that permanently prevent donation
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">•</div>
                  <p>HIV or risk factors for HIV</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">•</div>
                  <p>Hepatitis B or C</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">•</div>
                  <p>
                    Having received a blood transfusion in the UK between
                    1980-1996 (risk of CJD)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">•</div>
                  <p>History of certain cancers</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">•</div>
                  <p>Use of certain medications that can harm recipients</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">•</div>
                  <p>Intravenous drug use</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-10 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardTitle className="text-2xl">The Screening Process</CardTitle>
            <CardDescription className="text-blue-100">
              What to expect when you arrive to donate
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ol className="relative border-l border-gray-200 ml-3 space-y-6">
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  Registration
                </h3>
                <p className="text-gray-600">
                  Present your ID and complete donor registration forms
                </p>
              </li>
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  Health History
                </h3>
                <p className="text-gray-600">
                  Answer questions about your health history and current health
                </p>
              </li>
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  Mini-Physical
                </h3>
                <p className="text-gray-600">
                  Temperature, pulse, blood pressure, and hemoglobin levels will
                  be checked
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">4</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  Confidential Interview
                </h3>
                <p className="text-gray-600">
                  Private discussion about any risk factors
                </p>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-10 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Tips for a Successful Donation</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">
                    Drink plenty of water before donating
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">Get a good night's sleep</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">
                    Eat iron-rich foods in the weeks before donation
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">
                    Eat a healthy meal within 3 hours of donation
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">
                    Avoid fatty foods before donation
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">
                    Wear comfortable clothing with sleeves that can be rolled up
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-rose-50 p-6 rounded-xl shadow-md mb-8 border-l-4 border-rose-600">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <AlertCircle className="h-6 w-6 text-rose-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-rose-700 mb-3">
                Important Note
              </h3>
              <p className="text-rose-700">
                Eligibility requirements can change and may vary by location.
                Always check with your local blood donation center for the most
                up-to-date information. The information provided here is general
                guidance and may not reflect current policies in your area.
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-10">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-xl">
              Pre-Donation Questionnaire
            </CardTitle>
            <CardDescription>
              To save time, review some questions that will be asked during
              screening
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-2">
              <li className="p-3 bg-gray-50 rounded-md">
                Have you felt healthy and well in the past week?
              </li>
              <li className="p-3 bg-gray-50 rounded-md">
                Are you currently taking any medications?
              </li>
              <li className="p-3 bg-gray-50 rounded-md">
                Have you had any vaccinations in the past 4-8 weeks?
              </li>
              <li className="p-3 bg-gray-50 rounded-md">
                Have you traveled outside the country in the past 3 years?
              </li>
              <li className="p-3 bg-gray-50 rounded-md">
                Have you had a tattoo or piercing in the past 3-12 months?
              </li>
              <li className="p-3 bg-gray-50 rounded-md">
                Have you ever had a blood transfusion?
              </li>
              <li className="p-3 bg-gray-50 rounded-md">
                Have you ever been pregnant?
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
