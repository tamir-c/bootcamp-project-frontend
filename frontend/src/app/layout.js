import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Navbar/Header.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* We will built up our components here */}
      <body className={inter.className}>
        {/* <h1>Hello, world</h1> */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
