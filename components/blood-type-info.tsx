"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BarChart3,
  PieChart,
  HeartPulse,
  Droplet,
  Check,
  X,
} from "lucide-react";

const bloodTypeData = {
  "A+": {
    canDonateTo: ["A+", "AB+"],
    canReceiveFrom: ["A+", "A-", "O+", "O-"],
    percentage: "35.7%",
    facts: [
      "Second most common blood type",
      "Contains A antigens on red cells and B antibodies in plasma",
      "In high demand for both whole blood and plasma donations",
    ],
  },
  "A-": {
    canDonateTo: ["A+", "A-", "AB+", "AB-"],
    canReceiveFrom: ["A-", "O-"],
    percentage: "6.3%",
    facts: [
      "Universal platelet donor",
      "Much rarer than A+ type",
      "Highly valued for plasma and platelet donations",
    ],
  },
  "B+": {
    canDonateTo: ["B+", "AB+"],
    canReceiveFrom: ["B+", "B-", "O+", "O-"],
    percentage: "8.5%",
    facts: [
      "More common in Asian and African populations",
      "Contains B antigens on red cells and A antibodies in plasma",
      "Important for patients with sickle cell disease",
    ],
  },
  "B-": {
    canDonateTo: ["B+", "B-", "AB+", "AB-"],
    canReceiveFrom: ["B-", "O-"],
    percentage: "1.5%",
    facts: [
      "One of the rarer blood types",
      "Can donate to all B and AB patients",
      "Important for diverse patient populations",
    ],
  },
  "AB+": {
    canDonateTo: ["AB+"],
    canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    percentage: "3.4%",
    facts: [
      "Universal recipient for red blood cells",
      "Rarest major blood type",
      "Valuable as plasma donors (universal plasma donor)",
    ],
  },
  "AB-": {
    canDonateTo: ["AB+", "AB-"],
    canReceiveFrom: ["A-", "B-", "AB-", "O-"],
    percentage: "0.6%",
    facts: [
      "The rarest of the eight main blood types",
      "Can receive red blood cells from all negative blood types",
      "Extremely valuable for plasma donation",
    ],
  },
  "O+": {
    canDonateTo: ["O+", "A+", "B+", "AB+"],
    canReceiveFrom: ["O+", "O-"],
    percentage: "37.4%",
    facts: [
      "Most common blood type",
      "Vital for emergency situations",
      "High demand for whole blood donations",
    ],
  },
  "O-": {
    canDonateTo: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
    canReceiveFrom: ["O-"],
    percentage: "6.6%",
    facts: [
      "Universal donor for red blood cells",
      "Critical for emergency situations",
      "Always in high demand due to versatility",
    ],
  },
};

const bloodTypeColors = {
  "A+": "bg-red-500",
  "A-": "bg-red-700",
  "B+": "bg-blue-500",
  "B-": "bg-blue-700",
  "AB+": "bg-purple-500",
  "AB-": "bg-purple-700",
  "O+": "bg-amber-500",
  "O-": "bg-amber-700",
};

