"use client";

import { useState } from "react";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Info,
  CheckCircle2,
  User,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const bloodCenters = [
  {
    id: 1,
    name: "Central Blood Donation Center",
    address: "123 Main Street, Downtown",
    hours: "Mon-Fri: 8AM-7PM, Sat: 9AM-5PM",
    distance: "2.3 miles",
    availableSlots: 12,
    image:
      "https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Northside Blood Bank",
    address: "456 Park Avenue, Northside",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-4PM",
    distance: "3.7 miles",
    availableSlots: 8,
    image:
      "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Eastside Health Center",
    address: "789 Medical Drive, Eastside",
    hours: "Mon-Fri: 7AM-9PM",
    distance: "1.5 miles",
    availableSlots: 15,
    image:
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
];

const SchedulePage = () => {
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string | null>(null);
  const [donationType, setDonationType] = useState("whole-blood");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bloodType: "",
    previousDonor: false,
    questions: {
      medication: false,
      recentIllness: false,
      recentTravel: false,
    },
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleCenterSelect = (centerId: number) => {
    setSelectedCenter(centerId);
  };

  const handleFormChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleQuestionChange = (question: string, value: boolean) => {
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        [question]: value,
      },
    });
  };

  const handleSubmit = () => {
    alert("Appointment scheduled successfully!");
    setStep(4);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Schedule a Blood Donation
        </h1>
        <p className="text-lg text-gray-600">
          Choose a donation center, date, and time that works for you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex flex-col items-center ${
                  stepNumber !== 4 ? "w-1/4" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step === stepNumber
                      ? "bg-rose-600 text-white"
                      : step > stepNumber
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > stepNumber ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                <span
                  className={`text-sm mt-2 ${
                    step === stepNumber
                      ? "text-rose-600 font-medium"
                      : step > stepNumber
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                >
                  {stepNumber === 1 && "Location"}
                  {stepNumber === 2 && "Details"}
                  {stepNumber === 3 && "Review"}
                  {stepNumber === 4 && "Confirmed"}
                </span>
                {stepNumber < 4 && (
                  <div className="hidden sm:block h-0.5 w-full bg-gray-200 mt-4">
                    <div
                      className={`h-full bg-green-500 ${
                        step > stepNumber ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Select Donation Center and Date/Time */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-rose-600" />
                    Donation Centers
                  </CardTitle>
                  <CardDescription>Select a center near you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bloodCenters.map((center) => (
                    <div
                      key={center.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedCenter === center.id
                          ? "border-rose-600 bg-rose-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleCenterSelect(center.id)}
                    >
                      <div className="flex items-start">
                        <input
                          type="radio"
                          checked={selectedCenter === center.id}
                          onChange={() => handleCenterSelect(center.id)}
                          className="mt-1"
                        />
                        <div className="ml-3">
                          <h4 className="font-medium text-gray-900">
                            {center.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {center.address}
                          </p>
                          <div className="flex items-center mt-2 text-xs text-gray-500">
                            <Badge variant="outline" className="bg-gray-50">
                              {center.distance}
                            </Badge>
                            <span className="mx-2">•</span>
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700"
                            >
                              {center.availableSlots} slots available
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2 text-rose-600" />
                    Select Date &amp; Time
                  </CardTitle>
                  <CardDescription>
                    Choose when you'd like to donate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label className="mb-2 block">Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) =>
                              date < new Date() ||
                              date >
                                new Date(
                                  new Date().setMonth(new Date().getMonth() + 3)
                                )
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label className="mb-2 block">Time</Label>
                      <Select onValueChange={setTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="sm:col-span-2 pt-2">
                      <Label className="mb-2 block">Donation Type</Label>
                      <RadioGroup
                        value={donationType}
                        onValueChange={setDonationType}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                      >
                        <div
                          className={`border rounded-lg p-3 relative ${
                            donationType === "whole-blood"
                              ? "border-rose-600"
                              : "border-gray-200"
                          }`}
                        >
                          <RadioGroupItem
                            value="whole-blood"
                            id="whole-blood"
                            className="absolute top-3 left-3"
                          />
                          <label
                            htmlFor="whole-blood"
                            className="block pl-8 cursor-pointer"
                          >
                            <span className="font-medium text-gray-900">
                              Whole Blood
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              45-60 minutes
                            </p>
                          </label>
                        </div>

                        <div
                          className={`border rounded-lg p-3 relative ${
                            donationType === "platelets"
                              ? "border-rose-600"
                              : "border-gray-200"
                          }`}
                        >
                          <RadioGroupItem
                            value="platelets"
                            id="platelets"
                            className="absolute top-3 left-3"
                          />
                          <label
                            htmlFor="platelets"
                            className="block pl-8 cursor-pointer"
                          >
                            <span className="font-medium text-gray-900">
                              Platelets
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              2-3 hours
                            </p>
                          </label>
                        </div>

                        <div
                          className={`border rounded-lg p-3 relative ${
                            donationType === "plasma"
                              ? "border-rose-600"
                              : "border-gray-200"
                          }`}
                        >
                          <RadioGroupItem
                            value="plasma"
                            id="plasma"
                            className="absolute top-3 left-3"
                          />
                          <label
                            htmlFor="plasma"
                            className="block pl-8 cursor-pointer"
                          >
                            <span className="font-medium text-gray-900">
                              Plasma
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              1-2 hours
                            </p>
                          </label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {selectedCenter && (
                    <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Selected Location
                      </h4>
                      <div className="flex">
                        <div className="w-24 h-24 rounded-md overflow-hidden mr-4">
                          <img
                            src={
                              bloodCenters.find((c) => c.id === selectedCenter)
                                ?.image
                            }
                            alt="Donation center"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">
                            {
                              bloodCenters.find((c) => c.id === selectedCenter)
                                ?.name
                            }
                          </p>
                          <p className="text-sm text-gray-600">
                            {
                              bloodCenters.find((c) => c.id === selectedCenter)
                                ?.address
                            }
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            <Clock className="h-3 w-3 inline mr-1" />
                            {
                              bloodCenters.find((c) => c.id === selectedCenter)
                                ?.hours
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="justify-end">
                  <Button
                    onClick={handleNextStep}
                    disabled={!selectedCenter || !date || !time}
                    className="bg-rose-600 hover:bg-rose-700 text-white"
                  >
                    Continue
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}

        {/* Step 2: Personal Information and Eligibility */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-rose-600" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Tell us about yourself for the donation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="personal">Personal Details</TabsTrigger>
                  <TabsTrigger value="eligibility">
                    Eligibility Check
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="personal" className="pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleFormChange("firstName", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleFormChange("lastName", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleFormChange("email", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleFormChange("phone", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="blood-type">Blood Type (if known)</Label>
                      <Select
                        value={formData.bloodType}
                        onValueChange={(value) =>
                          handleFormChange("bloodType", value)
                        }
                      >
                        <SelectTrigger id="blood-type">
                          <SelectValue placeholder="Select blood type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unknown">Unknown</SelectItem>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="previous-donor"
                        checked={formData.previousDonor}
                        onCheckedChange={(checked) => {
                          if (typeof checked === "boolean") {
                            handleFormChange("previousDonor", checked);
                          }
                        }}
                      />
                      <label
                        htmlFor="previous-donor"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I have donated blood before
                      </label>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="eligibility" className="pt-4">
                  <div className="space-y-4">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                      <div className="flex">
                        <AlertCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-amber-800 mb-1">
                            Important Information
                          </h4>
                          <p className="text-sm text-amber-700">
                            Please answer these questions honestly to determine
                            your eligibility to donate blood. Final eligibility
                            will be determined during your pre-donation
                            screening.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg divide-y">
                      <div className="p-4">
                        <div className="flex items-start">
                          <Checkbox
                            id="medication"
                            className="mt-1"
                            checked={formData.questions.medication}
                            onCheckedChange={(checked) => {
                              if (typeof checked === "boolean") {
                                handleQuestionChange("medication", checked);
                              }
                            }}
                          />
                          <div className="ml-3">
                            <label
                              htmlFor="medication"
                              className="font-medium text-gray-900"
                            >
                              Are you currently taking any medication?
                            </label>
                            <p className="text-sm text-gray-500 mt-1">
                              Including prescription, over-the-counter, and
                              herbal medications
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-start">
                          <Checkbox
                            id="illness"
                            className="mt-1"
                            checked={formData.questions.recentIllness}
                            onCheckedChange={(checked) => {
                              if (typeof checked === "boolean") {
                                handleQuestionChange("recentIllness", checked);
                              }
                            }}
                          />
                          <div className="ml-3">
                            <label
                              htmlFor="illness"
                              className="font-medium text-gray-900"
                            >
                              Have you been ill in the past 4 weeks?
                            </label>
                            <p className="text-sm text-gray-500 mt-1">
                              Including cold, flu, fever, or other infectious
                              diseases
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-start">
                          <Checkbox
                            id="travel"
                            className="mt-1"
                            checked={formData.questions.recentTravel}
                            onCheckedChange={(checked) => {
                              if (typeof checked === "boolean") {
                                handleQuestionChange("recentTravel", checked);
                              }
                            }}
                          />
                          <div className="ml-3">
                            <label
                              htmlFor="travel"
                              className="font-medium text-gray-900"
                            >
                              Have you traveled outside the country in the past
                              3 months?
                            </label>
                            <p className="text-sm text-gray-500 mt-1">
                              Certain travel destinations may affect eligibility
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="eligibility">
                        <AccordionTrigger className="text-rose-600">
                          View Full Eligibility Requirements
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm text-gray-600">
                            <p>
                              <strong>Basic Requirements:</strong>
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>
                                Be at least 17 years old (16 with parental
                                consent in some states)
                              </li>
                              <li>Weigh at least 110 pounds</li>
                              <li>
                                Be in good general health and feeling well
                              </li>
                            </ul>

                            <p className="pt-2">
                              <strong>Waiting Periods:</strong>
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>
                                8 weeks since your last whole blood donation
                              </li>
                              <li>7 days since your last platelet donation</li>
                              <li>16 weeks after pregnancy</li>
                              <li>
                                3 months after getting a tattoo or piercing from
                                an unlicensed facility
                              </li>
                            </ul>

                            <p className="pt-2">
                              <em>
                                Note: This is not a complete list. Additional
                                eligibility criteria will be assessed during
                                your pre-donation screening.
                              </em>
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                disabled={
                  !formData.firstName ||
                  !formData.lastName ||
                  !formData.email ||
                  !formData.phone
                }
                className="bg-rose-600 hover:bg-rose-700 text-white"
              >
                Continue
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 3: Review and Confirm */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="h-5 w-5 mr-2 text-rose-600" />
                Review Your Appointment
              </CardTitle>
              <CardDescription>
                Please confirm your donation details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                      Donation Details
                    </h3>
                    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex">
                          <CalendarIcon className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <p className="text-xs text-gray-500">Date & Time</p>
                            <p className="font-medium text-gray-900">
                              {date ? format(date, "MMMM d, yyyy") : ""} at{" "}
                              {time}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border-b border-gray-200">
                        <div className="flex">
                          <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <p className="text-xs text-gray-500">Location</p>
                            <p className="font-medium text-gray-900">
                              {selectedCenter
                                ? bloodCenters.find(
                                    (c) => c.id === selectedCenter
                                  )?.name
                                : ""}
                            </p>
                            <p className="text-sm text-gray-600">
                              {selectedCenter
                                ? bloodCenters.find(
                                    (c) => c.id === selectedCenter
                                  )?.address
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex">
                          <CalendarIcon className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <p className="text-xs text-gray-500">
                              Donation Type
                            </p>
                            <p className="font-medium text-gray-900">
                              {donationType === "whole-blood"
                                ? "Whole Blood"
                                : donationType === "platelets"
                                ? "Platelets"
                                : "Plasma"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                      Personal Information
                    </h3>
                    <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-gray-500">Name</p>
                          <p className="font-medium text-gray-900">
                            {formData.firstName} {formData.lastName}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500">
                            Contact Information
                          </p>
                          <p className="font-medium text-gray-900">
                            {formData.email}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formData.phone}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500">Blood Type</p>
                          <p className="font-medium text-gray-900">
                            {formData.bloodType || "Unknown"}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500">
                            Previous Donor
                          </p>
                          <p className="font-medium text-gray-900">
                            {formData.previousDonor ? "Yes" : "No"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                  <h3 className="font-medium text-rose-900 mb-2">
                    Important Information
                  </h3>
                  <ul className="space-y-2 text-sm text-rose-700">
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2">•</span>
                      Please arrive 15 minutes before your scheduled
                      appointment.
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2">•</span>
                      Bring a valid photo ID and list of medications you're
                      currently taking.
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2">•</span>
                      Eat a healthy meal and drink plenty of water before your
                      donation.
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2">•</span>
                      You may cancel or reschedule your appointment up to 24
                      hours in advance.
                    </li>
                  </ul>
                </div>

                <div className="flex items-start">
                  <Checkbox id="terms" className="mt-1" />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                    I confirm that the information provided is accurate. I
                    understand that I will undergo a health screening at the
                    donation center to determine my final eligibility.
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="bg-rose-600 hover:bg-rose-700 text-white"
              >
                Confirm Appointment
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <Card className="text-center">
            <CardContent className="pt-10 pb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Appointment Confirmed!
              </h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Your blood donation appointment has been successfully scheduled.
                A confirmation email has been sent to {formData.email}.
              </p>

              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 max-w-lg mx-auto mb-6">
                <div className="text-left">
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Date & Time</p>
                      <p className="font-medium text-gray-900">
                        {date ? format(date, "MMMM d, yyyy") : ""} at {time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Confirmation #</p>
                      <p className="font-medium text-gray-900">
                        LD
                        {Math.floor(Math.random() * 10000)
                          .toString()
                          .padStart(4, "0")}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">
                      {selectedCenter
                        ? bloodCenters.find((c) => c.id === selectedCenter)
                            ?.name
                        : ""}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedCenter
                        ? bloodCenters.find((c) => c.id === selectedCenter)
                            ?.address
                        : ""}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Donation Type</p>
                    <p className="font-medium text-gray-900">
                      {donationType === "whole-blood"
                        ? "Whole Blood"
                        : donationType === "platelets"
                        ? "Platelets"
                        : "Plasma"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button variant="outline">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Add to Calendar
                </Button>
                <Button variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Set Reminder
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center pb-10">
              <p className="text-sm text-gray-600 mb-4">
                Need to make changes? You can manage your appointments in your
                profile.
              </p>
              <div className="flex gap-4">
                <Button variant="outline">View All Appointments</Button>
                <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                  Return to Home
                </Button>
              </div>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
