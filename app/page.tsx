import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Image
        alt=""
        src="/images/hero.jpg"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </main>
  );
}
