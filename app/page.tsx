import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        alt="hero images"
        src="/images/hero.jpg"
        fill
        objectFit="cover"
        quality={100}
      />
    </main>
  );
}
