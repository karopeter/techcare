import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import Providers from "./components/Providers";
import "./globals.css";


export const metadata: Metadata = {
 title: "Tech.Care | Patients",
 description: "Patient dashboard for Tech.Care"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
     <body>
        <Providers>{children}</Providers>
     </body>
    </html>
  )
}
