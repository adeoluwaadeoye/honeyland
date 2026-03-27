"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";

const accountDetails = {
    bankName: "First Bank of Nigeria",
    accountName: "Honeyland Community Association",
    accountNumber: "1234567890",
};

const levies = [
    {
        item: "General Meeting Levy",
        amount: 200,
        frequency: "Per meeting",
    },
    {
        item: "Development Levy",
        amount: 30000,
        frequency: "As Available",
    },
    {
        item: "Electricity Levy",
        amount: 100000,
        frequency: "As Available",
    },
    {
        item: "Voluntary Donation",
        amount: "Any amount",
        frequency: "Optional",
    },
];

export default function LeviesPage() {
    const [copied, setCopied] = useState(false);

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [purpose, setPurpose] = useState("");

    const copyAccount = async () => {
        await navigator.clipboard.writeText(accountDetails.accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sanitize = (value: string) => value?.trim() || "N/A";

    const now = new Date();

    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    const whatsappMessage = encodeURIComponent(
        `Hello Financial Secretary,

I have made a payment for community levies.

Details:
- Name: ${sanitize(name)}
- Amount Paid: ₦${sanitize(amount)}
- Purpose: ${sanitize(purpose)}
- Date: ${formattedDate}
- Time: ${formattedTime}

Proof of payment will be attached.

Kindly confirm receipt.

Thank you.`
    );

    return (
        <main className="max-w-5xl mx-auto px-4 py-24 mt-12 space-y-12">

            {/* HEADER */}
            <section>
                <SectionHeader
                    label="Community Levies & Payments"
                    title="Transparent breakdown of all community financial contributions"
                />
            </section>

            {/* ACCOUNT DETAILS */}
            <section className="border text-xl rounded-lg p-6 space-y-6 bg-white">
                <h2 className="text-2xl">Payment Account Details</h2>

                <p className="mt-4">
                    <strong>Bank:</strong> {accountDetails.bankName}
                </p>
                <p>
                    <strong>Account Name:</strong> {accountDetails.accountName}
                </p>

                <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                    <span className="font-bold tracking-wide text-2xl">
                        {accountDetails.accountNumber}
                    </span>

                    <button
                        onClick={copyAccount}
                        className="px-8 py-3 bg-black text-white rounded-md text-sm"
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </section>

            {/* TABLE */}
            <section className="overflow-x-auto">
                <table className="w-full border border-gray-600 text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3">Item</th>
                            <th className="p-3">Amount (₦)</th>
                            <th className="p-3">Frequency</th>
                        </tr>
                    </thead>

                    <tbody>
                        {levies.map((levy, i) => (
                            <tr key={i} className="border-t">
                                <td className="p-3">{levy.item}</td>
                                <td className="p-3">{levy.amount}</td>
                                <td className="p-3">{levy.frequency}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* WHATSAPP SECTION */}
            <section className="border rounded-lg p-8 space-y-6 bg-green-50">
                <h2 className="text-2xl font-semibold">
                    Payment Confirmation
                </h2>

                <p className="text-gray-700 text-xl">
                    After payment, notify the Financial Secretary for confirmation.
                </p>

                {/* INPUTS */}
                <div className="space-y-4">

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border p-3 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium mb-1">
                            Amount Paid
                        </label>
                        <input
                            id="amount"
                            type="number"
                            placeholder="Amount Paid"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full border p-3 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="purpose" className="block text-sm font-medium mb-1">
                            Purpose
                        </label>
                        <select
                            id="purpose"
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                            className="w-full border p-3 rounded-md"
                        >
                            <option value="">Select Purpose</option>
                            <option value="General Meeting Levy">General Meeting Levy</option>
                            <option value="Development Levy">Development Levy</option>
                            <option value="Electricity Levy">Electricity Levy</option>
                            <option value="Donation">Donation</option>
                        </select>
                    </div>

                </div>

                {/* WHATSAPP BUTTON */}
                <a
                    href={
                        name && amount && purpose
                            ? `https://wa.me/2348140898790?text=${whatsappMessage}`
                            : "#"
                    }
                    onClick={(e) => {
                        if (!name || !amount || !purpose) {
                            e.preventDefault();
                            alert("Please fill all fields first");
                        }
                    }}
                    target="_blank"
                    className="inline-block bg-green-600 text-white px-5 py-3 rounded-md"
                >
                    Send Confirmation
                </a>

                <p className="text-sm text-gray-600">
                    Attach proof of payment manually in WhatsApp chat.
                </p>
            </section>

            {/* FOOT NOTE */}
            <section className="text-xl text-gray-600">
                <p>
                    All levies contribute to the development and maintenance of
                    community infrastructure including roads, electricity systems, and
                    shared facilities.
                </p>

                <p className="mt-3">
                    Contributions are structured to ensure fairness, transparency, and
                    long-term sustainability of community projects.
                </p>
            </section>

        </main>
    );
}