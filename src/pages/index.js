import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Inter, Calistoga } from 'next/font/google';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { ScrollerMotion } from 'scroller-motion';
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

const DynamicScroller = dynamic(() => import('../components/DynamicScroller'), {
  loading: () => <></>,
});

export default function Home() {
  const { scrollY } = useScroll();
  const [pos, setPos] = useState(0);
  const [innerWidth, setInnerWidth] = useState('');

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

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
    <div
      className={`${inter.variable} ${calistoga.variable} font-inter selection:bg-purp selection:text-text text-text flex justify-center w-screen relative`}
    >
      <Header pos={pos} />
      <DynamicScroller innerWidth={innerWidth}>
        <main className="w-screen max-w-[75rem] mx-auto">
          <Landing />
          <About />
          <ScrollingWords />
          <Examples />
          <Services />
          <ToastProvider>
            <Contact />
          </ToastProvider>
          <Footer />
        </main>
      </DynamicScroller>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
