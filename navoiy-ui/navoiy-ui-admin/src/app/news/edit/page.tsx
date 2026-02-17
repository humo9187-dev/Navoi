'use client';

import { ArticleForm } from '@/components/article-form/article-form';
import { useSearchParams } from 'next/navigation';

export default function ArticleEditPage() {
  const searchParams = useSearchParams();
  const articleId = searchParams.get('id');

  return <ArticleForm articleId={articleId} />;
}
