import { useEffect, useState } from 'react';

// use media
export default function UseMedia(queries: any, values: any, defaultValue: any) {
  const match: any = () => values[queries.findIndex((q: any) => matchMedia(q).matches)] || defaultValue;
  const [ value, set ]: any = useState(match);

  useEffect(() => {
    const handler: any = () => set(match);
    window.addEventListener('resize', handler);

    return () => window.removeEventListener(handler, () => {});
  }, [])
  return value;
}
