'use client';

import { EventForm } from '@/components/event-form/event-form';
import { useSearchParams } from 'next/navigation';

export default function EventEditPage() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('id');

  return <EventForm eventId={eventId} />;
}
