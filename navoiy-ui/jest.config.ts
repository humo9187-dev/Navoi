import type { Config } from 'jest';
import { getJestProjectsAsync } from '@nx/jest';
import '@testing-library/jest-dom';

export default async (): Promise<Config> => ({
  projects: await getJestProjectsAsync(),
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
});
