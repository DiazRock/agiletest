import { lazy } from 'react'

export const HomePage = lazy(() =>
  import('src/pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  })),
)
export const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)
