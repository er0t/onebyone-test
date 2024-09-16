import React from 'react'
import Link from 'next/link'

const episodes = [
  { 
    title: 'Hicham Bouzid: Building an Art Space in Morocco – ThinkTanger – Ep.08', 
    description: '',
    youtubeLink: 'https://www.youtube.com/watch?v=nrCiyspYIdg&t=171s&ab_channel=OnebyOne'
  },
  { 
    title: "Principal engineer at Yahoo by 24 - Hamza 's Success Story Ep.07", 
    description: '',
    youtubeLink: 'https://www.youtube.com/watch?v=IrcUFPB2gfw&t=49s&ab_channel=OnebyOne'
  },
  { 
    title: 'Hamza Haris - Art, Ego and Life | EP. 6', 
    description: '',
    youtubeLink: 'https://www.youtube.com/watch?v=Ei1o8lECVQM&ab_channel=OnebyOne'
  },
  { 
    title: 'A conversation with Othmane El Kheloufi - Scenography, Music and the Creative Process Ep.05', 
    description: '',
    youtubeLink: 'https://www.youtube.com/watch?v=QMyLtyO4Kfc&ab_channel=OnebyOne'
  },
  { 
    title: 'Adding a New Dimension to Art Exhibitions with Florin Gheorghiu - LePolus Podcast Ep 04', 
    description: '',
    youtubeLink: 'https://www.youtube.com/watch?v=WMdBTzWTRFw&ab_channel=OnebyOne'
  },
  { 
    title: 'Connecting Light and Architecture with Zineb Sekkat - LePolus Podcast Ep.03', 
    description: '',
    youtubeLink: 'https://www.youtube.com/watch?v=bj-8nN-es2k&ab_channel=OnebyOne'
  },
]

const Episodes: React.FC = () => {
  return (
    <div className="text-center z-10">
      <h2 className="text-4xl font-bold mb-4 font-misto">Our Episodes</h2>
      <ul className="text-xl">
        {episodes.map((episode, index) => (
          <li key={index} className="mb-4">
            <Link href={episode.youtubeLink} target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl font-semibold text-[#0000FF] hover:underline cursor-pointer font-neue-metana">
                {episode.title}
              </h3>
            </Link>
            <p className="font-neue-metana">{episode.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
};

// Optimize by using React.memo to prevent unnecessary re-renders
export default React.memo(Episodes);