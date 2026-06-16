import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Matchday — World Cup 2026 Fan Travel Planner",
  description:
    "Enter your team, location, and intent. Get a transparent Watch Contract: where to watch, a backup, when to arrive, and how to get there.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
