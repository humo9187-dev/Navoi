import { Box, FileUpload, Icon } from '@chakra-ui/react';
import { LuUpload } from 'react-icons/lu';
import { useFormStore } from '@navoiy-workspace/store';
import { EVENTS_IMAGE_LIMITS } from '@/components/event-form/constants';
import { ScopeProps } from '@navoiy-workspace/types';

export const ConditionalDropzone = ({ scope }: ScopeProps) => {
  const images = useFormStore((s) => s[scope].images);

  if (images.length >= EVENTS_IMAGE_LIMITS.maxFiles) {
    return null;
  }

  return (
    <FileUpload.Dropzone>
      <Icon size="md" color="fg.muted">
        <LuUpload />
      </Icon>
      <FileUpload.DropzoneContent>
        <Box>Drag and drop files here</Box>
        <Box color="fg.muted">
          {EVENTS_IMAGE_LIMITS.maxFiles - images.length} more file
          {EVENTS_IMAGE_LIMITS.maxFiles - images.length !== 1 ? 's ' : ' '}
          allowed
        </Box>
      </FileUpload.DropzoneContent>
    </FileUpload.Dropzone>
  );
};
