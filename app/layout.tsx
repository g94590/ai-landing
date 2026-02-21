import type { Metadata } from "next";
import "./globals.css";

// TODO: replace [НАЗВАНИЕ] with actual company name
// TODO: replace [DOMAIN] with actual domain
// TODO: replace [COUNTER_ID] with Yandex.Metrika counter ID
export const metadata: Metadata = {
  // TODO: replace example.com with actual domain
  metadataBase: new URL('https://example.com'),
  title: '[НАЗВАНИЕ] — AI-автоматизация для бизнеса',
  description: 'Внедрим AI в ваш бизнес: чат-боты, автоматизация процессов, AI-ассистенты. Первый результат за 2 недели. Бесплатный аудит процессов.',
  keywords: 'AI автоматизация, чат-бот, telegram бот, автоматизация бизнеса, AI ассистент',
  openGraph: {
    title: '[НАЗВАНИЕ] — AI-автоматизация для бизнеса',
    description: 'Внедрим AI. Первый результат за 2 недели.',
    images: ['/images/og-image.png'],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: { index: true, follow: true },
  // TODO: replace example.com with actual domain
  alternates: { canonical: 'https://example.com' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preload" href="/fonts/inter-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* TODO: replace [COUNTER_ID] with Yandex.Metrika counter ID */}
        {/* Yandex.Metrika */}
        {/*
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym([COUNTER_ID], "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        />
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "[НАЗВАНИЕ]",
              "description": "AI-автоматизация для бизнеса",
              "url": "https://[DOMAIN]",
              "priceRange": "₽₽",
              "areaServed": "RU",
              "serviceType": "AI Automation",
              "offers": {
                "@type": "Offer",
                "description": "Бесплатный аудит процессов",
                "price": "0",
                "priceCurrency": "RUB",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
