import { Card, CardContent } from "@/components/ui/card"

export function StarInvestors() {
  const investors = [
    "The African star Fally Ipupa's manager",
    "Janet Jackson's advisor",
    "A French international at the Real Madrid",
    "An agency representing top talent"
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Star investors</h2>
      <Card>
        <CardContent className="p-6">
          <ul className="space-y-2">
            {investors.map((investor, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-600">
                <span className="text-blue-600">•</span>
                {investor}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

