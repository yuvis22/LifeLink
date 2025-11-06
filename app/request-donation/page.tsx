"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Heart,
  AlertCircle,
  Building2,
  FileText,
  CheckCircle2,
  ArrowLeft,
  Droplet,
} from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface DonorInfo {
  _id: string;
  firstName: string;
  lastName: string;
  bloodType: string;
  phone: string;
  city: string;
  state: string;
  address: string;
  emergencyAvailable: boolean;
}

const RequestDonationPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donorInfo, setDonorInfo] = useState<DonorInfo | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    // Requester information
    requesterFirstName: "",
    requesterLastName: "",
    requesterEmail: "",
    requesterPhone: "",
    relationshipToPatient: "",

    // Patient information
    patientFirstName: "",
    patientLastName: "",
    patientBloodType: "",

    // Request details
    urgencyLevel: "",
    neededDate: undefined as Date | undefined,
    neededTime: "",
    medicalFacility: "",
    facilityAddress: "",
    facilityCity: "",
    facilityState: "",
    facilityZipCode: "",
    reason: "",
    additionalNotes: "",

    // Terms
    termsAccepted: false,
  });

  // Fetch donor info from URL params if available
  useEffect(() => {
    const donorId = searchParams.get("donorId");
    if (donorId) {
      // Fetch donor information
      fetch(`/api/donors`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.donors) {
            const donor = data.donors.find((d: any) => d._id === donorId);
            if (donor) {
              setDonorInfo({
                _id: donor._id,
                firstName: donor.firstName,
                lastName: donor.lastName,
                bloodType: donor.bloodType,
                phone: donor.phone,
                city: donor.city,
                state: donor.state,
                address: donor.address,
                emergencyAvailable: donor.emergencyAvailable,
              });
              // Pre-fill patient blood type if donor is selected
              setFormData((prev) => ({
                ...prev,
                patientBloodType: donor.bloodType,
              }));
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching donor:", error);
        });
    }
  }, [searchParams]);

  const handleInputChange = (
    field: string,
    value: string | boolean | Date | undefined
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validation
      if (!formData.requesterFirstName || !formData.requesterLastName) {
        toast.error("Please enter your name");
        return;
      }
      if (!formData.requesterEmail || !formData.requesterPhone) {
        toast.error("Please enter your contact information");
        return;
      }
      if (!formData.patientFirstName || !formData.patientLastName) {
        toast.error("Please enter patient information");
        return;
      }
      if (!formData.patientBloodType) {
        toast.error("Please specify the blood type needed");
        return;
      }
      if (!formData.urgencyLevel) {
        toast.error("Please select urgency level");
        return;
      }
      if (!formData.medicalFacility) {
        toast.error("Please enter medical facility information");
        return;
      }
      if (!formData.termsAccepted) {
        toast.error("Please accept the terms and conditions");
        return;
      }

      const requestData = {
        donorId: donorInfo?._id || null,
        donorName: donorInfo
          ? `${donorInfo.firstName} ${donorInfo.lastName}`
          : null,
        requester: {
          firstName: formData.requesterFirstName,
          lastName: formData.requesterLastName,
          email: formData.requesterEmail,
          phone: formData.requesterPhone,
          relationshipToPatient: formData.relationshipToPatient,
        },
        patient: {
          firstName: formData.patientFirstName,
          lastName: formData.patientLastName,
          bloodType: formData.patientBloodType,
        },
        requestDetails: {
          urgencyLevel: formData.urgencyLevel,
          neededDate: formData.neededDate,
          neededTime: formData.neededTime,
          medicalFacility: formData.medicalFacility,
          facilityAddress: formData.facilityAddress,
          facilityCity: formData.facilityCity,
          facilityState: formData.facilityState,
          facilityZipCode: formData.facilityZipCode,
          reason: formData.reason,
          additionalNotes: formData.additionalNotes,
        },
      };

      const response = await fetch("/api/donation-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit donation request");
      }

      toast.success("Donation request submitted successfully!", {
        description: "We'll contact you and the donor shortly.",
        duration: 5000,
      });

      // Redirect to confirmation or back to find-donor
      setTimeout(() => {
        router.push("/find-donor?requested=true");
      }, 2000);
    } catch (error: any) {
      console.error("Error submitting request:", error);
      toast.error(error.message || "Failed to submit donation request");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/find-donor"
            className="inline-flex items-center text-sm text-gray-600 hover:text-rose-600 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Find Donor
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Request Blood Donation
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to request a blood donation. We'll connect
            you with the donor and coordinate the donation process.
          </p>
        </div>

        {/* Donor Information Card (if donor is selected) */}
        {donorInfo && (
          <Card className="mb-6 border-rose-200 bg-rose-50">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Heart className="h-5 w-5 mr-2 text-rose-600" />
                Selected Donor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="font-semibold text-gray-900">
                    {donorInfo.firstName} {donorInfo.lastName}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-rose-100 text-rose-700 border-rose-200">
                      <Droplet className="h-3 w-3 mr-1 fill-current" />
                      {donorInfo.bloodType}
                    </Badge>
                    {donorInfo.emergencyAvailable && (
                      <Badge
                        variant="outline"
                        className="bg-rose-50 text-rose-700 border-rose-200"
                      >
                        Emergency Available
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    <MapPin className="h-3 w-3 inline mr-1" />
                    {donorInfo.city}, {donorInfo.state}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setDonorInfo(null);
                    router.push("/find-donor");
                  }}
                >
                  Change Donor
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Requester Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-rose-600" />
                  Your Information
                </CardTitle>
                <CardDescription>
                  Please provide your contact details so we can reach you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="requesterFirstName">First Name *</Label>
                    <Input
                      id="requesterFirstName"
                      placeholder="John"
                      value={formData.requesterFirstName}
                      onChange={(e) =>
                        handleInputChange("requesterFirstName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requesterLastName">Last Name *</Label>
                    <Input
                      id="requesterLastName"
                      placeholder="Doe"
                      value={formData.requesterLastName}
                      onChange={(e) =>
                        handleInputChange("requesterLastName", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="requesterEmail">Email *</Label>
                    <Input
                      id="requesterEmail"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.requesterEmail}
                      onChange={(e) =>
                        handleInputChange("requesterEmail", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requesterPhone">Phone *</Label>
                    <Input
                      id="requesterPhone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.requesterPhone}
                      onChange={(e) =>
                        handleInputChange("requesterPhone", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="relationshipToPatient">
                    Relationship to Patient
                  </Label>
                  <Select
                    value={formData.relationshipToPatient}
                    onValueChange={(value) =>
                      handleInputChange("relationshipToPatient", value)
                    }
                  >
                    <SelectTrigger id="relationshipToPatient">
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self">Self</SelectItem>
                      <SelectItem value="family">Family Member</SelectItem>
                      <SelectItem value="friend">Friend</SelectItem>
                      <SelectItem value="medical-professional">
                        Medical Professional
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Patient Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-rose-600" />
                  Patient Information
                </CardTitle>
                <CardDescription>
                  Details about the person who needs the blood donation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patientFirstName">First Name *</Label>
                    <Input
                      id="patientFirstName"
                      placeholder="Jane"
                      value={formData.patientFirstName}
                      onChange={(e) =>
                        handleInputChange("patientFirstName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patientLastName">Last Name *</Label>
                    <Input
                      id="patientLastName"
                      placeholder="Smith"
                      value={formData.patientLastName}
                      onChange={(e) =>
                        handleInputChange("patientLastName", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patientBloodType">Blood Type Needed *</Label>
                  <Select
                    value={formData.patientBloodType}
                    onValueChange={(value) =>
                      handleInputChange("patientBloodType", value)
                    }
                  >
                    <SelectTrigger id="patientBloodType">
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
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
              </CardContent>
            </Card>

            {/* Request Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-rose-600" />
                  Request Details
                </CardTitle>
                <CardDescription>
                  When and where the donation is needed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="urgencyLevel">Urgency Level *</Label>
                  <Select
                    value={formData.urgencyLevel}
                    onValueChange={(value) =>
                      handleInputChange("urgencyLevel", value)
                    }
                  >
                    <SelectTrigger id="urgencyLevel">
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">
                        <div className="flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2 text-red-600" />
                          Emergency - Immediate need
                        </div>
                      </SelectItem>
                      <SelectItem value="urgent">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-orange-600" />
                          Urgent - Within 24 hours
                        </div>
                      </SelectItem>
                      <SelectItem value="scheduled">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-2 text-blue-600" />
                          Scheduled - Planned procedure
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="neededDate">Date Needed</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.neededDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.neededDate ? (
                            format(formData.neededDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          selected={formData.neededDate}
                          onDateSelect={(date) =>
                            handleInputChange("neededDate", date)
                          }
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="neededTime">Time Preference</Label>
                    <Select
                      value={formData.neededTime}
                      onValueChange={(value) =>
                        handleInputChange("neededTime", value)
                      }
                    >
                      <SelectTrigger id="neededTime">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">
                          Morning (8 AM - 12 PM)
                        </SelectItem>
                        <SelectItem value="afternoon">
                          Afternoon (12 PM - 5 PM)
                        </SelectItem>
                        <SelectItem value="evening">
                          Evening (5 PM - 8 PM)
                        </SelectItem>
                        <SelectItem value="anytime">Anytime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label
                    htmlFor="medicalFacility"
                    className="flex items-center"
                  >
                    <Building2 className="h-4 w-4 mr-2" />
                    Medical Facility / Hospital *
                  </Label>
                  <Input
                    id="medicalFacility"
                    placeholder="Hospital Name"
                    value={formData.medicalFacility}
                    onChange={(e) =>
                      handleInputChange("medicalFacility", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="facilityAddress">Facility Address</Label>
                  <Input
                    id="facilityAddress"
                    placeholder="Street address"
                    value={formData.facilityAddress}
                    onChange={(e) =>
                      handleInputChange("facilityAddress", e.target.value)
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="facilityCity">City</Label>
                    <Input
                      id="facilityCity"
                      placeholder="City"
                      value={formData.facilityCity}
                      onChange={(e) =>
                        handleInputChange("facilityCity", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facilityState">State</Label>
                    <Input
                      id="facilityState"
                      placeholder="State"
                      value={formData.facilityState}
                      onChange={(e) =>
                        handleInputChange("facilityState", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facilityZipCode">ZIP Code</Label>
                    <Input
                      id="facilityZipCode"
                      placeholder="ZIP"
                      value={formData.facilityZipCode}
                      onChange={(e) =>
                        handleInputChange("facilityZipCode", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Request</Label>
                  <Textarea
                    id="reason"
                    placeholder="e.g., Scheduled surgery, emergency procedure, ongoing treatment..."
                    value={formData.reason}
                    onChange={(e) =>
                      handleInputChange("reason", e.target.value)
                    }
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder="Any additional information that might be helpful..."
                    value={formData.additionalNotes}
                    onChange={(e) =>
                      handleInputChange("additionalNotes", e.target.value)
                    }
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) =>
                      handleInputChange("termsAccepted", checked)
                    }
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I understand that this is a request for a blood donation and
                    that the donor will be contacted to confirm their
                    availability. I agree to the{" "}
                    <Link
                      href="/resources/terms-of-service"
                      className="text-rose-600 hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/resources/privacy-policy"
                      className="text-rose-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    . *
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Heart className="h-4 w-4 mr-2" />
                    Submit Request
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDonationPage;
