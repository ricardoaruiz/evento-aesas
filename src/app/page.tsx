import { getCalendarSlugs } from "@/service";
import Link from "next/link";

export default async function Home() {
  const slugs = await getCalendarSlugs();

  return (
    <div className="container max-w-[1040px] mx-auto">
      <ul className="flex gap-4">
        {slugs.map((slug) => (
          <li key={slug}>
            <Link
              href={`/calendar/${slug}`}
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
