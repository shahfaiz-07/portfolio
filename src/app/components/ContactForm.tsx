"use client"
import React, { useState } from "react";
import { Form, Input, Button, Textarea, addToast } from "@heroui/react";
import { IoSend } from "react-icons/io5";
import { FaDeleteLeft } from "react-icons/fa6";
import { textarea } from "framer-motion/client";
import axios from "axios";

export default function ContactForm() {

    const [loading, setLoading] = useState<boolean>(false)

    const [body, setBody] = useState<{
        email: string;
        firstname: string;
        lastname: string;
        phone: string;
        message: string;
    }>({
        email: "",
        firstname: "",
        lastname: "",
        phone: "",
        message: "",
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('/api/contact', body);
            if (!response.data.success) {
                addToast({
                    title: "Error Sending Message",
                    variant:"solid",
                    description: "Please try again after some time!",
                    color: "danger",
                })
                setLoading(false);
                return;
            } else {
                addToast({
                    title: "Message Sent",
                    variant:"solid",
                    description: "Thankyou! Will try to reach you ASAP!",
                    color: "success",
                })
                setBody({
                    email: "",
                    firstname: "",
                    lastname: "",
                    phone: "",
                    message: "",
                })
            }

        } catch (error) {
            addToast({
                title: "Error Sending Message",
                variant:"solid",
                description: "Please try again after some time!",
                color: "danger",
            })
            console.log(error)
        } finally {
            setLoading(false); 
        }
    }
    return (
        <div className="font-mono p-5 sm:py-8 sm:px-10 flex flex-col gap-y-3 bg-zinc-800 rounded-lg w-full lg:w-2/3">
            <h2 className="text-primary text-2xl md:text-3xl font-bold">Let's Collaborate</h2>
            <p className="text-zinc-400">Fill this form to contact me</p>
            <Form
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                onSubmit={handleSubmit}
            >
                <Input
                    isRequired
                    label="First Name"
                    labelPlacement="outside"
                    name="firstname"
                    placeholder="Enter your first name"
                    type="text"
                    variant="bordered"
                    value={body.firstname}
                    onChange={(e) => setBody((prev) => ({...prev, firstname: e.target.value}))}
                    isClearable
                    validate={(value) => {
                        if (!value.trim()) return "Firstname is required"
                        if (value.trim().length < 3) return "Firstname field must be atleast 3 characters long"
                        return null;
                    }}
                />

                <Input
                    label="Last Name (optional)"
                    labelPlacement="outside"
                    name="lastname"
                    value={body.lastname}
                    onChange={(e) => setBody((prev) => ({...prev, lastname: e.target.value}))}
                    placeholder="Enter your last name"
                    type="text"
                    variant="bordered"
                    isClearable
                />

                <Input
                    isRequired
                    label="Email Address"
                    labelPlacement="outside"
                    name="email"
                    value={body.email}
                    onChange={(e) => setBody((prev) => ({...prev, email: e.target.value}))}
                    placeholder="Enter your email"
                    type="email"
                    variant="bordered"
                    isClearable
                />

                <Input
                    label="Phone Number (optional)"
                    labelPlacement="outside"
                    name="phone"
                    value={body.phone}
                    onChange={(e) => setBody((prev) => ({...prev, phone: e.target.value}))}
                    placeholder="Enter your phone number"
                    type="phone"
                    isClearable
                    variant="bordered"
                />

                <Textarea
                    isRequired
                    label="Your Message"
                    labelPlacement="outside"
                    value={body.message}
                    onChange={(e) => setBody((prev) => ({...prev, message: e.target.value}))}
                    placeholder="Type your message here"
                    variant="bordered"
                    name="message"
                    className="md:col-span-2"
                    isClearable
                    validate={(value) => {
                        if (!value.trim()) return "Message is required"
                        if (value.trim().length < 10) return "Message must be atleast 10 characters long"
                        return null;
                    }}
                />

                <div className="flex gap-2">
                    <Button color="primary" type="submit" endContent={<IoSend />} isLoading={loading}>
                        Submit
                    </Button>
                    <Button type="reset" variant="flat" className="text-white" endContent={<FaDeleteLeft />} disabled={loading}>
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
}

