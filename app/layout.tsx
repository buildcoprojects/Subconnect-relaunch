import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConstructNet",
  description: "The professional network for construction industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// Create the layout file for the App Router
export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h1>Welcome to ConstructNet</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2023 ConstructNet. All rights reserved.</p>
      </footer>
    </div>
  );
};
