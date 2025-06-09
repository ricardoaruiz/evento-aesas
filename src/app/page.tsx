import { getCalendarsSlug } from "@/service";
import Link from "next/link";

export default async function Home() {
  const slugs = await getCalendarsSlug();

  return (
    <div className="flex flex-col container max-w-[1000px] mx-auto min-h-dvh">
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
