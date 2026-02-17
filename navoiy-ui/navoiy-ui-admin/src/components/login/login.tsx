'use client';

import { FormEvent } from 'react';
import {
  AbsoluteCenter,
  Button,
  Container,
  Field,
  Fieldset,
  Input,
  Stack,
} from '@chakra-ui/react';
import styles from './login.module.scss';
import { LOGIN_FORM } from '@navoiy-workspace/utils';
import { useAuthStore } from '@navoiy-workspace/store';

export const Login = () => {
  const login = useAuthStore((s) => s.login);
  const authError = useAuthStore((s) => s.error);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    await login({ username, password });
  }

  return (
    <Container className={styles.container}>
      <AbsoluteCenter className={styles.pageCenter}>
        <Stack className={styles.authContainer}>
          <form onSubmit={onSubmit}>
            <Fieldset.Root gap={'5'} invalid={!!authError}>
              <Stack>
                <Fieldset.Legend>{LOGIN_FORM.title}</Fieldset.Legend>
                <Fieldset.HelperText>
                  {LOGIN_FORM.description}
                </Fieldset.HelperText>
              </Stack>

              <Field.Root>
                <Field.Label>{LOGIN_FORM.fields.username}</Field.Label>
                <Input name="username" />
              </Field.Root>

              <Field.Root>
                <Field.Label>{LOGIN_FORM.fields.password}</Field.Label>
                <Input name="password" type="password" />
              </Field.Root>

              <Fieldset.ErrorText>{authError}</Fieldset.ErrorText>

              <Button type="submit">{LOGIN_FORM.actions.submit}</Button>
            </Fieldset.Root>
          </form>
        </Stack>
      </AbsoluteCenter>
    </Container>
  );
};
