import { getCalendarsSlug } from "@/service";
import Link from "next/link";

export default async function Home() {
  const slugs = await getCalendarsSlug();

  return (
    <div className="container mx-auto flex min-h-dvh max-w-[1000px] flex-col">
      <ul className="flex gap-4">
        {slugs.map((slug) => (
          <li key={slug}>
            <Link
              href={`/calendario/${slug}`}
              className="text-blue-500 hover:underline"
            >
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
