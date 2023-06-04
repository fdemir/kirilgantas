import "./globals.css";

export const metadata = {
  title: "kirilgantas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="container p-8 text-xl md:px-64">
        <div className="p-4 bg-emerald-50">{children}</div>
      </body>
    </html>
  );
}
