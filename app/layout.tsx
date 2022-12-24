import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background container */}
        <div className="flex flex-col flex-1 min-h-screen bg-fixed bg-no-repeat bg-cover bg-center bg-main bg-blend-overlay bg-black bg-opacity-50">
          <Navbar />
          <main className="flex-1 w-full p-4 mx-auto max-w-7xl">
            {children}
          </main>
          <Footer />
        </div>
        <script
          src="//code.tidio.co/pswx6wi42fdbu5xr8csf8nbdm2mrxjkr.js"
          async
        ></script>
      </body>
    </html>
  );
}
