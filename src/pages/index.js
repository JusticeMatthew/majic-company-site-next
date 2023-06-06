import { useState } from 'react';
import { Inter, Calistoga } from 'next/font/google';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Header,
  Landing,
  About,
  Examples,
  ScrollingWords,
  SmoothScroll,
} from '@/components';

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
  const { scrollY } = useScroll();
  const [pos, setPos] = useState(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setPos(latest);
    const body = document.body;

    if (latest < 2200) {
      body.style.backgroundColor = 'initial';
      body.style.backgroundImage = `linear-gradient(
        to right,
        rgba(248, 250, 252, 0.6),
        rgba(0, 167, 225, 0.25)
      )`;
      body.style.backgroundImage = `linear-gradient(
        to left,
        rgba(115, 92, 221, 0.2),
        rgba(27, 82, 153, 0.4)
      )`;
    }

    if (latest >= 2200) {
      body.style.backgroundColor = '#0B112B';
      body.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%231b5299' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`;
    }
  });

  return (
    <div
      className={`${inter.variable} ${calistoga.variable} font-inter center-column mx-auto selection:bg-purp selection:text-text text-text`}
    >
      <Header pos={pos} />
      <SmoothScroll>
        <main className="mx-auto center-column">
          <Landing />
          <About />
          <ScrollingWords />
          <Examples />
        </main>
      </SmoothScroll>
    </div>
  );
}
