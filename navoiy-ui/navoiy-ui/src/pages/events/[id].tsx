import { Loader } from '@chakra-ui/react';
import { useEventsStore } from '@navoiy-workspace/store';
import { EventDetailsContent, Page404 } from '@navoiy-workspace/ui-components';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function EventDetails() {
  const pathname = usePathname();
  const isLoading = useEventsStore((s) => s.isLoading);
  const loadEvents = useEventsStore((s) => s.loadEvents);
  const events = useEventsStore((s) => s.events);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    loadEvents().finally(() => {
      if (isMounted) {
        setHasLoaded(true);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [loadEvents]);

  const parts = pathname.split('/').filter(Boolean);
  const eventId = parts[1];

  const event = events.find((e) => e.eventId === eventId);

  if (isLoading || !hasLoaded) {
    return <Loader />;
  }
  if (!event) {
    return <Page404 />;
  }
  return <EventDetailsContent event={event} />;
}
