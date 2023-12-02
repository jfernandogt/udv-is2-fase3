import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Proyecto de IS2 - Fase 3</title>
        <meta name="description" content="Generated by Proyecto de IS2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <p className="mb-3 mt-3">
        Este proyecto fue realizado por: Juan Fernando Barrios Barrera / 202102655.
        Consiste en un sistema de inventario de cursos e estudiantes, a cada curso se le puede asignar un listado de estudiantes.
      </p>
      </main>
    </>
  )
}
