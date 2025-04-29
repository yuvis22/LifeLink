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
  id: string;
  date: string;
  time: string;
  location: string;
  address: string;
  donationType: string;
  confirmationNumber: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [reminders, setReminders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be fetched from an API
    // For demo, we'll use local storage
    try {
      // Get any existing reminders
      const savedReminders = JSON.parse(
        localStorage.getItem("reminders") || "[]"
      );
      setReminders(savedReminders);

      // Demo appointments - would normally come from a backend
      const demoAppointments: Appointment[] = [
        {
          id: "appt-1234",
          date: "2023-12-15",
          time: "10:30 AM",
          location: "Central Blood Donation Center",
          address: "123 Main Street, Downtown",
          donationType: "Whole Blood",
          confirmationNumber: "LD5482",
        },
      ];

      // Use setTimeout to simulate a network request
      setTimeout(() => {
        setAppointments(demoAppointments);
        setLoading(false);
      }, 800);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setLoading(false);
    }
  }, []);

  const handleCancelAppointment = (id: string) => {
    // In a real app, this would call an API
    if (confirm("Are you sure you want to cancel this appointment?")) {
      const updatedAppointments = appointments.filter((app) => app.id !== id);
      setAppointments(updatedAppointments);
      toast.success("Appointment cancelled", {
        description: "Your appointment has been successfully cancelled.",
      });
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

        {loading ? (
          <div className="text-center py-12">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-4 text-gray-600">Loading your appointments...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {appointments.length === 0 ? (
              <Card>
                <CardContent className="py-10">
                  <div className="text-center">
                    <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No Upcoming Appointments
                    </h3>
                    <p className="text-gray-600 mb-6">
                      You don't have any scheduled blood donations.
                    </p>
                    <Button asChild>
                      <Link href="/schedule">Schedule a Donation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Upcoming Appointments
                </h2>
                {appointments.map((appointment) => (
                  <Card key={appointment.id} className="overflow-hidden">
                    <CardHeader className="bg-rose-50 pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge className="bg-rose-100 text-rose-800 mb-2">
                            {appointment.donationType}
                          </Badge>
                          <CardTitle className="text-xl">
                            {format(parseISO(appointment.date), "MMMM d, yyyy")}
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-gray-700">
                            {appointment.time}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            Confirmation #
                          </p>
                          <p className="font-medium">
                            {appointment.confirmationNumber}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid gap-3">
                        <div className="flex">
                          <MapPin className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">
                              {appointment.location}
                            </p>
                            <p className="text-gray-600">
                              {appointment.address}
                            </p>
                          </div>
                        </div>

                        <div className="flex">
                          <Droplets className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Donation Type</p>
                            <p className="text-gray-600">
                              {appointment.donationType}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <Separator />
                    <CardFooter className="justify-between py-4">
                      <Button
                        variant="outline"
                        onClick={() => handleCancelAppointment(appointment.id)}
                      >
                        Cancel Appointment
                      </Button>
                      <div className="flex gap-2">
                        <ReminderDialog
                          appointmentDate={parseISO(appointment.date)}
                          appointmentTime={appointment.time}
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
            )}

            {reminders.length > 0 && (
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
                                {format(
                                  parseISO(reminder.date),
                                  "MMMM d, yyyy"
                                )}{" "}
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
        )}
      </div>
    </div>
  );
}
