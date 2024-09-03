"use client"
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";
import { title } from 'process';

function UpcomingWebinars() {

    const featuredWebinars  = [
        {
            "title": "Classical Concert Gala",
            "description": "Experience the elegance and grandeur of classical music in a spectacular gala event. Immerse yourself in the enchanting melodies performed by world-class musicians and orchestras.",
            "slug": "classical-concert-gala",
            "isFeatured": true
        },
        {
            "title": "Rock 'n Roll Revolution",
            "description": "Get ready to rock out to the biggest hits of the past and present. Join us for a night of electrifying performances, high-energy music, and unforgettable memories.",
            "slug": "rock-n-roll-revolution",
            "isFeatured": false
        },
        {
            "title": "Soulful Acoustic Sessions",
            "description": "Unwind with soothing acoustic melodies in an intimate setting. Let the heartfelt tunes and soulful vocals transport you to a place of serenity and tranquility.",
            "slug": "soulful-acoustic-sessions",
            "isFeatured": false
        },
        {
            "title": "Hip Hop Showcase",
            "description": "Witness the raw talent and creativity of emerging hip hop artists as they take the stage by storm. From slick rhymes to infectious beats, this showcase promises non-stop excitement.",
            "slug": "hip-hop-showcase",
            "isFeatured": false
        },
        {
            "title": "Folk Music Festival",
            "description": "Celebrate the rich tapestry of folk music traditions from around the world. Experience the warmth and authenticity of live performances that pay homage to cultural heritage.",
            "slug": "folk-music-festival",
            "isFeatured": true
        }
]      
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
            <h2 className="text-teal-500 font-semibold tracking-wide uppercase text-base">FEATURED WEBINAR</h2>
            <p className="mt-2 text-4xl leading-8 font-bold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className='mt-10'>
        <HoverEffect 
            items={featuredWebinars.map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: "/"
            }))} 
        />
        </div>
        <div className='mt-10 text-center'>
            <Link href ={"/"} className="px-4 py-2 bg-white text-neutral-600 border-none rounded outline-none hover:bg-neutral-200 duration transition-200">
                View All Webinars
            </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
