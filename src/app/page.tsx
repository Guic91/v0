'use client';

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from 'react';

const DECK_SLIDES = [
  '/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_01-scaled.jpg',
  '/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_02-scaled.jpg',
  '/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_03-scaled.jpg',
  '/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_05-scaled.jpg',
  '/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_07-scaled.jpg',
  '/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_20-scaled.jpg',
];

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Alexandre DENIOT',
      title: 'Co-founder & CEO',
      role: 'Artist Manager',
      description: "Former Midem CEO (World's leading music conference) and Universal Music Exec.",
      image: '/images/team/alex.jpg'
    },
    {
      name: 'Thomas QUENOIL',
      title: 'Co-founder & COO',
      description: 'Former Midem, Universal Music and Sony Music Exec.',
      image: '/images/team/thomass.jpg'
    },
    {
      name: 'Hippolyte BRINGER',
      title: 'Founding CTO',
      role: 'Fullstack Developer',
      description: 'Former IT Quant at Natixis and Software Engineer at Ardian',
      image: '/images/team/hypolite.jpg'
    }
  ];

  const advisors = [
    {
      name: 'Ty Roberts',
      description: 'ex-Global CTO Universal Music & Advisor of Jay Z for Tidal'
    },
    {
      name: 'Stephen Budd',
      description: 'Artist and Producer Manager - ex-Chairman Music Managers Forum'
    }
  ];

  return (
    <section className="bg-white rounded-3xl p-8 shadow-sm">
      <h2 className="text-xl text-gray-500 mb-8">Team</h2>
      
      <div className="space-y-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h3 className="text-[#4475F2] font-medium">{member.name}</h3>
              <p className="text-gray-700">{member.title}</p>
              {member.role && (
                <p className="text-gray-500 text-sm">{member.role}</p>
              )}
              <p className="text-gray-500 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xl text-gray-500 mb-6">Advisors</h2>
        <div className="space-y-4">
          {advisors.map((advisor, index) => (
            <div key={index} className="flex gap-2">
              <span className="text-[#4475F2]">{advisor.name}:</span>
              <span className="text-gray-500">{advisor.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Page() {
  const [slide, setSlide] = useState(0);

  const handleSlide = (direction: 'prev' | 'next' | number) => {
    if (direction === 'prev') {
      setSlide((prev) => (prev > 0 ? prev - 1 : DECK_SLIDES.length - 1));
    } else if (direction === 'next') {
      setSlide((prev) => (prev < DECK_SLIDES.length - 1 ? prev + 1 : 0));
    } else {
      setSlide(direction);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] p-8">
      {/* Top Three Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr,400px] gap-8">
        {/* Description Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-[88px] h-[88px] bg-[#0A1445] rounded-2xl flex items-center justify-center">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.jpg"
                  alt="MNGRS.AI Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-[28px] font-medium text-[#0A1445] mt-4">MNGRS.AI</h1>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl text-gray-500">Description</h2>
            <h3 className="text-lg text-gray-600">
              The First AI-Powered Artist Management Platform
            </h3>
            <p className="text-gray-500 leading-relaxed">
              MNGRS.AI is tapping into a rapidly expanding market, where the number of independent artists is expected to exceed 100 million in the next five years. These artists, often struggling with the complexities of career management, urgently need support. Our platform leverages artificial intelligence to provide personalized guidance, optimizing the management, promotion, and monetization of artistic projects.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-[#4475F2] hover:bg-[#4475F2]/90 text-white px-8 py-2 rounded-full">
                VIDEO
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-600 px-8 py-2 rounded-full">
                BOOK A CALL
              </Button>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <TeamSection />

        {/* Investment Details Section */}
        <div className="bg-[#0A1445] rounded-3xl p-8 text-white">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Location</span>
              <span>Paris</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Closing date</span>
              <span>30/11/24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total fundraising</span>
              <span>€1M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Amount secured</span>
              <span>725k€</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Minimum ticket</span>
              <span>€25k</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Investment type</span>
              <span>BSA-AIR (SAFE)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Discount</span>
              <span>20%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Floor</span>
              <span>€2.5M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Cap</span>
              <span>€5M</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button className="flex-1 bg-[#4475F2] hover:bg-[#4475F2]/90 text-white rounded-full">
              I WANT TO INVEST
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-red-500 text-red-500 hover:bg-red-500/5 rounded-full"
            >
              NOT INTERESTED
            </Button>
          </div>
        </div>
      </div>

      {/* Deck Section and Right Sections */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
        {/* Deck Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl text-gray-500 mb-8">Deck</h2>
          <div className="relative">
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 hover:bg-white/90 transition-colors"
              onClick={() => handleSlide('prev')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19l-7-7 7-7" stroke="#4475F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 hover:bg-white/90 transition-colors"
              onClick={() => handleSlide('next')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5l7 7-7 7" stroke="#4475F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="overflow-hidden rounded-2xl bg-[#0A1445] aspect-[16/9]">
              <Image
                src={DECK_SLIDES[slide]}
                alt={`MNGRS.AI Deck Slide ${slide + 1}`}
                fill
                className="object-contain"
                priority={slide === 0}
              />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {DECK_SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === slide ? 'bg-[#4475F2]' : 'bg-gray-200'}`}
                  onClick={() => handleSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Sections */}
        <div className="space-y-8">
          {/* Star Investors */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl text-gray-500 mb-6">Star investors</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4475F2] rounded-full"></div>
                The African star Fally Ipupa's manager
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4475F2] rounded-full"></div>
                Janet Jackson's advisor
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4475F2] rounded-full"></div>
                A French international at the Real Madrid
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4475F2] rounded-full"></div>
                An agency representing top talent
              </li>
            </ul>
          </div>

          {/* News & KPIs */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl text-gray-500 mb-6">News & KPIs</h2>
            <div className="space-y-4">
              <div className="text-gray-600">
                <p className="mb-4">Key partnerships in development with major industry players: Sacem, TikTok, SoundCloud, and Believe/Tunecore</p>
                <p>International recognition: Ranked this year among the most promising startups by the Wallifornia conference, a European leader in music tech</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-[#4475F2] text-2xl font-medium">13 billion</div>
                  <div className="text-gray-500 text-sm">dollars market</div>
                </div>
                <div className="text-center">
                  <div className="text-[#4475F2] text-2xl font-medium">Freemium</div>
                  <div className="text-gray-500 text-sm">Business model</div>
                </div>
                <div className="text-center">
                  <div className="text-[#4475F2] text-2xl font-medium">+100M</div>
                  <div className="text-gray-500 text-sm">artists in 2028</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pain, Solution, Benefit Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl text-gray-500 mb-6">Pain</h2>
          <ul className="space-y-4">
            <li className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4475F2] mt-2"></div>
              <p className="text-gray-500">
                Difficulty generating revenue and gaining visibility: Most music creators struggle to monetize their work and gain exposure
              </p>
            </li>
            <li className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4475F2] mt-2"></div>
              <p className="text-gray-500">
                Lack of business expertise: Artists often lack the skills needed to effectively manage the business aspects of their careers
              </p>
            </li>
            <li className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4475F2] mt-2"></div>
              <p className="text-gray-500">
                Time-consuming management of non-creative tasks: Artists spend a large portion of their time on administrative, promotional and management tasks, to the detriment of their creative process
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl text-gray-500 mb-6">Solution</h2>
          <ul className="space-y-4">
            <li className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4475F2] mt-2"></div>
              <p className="text-gray-500">
                Personalized support to maximize revenue and visibility: through artificial intelligence, MNGRS.AI offers tailor-made strategies to help artists develop their audience and monetize their projects more effectively
              </p>
            </li>
            <li className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4475F2] mt-2"></div>
              <p className="text-gray-500">
                Accessible business expertise: the platform provides recommendations and tools tailored to manage all commercial aspects of a musical career, from contracting to revenue optimization
              </p>
            </li>
            <li className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4475F2] mt-2"></div>
              <p className="text-gray-500">
                Automation of non-creative tasks: By automating processes like promotion, release planning, and fanbase management, MNGRS.AI frees artists from time-consuming tasks, allowing them to focus on creating music
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl text-gray-500 mb-6">Benefit</h2>
          <ul className="space-y-4">
            <li className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4475F2] mt-2"></div>
              <p className="text-gray-500">
                Time saving: artists are freed from time-consuming tasks (promotion, fanbase management, etc.) thanks to automation, allowing them to fully concentrate on music creation
              </p>
            </li>
            <li className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4475F2] mt-2"></div>
              <p className="text-gray-500">
                Increased Revenue: Customized strategies help artists better monetize their music, maximizing their revenue streams through optimized release management and monetization
              </p>
            </li>
            <li className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4475F2] mt-2"></div>
              <p className="text-gray-500">
                Enhanced visibility: Improved communication and marketing, helping them stand out and attract a larger audience
              </p>
            </li>
            <li className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4475F2] mt-2"></div>
              <p className="text-gray-500">
                Accessible professional support: the platform provides artists with comprehensive business expertise, with recommendations and strategies that cover all aspects of their career, without the need for costly intermediaries
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Demo Section */}
      <div className="mt-8 bg-white rounded-3xl p-8 shadow-sm">
        <h2 className="text-xl text-gray-500 mb-6">Product Demo</h2>
        <p className="text-gray-500 mb-8">
          The BETA version launched as a soft launch in mid-September already has more than 1000 users.
        </p>
        <div className="flex gap-4">
          <Button className="bg-[#4475F2] hover:bg-[#4475F2]/90 text-white px-8 py-2 rounded-full">
            BETA
          </Button>
        </div>
        <div className="flex gap-4 mt-8">
          <Button className="flex-1 bg-[#4475F2] hover:bg-[#4475F2]/90 text-white rounded-full">
            I WANT TO INVEST
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-red-500 text-red-500 hover:bg-red-500/5 rounded-full"
          >
            NOT INTERESTED
          </Button>
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="border-gray-300 text-gray-600 px-8 py-2 rounded-full">
            BOOK A CALL
          </Button>
        </div>
      </div>
    </div>
  )
}
