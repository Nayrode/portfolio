import NavBar from "@/components/nav-bar";
import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body className="m-0 p-0 min-h-screen overflow-hidden">
                    <NavBar />
                    {children}
                    <Toaster />
                </body>
            </html>
        </>
    );
}
