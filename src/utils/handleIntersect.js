export default function handleIntersect(entries) {
  entries.forEach((entry) => {
    entry.isIntersecting ? console.log('im here') : console.log('im not hear');
  });
}
