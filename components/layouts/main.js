import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Boosung's homepage" />
        <meta name="author" content="Boosung Kim" />
        <meta name="author" content="boosungkim" />
        <link rel="star" href="star.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Boosung Kim" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bytesofboosung" />
        <meta property="og:site_name" content="Boosung Kim" />
        <meta name="og:title" content="Boosung Kim" />
        <meta property="og:type" content="website" />
        <title>Boosung Kim - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
