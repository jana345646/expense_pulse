import "./globals.css";
import { Outfit, Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
/* Outfit is the font name , and a function that we call it here and we send to it an object with the font settings as an argument , 
and this function will return  this object and save it the variable we created*/

// substes is the languages that we will use

// variable we use it to create a css variable (css custom property) that takes a new name instead the large name of the font and it must began with --

// weight we must download all the weights we need , as if we didn't download it only the default weight will be downloaded and the fonts will not be displayed in a proper way

// display we use it to dispaly the content in the default font until our font is downloaed instead of displaying an empty page (it improves the performance)

// in the body we define the names of the fonts to be seen with all the components to can use them

// antialiased this is a tailwind class to display the border of the letters properly (string so we used the backticks)

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${poppins.variable} antialiased`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
