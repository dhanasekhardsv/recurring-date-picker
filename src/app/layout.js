import "./globals.css";

export const metadata = {
  title: "Recurring Date Picker",
  description: "Flexible recurring date scheduler for events, meetings, and automated reminders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}