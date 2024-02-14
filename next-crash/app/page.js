import Image from "next/image";
import nature from "@/public/nature.jpg";

export default function Home() {
  return (
    <main>
      <p className="mt-10">
        lorem ipsum dolor sit amet consectetur adipisicing elit.
        <Image src={nature}/>
      </p>
    </main>
  );
}
