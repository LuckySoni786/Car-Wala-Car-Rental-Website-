"use client";
import React from "react";
import { format } from "date-fns";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";

const DateTimeForm = ({ control, id, label }) => {
  return (
    <div>
      <Label htmlFor={id} className="font-semibold text-md">
        {label}
      </Label>
      <FormField
        control={control}
        name={id}
        render={({ field }) => (
          <FormItem className="flex flex-col py-3">
            <FormLabel>{label}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "MM/dd/yyyy") // Format the date as MM/DD/YYYY
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))} // Disable dates before yesterday
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormItem>
        )}
      />
    </div>
  );
};

export default DateTimeForm;
