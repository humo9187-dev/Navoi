'use client';

import { AboutUsForm } from '@/components/about-us-from/about-us-form';
import { useSearchParams } from 'next/navigation';

export default function AboutUsEditPage() {
  const searchParams = useSearchParams();
  const aboutUsId = searchParams.get('id');

  return <AboutUsForm aboutUsId={aboutUsId} />;
}
