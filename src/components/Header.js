import Link from "next/link";

export function Header() {
  return (
    <header className="w-full h-[100px] border-b border-gray-200 flex items-center justify-center">
      <Link href="/" className="mr-4 text-blue-600 hover:underline">
        Index
      </Link>
      <Link href="/about" className="text-blue-600 hover:underline">
        About
      </Link>
    </header>
  );
}
