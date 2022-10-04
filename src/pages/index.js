import { CreateEventForm } from '@/components/CreateEventForm'
import { Heading } from '@/components/Heading'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Envited</title>
    </Head>
    <Heading />

    <CreateEventForm/>
    </>
      )
}
