"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      "quote": "Music is the divine way to tell beautiful, poetic things to the heart. Music is the divine way to tell beautiful, poetic things to the heart.",
      "name": "Ludwig van Beethoven",
      "title": "Composer"
    },
    {
      "quote": "Without music, life would be a mistake. Music is the divine way to tell beautiful, poetic things to the heart.",
      "name": "Friedrich Nietzsche",
      "title": "Philosopher"
    },
    {
      "quote": "Music can change the world because it can change people. Music is the divine way to tell beautiful, poetic things to the heart.",
      "name": "Bono",
      "title": "Musician"
    },
    {
      "quote": "Where words fail, music speaks.",
      "name": "Hans Christian Andersen",
      "title": "Author"
    },
    
  {
    "quote": "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
    "name": "Plato",
    "title": "Philosopher"
  },
  {
    "quote": "The only truth is music.",
    "name": "Jack Kerouac",
    "title": "Writer"
  },
  {
    "quote": "Music expresses that which cannot be said and on which it is impossible to be silent.",
    "name": "Victor Hugo",
    "title": "Author"
  },
  {
    "quote": "Life seems to go on without effort when I am filled with music.",
    "name": "George Eliot",
    "title": "Novelist"
  }
]
  
function MusicSchoolTestimonials() {
    return (
        <div className="h-[40rem] w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
              <h2 className="text-4xl font-bold text-center mt-16 z-10">Hear Our Harmony: Voices of Success</h2>
              <div className="h-[40rem] rounded-md flex flex-col antialiased   bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
                <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
        />
        </div>
    </div>
    </div>
    )
}

export default MusicSchoolTestimonials