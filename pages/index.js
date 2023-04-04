import Head from 'next/head'
import Layout from '../components/Layout'
import { useState } from 'react'
import Link from 'next/link'

export default function Home({ data }) {
  const [pokemon, setPokemon] = useState(data);
  const [search, setSearch] = useState("");



  return (
    <div>
      <Layout title={"pokemon"}>
        <input type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4'>
          {pokemon.filter((f) => f.name.english.toLowerCase().includes(search.toLowerCase())).map((pokemon, index) => {
            return <div className='bg-red-500 border' key={index}>
              <Link href={`pokemons/${pokemon.id}`}>
                <img src={pokemon.image.hires} className='w-[200px] h-[250px]' />
                <h2>{pokemon.name.english}</h2>
                <h1>{pokemon.id}</h1>
                <span>{pokemon.type}</span>
              </Link>
            </div>
          })}

        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://api.pikaserve.xyz/pokemon/all")
    const data = await res.json()

    return {
      props: {
        data,
      },
    };
  } catch (error) { }
}
