"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import {
    Mail,
    Phone,
    MessageCircle,
    Facebook,
    Instagram,
    X,
    MapPin,

} from "lucide-react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const whatsappNumber = "2348140898790";
    const whatsappText = encodeURIComponent(
        `Hello, Honeyland Chairman,

I would like to make an enquiry about `
    );

    const handleSubmit = async () => {
        if (!name || !subject || !message) {
            alert("Please complete all fields");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, subject, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                console.error("API ERROR:", data);
                alert("Email failed to send");
                return;
            }

            alert("Message sent successfully via email");

            setName("");
            setSubject("");
            setMessage("");
        } catch (error) {
            console.error(error);
            alert("Network error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="max-w-6xl mx-auto px-4 py-24 mt-12 space-y-20">

            <SectionHeader
                label="Contact CDA Contact"
                title="Official Communication Hub for Residents"
            />

            {/* CONTACT INFO */}
            <section className="grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div className="space-y-6">
                    <div className="space-y-6">

                        {/* HEADING */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
                                Contact the CDA Executives
                            </h3>
                            <p className="text-gray-600 text-base mt-1">
                                Official communication channel for community matters, levies, and infrastructure requests.
                            </p>
                        </div>

                        {/* CONTACT DETAILS */}
                        <div className="space-y-3 text-gray-700">

                            {/* PHONE */}
                            <Link
                                href="tel:+2348140898790"
                                className="flex items-center gap-3 hover:text-black transition"
                            >
                                <Phone size={18} />
                                <span>+234 814 089 8790</span>
                            </Link>

                            {/* EMAIL */}
                            <Link
                                href="mailto:support@community.org"
                                className="flex items-center gap-3 hover:text-black transition"
                            >
                                <Mail size={18} />
                                <span>support@community.org</span>
                            </Link>

                            {/* LOCATION (not clickable intentionally) */}
                            <div className="flex items-center gap-3">
                                <MapPin size={18} />
                                <span>CDA Secretariat Office</span>
                            </div>

                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="flex gap-5 pt-2">

                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1877F2] hover:scale-110 transition"
                            >
                                <Facebook size={32} />
                            </Link>

                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#E4405F] hover:scale-110 transition"
                            >
                                <Instagram size={32} />
                            </Link>

                            <Link
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:scale-110 transition"
                            >
                                <X size={32} />
                            </Link>

                        </div>

                        {/* WHATSAPP CTA */}
                        <Link
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-600 font-medium mt-4 hover:underline"
                        >
                            <MessageCircle size={18} />
                            Open WhatsApp
                        </Link>
                    </div>
                </div>


                {/* MAP */}
                <div className="h-80 overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        loading="lazy"
                        title="CDA Secretariat Location Map"
                        src="https://www.google.com/maps?q=6.83689,3.22952&z=15&output=embed"
                    />
                </div>

            </section>

            {/* FORM */}
            <section className="space-y-8">

                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold">Send Message</h2>
                    <p className="text-gray-800 mt-4">
                        Email goes directly to CDA Executives
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="border-b p-3 outline-none"
                    />

                    <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject"
                        className="border-b p-3 outline-none"
                    />

                </div>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="border-b p-3 h-40 outline-none w-full"
                />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-black text-white px-6 py-3 rounded-full"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

            </section>

        </main>
    );
}