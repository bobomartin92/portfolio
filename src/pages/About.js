import { useState, useEffect } from "react"
import sanityClient from "../sanityClient"
import imageUrlBuilder from '@sanity/image-url'
import bg from '../images/pg.jpg'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

const About = () => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await sanityClient.fetch(
                    `*[_type == "author"] {
                        name,
                        bio,
                        image
                    }`
                )
                console.log(data[0]);
                setUserData(data[0])

            } catch (error) {
                console.error()
            }
        }

        fetchData()
    }, [])

    if(!userData) return <div>Loading...</div>

  return (
    <main className="relative overflow-hidden">
    <img src={bg} alt="black and blue ball on textile backgroung image" className="absolute h-full w-full" />
        <div className="p-10 lg:p-20 container mx-auto relative">
            <section className="bg-green-100 rounded-lg shadow-2xl p-10 md:p-20 md:flex">
                <img src={urlFor(userData.image).url()} alt={userData.name} 
                className='rounded w-36 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 mr-8 mx-auto mb-2' />
                <div className="text-lg flex flex-col justify-center">
                    <h1 className="cursive text-6xl text-gray-800 mb-4">Hey, I'm{" "}
                    <span className="text-gray-400">{userData.name.split(' ')[0]}</span></h1>
                    <div className="text-gray-600 italic tracking-tighter text-justify">
                        {userData.bio}
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}

export default About