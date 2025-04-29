"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, useNavigation } from "react-day-picker";
import type { DayPickerSingleProps } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type CalendarProps = Omit<DayPickerSingleProps, "mode"> & {
  onDateSelect?: (date?: Date) => void;
};

// Custom navigation component with year dropdown
function CalendarNavigation({
  displayMonth,
  onPreviousClick,
  onNextClick,
  goToMonth,
}: {
  displayMonth: Date;
  onPreviousClick: () => void;
  onNextClick: () => void;
  goToMonth: (date: Date) => void;
}) {
  // Get current year and generate a range of years (current - 10 to current + 10)
  const currentYear = displayMonth.getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

  // Handle year change
  const handleYearChange = (year: string) => {
    const newDate = new Date(displayMonth);
    newDate.setFullYear(parseInt(year));
    goToMonth(newDate);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <button
        onClick={onPreviousClick}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        )}
        aria-label="Previous month"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">
          {displayMonth.toLocaleDateString("en-US", { month: "long" })}
        </span>

        <Select value={currentYear.toString()} onValueChange={handleYearChange}>
          <SelectTrigger className="h-8 min-h-8 w-[90px] text-xs border-gray-200">
            <SelectValue placeholder={currentYear.toString()} />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className="max-h-[200px] overflow-y-auto"
          >
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <button
        onClick={onNextClick}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        )}
        aria-label="Next month"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  onDateSelect,
  ...props
}: CalendarProps) {
  const [selectedMonth, setSelectedMonth] = React.useState<Date>(
    props.defaultMonth || new Date()
  );

  // Handle day selection
  const handleSelect = (day: Date | undefined) => {
    if (onDateSelect && day) {
      onDateSelect(day);
    }
  };

  return (
    <DayPicker
      mode="single"
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "hidden", // Hide default caption label since we're using custom navigation
        nav: "space-x-1 flex items-center w-full",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "hidden", // Hide default nav buttons
        nav_button_next: "hidden", // Hide default nav buttons
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Caption: ({ displayMonth }) => {
          const { goToMonth, nextMonth, previousMonth } = useNavigation();

          return (
            <div className="flex justify-center w-full">
              <CalendarNavigation
                displayMonth={displayMonth}
                onPreviousClick={() =>
                  previousMonth && goToMonth(previousMonth)
                }
                onNextClick={() => nextMonth && goToMonth(nextMonth)}
                goToMonth={goToMonth}
              />
            </div>
          );
        },
      }}
      month={selectedMonth}
      onMonthChange={setSelectedMonth}
      onSelect={handleSelect}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
