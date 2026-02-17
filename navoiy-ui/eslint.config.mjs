import nx from '@nx/eslint-plugin';
import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

export default defineConfig(
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ...nx.configs['flat/react'],
  {
    ignores: ['**/dist', '**/node_modules', '**/.nx', '**/.next', '**/out'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      react: pluginReact,
      'react-hooks': hooksPlugin,
      prettier: pluginPrettier, // Use eslint-plugin-prettier
    },
    rules: {
      ...prettier.rules,         // Disable conflicting ESLint rules
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules, // For React 17+ JSX Transform
      ...hooksPlugin.configs.recommended.rules,
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'app',
              onlyDependOnLibsWithTags: ['ui', 'store', 'types', 'utils']
            },
            {
              sourceTag: 'ui',
              onlyDependOnLibsWithTags: ['store', 'types', 'utils']
            },
            {
              sourceTag: 'store',
              onlyDependOnLibsWithTags: ['types', 'utils', 'api']
            },
            {
              sourceTag: 'api',
              onlyDependOnLibsWithTags: ['types', 'utils']
            },
            {
              sourceTag: 'utils',
              onlyDependOnLibsWithTags: ['types']
            },
            {
              sourceTag: 'types',
              onlyDependOnLibsWithTags: []
            }
          ]
        },
      ],
      'prettier/prettier': 'error', // Treat Prettier formatting issues as ESLint errors
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
);


