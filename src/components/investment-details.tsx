import { Card, CardContent } from "@/components/ui/card"

export function InvestmentDetails() {
  const details = [
    { label: "Location", value: "Paris" },
    { label: "Closing date", value: "30/11/24" },
    { label: "Total fundraising", value: "€1M" },
    { label: "Amount secured", value: "725k€" },
    { label: "Minimum ticket", value: "€25k" },
    { label: "Investment type", value: "BSA-AIR (SAFE)" },
    { label: "Discount", value: "20%" },
    { label: "Floor", value: "€2.5M" },
    { label: "Cap", value: "€5M" },
  ]

  return (
    <Card className="bg-navy-900 text-white border-0">
      <CardContent className="p-8">
        <div className="space-y-5">
          {details.map((item, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-[15px] text-gray-400 font-light">{item.label}</span>
              <span className="text-[15px] font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

