import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blood Type Guide | LifeLink",
  description:
    "Learn about different blood types, compatibilities, and facts about blood donation.",
};

export default function BloodTypeGuidePage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 bg-rose-50 text-rose-700 border-rose-200"
          >
            Blood Education
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Blood Type Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding blood types is essential for blood donation and
            transfusions. This guide explains the ABO blood group system, Rh
            factors, compatibility between types, and why knowing your blood
            type matters.
          </p>
        </div>

        <Card className="mb-10 border-none shadow-lg bg-gradient-to-br from-rose-50 to-white overflow-hidden">
          <CardHeader className="bg-rose-600 text-white">
            <CardTitle className="text-2xl">
              The ABO Blood Group System
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">
              The ABO system classifies blood into four main types:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg mr-3">
                    A
                  </div>
                  <h3 className="font-semibold text-lg">Type A</h3>
                </div>
                <p className="text-gray-600">
                  Has A antigens on red blood cells and B antibodies in plasma
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mr-3">
                    B
                  </div>
                  <h3 className="font-semibold text-lg">Type B</h3>
                </div>
                <p className="text-gray-600">
                  Has B antigens on red blood cells and A antibodies in plasma
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg mr-3">
                    AB
                  </div>
                  <h3 className="font-semibold text-lg">Type AB</h3>
                </div>
                <p className="text-gray-600">
                  Has both A and B antigens on red blood cells and no A or B
                  antibodies in plasma
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-lg mr-3">
                    O
                  </div>
                  <h3 className="font-semibold text-lg">Type O</h3>
                </div>
                <p className="text-gray-600">
                  Has neither A nor B antigens on red blood cells but both A and
                  B antibodies in plasma
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-10 border-none shadow-lg overflow-hidden">
          <CardHeader className="bg-gray-800 text-white">
            <CardTitle className="text-2xl">The Rh Factor</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-4">
                  The Rh factor is an inherited protein found on the surface of
                  red blood cells. If your blood has the protein, you're Rh
                  positive (Rh+). If your blood lacks the protein, you're Rh
                  negative (Rh-).
                </p>
                <p>
                  This creates eight possible blood types: A+, A-, B+, B-, AB+,
                  AB-, O+, and O-.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center flex-col">
                    <span className="text-rose-600 font-semibold text-lg">
                      Rh+ or Rh-
                    </span>
                    <span className="text-gray-500 text-sm mt-1">Factor</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6 mt-12 text-center">
          Blood Type Compatibility
        </h2>
        <div className="overflow-x-auto mb-10 rounded-xl shadow-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-rose-600 text-white font-semibold text-left rounded-tl-xl">
                  Blood Type
                </th>
                <th className="py-3 px-6 bg-rose-600 text-white font-semibold text-left">
                  Can Donate To
                </th>
                <th className="py-3 px-6 bg-rose-600 text-white font-semibold text-left rounded-tr-xl">
                  Can Receive From
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">A+</td>
                <td className="py-4 px-6">A+, AB+</td>
                <td className="py-4 px-6">A+, A-, O+, O-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">A-</td>
                <td className="py-4 px-6">A+, A-, AB+, AB-</td>
                <td className="py-4 px-6">A-, O-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">B+</td>
                <td className="py-4 px-6">B+, AB+</td>
                <td className="py-4 px-6">B+, B-, O+, O-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">B-</td>
                <td className="py-4 px-6">B+, B-, AB+, AB-</td>
                <td className="py-4 px-6">B-, O-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">AB+</td>
                <td className="py-4 px-6">AB+ only</td>
                <td className="py-4 px-6 bg-green-50 text-green-700">
                  All blood types
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">AB-</td>
                <td className="py-4 px-6">AB+, AB-</td>
                <td className="py-4 px-6">A-, B-, AB-, O-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">O+</td>
                <td className="py-4 px-6">A+, B+, AB+, O+</td>
                <td className="py-4 px-6">O+, O-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">O-</td>
                <td className="py-4 px-6 bg-green-50 text-green-700">
                  All blood types
                </td>
                <td className="py-4 px-6">O- only</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card>
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-xl">
                Why Your Blood Type Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    ✓
                  </div>
                  <p>Determines who can receive your donated blood safely</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    ✓
                  </div>
                  <p>Identifies which blood types you can safely receive</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    ✓
                  </div>
                  <p>May affect your susceptibility to certain diseases</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    ✓
                  </div>
                  <p>
                    Critical information in emergency situations requiring blood
                    transfusion
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-xl">
                Interesting Blood Type Facts
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    •
                  </div>
                  <p>
                    O+ is the most common blood type (about 38% of the
                    population)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    •
                  </div>
                  <p>
                    AB- is the rarest blood type (less than 1% of the
                    population)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    •
                  </div>
                  <p>O- donors are universal donors for red blood cells</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    •
                  </div>
                  <p>
                    AB+ individuals are universal recipients for red blood cells
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    •
                  </div>
                  <p>Blood type is inherited from your parents</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-8 bg-rose-50 rounded-2xl shadow-sm text-center">
          <h3 className="text-2xl font-semibold text-rose-700 mb-4">
            Ready to Donate?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Now that you understand blood types better, consider donating blood
            to help save lives. Your donation could be the perfect match for
            someone in need.
          </p>
          <a
            href="/schedule"
            className="inline-flex items-center justify-center rounded-md bg-rose-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Schedule Your Donation
          </a>
        </div>
      </div>
    </main>
  );
}
