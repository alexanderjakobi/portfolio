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
    <div className="bg-black text-white min-h-screen flex flex-col lg:flex-row items-center lg:items-start p-8">
      {/* IconBar hinzufügen */}
      <IconBar />
      {/* Bildbereich */}
      <div className="flex flex-col items-center lg:w-1/3 w-full mb-8 lg:mb-0">
        <Image
          src={myPhoto}
          alt="My Photo"
          layout="responsive"
          width={500}
          height={800}
          className="rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">Alexander Jakobi</h2>
        <p className="text-sm text-gray-400 mt-2 text-center">
          A Software Engineer who has developed countless innovative solutions.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          {/* Social Icons */}
          <a href="#" className="text-orange-500 hover:text-orange-600">
            <i className="fab fa-dribbble"></i>
          </a>
          <a href="#" className="text-orange-500 hover:text-orange-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-orange-500 hover:text-orange-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-orange-500 hover:text-orange-600">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Textbereich */}
      <div className="lg:w-2/3 w-full text-center lg:text-left">
        <h1 className="text-5xl font-extrabold mb-4">
          SOFTWARE <span className="text-gray-400">ENGINEER</span>
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
        <div className="flex justify-center lg:justify-start gap-8">
          <div>
            <p className="text-3xl font-bold">+2</p>
            <p className="text-sm text-gray-400">YEARS OF EXPERIENCE</p>
          </div>
          <div>
            <p className="text-3xl font-bold">+4</p>
            <p className="text-sm text-gray-400">PROJECTS COMPLETED</p>
          </div>
          <div>
            <p className="text-3xl font-bold">+2</p>
            <p className="text-sm text-gray-400">WORLDWIDE CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}