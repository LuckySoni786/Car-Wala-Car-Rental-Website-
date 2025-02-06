"use client"
import Carousels from "@/components/Carousel";
import Explore from "@/components/Explore";
import OurObjective from "@/components/OurObjective";
import Subfooter from "@/components/Subfooter";
import Image from "next/image";
import {useSession} from "next-auth/react";

export default function Home() {
  
  return ( 
    <div>
      <Carousels />
      <div className="relative">
        <Explore />
        <Subfooter />
        <OurObjective />
      </div>
    </div>
  );
}
