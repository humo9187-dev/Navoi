export const decodeBase64Html = (encoded: string): string => {
  try {
    const decoded = atob(encoded);
    const utf8 = decodeURIComponent(
      decoded
        .split('')
        .map((c) => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('')
    );
    return utf8;
  } catch (err) {
    console.error('Base64 decode error:', err);
    return encoded;
  }
};

export const extractParagraphs = (html: string): string[] => {
  return html
    .replace(/\n/g, '')
    .split(/<\/p>/)
    .map((p) => p.replace(/<p>/, '').trim())
    .filter(Boolean);
};

export const cleanUrl = (url?: string) => (url ? url.replace(/\s/g, '') : '');
