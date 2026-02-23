import NavBar from "@/components/nav-bar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    </>
  );
}
