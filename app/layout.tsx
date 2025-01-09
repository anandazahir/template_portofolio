import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Ananda Zahir - Front-End Developer",
  description:
    "Portfolio of Ananda Zahir, a skilled Front-End Developer specializing in React, Next.js, and modern web technologies.",
  keywords: "front-end developer, react, next.js, web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  );
}
