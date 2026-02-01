import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { Button } from "@/components/ui/button";


/**
 * Defual page of the application.
 * @returns 
 */



export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Header / Navbar */}
      <Header />
      

      {/* Hero Section */}
      <Hero />

      
      
  
    </div>
  );
}
