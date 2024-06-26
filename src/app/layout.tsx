// ** Nextjs Imports
import type { Metadata } from "next";
// import { Ubuntu } from "next/font/google";

// ** Styles
import "./globals.css";

// ** Clerk
import { ClerkProvider } from "@clerk/nextjs";

// ** Custom Components
import Provider from "@/components/shared/providers";

// const ubuntu = Ubuntu({
//   weight: ["300", "400", "500", "700"],
//   style: "normal",
//   display: "swap",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "Chira",
    template: "%s | Chira",
  },
  description: "A fullstack todo app built with Next.js, tailwind and clerk",
  keywords: [
    "todo",
    "nextjs",
    "tailwind",
    "clerk",
    "fullstack",
    "drag and drop",
    "kanban",
    "board",
    "task",
    "project",
    "management",
    "app",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={"font-ubuntu"}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
