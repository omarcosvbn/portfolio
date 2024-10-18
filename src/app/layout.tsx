import "../styles/globals.css";
import "../styles/Home.module.scss";


export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
