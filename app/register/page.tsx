"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  dateOfBirth: z.date({
    required_error: "Date of birth is required.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be valid.",
  }),
  address: z.string().min(5, {
    message: "Address is required.",
  }),
  city: z.string().min(2, {
    message: "City is required.",
  }),
  state: z.string().min(2, {
    message: "State is required.",
  }),
  zipCode: z.string().min(5, {
    message: "ZIP code is required.",
  }),
  bloodType: z.string({
    required_error: "Blood type is required.",
  }),
  lastDonation: z.date().optional(),
  medicalConditions: z.string().optional(),
  emergencyContact: z.string().min(5, {
    message: "Emergency contact is required.",
  }),
  emergencyAvailable: z.boolean().default(false),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

export default function RegisterPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      bloodType: "",
      medicalConditions: "",
      emergencyContact: "",
      emergencyAvailable: false,
      termsAccepted: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Send the data to the API
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Redirect to profile page or confirmation page
      router.push("/profile?registered=true");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Here you could add toast notifications or other error handling
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await form.trigger([
        "firstName",
        "lastName",
        "dateOfBirth",
        "phone",
        "address",
        "city",
        "state",
        "zipCode",
      ]);
      if (isValid) setStep(2);
    } else if (step === 2) {
      const isValid = await form.trigger(["bloodType", "emergencyContact"]);
      if (isValid) setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Become a <span className="text-rose-600">Donor</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of life-savers. Register as a blood donor and
            help save lives.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center w-full max-w-xl mx-auto">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    stepNumber === step
                      ? "bg-rose-600 text-white"
                      : stepNumber < step
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {stepNumber < step ? "✓" : stepNumber}
                </div>
                <span
                  className={`text-sm mt-2 ${
                    stepNumber === step
                      ? "text-rose-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {stepNumber === 1
                    ? "Personal Info"
                    : stepNumber === 2
                    ? "Medical Info"
                    : "Confirmation"}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full max-w-xl mx-auto mt-2">
            <div className="h-1 flex">
              <div
                className="bg-green-500"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              ></div>
              <div className="bg-rose-600" style={{ width: "33.33%" }}></div>
              <div
                className="bg-gray-200"
                style={{ width: `${((3 - step) / 2) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle>
              {step === 1
                ? "Personal Information"
                : step === 2
                ? "Medical Information"
                : "Review & Confirm"}
            </CardTitle>
            <CardDescription>
              {step === 1
                ? "Please provide your personal details."
                : step === 2
                ? "Please provide your medical information."
                : "Please review your information and confirm."}
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of Birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={`w-full pl-3 text-left font-normal ${
                                    !field.value ? "text-muted-foreground" : ""
                                  }`}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                                captionLayout="buttons"
                                fromYear={1900}
                                toYear={new Date().getFullYear()}
                                defaultMonth={new Date(1990, 0)}
                                showOutsideDays={true}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Anytown" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                              <Input placeholder="CA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ZIP Code</FormLabel>
                            <FormControl>
                              <Input placeholder="12345" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="bloodType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Blood Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your blood type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="A+">A+</SelectItem>
                              <SelectItem value="A-">A-</SelectItem>
                              <SelectItem value="B+">B+</SelectItem>
                              <SelectItem value="B-">B-</SelectItem>
                              <SelectItem value="AB+">AB+</SelectItem>
                              <SelectItem value="AB-">AB-</SelectItem>
                              <SelectItem value="O+">O+</SelectItem>
                              <SelectItem value="O-">O-</SelectItem>
                              <SelectItem value="unknown">
                                I don&apos;t know
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastDonation"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Last Donation (if applicable)</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={`w-full pl-3 text-left font-normal ${
                                    !field.value ? "text-muted-foreground" : ""
                                  }`}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date > new Date()}
                                initialFocus
                                captionLayout="buttons"
                                fromYear={1900}
                                toYear={new Date().getFullYear()}
                                defaultMonth={new Date(2000, 0)}
                                showOutsideDays={true}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="medicalConditions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Medical Conditions (if any)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please list any medical conditions or medications that may affect your eligibility to donate."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="emergencyContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Emergency Contact</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Name and phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="emergencyAvailable"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Emergency Availability</FormLabel>
                            <p className="text-sm text-gray-500">
                              I am willing to be contacted for emergency blood
                              donation needs.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Personal Information
                        </h3>
                        <dl className="grid grid-cols-1 gap-2">
                          <div className="border-b border-gray-100 pb-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {form.watch("firstName")} {form.watch("lastName")}
                            </dd>
                          </div>
                          <div className="border-b border-gray-100 pb-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Date of Birth
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {form.watch("dateOfBirth")
                                ? format(form.watch("dateOfBirth"), "PPP")
                                : "Not provided"}
                            </dd>
                          </div>
                          <div className="border-b border-gray-100 pb-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Phone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {form.watch("phone")}
                            </dd>
                          </div>
                          <div className="border-b border-gray-100 pb-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {form.watch("address")}, {form.watch("city")},{" "}
                              {form.watch("state")} {form.watch("zipCode")}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Medical Information
                        </h3>
                        <dl className="grid grid-cols-1 gap-2">
                          <div className="border-b border-gray-100 pb-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Blood Type
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {form.watch("bloodType") || "Not provided"}
                            </dd>
                          </div>
                          <div className="border-b border-gray-100 pb-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Last Donation
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {form.watch("lastDonation") instanceof Date
                                ? format(
                                    form.watch("lastDonation") as Date,
                                    "PPP"
                                  )
                                : "No previous donation"}
                            </dd>
                          </div>
                          <div className="border-b border-gray-100 pb-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Medical Conditions
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {form.watch("medicalConditions") ||
                                "None provided"}
                            </dd>
                          </div>
                          <div className="border-b border-gray-100 pb-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Emergency Contact
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {form.watch("emergencyContact")}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">
                              Emergency Availability
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {form.watch("emergencyAvailable") ? "Yes" : "No"}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start space-x-2">
                        <Info className="h-5 w-5 text-rose-600 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Important Information
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            By registering as a donor, you are agreeing to be
                            contacted for blood donation opportunities. You may
                            be asked for additional information during the
                            donation process.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="eligibility">
                        <AccordionTrigger className="text-sm font-medium text-gray-900">
                          Eligibility Requirements
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              You must be at least 17 years old (16 with
                              parental consent in some states)
                            </li>
                            <li>You must weigh at least 110 pounds</li>
                            <li>You must be in good general health</li>
                            <li>
                              You must have not donated blood in the last 56
                              days
                            </li>
                            <li>
                              Additional restrictions may apply for certain
                              medical conditions or travel history
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Terms and Conditions</FormLabel>
                            <p className="text-sm text-gray-500">
                              I agree to the terms of service and privacy
                              policy. I confirm that all information provided is
                              accurate and complete.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-rose-600 hover:bg-rose-700 text-white"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-rose-600 hover:bg-rose-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Complete Registration"}
                  </Button>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
}
