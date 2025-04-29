import { createEvents, DateArray } from "ics";

export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startTime: Date;
  duration: { hours: number; minutes: number };
}

export function generateCalendarEvent(event: CalendarEvent): Promise<string> {
  return new Promise((resolve, reject) => {
    // Format date for ics library
    const formatDate = (date: Date): DateArray => {
      return [
        date.getFullYear(),
        date.getMonth() + 1, // Months are 0-indexed in JS
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
      ];
    };

    const start = formatDate(event.startTime);

    createEvents(
      [
        {
          title: event.title,
          description: event.description,
          location: event.location,
          start,
          duration: event.duration,
          // Add 30 min alert
          alarms: [
            {
              action: "display",
              description: "Reminder",
              trigger: { hours: 2, minutes: 0, before: true },
            },
          ],
        },
      ],
      (error, value) => {
        if (error) {
          reject(error);
        }
        resolve(value);
      }
    );
  });
}

export function downloadCalendarFile(
  content: string,
  filename: string = "appointment.ics"
): void {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