const BloodTypeInfo = () => {
  const [selectedType, setSelectedType] = useState("O+");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Know Your <span className="text-rose-600">Blood Type</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding blood types is essential for safe transfusions and
            efficient donation. Explore compatibility and interesting facts
            about each blood type.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs
            defaultValue="O+"
            className="w-full"
            onValueChange={setSelectedType}
          >
            <div className="bg-white rounded-t-lg p-4 shadow-sm">
              <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-1">
                {Object.keys(bloodTypeData).map((type) => (
                  <TabsTrigger
                    key={type}
                    value={type}
                    className="relative data-[state=active]:text-gray-900 data-[state=active]:shadow-sm transition-all"
                    style={{
                      backgroundColor:
                        selectedType === type
                          ? `var(--${bloodTypeColors[
                              type as keyof typeof bloodTypeColors
                            ].replace("bg-", "")})`
                          : "",
                    }}
                  >
                    <span className="font-bold">{type}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="bg-white rounded-b-lg shadow-md overflow-hidden">
              {Object.keys(bloodTypeData).map((type) => (
                <TabsContent key={type} value={type} className="p-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 md:p-8">
                          <div className="flex items-center mb-6">
                            <div
                              className={`w-12 h-12 rounded-full ${
                                bloodTypeColors[
                                  type as keyof typeof bloodTypeColors
                                ]
                              } flex items-center justify-center text-white font-bold text-xl mr-4`}
                            >
                              {type}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">
                                Type {type}
                              </h3>
                              <p className="text-gray-600">
                                <BarChart3 className="h-4 w-4 inline mr-1" />
                                Population:{" "}
                                {
                                  bloodTypeData[
                                    type as keyof typeof bloodTypeData
                                  ].percentage
                                }
                              </p>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                              <HeartPulse className="h-4 w-4 inline mr-1 text-rose-600" />
                              Key Facts
                            </h4>
                            <ul className="space-y-2">
                              {bloodTypeData[
                                type as keyof typeof bloodTypeData
                              ].facts.map((fact, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-rose-600 mr-2">•</span>
                                  <span className="text-gray-700">{fact}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                              <PieChart className="h-4 w-4 inline mr-1 text-rose-600" />
                              Compatibility
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-medium text-gray-900 mb-2">
                                  Can Donate To:
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {bloodTypeData[
                                    type as keyof typeof bloodTypeData
                                  ].canDonateTo.map((donateType) => (
                                    <Badge
                                      key={donateType}
                                      variant="outline"
                                      className="bg-green-50 border-green-200 text-green-700"
                                    >
                                      <Check className="h-3 w-3 mr-1" />
                                      {donateType}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 mb-2">
                                  Can Receive From:
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {bloodTypeData[
                                    type as keyof typeof bloodTypeData
                                  ].canReceiveFrom.map((receiveType) => (
                                    <Badge
                                      key={receiveType}
                                      variant="outline"
                                      className="bg-blue-50 border-blue-200 text-blue-700"
                                    >
                                      <Check className="h-3 w-3 mr-1" />
                                      {receiveType}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-6 md:p-8 flex flex-col justify-center">
                          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                              <Droplet className="h-5 w-5 mr-2 text-rose-600" />
                              Type {type} Donation Impact
                            </h4>

                            <div className="space-y-4">
                              <div>
                                <h5 className="font-medium text-gray-700 mb-1">
                                  In Demand For:
                                </h5>
                                <ul className="space-y-2">
                                  {type === "O-" && (
                                    <>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Emergency situations where blood type
                                          is unknown
                                        </span>
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Trauma victims requiring immediate
                                          transfusion
                                        </span>
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Newborn babies with blood disorders
                                        </span>
                                      </li>
                                    </>
                                  )}
                                  {type === "O+" && (
                                    <>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Most common emergency transfusions
                                        </span>
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Routine surgeries for Rh+ patients
                                        </span>
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Disaster response blood supplies
                                        </span>
                                      </li>
                                    </>
                                  )}
                                  {(type === "A+" || type === "A-") && (
                                    <>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Platelet donations for cancer
                                          treatments
                                        </span>
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Regular transfusions for chronic
                                          conditions
                                        </span>
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Heart surgeries and transplant
                                          procedures
                                        </span>
                                      </li>
                                    </>
                                  )}
                                  {(type === "B+" || type === "B-") && (
                                    <>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Sickle cell anemia treatments
                                        </span>
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Specific ethnic populations with
                                          higher B type rates
                                        </span>
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Regular blood exchange procedures
                                        </span>
                                      </li>
                                    </>
                                  )}
                                  {(type === "AB+" || type === "AB-") && (
                                    <>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Plasma donations for burn victims
                                        </span>
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Immune deficiency treatments
                                        </span>
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-rose-600 mr-2">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          Specialized blood component collection
                                        </span>
                                      </li>
                                    </>
                                  )}
                                </ul>
                              </div>

                              <div className="pt-2">
                                <h5 className="font-medium text-gray-700 mb-2">
                                  Current Status:
                                </h5>
                                <div className="flex items-center">
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                      className={`h-2.5 rounded-full ${
                                        type === "O-" || type === "AB-"
                                          ? "bg-red-600 w-[25%]"
                                          : type === "B-" || type === "A-"
                                          ? "bg-yellow-500 w-[50%]"
                                          : "bg-green-500 w-[75%]"
                                      }`}
                                    ></div>
                                  </div>
                                  <span className="ml-3 text-sm font-medium text-gray-700">
                                    {type === "O-" || type === "AB-"
                                      ? "Critical Need"
                                      : type === "B-" || type === "A-"
                                      ? "Moderate Supply"
                                      : "Adequate"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BloodTypeInfo;
