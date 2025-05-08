"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Clock, Bell } from "lucide-react";
import { format } from "date-fns";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface ReminderDialogProps {
  appointmentDate: Date;
  appointmentTime: string;
  trigger?: React.ReactNode;
}

export function ReminderDialog({
  appointmentDate,
  appointmentTime,
  trigger,
}: ReminderDialogProps) {
  const [open, setOpen] = useState(false);
  const [reminderMethod, setReminderMethod] = useState("browser");
  const [reminderTime, setReminderTime] = useState("1day");
  const [email, setEmail] = useState("");

  const handleSetReminder = () => {
    // In a real app, this would connect to a backend service
    // For now, we'll simulate with local storage and a notification

    const appointment = {
      date: format(appointmentDate, "yyyy-MM-dd"),
      time: appointmentTime,
      reminderMethod,
      reminderTime,
      email: reminderMethod === "email" ? email : undefined,
      created: new Date().toISOString(),
    };

    // Store in localStorage (for demo)
    const reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
    reminders.push(appointment);
    localStorage.setItem("reminders", JSON.stringify(reminders));

    // Simulate scheduling (would be server-side in real app)
    toast.success("Reminder set successfully", {
      description: `You'll be reminded ${getReminderDescription(
        reminderTime
      )} before your appointment.`,
    });

    setOpen(false);
  };

  const getReminderDescription = (time: string) => {
    switch (time) {
      case "1hour":
        return "1 hour";
      case "3hours":
        return "3 hours";
      case "1day":
        return "1 day";
      case "2days":
        return "2 days";
      default:
        return "1 day";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="w-full">
            <Bell className="mr-2 h-4 w-4" />
            Set Reminder
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Donation Reminder</DialogTitle>
          <DialogDescription>
            We&apos;ll send you a reminder when it&apos;s time for your next
            donation. You can donate again after 56 days.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="reminder-time">Remind me</Label>
            <Select value={reminderTime} onValueChange={setReminderTime}>
              <SelectTrigger id="reminder-time">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1hour">1 hour before</SelectItem>
                <SelectItem value="3hours">3 hours before</SelectItem>
                <SelectItem value="1day">1 day before</SelectItem>
                <SelectItem value="2days">2 days before</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Reminder method</Label>
            <RadioGroup
              value={reminderMethod}
              onValueChange={setReminderMethod}
              className="grid grid-cols-2 gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="browser" id="browser" />
                <Label htmlFor="browser">Browser notification</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email">Email</Label>
              </div>
            </RadioGroup>
          </div>

          {reminderMethod === "email" && (
            <div className="grid gap-2">
              <Label htmlFor="email-input">Email address</Label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="your@email.com"
              />
            </div>
          )}

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I understand this is a demo and no actual reminders will be sent
            </label>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSetReminder}>Set Reminder</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
