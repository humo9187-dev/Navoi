import { Image as ChakraImage, Float, Box, Wrap } from '@chakra-ui/react';
import { useFormStore } from '@navoiy-workspace/store';
import { LuX } from 'react-icons/lu';
import styles from './images.module.scss';
import { EVENTS_FORM_TEXT } from '@/components/event-form/constants';
import { ScopeProps } from '@navoiy-workspace/types';

export const ExistingImages = ({ scope }: ScopeProps) => {
  const images = useFormStore((s) => s[scope].images);
  const updateByPath = useFormStore((s) => s.updateByPath);
  const removeImage = (fileId?: string, link?: string) => {
    const next = images.filter((img) => {
      if (fileId) return img.fileId !== fileId;
      if (link) return img.link !== link;
      return true;
    });
    updateByPath([scope, 'images'], next);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <Wrap>
      {images.map((img) => (
        <Box
          key={(img.fileId ?? '') + (img.link ?? '')}
          className={styles.imageCard}
        >
          <ChakraImage
            src={img.link}
            alt={EVENTS_FORM_TEXT.imagesUploadAltFallback}
            className={styles.imageCardImage}
          />
          <Float>
            <Box
              layerStyle="fill.solid"
              onClick={() => removeImage(img.fileId, img.link)}
            >
              <LuX />
            </Box>
          </Float>
        </Box>
      ))}
    </Wrap>
  );
};
