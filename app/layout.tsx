import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({
 // Layouts must accept a children prop.
 // This will be populated with nested layouts or pages
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='en'>
   <body>
    <div className='flex flex-col flex-1 min-h-screen bg-no-repeat bg-cover bg-center bg-main max-h-[1141px]'>
     <Navbar />
     <main className='flex-1 mx-auto max-w-7xl'>{children}</main>
     <Footer />
    </div>
   </body>
  </html>
 );
}