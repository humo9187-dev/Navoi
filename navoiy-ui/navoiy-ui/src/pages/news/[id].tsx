import { Spinner } from '@chakra-ui/react';
import { useNewsStore } from '@navoiy-workspace/store';
import { NewsDTO } from '@navoiy-workspace/types';
import { NewsDetails } from '@navoiy-workspace/ui-components';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EventDetails() {
  const pathname = usePathname();
  const router = useRouter();
  const loadNews = useNewsStore((s) => s.loadNews);
  const [newsList, setNewsList] = useState<NewsDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNews().then((data) => {
      setNewsList(data);
      setIsLoading(false);
    });
  }, [loadNews]);

  const parts = pathname.split('/').filter(Boolean);

  const newsId = parts[1];

  const particularNews = newsList.find((e) => e.newsId === newsId);

  useEffect(() => {
    if (!isLoading && !particularNews) {
      router.push('/404');
    }
  }, [isLoading, particularNews, router]);

  if (isLoading || !particularNews) {
    return <Spinner />;
  }

  return <NewsDetails {...particularNews} />;
}
