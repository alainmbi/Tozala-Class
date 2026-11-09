import { configApp } from '@adonisjs/eslint-config'

export default configApp({
  files: ['inertia/pages/**/*.tsx'],
  rules: {
    '@adonisjs/no-backend-import-in-frontend': [
      'error',
      { allowed: ['../../resources/js/pages/**', '../../../resources/js/pages/**'] },
    ],
  },
})
