'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import AdminList from '@/components/admin-list';
import { NewsDTO } from '@navoiy-workspace/types';
import { useRouter } from 'next/navigation';
import NewsPreviewModal from '@/components/news-preview-modal/news-preview-modal';
import { useNewsStore } from '@navoiy-workspace/store';
import { LoadingSpinner } from '@navoiy-workspace/ui-components';
import Header from '@/components/header/header';

const PAGE_SIZE = 10;

export default function NewsPage() {
  const [newsList, setNewsList] = useState<NewsDTO[]>([]);
  const isLoading = useNewsStore((s) => s.isLoading);
  const loadNews = useNewsStore((s) => s.loadNews);
  const [page, setPage] = useState(1);
  const [previewNews, setPreviewNews] = useState<NewsDTO | null>(null); // CHANGED
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); // CHANGED
  const router = useRouter();

  useEffect(() => {
    loadNews().then((data) => setNewsList(data));
  }, [loadNews]);

  const handleAdd = () => router.push('/news/create');
  const handleEdit = (id: string) => router.push(`/news/edit/?id=${id}`);

  // Temporary event handlers for testing
  const handleDelete = (id: string) => {
    alert(`Delete News. id: ${id}`);
  };

  const handlePreview = (id: string) => {
    const item = newsList.find((n) => n.newsId === id);
    if (item) {
      setPreviewNews(item);
      setIsPreviewOpen(true);
    }
  };

  if (isLoading) {
    return (
      <Container p={8}>
        <LoadingSpinner />
      </Container>
    );
  }

  if (!newsList.length) {
    return null;
  }

  return (
    <Box>
      <Header />
      <Box p={8}>
        <Heading fontSize="4xl" size="4xl">
          News
        </Heading>
        <AdminList
          items={newsList.map((item) => ({
            id: item.newsId,
            title: item.content.ru?.title || 'No title',
          }))}
          currentPage={page}
          pageSize={PAGE_SIZE}
          total={newsList.length}
          onPageChange={setPage}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onPreview={handlePreview}
        />
        <NewsPreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          news={previewNews}
          language="ru"
        />
      </Box>
    </Box>
  );
}
