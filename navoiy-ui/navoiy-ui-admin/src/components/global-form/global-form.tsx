import { Container, Button, Stack, Text } from '@chakra-ui/react';
import { HeaderTopTextSection } from './content/header-top-text';
import { SocialLinksSection } from './content/social-links';
import { FooterDescriptionSection } from './content/footer-description';
import { useGlobalConfigStore } from '@navoiy-workspace/store';
import { LoadingSpinner } from '@navoiy-workspace/ui-components';
import styles from './global-form.module.scss';
import { useEffect, useState } from 'react';
import { GlobalFormSchema } from './global-form-schema';
import { FooterContactsSection } from './content/footer-contacts-section';

export const GlobalConfigForm = () => {
  const fetch = useGlobalConfigStore((s) => s.fetch);
  const submit = useGlobalConfigStore((s) => s.submit);
  const config = useGlobalConfigStore((s) => s.config);
  const isLoading = useGlobalConfigStore((s) => s.isLoading);

  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    fetch();
  }, [fetch]);

  if (isLoading || !config) {
    return (
      <Container p={8}>
        <LoadingSpinner />
      </Container>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const result = GlobalFormSchema.safeParse(config);

    if (!result.success) {
      console.error(result.error.format());
      setFormError('Validation failed. Please check all fields.');
      return;
    }

    await submit();
  };

  return (
    <Container className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <Stack className={styles.stack}>
          <HeaderTopTextSection />
          <SocialLinksSection />
          <FooterDescriptionSection />
          <FooterContactsSection />

          {formError && (
            <Text color="red.500" fontSize="sm">
              {formError}
            </Text>
          )}

          <Button
            type="submit"
            size="lg"
            loading={isLoading}
            disabled={isLoading}
            className={styles.button}
          >
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
