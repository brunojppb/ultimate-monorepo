import { Box, Button, Grid, GridItem, Title, Card } from '@ultimate-monorepo/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Ultimate Weather</title>
        <meta name="description" content="The ultimate weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title>
          Ultimate Shop
        </Title>

        <Grid>
          <GridItem>
            <Card>
              Shoes
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              Hats
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              Watches
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              Pants
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              T-shirts
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              Accessories
            </Card>
          </GridItem>
        </Grid>
        <div style={{marginTop: '8px'}}>
          <Button onClick={() => alert('Hi there!')}>
            Say hi!
          </Button>
        </div>
      </main>
    </Box>
  )
}

export default Home
