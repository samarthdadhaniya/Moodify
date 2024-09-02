import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight:['600'] });

export const metadata = {
  title: "Moodify",
  description: "Track Your Daily Mood..!",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex item-center justify-between gap-4">
      <h1 className={'text-base sm:text-xl textGradient ' + poppins.className}>Moodify</h1>
      <div className="flex items-center justify-between">
        PLACEHOLDER CTA || STATS
      </div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={'text-indigo-400 ' + poppins.className}>Created with 💜</p>
    </footer>
  )

  return (
    <html lang="en">
      <body className={ 'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + open_sans.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
