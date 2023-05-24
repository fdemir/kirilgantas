import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        gununu kaydetmek icin buradasin. icini dok. gun gelecek bunlari
        inceleyeceksin. zamanda yolculuk yap diye. sadece senin icin...
      </p>

      <Link className="fixed text-xl italic bottom-8" href="/add">
        yaz
      </Link>
    </div>
  );
}
