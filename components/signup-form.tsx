'use client'

import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneInput } from "@/components/ui/phone-input"
import { 
    InputOTP, 
    InputOTPGroup, 
    InputOTPSeparator, 
    InputOTPSlot 
} from "@/components/ui/input-otp"
import {useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import Link from "next/link"

// Zod schema for form validation
const formSchema = z.object({
    phoneNumber: z.string().min(1, "Phone number is required"),
    otp: z.string().length(6, "OTP must be 6 digits")
})

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
    // Initialize form with react-hook-form and zod
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: "",
            otp: ""
        }
    })

    // Form submission handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast.success("Signup Successful!", {
                description: `Registered phone number: ${values.phoneNumber}`,
            });
            // Add your signup logic here
        } catch (error) {
            console.error("Signup error", error);
            toast.error("Signup failed. Please try again.");
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden py-0">
                <CardContent className="p-6 space-y-6">
                    <Form {...form}>
                        <form 
                        onSubmit={form.handleSubmit(onSubmit)} 
                        className="space-y-6"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-2xl font-bold">Create Your Account</h1>
                                    <p className="text-balance text-muted-foreground">
                                        Sign up with your phone number
                                    </p>
                                </div>

                                <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-start">
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl className="w-full">
                                            <PhoneInput
                                            placeholder="Enter your phone number"
                                            {...field}
                                            defaultCountry="US"
                                            />
                                        </FormControl>
                                        <FormDescription>Enter your phone number to register.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />

                                <FormField
                                control={form.control}
                                name="otp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>One-Time Password</FormLabel>
                                        <FormControl>
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
                                        </FormControl>
                                        <FormDescription>
                                            Please enter the one-time password sent to your phone.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />

                                <Button type="submit" className="w-full">
                                    Sign Up
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
    )
}