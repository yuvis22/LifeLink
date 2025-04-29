"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  MapPin,
  DropletIcon,
  Edit,
  User,
  Star,
  Settings,
  Award,
  HeartPulse,
  Clipboard,
  Bell,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [activeTab, setActiveTab] = useState("overview");
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (registered === "true") {
      setShowSuccess(true);

      // Clear the success message after 5 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [registered]);

  // Mock data for donations
  const donationHistory = [
    {
      id: 1,
      date: "April 10, 2025",
      center: "Central Blood Donation Center",
      type: "Whole Blood",
      status: "Completed",
    },
    {
      id: 2,
      date: "January 15, 2025",
      center: "Northside Blood Bank",
      type: "Platelets",
      status: "Completed",
    },
    {
      id: 3,
      date: "May 22, 2025",
      center: "Eastside Health Center",
      type: "Whole Blood",
      status: "Scheduled",
    },
  ];

  // Mock data for upcoming appointments
  const upcomingAppointments = [
    {
      id: 1,
      date: "May 22, 2025",
      time: "2:30 PM",
      center: "Eastside Health Center",
      type: "Whole Blood",
    },
  ];

  // If user data is still loading, show a loading state
  if (!isLoaded) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">Loading...</div>
    );
  }

  // If user is not signed in, they shouldn't be able to access this page
  // This is already handled by Clerk middleware, but adding this as a fallback
  if (!isSignedIn) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        Please sign in to view your profile
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-center"
          >
            <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
            <span>
              Registration successful! Thank you for becoming a donor.
            </span>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
          <Avatar className="h-20 w-20 border-4 border-white shadow-md">
            <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
            <AvatarFallback>{user.firstName?.[0] || "U"}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              {user.fullName || user.username}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge
                variant="outline"
                className="bg-rose-50 text-rose-700 border-rose-200"
              >
                <DropletIcon className="h-3 w-3 mr-1 fill-rose-600 stroke-rose-600" />
                O+ Blood Type
              </Badge>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                <Star className="h-3 w-3 mr-1 text-green-600" />
                Verified Donor
              </Badge>
            </div>
            <p className="text-gray-600">
              {user.emailAddresses[0].emailAddress}
            </p>
          </div>
          <div className="md:ml-auto">
            <Button variant="outline" size="sm" className="flex items-center">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        <Tabs
          defaultValue="overview"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger
              value="overview"
              className="flex gap-2 items-center justify-center"
            >
              <User className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger
              value="donations"
              className="flex gap-2 items-center justify-center"
            >
              <HeartPulse className="h-4 w-4" />
              <span>Donations</span>
            </TabsTrigger>
            <TabsTrigger
              value="appointments"
              className="flex gap-2 items-center justify-center"
            >
              <Calendar className="h-4 w-4" />
              <span>Appointments</span>
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="flex gap-2 items-center justify-center"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HeartPulse className="h-5 w-5 mr-2 text-rose-600" />
                    Donation Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-rose-600">2</p>
                      <p className="text-sm text-gray-600">Total Donations</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-rose-600">6</p>
                      <p className="text-sm text-gray-600">Lives Saved</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      Your last donation was on{" "}
                      <span className="font-medium">January 15, 2025</span>. You
                      are eligible to donate again.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                    Schedule Next Donation
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-rose-600" />
                    Upcoming Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.length > 0 ? (
                    <div>
                      <div className="flex gap-3 items-start">
                        <div className="bg-rose-100 p-2 rounded">
                          <Calendar className="h-6 w-6 text-rose-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {upcomingAppointments[0].date} at{" "}
                            {upcomingAppointments[0].time}
                          </p>
                          <p className="text-sm text-gray-600">
                            {upcomingAppointments[0].center}
                          </p>
                          <p className="text-sm text-gray-600">
                            {upcomingAppointments[0].type} donation
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-gray-600">No upcoming appointments</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <div className="flex gap-3 w-full">
                    <Button variant="outline" className="flex-1">
                      Reschedule
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Cancel
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-rose-600" />
                  Achievements
                </CardTitle>
                <CardDescription>
                  Milestones and badges earned through your donations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-rose-100 p-3 rounded-full mb-3">
                      <Award className="h-6 w-6 text-rose-600" />
                    </div>
                    <p className="font-medium text-gray-900 text-center">
                      First Donation
                    </p>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      Completed your first donation
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg opacity-50">
                    <div className="bg-gray-200 p-3 rounded-full mb-3">
                      <Award className="h-6 w-6 text-gray-400" />
                    </div>
                    <p className="font-medium text-gray-900 text-center">
                      Regular Donor
                    </p>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      Donate 5 times in a year
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg opacity-50">
                    <div className="bg-gray-200 p-3 rounded-full mb-3">
                      <Award className="h-6 w-6 text-gray-400" />
                    </div>
                    <p className="font-medium text-gray-900 text-center">
                      Life Saver
                    </p>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      Save 10+ lives through donations
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg opacity-50">
                    <div className="bg-gray-200 p-3 rounded-full mb-3">
                      <Award className="h-6 w-6 text-gray-400" />
                    </div>
                    <p className="font-medium text-gray-900 text-center">
                      Silver Donor
                    </p>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      Complete 10 donations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HeartPulse className="h-5 w-5 mr-2 text-rose-600" />
                  Donation History
                </CardTitle>
                <CardDescription>
                  Record of your previous blood donations
                </CardDescription>
              </CardHeader>
              <CardContent>
                {donationHistory.length > 0 ? (
                  <div className="space-y-4">
                    {donationHistory
                      .filter((d) => d.status === "Completed")
                      .map((donation) => (
                        <div
                          key={donation.id}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                                <p className="font-medium text-gray-900">
                                  {donation.date}
                                </p>
                              </div>
                              <p className="text-gray-600 mt-1 ml-6">
                                {donation.center}
                              </p>
                              <div className="flex items-center mt-2">
                                <Badge className="bg-green-50 text-green-700 border-green-200">
                                  {donation.status}
                                </Badge>
                                <Badge variant="outline" className="ml-2">
                                  {donation.type}
                                </Badge>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-rose-600"
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No donation history yet</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Clipboard className="h-4 w-4 mr-2" />
                  Download Donation Certificate
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-rose-600" />
                  Upcoming Appointments
                </CardTitle>
                <CardDescription>
                  Your scheduled blood donation appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                              <p className="font-medium text-gray-900">
                                {appointment.date} at {appointment.time}
                              </p>
                            </div>
                            <p className="text-gray-600 mt-1 ml-6">
                              {appointment.center}
                            </p>
                            <div className="flex items-center mt-2">
                              <Badge variant="outline">
                                {appointment.type}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No upcoming appointments</p>
                    <Button className="mt-4 bg-rose-600 hover:bg-rose-700 text-white">
                      Schedule Donation
                    </Button>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                  Schedule New Appointment
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-rose-600" />
                  Account Settings
                </CardTitle>
                <CardDescription>
                  Manage your profile and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      User Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Name</p>
                        <p className="font-medium">{user.fullName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <p className="font-medium">
                          {user.emailAddresses[0].emailAddress}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Blood Type</p>
                        <p className="font-medium">O+</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          Account Created
                        </p>
                        <p className="font-medium">
                          {new Date(user?.createdAt || "").toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Notifications
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-600">
                            Receive emails about your donations and appointments
                          </p>
                        </div>
                        <div className="bg-rose-600 rounded-full p-1">
                          <Bell className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">SMS Reminders</p>
                          <p className="text-sm text-gray-600">
                            Get text messages for upcoming appointments
                          </p>
                        </div>
                        <div className="bg-gray-200 rounded-full p-1">
                          <Bell className="h-4 w-4 text-gray-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Preferences
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Donation Reminders</p>
                          <p className="text-sm text-gray-600">
                            Get reminded when you&apos;re eligible to donate
                            again
                          </p>
                        </div>
                        <div className="bg-rose-600 rounded-full p-1">
                          <Calendar className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Emergency Requests</p>
                          <p className="text-sm text-gray-600">
                            Receive alerts for emergency blood donation needs
                          </p>
                        </div>
                        <div className="bg-rose-600 rounded-full p-1">
                          <HeartPulse className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
