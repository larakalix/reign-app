import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import NewsProvider from '../context/newsProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NewsProvider>
      <Component {...pageProps} />
    </NewsProvider>
  )
}

export default MyApp
