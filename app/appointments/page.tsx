"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Droplets,
  Trash2,
  ArrowLeft,
  Bell,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ReminderDialog } from "@/components/reminder-dialog";

interface Appointment {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bloodType: string;
  previousDonor: boolean;
  appointmentDate: string;
  appointmentTime: string;
  donationType: string;
  centerId: number;
  centerName: string;
  centerAddress: string;
  questions: {
    medication: boolean;
    recentIllness: boolean;
    recentTravel: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [reminders, setReminders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setError(null);
        // Get any existing reminders
        const savedReminders = JSON.parse(
          localStorage.getItem("reminders") || "[]"
        );
        setReminders(savedReminders);

        // Fetch appointments from API
        const response = await fetch("/api/appointments");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch appointments");
        }

        setAppointments(data.appointments);
      } catch (error: any) {
        console.error("Error fetching appointments:", error);
        setError(
          error.message ||
            "Failed to load appointments. Please try again later."
        );
        toast.error("Failed to load appointments", {
          description: error.message || "Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleCancelAppointment = async (id: string) => {
    if (confirm("Are you sure you want to cancel this appointment?")) {
      try {
        const response = await fetch(`/api/appointments/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Failed to cancel appointment");
        }

        setAppointments(appointments.filter((app) => app._id !== id));
        toast.success("Appointment cancelled", {
          description: "Your appointment has been successfully cancelled.",
        });
      } catch (error: any) {
        console.error("Error cancelling appointment:", error);
        toast.error("Failed to cancel appointment", {
          description: error.message || "Please try again later.",
        });
      }
    }
  };

  const handleDeleteReminder = (index: number) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
    localStorage.setItem("reminders", JSON.stringify(updatedReminders));
    toast.success("Reminder deleted", {
      description: "Your reminder has been removed.",
    });
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center py-12">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-4 text-gray-600">Loading your appointments...</p>
        </div>
      );
    }

    if (error) {
      return (
        <Card>
          <CardContent className="py-10">
            <div className="text-center">
              <AlertCircle className="mx-auto h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Error Loading Appointments
              </h3>
              <p className="text-gray-600 mb-6">{error}</p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (appointments.length === 0) {
      return (
        <Card>
          <CardContent className="py-10">
            <div className="text-center">
              <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Upcoming Appointments
              </h3>
              <p className="text-gray-600 mb-6">
                You don&apos;t have any scheduled blood donations.
              </p>
              <Button asChild>
                <Link href="/schedule">Schedule a Donation</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Upcoming Appointments
        </h2>
        {appointments.map((appointment) => (
          <Card key={appointment._id} className="overflow-hidden">
            <CardHeader className="bg-rose-50 pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="bg-rose-100 text-rose-800 mb-2">
                    {appointment.donationType === "whole-blood"
                      ? "Whole Blood"
                      : appointment.donationType === "platelets"
                      ? "Platelets"
                      : "Plasma"}
                  </Badge>
                  <CardTitle className="text-xl">
                    {format(
                      new Date(appointment.appointmentDate),
                      "MMMM d, yyyy"
                    )}
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-gray-700">
                    {appointment.appointmentTime}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Confirmation #</p>
                  <p className="font-medium">
                    LD{appointment._id.slice(-4).toUpperCase()}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-3">
                <div className="flex">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{appointment.centerName}</p>
                    <p className="text-gray-600">{appointment.centerAddress}</p>
                  </div>
                </div>

                <div className="flex">
                  <User className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Donor Information</p>
                    <p className="text-gray-600">
                      {appointment.firstName} {appointment.lastName}
                    </p>
                    <p className="text-sm text-gray-500">
                      Blood Type: {appointment.bloodType}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <Droplets className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Donation Type</p>
                    <p className="text-gray-600">
                      {appointment.donationType === "whole-blood"
                        ? "Whole Blood"
                        : appointment.donationType === "platelets"
                        ? "Platelets"
                        : "Plasma"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="justify-between py-4">
              <Button
                variant="outline"
                onClick={() => handleCancelAppointment(appointment._id)}
              >
                Cancel Appointment
              </Button>
              <div className="flex gap-2">
                <ReminderDialog
                  appointmentDate={new Date(appointment.appointmentDate)}
                  appointmentTime={appointment.appointmentTime}
                  trigger={
                    <Button variant="outline" size="sm">
                      <Bell className="h-4 w-4 mr-2" />
                      Add Reminder
                    </Button>
                  }
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">My Appointments</h1>
        </div>

        <div className="space-y-8">
          {renderContent()}

          {!error && reminders.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                My Reminders
              </h2>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {reminders.map((reminder, index) => (
                      <div
                        key={index}
                        className="p-4 flex justify-between items-center"
                      >
                        <div className="flex items-start">
                          <Bell className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">
                              {format(parseISO(reminder.date), "MMMM d, yyyy")}{" "}
                              at {reminder.time}
                            </p>
                            <p className="text-sm text-gray-600">
                              Reminder:{" "}
                              {reminder.reminderTime === "1hour"
                                ? "1 hour before"
                                : reminder.reminderTime === "3hours"
                                ? "3 hours before"
                                : reminder.reminderTime === "1day"
                                ? "1 day before"
                                : "2 days before"}
                            </p>
                            {reminder.reminderMethod === "email" && (
                              <p className="text-sm text-gray-600">
                                Via email: {reminder.email}
                              </p>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteReminder(index)}
                        >
                          <Trash2 className="h-4 w-4 text-gray-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
