import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "FAQs | LifeLink",
  description:
    "Find answers to frequently asked questions about blood donation, the process, and how you can help save lives.",
};

export default function FAQsPage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-700 mb-4">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Common Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've compiled answers to some of the most common questions about
            blood donation. If you don't find the information you're looking
            for, please{" "}
            <a
              href="/contact"
              className="text-rose-600 hover:text-rose-700 font-medium underline"
            >
              contact us
            </a>{" "}
            and we'll be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
          <div className="lg:col-span-1">
            <div className="bg-rose-50 p-6 rounded-xl sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#general"
                    className="block py-2 px-4 bg-rose-100 text-rose-700 rounded-lg font-medium"
                  >
                    General Questions
                  </a>
                </li>
                <li>
                  <a
                    href="#eligibility"
                    className="block py-2 px-4 hover:bg-rose-100 hover:text-rose-700 rounded-lg transition-colors"
                  >
                    Eligibility Questions
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="block py-2 px-4 hover:bg-rose-100 hover:text-rose-700 rounded-lg transition-colors"
                  >
                    Donation Process
                  </a>
                </li>
                <li>
                  <a
                    href="#usage"
                    className="block py-2 px-4 hover:bg-rose-100 hover:text-rose-700 rounded-lg transition-colors"
                  >
                    Blood Usage
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <section id="general" className="scroll-mt-20">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-rose-100 text-rose-600 mr-3 flex items-center justify-center">
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
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  General Questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="item-1"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      Why should I donate blood?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      Blood donations save lives. Every two seconds, someone in
                      the country needs blood. Your donation can help accident
                      victims, surgery patients, cancer patients, and those with
                      blood disorders. One donation can save up to three lives.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      How often can I donate blood?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      If you're donating whole blood, you can donate every 56
                      days (about 8 weeks). For Power Red donations, you can
                      donate every 112 days. Platelet donors can give every 7
                      days (up to 24 times per year), and plasma donors every 28
                      days.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      Does it hurt to donate blood?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      Most donors report only a brief pinch when the needle is
                      inserted. The actual donation process is typically
                      painless. Our trained staff work to make your donation
                      experience as comfortable as possible.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      How long does it take to donate blood?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      The entire process takes about an hour from start to
                      finish. The actual blood donation only takes about 8-10
                      minutes. The rest of the time is spent on registration,
                      health history, a mini-physical, and refreshments
                      afterward.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <section id="eligibility" className="scroll-mt-20">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-green-100 text-green-600 mr-3 flex items-center justify-center">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  Eligibility Questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="item-1"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      Can I donate if I'm taking medication?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      Many medications do not prevent you from donating blood.
                      However, some medications require a waiting period after
                      your last dose. During your pre-donation screening, you'll
                      be asked about any medications you're taking, and staff
                      will determine if they affect your eligibility.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      Can I donate if I have diabetes?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      Yes, in most cases. People with diabetes who are
                      well-controlled on medication are usually eligible to
                      donate blood. However, if you've had complications related
                      to your diabetes, additional screening may be required.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      Can I donate if I've recently had a tattoo or piercing?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      It depends on your location and where you got your tattoo
                      or piercing. In many states, you must wait 3-12 months
                      after getting a tattoo or piercing if it was done in a
                      facility that isn't regulated by the state. If the
                      facility is state-regulated, you may be able to donate
                      immediately.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      Can I donate if I've recently traveled abroad?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      Travel to certain countries may temporarily defer you from
                      donating blood due to potential exposure to infectious
                      diseases. The deferral period varies depending on where
                      you traveled and for how long. During your health
                      screening, you'll be asked about recent travel.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <section id="process" className="scroll-mt-20">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3 flex items-center justify-center">
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
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  Donation Process Questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="item-1"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      What should I eat or drink before donating?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      Make sure to eat a healthy meal and drink plenty of fluids
                      at least 2-3 hours before donating. Avoid fatty foods, as
                      they can affect blood tests that determine if your blood
                      can be used. Stay well-hydrated in the days leading up to
                      your donation.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      What should I do after donating?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      <p>After donating, you should:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Drink extra fluids for the next 48 hours</li>
                        <li>
                          Avoid strenuous physical activity for the rest of the
                          day
                        </li>
                        <li>Keep the bandage on for at least four hours</li>
                        <li>
                          If you feel dizzy, lie down with your feet elevated
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      Will I feel tired after donating?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      Some donors may experience mild fatigue after donation,
                      but most people feel fine. Make sure to rest, eat well,
                      and stay hydrated. Your body will replace the fluid lost
                      during donation within 24 hours, and the red blood cells
                      within 4-6 weeks.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      How much blood is taken during donation?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      For a whole blood donation, approximately one pint (about
                      470 ml) is collected. This is only about 10% of the total
                      blood in your body, and your body replaces it quickly.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <section id="usage" className="scroll-mt-20">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-purple-100 text-purple-600 mr-3 flex items-center justify-center">
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
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </span>
                  Blood Usage Questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="item-1"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      What happens to my blood after I donate?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      After collection, your blood is labeled and sent to a
                      processing center. There, it's tested for blood type and
                      infectious diseases. It's then separated into components
                      (red cells, platelets, and plasma) and stored
                      appropriately until needed by hospitals.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      How long does donated blood last?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      <p>
                        Different blood components have different shelf lives:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Red blood cells can be stored for up to 42 days</li>
                        <li>Platelets can be stored for up to 5 days</li>
                        <li>
                          Plasma can be frozen and stored for up to one year
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      Who receives donated blood?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      <p>
                        Blood donations help many types of patients, including:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Accident and trauma victims</li>
                        <li>Cancer patients undergoing chemotherapy</li>
                        <li>
                          People with blood disorders like sickle cell anemia
                        </li>
                        <li>Patients undergoing major surgeries</li>
                        <li>People with severe burns</li>
                        <li>
                          Mothers experiencing complications during childbirth
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      Will I be notified of my blood type after donating?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1 text-gray-600">
                      Yes, first-time donors will be notified of their blood
                      type. Most donation centers also provide this information
                      through their donor apps or online portals. Some centers
                      also test for cholesterol levels and other basic health
                      metrics that they share with donors.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Card className="mb-10 border-none shadow-lg overflow-hidden">
        <CardHeader className="bg-gray-800 text-white">
          <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                How often can I donate blood?
              </h3>
              <p>
                You can donate whole blood every 56 days. That&apos;s about
                every two months. Platelet donations can be made more
                frequently.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Does it hurt to donate blood?
              </h3>
              <p>
                Most donors feel only a brief pinch when the needle is inserted.
                The actual donation process is painless and takes about 8-10
                minutes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                How long does it take to recover?
              </h3>
              <p>
                Most people feel fine after donating. It&apos;s recommended to
                rest for 10-15 minutes after donation and avoid heavy lifting
                for 24 hours.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
