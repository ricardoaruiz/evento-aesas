/** biome-ignore-all lint/nursery/useConsistentTypeDefinitions: is not important here */
import type { Metadata } from 'next';
import { DOMAIN_URL } from '@/constants';

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  image?: string;
  alternativeImage?: string;
  url?: string;
  keywords?: string[];
}

export function generateMetadata({
  title = 'AESAS',
  description = 'Associação Brasileira das Empresas de Consultoria e Engenharia Ambiental',
  image = '/images/logo-aesas.webp',
  alternativeImage,
  url = '/',
  keywords = [],
}: GenerateMetadataParams = {}): Metadata {
  const domain = DOMAIN_URL.endsWith('/')
    ? DOMAIN_URL.slice(0, -1)
    : DOMAIN_URL;

  const baseUrl = domain;
  const fullUrl = `${baseUrl}${url}`;
  const fullImageUrl = `${baseUrl}${image}`;

  const images = alternativeImage ? [alternativeImage] : [fullImageUrl];

  return {
    title: {
      template: `${title} | %s`,
      default: title,
    },
    description,
    keywords,
    authors: [{ name: 'AESAS' }],
    creator: 'AESAS',
    publisher: 'AESAS',
    metadataBase: new URL(baseUrl),
    alternates: { canonical: fullUrl },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: fullUrl,
      siteName: 'AESAS',
      title,
      description,
      images: [
        {
          url: images[0],
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: 'https://www.aesas.com.br/',
      creator: '@associacaoaesas',
      title,
      description,
      images,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // google: 'seu-codigo-de-verificacao-aqui', // Adicione quando configurar o Google Search Console
    },
  };
}
