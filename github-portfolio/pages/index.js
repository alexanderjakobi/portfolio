import Image from "next/image";
import myPhoto from '../public/my-photo.jpeg';
import { Html,Head, Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function IconBar(){
  return(
    <div className="icon-bar">
      <a href="#home" className="icon"><i className="fas fa-home"></i></a>
      <a href="#folder" className="icon"><i className="fas fa-folder"></i></a>
      <a href="#shopping" className="icon"><i className="fas fa-shopping-bag"></i></a>
      <a href="#tools" className="icon"><i className="fas fa-tools"></i></a>
      <a href="#edit" className="icon"><i className="fas fa-edit"></i></a>
    </div>
  );
}

export default function Home() {
  return (
   <div>
    {/* IconBar hinzufügen */}
      <IconBar />
    <Image
     src = {myPhoto}
     alt = "My Photo"
     className="fixed-image"
     width={500}
     height={800}
    />

    {/* Hier ist der Hauptinhalt */}

   </div>
  );
}
