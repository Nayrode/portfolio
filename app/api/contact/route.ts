import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, surname, email, message } = body;

        // Validate the data
        if (!name || !surname || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 },
            );
        }

        const webhookUrl = process.env.DISCORD_WEBHOOK;

        if (!webhookUrl) {
            console.error(
                "DISCORD_WEBHOOK is not set in environment variables",
            );
            return NextResponse.json(
                { error: "Webhook not configured" },
                { status: 500 },
            );
        }

        // Create Discord embed
        const discordPayload = {
            embeds: [
                {
                    title: "📬 New Contact Form Submission",
                    color: 0x5865f2,
                    fields: [
                        {
                            name: "👤 Name",
                            value: `${name} ${surname}`,
                            inline: true,
                        },
                        {
                            name: "📧 Email",
                            value: email,
                            inline: true,
                        },
                        {
                            name: "💬 Message",
                            value: message,
                            inline: false,
                        },
                    ],
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: "Portfolio Contact Form",
                    },
                },
            ],
        };

        // Send to Discord webhook
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(discordPayload),
        });

        if (!response.ok) {
            throw new Error("Failed to send to Discord");
        }

        return NextResponse.json(
            { success: true, message: "Message sent successfully" },
            { status: 200 },
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 },
        );
    }
}
