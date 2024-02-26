import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-3/5 h-2/5 justify-center fixed">
        <Image src='/banjaara-logo.png' alt="Banjaara Logo" fill={true} className="object-cover" />
      </div>
    </main>
  );
}
