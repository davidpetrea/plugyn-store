import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='en'>
   <body>
    {/* Background container */}
    <div className='flex flex-col flex-1 min-h-screen bg-no-repeat bg-cover bg-center bg-main max-h-[1141px] bg-blend-overlay bg-black bg-opacity-50'>
     <Navbar />
     <main className='flex-1 w-full p-4 mx-auto max-w-7xl'>{children}</main>
     <Footer />
    </div>
   </body>
  </html>
 );
}
