import { Card, CardContent } from "@/components/ui/card"

export function PainSolutionBenefit() {
  const sections = [
    {
      title: "Pain",
      items: [
        "Difficulty generating revenue and gaining visibility: Most music creators struggle to monetize their work and gain exposure",
        "Lack of business expertise: Artists often lack the skills needed to effectively manage the business aspects of their careers",
        "Time-consuming management of non-creative tasks: Artists spend a large portion of their time on administrative, promotional and management tasks",
      ],
    },
    {
      title: "Solution",
      items: [
        "Personalized support to maximize revenue and visibility: thanks to artificial intelligence, MNGRS.AI offers tailor-made strategies",
        "Accessible business expertise: the platform provides recommendations and tools tailored to manage all commercial aspects",
        "Automation of non-creative tasks: By automating processes like promotion and fanbase management",
      ],
    },
    {
      title: "Benefit",
      items: [
        "Time saving: artists are freed from time-consuming tasks thanks to automation",
        "Increased Revenue: Customized strategies help artists better monetize their music",
        "Enhanced visibility: MNGRS.AI provides tools to improve artists' communication",
        "Accessible professional support: comprehensive business expertise and strategies",
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {sections.map((section, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <h3 className="mb-4 text-xl font-semibold">{section.title}</h3>
            <ul className="space-y-3">
              {section.items.map((item, j) => (
                <li key={j} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

