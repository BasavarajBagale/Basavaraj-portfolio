import { useEffect, useState } from 'react';

const phrases = [
  'Cloud Engineer',
  'AWS Specialist',
  'DevOps Practitioner',
  'Kubernetes Engineer',
];

export function useTypewriter(cycle = true) {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const speed = deleting ? 50 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          if (cycle) {
            setTimeout(() => setDeleting(true), 1600);
          }
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx, cycle]);

  return text;
}
