// app/page.tsx

import { notFound } from 'next/navigation';

export default function Home() {
  notFound(); // Always return 404
}
