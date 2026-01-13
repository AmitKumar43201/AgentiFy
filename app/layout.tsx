import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import {ClerkProvider} from '@clerk/nextjs'
import Provider from "./provider";


export const metadata: Metadata = {
  title: "AgentBuilder",
  description: "Builds Agentic Workflows",
};

const outfit = Outfit({subsets:['latin']})

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return ( 
    <ClerkProvider>
      <html className="p-0 m-0" lang="en">
        <body className="p-0 m-0">
          <ConvexClientProvider>
            <Provider>
              {children}
            </Provider>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
    
  );
}
