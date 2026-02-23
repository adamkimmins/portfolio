import "./globals.css";

export const metadata = {
  title: "Adam Kimmins",
  description: "Projects by Adam Kimmins",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
