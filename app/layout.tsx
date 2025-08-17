
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="">
            <head>
                <link
                    href="https://fonts.cdnfonts.com/css/helvetica-neue-55"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.cdnfonts.com/css/magilio"
                    rel="stylesheet"
                />
            </head>
            <body>{children}
                <Analytics />
            </body>
        </html>
    );
}
