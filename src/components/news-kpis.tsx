import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Rocket, Users } from 'lucide-react'

export function NewsKPIs() {
  const kpis = [
    {
      title: "13 billion dollars",
      subtitle: "market",
      icon: DollarSign
    },
    {
      title: "Business model",
      subtitle: "Freemium.",
      icon: Rocket
    },
    {
      title: "+100M",
      subtitle: "artists in 2028.",
      icon: Users
    }
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">News & KPIs</h2>
      <div className="space-y-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">
              Key partnerships in development with major industry players: Sacem, TikTok, SoundCloud, and Believe/Tunecore
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">
              International recognition: Ranked this year among the most promising startups by the Wallifornia conference, a European leader in music tech
            </p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-3 gap-4">
          {kpis.map((kpi, i) => (
            <Card key={i}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <kpi.icon className="h-6 w-6 mb-2 text-blue-600" />
                <div className="font-semibold">{kpi.title}</div>
                <div className="text-sm text-gray-600">{kpi.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

