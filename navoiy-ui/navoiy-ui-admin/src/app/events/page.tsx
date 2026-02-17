'use client';
import React, { useEffect, useState } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import AdminList from '@/components/admin-list';
import { EventDTO } from '@navoiy-workspace/types';
import { useRouter } from 'next/navigation';
import EventPreviewModal from '@/components/event-preview-modal/event-preview-modal';
import { useEventsStore } from '@navoiy-workspace/store';
import { LoadingSpinner } from '@navoiy-workspace/ui-components';
import Header from '@/components/header/header';

const PAGE_SIZE = 10;

export default function EventsPage() {
  const events = useEventsStore.getState().events;
  const loadAdminEvents = useEventsStore((s) => s.loadAdminEvents);
  const isLoading = useEventsStore((s) => s.isLoading);
  const [page, setPage] = useState(1);
  const [previewEvent, setPreviewEvent] = useState<EventDTO | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadAdminEvents();
  }, [loadAdminEvents]);

  if (isLoading) {
    return (
      <Container p={8}>
        <LoadingSpinner />
      </Container>
    );
  }

  const handleAdd = () => {
    router.push('/events/create');
  };

  const handleDelete = (id: string) => {
    alert(`Delete Event. id: ${id}`);
  };

  const handleEdit = (id: string) => {
    router.push(`/events/edit?id=${id}`);
  };

  const handlePreview = (id: string) => {
    const event = events.find((e) => e.eventId === id);
    if (event) {
      setPreviewEvent(event);
      setIsPreviewOpen(true);
    }
  };
  return (
    <Box>
      <Header />
      <Box p={8}>
        <Heading fontSize="4xl" size="4xl">
          Events
        </Heading>
        <AdminList
          items={events.map((event) => ({
            id: event.eventId,
            title: event.content.ru?.title || 'No title',
          }))}
          currentPage={page}
          pageSize={PAGE_SIZE}
          total={events.length}
          onPageChange={setPage}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onPreview={handlePreview}
        />
        <EventPreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          event={previewEvent}
          language="ru"
        />
      </Box>
    </Box>
  );
}
