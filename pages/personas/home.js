import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Persona</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}