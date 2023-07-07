import React, { useState, useEffect } from 'react';
import { Inter, Calistoga } from 'next/font/google';
import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import ToastProvider from '@/providers/ToastProvider';
import { useInView } from 'react-intersection-observer';
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
  const [aboutInView, setAboutInView] = useState();
  const [examplesInView, setExamplesInView] = useState();
  const [servicesInView, setServicesInView] = useState();
  const [contactInView, setContactInView] = useState();
  const { ref: bgRef, inView: bgInView } = useInView({ threshold: 0.19 });

  useEffect(() => {
    const body = document.body;
    if (!bgInView) {
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

    if (bgInView) {
      body.style.backgroundColor = '#0B112B';
      body.style.backgroundImage = `url("/images/dark-bg-texture.svg")`;
      body.style.backgroundImage = `linear-gradient(
        to left,
        rgba(115, 92, 221, 0.2),
        rgba(27, 82, 153, 0.4)
      )`;
    }
  }, [bgInView]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setPos(latest);
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
      <div className={`${inter.variable} ${calistoga.variable}`}>
        <Header
          pos={pos}
          bgInView={bgInView}
          about={aboutInView}
          examples={examplesInView}
          services={servicesInView}
          contact={contactInView}
        />
        <div className="px-6 mx-auto main-container font-inter selection:bg-purp selection:text-text text-text">
          <Landing />
          <About setInView={setAboutInView} />
          <div ref={bgRef}>
            <ScrollingWords />
            <Examples setInView={setExamplesInView} />
            <Services setInView={setServicesInView} />
            <ToastProvider>
              <Contact setInView={setContactInView} />
            </ToastProvider>
            <Footer />
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
