import { Open_Sans, Varela_Round } from "next/font/google";

const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
});

const varelaRound = Varela_Round({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-varela-round",
});

export const open = openSans.variable;
export const varela = varelaRound.variable;