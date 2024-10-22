import "../styles/globals.css";
import "../styles/Home.module.scss";
import Overlay from "../components/Overlay/Overlay";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio</title>

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <Overlay />
        <main>{children}</main>
      </body>
    </html>
  );
}
