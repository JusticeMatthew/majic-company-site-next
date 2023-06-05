import { Inter, Calistoga } from 'next/font/google';
import { Header, Landing } from '@/components';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const calistoga = Calistoga({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-calistoga',
});

export default function Home() {
  return (
    <div
      className={`${inter.variable} ${calistoga.variable} font-inter center-column mx-auto`}
    >
      <Header />
      <main>
        <Landing />
      </main>
    </div>
  );
}
