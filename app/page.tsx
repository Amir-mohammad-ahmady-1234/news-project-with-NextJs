import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/icon.jpg"
        alt="A server surrounded by magic sparkles."
        width={126}
        height={126}
      />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
