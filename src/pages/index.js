import { useState, useEffect } from 'react';
import { Inter, Calistoga } from 'next/font/google';
import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import ToastProvider from '@/providers/ToastProvider';
import {
  Header,
  Landing,
  About,
  Examples,
  Services,
  Contact,
  Footer,
  ScrollingWords,
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
  const [innerWidth, setInnerWidth] = useState('');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setPos(latest);
    const body = document.body;

    if (latest < 2200) {
      body.style.backgroundColor = '#F8FAFC';
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
      body.style.backgroundImage = `url("/images/dark-bg-texture.svg")`;
      body.style.backgroundImage = `linear-gradient(
        to left,
        rgba(115, 92, 221, 0.2),
        rgba(27, 82, 153, 0.4) 
      )`;
    }
  });

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        smoothTouch: false,
        syncTouch: true,
      }}
    >
      <div
        className={`${inter.variable} ${calistoga.variable} font-inter selection:bg-purp selection:text-text text-text main-container mx-auto p-6`}
      >
        <Header pos={pos} />
        <Landing />
        <About />
        <ScrollingWords />
        <Examples />
        <Services />
        <ToastProvider>
          <Contact />
        </ToastProvider>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
