import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Extenze Official Store | Male Performance & Vitality',
  description: 'The official Extenze store: The leading supplement for male performance, energy, and vitality. 100% natural formula with satisfaction guarantee.',
  openGraph: {
    title: 'Extenze Official Store | Male Performance & Vitality',
    description: 'The official Extenze store: The leading supplement for male performance, energy, and vitality.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extenze Official Store',
    description: 'The leading supplement for male performance, energy, and vitality.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">{children}</body>
    </html>
  );
}
