"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSectionData } from "@/lib/data/formSectionData";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const profileFormSchema = z.object({
  firstName: z.string().trim().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().trim().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().trim().email({
    message: "Please enter a valid email address.",
  }),
  serviceInterest: z.string().trim().optional(),
  message: z.string().trim().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to being contacted.",
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: ProfileFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  serviceInterest: "",
  message: "",
  consent: false,
};

const inputClassName =
  "h-12 rounded-none border-white/[0.08] bg-[#141414] px-5 text-sm text-white placeholder:text-zinc-600 focus-visible:ring-primary";

export function ProfileForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ProfileFormValues) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: formSectionData.toastMessages.success.title,
          description: formSectionData.toastMessages.success.description,
        });
        form.reset(defaultValues);
        return;
      }

      const errorData = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      toast({
        variant: "destructive",
        title: formSectionData.toastMessages.error.title,
        description:
          errorData.error || formSectionData.toastMessages.error.descriptionDefault,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: formSectionData.toastMessages.error.title,
        description: formSectionData.toastMessages.error.descriptionUnexpected,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <Label className="form-label">First Name</Label>
                <FormControl>
                  <Input
                    autoComplete="given-name"
                    placeholder={formSectionData.placeholders.firstName}
                    className={inputClassName}
                    {...field}
                  />
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
                <Label className="form-label">Last Name</Label>
                <FormControl>
                  <Input
                    autoComplete="family-name"
                    placeholder={formSectionData.placeholders.lastName}
                    className={inputClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label className="form-label">Email</Label>
              <FormControl>
                <Input
                  autoComplete="email"
                  inputMode="email"
                  placeholder={formSectionData.placeholders.email}
                  className={inputClassName}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="serviceInterest"
          render={({ field }) => (
            <FormItem>
              <Label className="form-label">Service Interest</Label>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={inputClassName}>
                    <SelectValue
                      placeholder={formSectionData.placeholders.serviceInterest}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-white/[0.08] bg-[#141414] text-white">
                  {formSectionData.serviceInterestOptions.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <Label className="form-label">Your Situation</Label>
              <FormControl>
                <Textarea
                  placeholder={formSectionData.placeholders.message}
                  className="min-h-36 resize-y rounded-none border-white/[0.08] bg-[#141414] px-5 py-4 text-sm text-white placeholder:text-zinc-600 focus-visible:ring-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex gap-3 border border-white/[0.08] bg-primary/[0.04] p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="consent-checkbox"
                  className="mt-1"
                />
              </FormControl>
              <div>
                <Label
                  htmlFor="consent-checkbox"
                  className="text-xs font-light leading-6 text-zinc-400"
                >
                  By submitting this form you consent to the processing of your
                  personal data in accordance with our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-primary underline decoration-primary/40 underline-offset-4"
                  >
                    Privacy Policy
                  </a>
                  . We will use your information solely to respond to your
                  inquiry.
                </Label>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-14 w-full rounded-none bg-primary text-xs font-semibold uppercase tracking-[0.08em] text-black hover:bg-primary/90"
        >
          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {isSubmitting
            ? formSectionData.buttonText.submitting
            : formSectionData.buttonText.default}
        </Button>
      </form>
    </Form>
  );
}
