'use client'

import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
    InputOTP, 
    InputOTPGroup, 
    InputOTPSeparator, 
    InputOTPSlot 
} from "@/components/ui/input-otp"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

// Zod schema for OTP validation
const formSchema = z.object({
    otp: z.string().length(6, "OTP must be 6 digits")
})

export function OTPConfirmationForm({ className, ...props }: React.ComponentProps<"div">) {
    // Initialize form with react-hook-form and zod
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            otp: ""
        }
    })

    // Form submission handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast.success("OTP Verified Successfully!", {
                description: `Your OTP: ${values.otp}`,
            });
            // Add your OTP verification logic here
        } catch (error) {
            console.error("OTP Verification error", error);
            toast.error("OTP Verification failed. Please try again.");
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
                                    <h1 className="text-2xl font-bold">Enter OTP</h1>
                                    <p className="text-balance text-muted-foreground">
                                        Please enter the one-time password sent to your Email.
                                    </p>
                                </div>

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

                                <Button type="submit" className="w-full">
                                    Verify OTP
                                </Button>

                                <div className="text-center text-sm">
                                    Didn't receive the OTP?{" "}
                                    <button type="button" className="underline underline-offset-4">
                                        Resend OTP
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
