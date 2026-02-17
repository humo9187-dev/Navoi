import { Fieldset, FileUpload, useFileUploadContext } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { ConditionalDropzone } from './conditional-dropzone';
import { ExistingImages } from './existing-images';
import { useFormStore } from '@navoiy-workspace/store';
import {
  EVENTS_FORM_TEXT,
  EVENTS_IMAGE_LIMITS,
} from '@/components/event-form/constants';
import styles from '../form.module.scss';
import { ScopeProps } from '@navoiy-workspace/types';

const fileKey = (file: File) =>
  `${file.name}:${file.size}:${file.lastModified}`;

const UploadOnSelect = ({ scope }: ScopeProps) => {
  const fileUpload = useFileUploadContext();
  const files = fileUpload.acceptedFiles;
  const uploadImagesAction = useFormStore((s) => s.uploadImagesAction);
  const uploadedRef = useRef(new Set<string>());
  const uploadingRef = useRef(new Set<string>());

  useEffect(() => {
    const pending = files.filter((file) => {
      const key = fileKey(file);
      return !uploadedRef.current.has(key) && !uploadingRef.current.has(key);
    });

    if (pending.length === 0) return;

    pending.forEach((file) => uploadingRef.current.add(fileKey(file)));

    const controller = new AbortController();

    const upload = async () => {
      let succeeded = false;
      try {
        await uploadImagesAction(pending, scope);
        succeeded = true;
      } catch (error) {
        console.error('Failed to upload event images', error);
      } finally {
        pending.forEach((file) => {
          const key = fileKey(file);
          uploadingRef.current.delete(key);
          if (succeeded) {
            uploadedRef.current.add(key);
          }
        });
      }
    };

    upload();

    return () => controller.abort();
  }, [files, uploadImagesAction]);

  return null;
};

export const ImageUploader = ({ scope }: ScopeProps) => {
  const images = useFormStore((s) => s[scope].images);

  return (
    <Fieldset.Root className={styles.formSection}>
      <Fieldset.Content>
        <Fieldset.Legend>{EVENTS_FORM_TEXT.imagesHeading}</Fieldset.Legend>
        <FileUpload.Root
          alignItems="stretch"
          maxFiles={EVENTS_IMAGE_LIMITS.maxFiles - images.length}
        >
          <FileUpload.HiddenInput />
          <ConditionalDropzone scope={scope} />
          <UploadOnSelect scope={scope} />
          <ExistingImages scope={scope} />
        </FileUpload.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  );
};
