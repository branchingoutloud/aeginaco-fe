'use client';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { PhoneInput } from "./ui/phone-input";
import { CheckCircle, ShieldCheck } from "lucide-react";

// 🛠️ Schema validation
const profileSchema = z.object({
    email: z.string().email("Invalid email address"),
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    phoneNumber: z.string().regex(/^\+?\d{7,15}$/, "Invalid mobile number"), // ✅ Allows international numbers
});

export function ProfileSetup() {
    // Simulating fetched user data (replace with real API data)
    const userEmail = "user@example.com";
    const [isVerified, setIsVerified] = useState(false);
    const [showOtp, setShowOtp] = useState(false);

    // 🛠️ Hook Form setup
    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            email: userEmail,
            firstName: "",
            lastName: "",
            phoneNumber: "",
        }
    });

    // 📝 Handle form submission
    function onSubmit(values: z.infer<typeof profileSchema>) {
        console.log("Profile Data:", values);
        toast.success("Profile saved successfully!");
    }

    return (
        <div className="flex flex-col items-center p-6">
            <Card className="w-full max-w-md">
                <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-center">Profile Setup</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                            {/* Email (Disabled) */}
                            <FormField control={form.control} name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled className="bg-gray-200 cursor-not-allowed" />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* First Name */}
                            <FormField control={form.control} name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter first name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Last Name */}
                            <FormField control={form.control} name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Mobile Number + Verify Icon */}
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Mobile Number</FormLabel>
                                        <div className="flex items-center space-x-2">
                                            <FormControl className="w-full">
                                                <PhoneInput
                                                    placeholder="Enter your mobile number"
                                                    {...field}
                                                    defaultCountry="US"
                                                />
                                            </FormControl>

                                            {/* ✅ Verify Icon */}
                                            {field.value && !isVerified && (
                                                <div
                                                    className="cursor-pointer relative group"
                                                    onClick={() => setShowOtp(true)}
                                                >
                                                    <ShieldCheck className="text-blue-500 hover:text-blue-700 transition" size={20} />
                                                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                                                        Verify Number
                                                    </span>
                                                </div>
                                            )}

                                            {/* ✅ Verified Icon */}
                                            {isVerified && (
                                                <CheckCircle className="text-green-500" size={20} />
                                            )}
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* OTP Input Fields (Shown after clicking Verify) */}
                            {showOtp && (
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium">One-Time OTP</label>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex space-x-2">
                                            {Array.from({ length: 6 }).map((_, index) => (
                                                <Input key={index} className="w-10 h-10 text-center text-lg" maxLength={1} />
                                            ))}
                                        </div>
                                        <Button type="button" className="text-xs px-3 py-1" onClick={() => setIsVerified(true)}>
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            )}


                            {/* Buttons */}
                            <div className="flex gap-2">
                                <Button type="submit" className="w-1/2 text-sm">Save</Button>
                                <Button type="button" variant="outline" className="w-1/2 text-sm" onClick={() => form.reset()}>
                                    Close
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
