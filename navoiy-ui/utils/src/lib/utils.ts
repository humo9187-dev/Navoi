import {
  Image,
  ImageInput,
  TagKey,
  WithTagKeys,
} from '@navoiy-workspace/types';
import axios from 'axios';
import { MUTABLE_ROOTS } from './constants';

export function utils(): string {
  return 'utils';
}

interface QueryStringParams {
  searchParams: URLSearchParams;
  name: string;
  paramValue: string;
}

export const filterByTag = <T extends WithTagKeys>(
  type: TagKey,
  items: T[]
): T[] => items.filter((item) => item.tags.includes(type));

export const createQueryString = ({
  searchParams,
  name,
  paramValue,
}: QueryStringParams) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, paramValue);
  return params.toString();
};

export const decode = (encodedData: string) =>
  new TextDecoder('utf-8').decode(
    Uint8Array.from(atob(encodedData), (c) => c.charCodeAt(0))
  );

export const encode = (data: string): string =>
  btoa(String.fromCharCode(...new TextEncoder().encode(data)));

export const mapAxiosError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.message;
    } else if (error.request) {
      return 'Cannot connect to the server';
    } else {
      return error.message;
    }
  }
  return 'Unexpected error';
};

const toImageInput = (value: unknown): ImageInput | null => {
  if (typeof value === 'string') {
    return { link: value };
  }

  if (!value || typeof value !== 'object') return null;

  const record = value as Record<string, unknown>;
  const fileId = typeof record.fileId === 'string' ? record.fileId : undefined;
  const link = typeof record.link === 'string' ? record.link : undefined;

  if (!fileId && !link) return null;

  return { fileId, link };
};

export const normalizeUploadedImages = (data: unknown): ImageInput[] => {
  if (!data) return [];

  if (Array.isArray(data)) {
    return data.map(toImageInput).filter(Boolean) as ImageInput[];
  }

  const direct = toImageInput(data);
  if (direct) return [direct];

  if (typeof data === 'object') {
    const record = data as Record<string, unknown>;
    const containers = [record.files, record.items, record.data];
    for (const container of containers) {
      if (Array.isArray(container)) {
        const mapped = container.map(toImageInput).filter(Boolean) as Image[];
        if (mapped.length > 0) return mapped;
      }
    }
  }

  return [];
};

export function getByPath(obj: any, path: (string | number)[]) {
  let current = obj;

  for (const key of path) {
    if (current == null) return undefined;
    current = current[key];
  }

  return current;
}

export function shouldMarkChanged(path: unknown[]): boolean {
  return (
    Array.isArray(path) &&
    typeof path[0] === 'string' &&
    MUTABLE_ROOTS.has(path[0])
  );
}
