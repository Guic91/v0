import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TeamSection } from "@/components/team-section"
import { PresentationDeck } from "@/components/presentation-deck"
import { PainSolutionBenefit } from "@/components/pain-solution-benefit"
import { StarInvestors } from "@/components/star-investors"
import { NewsKPIs } from "@/components/news-kpis"
import { InvestmentDetails } from "@/components/investment-details"

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Top Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr,400px] gap-12 mb-16">
          {/* Left Column - Logo & Description */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-[88px] h-[88px] bg-navy-900 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/logo.jpg"
                    alt="MNGRS.AI Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h1 className="text-[28px] font-medium text-gray-900 mt-4">MNGRS.AI</h1>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-medium text-gray-900">Description</h2>
              <div className="space-y-6">
                <p className="text-lg font-light text-gray-600">
                  The First AI-Powered Artist Management Platform
                </p>
                <p className="font-light text-gray-600 leading-relaxed">
                  MNGRS.AI is tapping into a rapidly expanding market, where the number of independent artists is expected to exceed 100 million in the next five years. These artists, often struggling with the complexities of career management, urgently need support. Our platform leverages artificial intelligence to provide personalized guidance, optimizing the management, promotion, and monetization of artistic projects.
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="bg-[#4475F2] hover:bg-[#4475F2]/90 text-[15px] font-normal px-8">
                  VIDEO
                </Button>
                <Button variant="outline" className="text-[15px] font-normal px-8">
                  BOOK A CALL
                </Button>
              </div>
            </div>
          </div>

          {/* Middle Column - Team */}
          <div>
            <TeamSection />
          </div>

          {/* Right Column - Investment Details */}
          <div>
            <InvestmentDetails />
          </div>
        </div>

        {/* Deck and Star Investors Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-12 mb-16">
          <PresentationDeck />
          <div className="space-y-12">
            <StarInvestors />
            <NewsKPIs />
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="space-y-16">
          <PainSolutionBenefit />

          {/* Product Demo */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900">Product Demo</h2>
            <p className="font-light text-gray-600">
              The BETA version launched as a soft launch in mid-September already has more than 1000 users.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#4475F2] hover:bg-[#4475F2]/90 text-[15px] font-normal px-8">
                I WANT TO INVEST
              </Button>
              <Button 
                variant="outline" 
                className="text-[#FF4545] border-[#FF4545] hover:bg-[#FF4545]/5 text-[15px] font-normal px-8"
              >
                NOT INTERESTED
              </Button>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="text-[15px] font-normal px-8">
                BOOK A CALL
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

