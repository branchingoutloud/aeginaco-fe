'use client'

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { EmailInput } from "./ui/email-input";
import { PasswordInput } from "./ui/password-input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";

// Schema for sign-up validation (OTP is optional initially)
const formSchema = (otpSent: boolean) =>
    z.object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string(),
        otp: otpSent
            ? z.string().length(6, "OTP must be 6 digits")
            : z.string().optional(), // OTP is required only if otpSent is true
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });


export function SignupForms({ className, ...props }: React.ComponentProps<"div">) {
    const [otpSent, setOtpSent] = useState(false);


    const form = useForm<z.infer<ReturnType<typeof formSchema>>>({
        resolver: zodResolver(formSchema(otpSent)), // Dynamic schema
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            otp: "",
        }
    });


    // Function to handle "Send OTP"
    function onSendOTP(values: z.infer<ReturnType<typeof formSchema>>) {
        console.log("inside sendotp");
        setOtpSent(true); // Show OTP field
        toast.success("OTP Sent!", { description: `OTP has been sent to ${values.email}` });
        // Update validation dynamically
        form.reset({ ...values, otp: "" }); // Reset OTP field to avoid validation issues
    }

    // Function to handle final "Sign Up"
    function onSignUp(values: z.infer<ReturnType<typeof formSchema>>) {
        toast.success("Signup Successful!", { description: `Registered email: ${values.email}` });
        console.log(values);
    }


    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden py-0">
                <CardContent className="p-6 space-y-6">
                    <Form {...form}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                console.log("Form submitted - otpSent:", otpSent, e);

                                form.handleSubmit(
                                    otpSent ? onSignUp : onSendOTP,
                                    (errors) => console.log("Validation errors:", errors) // Log errors
                                )(e);
                            }}
                            className="space-y-6"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-2xl font-bold">Create Your Account</h1>
                                    <p className="text-balance text-muted-foreground">
                                        Sign up with your email
                                    </p>
                                </div>

                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col items-start">
                                            <FormLabel>Email</FormLabel>
                                            <FormControl className="w-full">
                                                <EmailInput placeholder="Enter your email" className="input" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Password Field */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <PasswordInput type="password" placeholder="Enter your password" className="input" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Confirm Password Field */}
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <PasswordInput type="password" placeholder="Confirm your password" className="input" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* OTP Field (Only appears after clicking "Send OTP") */}
                                {otpSent && (
                                    <FormField
                                        control={form.control}
                                        name="otp"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col items-center">
                                                <FormLabel className="text-center">One-Time Password</FormLabel>
                                                <FormControl>
                                                    <div className="flex justify-center">
                                                        <InputOTP maxLength={6} {...field}>
                                                            <InputOTPGroup>
                                                                <InputOTPSlot index={0} />
                                                                <InputOTPSlot index={1} />
                                                                <InputOTPSlot index={2} />
                                                            </InputOTPGroup>
                                                            <InputOTPSeparator />
                                                            <InputOTPGroup>
                                                                <InputOTPSlot index={3} />
                                                                <InputOTPSlot index={4} />
                                                                <InputOTPSlot index={5} />
                                                            </InputOTPGroup>
                                                        </InputOTP>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {/* Button: Changes text based on OTP state */}
                                <Button type="submit" className="w-full">
                                    {otpSent ? "Sign Up" : "Send OTP"}
                                </Button>

                                <div className="text-center text-sm">
                                    Already have an account?{" "}
                                    <Link href="/login" className="underline underline-offset-4">
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                By signing up, you agree to our{" "}
                <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    );
}
