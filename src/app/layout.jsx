import "./globals.css";
import 'react-toastify/dist/ReactToastify.css'
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import MyApp from "./Main";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BubbleDubble | Double the Flavor, Double the Fun!",
  description: "Welcome to BubbleDubble!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReduxProvider>
         <MyApp>{children}</MyApp>
        </ReduxProvider>
      </body>
    </html>
  );
}
