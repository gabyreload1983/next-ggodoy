import Link from "next/link";
import { FaFaceFrown } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 py-10">
      <FaFaceFrown className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-gray-950 px-4 py-2 text-sm text-white transition-colors hover:bg-primary hover:text-gray-950"
      >
        Home
      </Link>
    </main>
  );
}
