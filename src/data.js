import seoiNage from './img/ipponseoi.gif'
import osotoGari from './img/osotogari.gif'
import uchiMata from './img/uchimata.gif'
import jujiGatame from './img/jujigatame.gif'
import tateShihoGatame from './img/TateShihoGatame.gif'

export const techniquesData = [
    {
      id: 1,
      name: "Seoi Nage",
      kyu: "6th Kyu",
      category: "Tachi Waza",
      description: "Seoi Nage is a shoulder throw in which the opponent is lifted and rotated onto the back. It is one of the fundamental techniques in judo.",
      gif: seoiNage,
      active: false
    },
    {
      id: 2,
      name: "Osoto Gari",
      kyu: "5th Kyu",
      category: "Tachi Waza",
      description: "Osoto Gari is a major outer reap in which the attacker sweeps the opponent's leg to throw them off balance and takes them down to the ground.",
      gif: osotoGari,
      active: false,
      isLiked: false
    },
    {
      id: 3,
      name: "Uchi Mata",
      kyu: "4th Kyu",
      category: "Tachi Waza",
      description: "Uchi Mata is an inner thigh throw where the attacker lifts the opponent's leg and throws them by rotating their own body.",
      gif: uchiMata,
      active: false,
      isLiked: false
    },
    {
      id: 4,
      name: "Juji Gatame",
      kyu: "3rd Kyu",
      category: "Ne Waza",
      description: "Juji Gatame is an arm lock technique in which the opponent's arm is controlled by crossing it and applying pressure to the joint.",
      gif: jujiGatame,
      active: false,
      isLiked: false
    },
    {
      id: 5,
      name: "Tate Shiho Gatame",
      kyu: "2nd Kyu",
      category: "Ne Waza",
      description: "Kesa Gatame is a pinning technique in which the attacker controls the opponent's head and arm between their own arm and torso.",
      gif: tateShihoGatame,
      active: false,
      isLiked: false
    }
  ];
