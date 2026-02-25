"use client";
import Silk from "@/components/Silk";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import OldComputer from "@/components/3d/old-computer";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(32, "Name must be at most 32 characters."),
  surname: z
    .string()
    .min(3, "Surname must be at least 3 characters.")
    .max(32, "Surname must be at most 32 characters."),
  email: z.string().email("Invalid email address."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message must be at most 1000 characters."),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "bottom-right",
        style: {
          "--border-radius": "calc(var(--radius) + 4px)",
        } as React.CSSProperties,
      });

      form.reset();
    } catch {
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-right",
        style: {
          "--border-radius": "calc(var(--radius) + 4px)",
        } as React.CSSProperties,
      });
    }
  }

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Silk
          speed={5}
          scale={1}
          color="#2c003a"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="absolute w-full h-full flex p-8">
        <form
          className="w-full flex flex-col items-start justify-center gap-4 p-8 lg:max-w-1/2"
          onSubmit={form.handleSubmit(onSubmit)}
          id="contact-form"
        >
          <h1 className="text-3xl md:text-5xl font-bold">Contact Me</h1>
          <FieldGroup>
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input {...field} placeholder="John" autoComplete="off" />
                  {fieldState.error && (
                    <FieldError>{fieldState.error.message}</FieldError>
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="surname"
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Surname</FieldLabel>
                  <Input {...field} placeholder="Doe" autoComplete="off" />
                  {fieldState.error && (
                    <FieldError>{fieldState.error.message}</FieldError>
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input {...field} placeholder="john.doe@example.com" />
                  {fieldState.error && (
                    <FieldError>{fieldState.error.message}</FieldError>
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="message"
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Message</FieldLabel>
                  <Textarea
                    {...field}
                    placeholder="Your message here..."
                    rows={5}
                  />
                  {fieldState.error && (
                    <FieldError>{fieldState.error.message}</FieldError>
                  )}
                </Field>
              )}
            />
            <Button
              type="submit"
              className="hover:cursor-pointer"
              form="contact-form"
            >
              Submit
            </Button>
          </FieldGroup>
        </form>
        <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
          <OldComputer />
        </div>
      </div>
    </div>
  );
}
