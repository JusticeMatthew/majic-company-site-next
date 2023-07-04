import handleIntersect from './handleIntersect';

export default function createObserver() {
  if (typeof window !== 'undefined') {
    const wordsObserver = new IntersectionObserver(
      handleIntersect,
      intersectOptions,
    );
    wordsObserver.observe(document.querySelector('#scrolling-words'));
  }
}
