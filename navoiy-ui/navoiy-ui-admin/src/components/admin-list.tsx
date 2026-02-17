import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import styles from './admin-list.module.scss';

type AdminListItem = {
  id: string;
  title: string;
};

type AdminListProps = {
  items: AdminListItem[];
  currentPage: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onAdd: () => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onPreview: (id: string) => void;
};

const AdminList = ({
  items,
  currentPage,
  pageSize,
  total,
  onPageChange,
  onAdd,
  onDelete,
  onEdit,
  onPreview,
}: AdminListProps) => {
  const totalPages = Math.ceil(total / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const pageItems = items.slice(startIdx, endIdx);

  return (
    <Box className={styles.container}>
      <Flex className={styles.header}>
        <Button onClick={onAdd}>+ Add</Button>
      </Flex>
      <Stack>
        {pageItems.map((item) => (
          <Flex key={item.id} className={styles.listItem}>
            <Text>{item.title}</Text>
            <Stack className={styles.actions} direction="row">
              <Button onClick={() => onDelete(item.id)}>Delete</Button>
              <Button onClick={() => onEdit(item.id)}>Edit</Button>
              <Button onClick={() => onPreview(item.id)}>Preview</Button>
            </Stack>
          </Flex>
        ))}
      </Stack>
      <Flex className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            variant={currentPage === i + 1 ? 'solid' : 'surface'}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default AdminList;
