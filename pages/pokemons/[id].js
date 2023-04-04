import React from 'react'
import Layout from '../../components/Layout'

const pokemonDetails = ({ data }) => {
    if(!data){
        return <div>loading</div>
    }
    return (
        <Layout title={`${data.name.english}`}>
            <img src={`${data.image.hires}`} />
            <p>{data.description}</p>
            <h1>{data.type}</h1>
            <p>Height: {data.profile.height}</p>
            <p>Weight: {data.profile.weight}</p>
            <div>
                {Object.keys(data.base).map((sing, double) => {
                    return <div className='flex'>
                        <p>{sing}</p>
                        <h1>{double}</h1>
                    </div>
                })}
            </div>
        </Layout>
    )
}

export default pokemonDetails

// export async function getServerSideProps({ query }) {
//     const res = (await fetch(`https://api.pikaserve.xyz/pokemon/${query.id}`))
//     const data = await res.json()
//     console.log(data)
//     return {
//         props: {
//             pokemon: data
//         }
//     }
// }

// export async function getServerSideProps({ query }) {
//     const res = await fetch(`https://api.pikaserve.xyz/pokemon/${query.id}`);
//     const data = await res.json();


//     return {
//         props: {
//             pokemon: data
//         },
//     };
// }


export async function getStaticPaths() {
    const data = (await fetch(`https://api.pikaserve.xyz/pokemon/all`))
    const datas = await data.json()
    const alldata = datas.map((usersid) => usersid.id)
    // console.log(alldata)
    return {
        paths: alldata.map((ID) => ({
            params: { id: `${ID}` }
        })),
        fallback: false
    }
}
export async function getStaticProps(context) {
    const id = context.params.id
    const res = await fetch(`https://api.pikaserve.xyz/pokemon/${id}`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }

}





