import localFont from "next/font/local";

export const productSans = localFont({
  src: [
    {
      path: "../fonts/ProductSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ProductSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-product",
  display: "swap",
});