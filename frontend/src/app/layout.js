import "./globals.css";
import { Inter } from "next/font/google";
import { Header, Footer, Provider, ContextProvider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sky Travel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ContextProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ContextProvider>
        </Provider>
      </body>
    </html>
  );
}
