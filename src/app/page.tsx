import Link from 'next/link'

import { getCalendarsSlug } from '@/service'


function formatSlug(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export default async function Home() {
  const slugs = await getCalendarsSlug()

  return (
    <div className="container mx-auto flex min-h-dvh max-w-[1000px] flex-col py-10">
      <h1 className='text-4xl font-semibold text-center'>Calendários de Cursos</h1>
      <ul className="flex flex-col gap-4 bg-zinc-800 p-8 rounded-md mt-8">
        {slugs.map((slug) => (
          <li key={slug}>
            <Link
              href={`/calendario/${slug}`}
              className="text-2xl text-blue-500  hover:bg-zinc-700 p-2 w-full rounded-md flex gap-2"
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>🗓️</span>
              <span>{formatSlug(slug)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
