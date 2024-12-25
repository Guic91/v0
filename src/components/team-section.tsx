import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      name: "Alexandre DENIOT",
      role: "Co-founder & CEO",
      subRole: "Artist Manager",
      details: "Former Midem CEO (World's leading music conference) and Universal Music Exec.",
    },
    {
      name: "Thomas QUENOIL",
      role: "Co-founder & COO",
      details: "Former Midem, Universal Music and Sony Music Exec.",
    },
    {
      name: "Hippolyte BRINGER",
      role: "Founding CTO",
      subRole: "Fullstack Developer",
      details: "Former IT Quant at Natixis and Software Engineer at Ardian",
    },
  ]

  const advisors = [
    {
      name: "Ty Roberts",
      details: "ex-Global CTO Universal Music & Advisor of Jay Z for Tidal",
    },
    {
      name: "Stephen Budd",
      details: "Artist and Producer Manager - ex-Chairman Music Managers Forum",
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-medium text-gray-900">Team</h2>
      <div className="space-y-6">
        {team.map((member, i) => (
          <div key={i} className="border-0 shadow-sm rounded-lg bg-white p-4">
            <div className="flex items-start gap-4">
              <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={
                    member.name === "Alexandre DENIOT" 
                      ? "/images/alex.jpg" 
                      : member.name === "Thomas QUENOIL"
                      ? "/images/thomass.jpg"
                      : member.name === "Hippolyte BRINGER"
                      ? "/images/hypolite.jpg"
                      : "/placeholder.svg"
                  }
                  alt={member.name}
                  width={72}
                  height={72}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1 pt-2">
                <h3 className="font-medium text-[#4475F2]">{member.name}</h3>
                <p className="text-[15px] font-light text-gray-900">{member.role}</p>
                {member.subRole && (
                  <p className="text-[15px] font-light text-gray-600">{member.subRole}</p>
                )}
                <p className="text-[15px] font-light text-gray-500 leading-relaxed">{member.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Advisors</h3>
        {advisors.map((advisor, i) => (
          <div key={i} className="space-y-1">
            <p className="text-[15px] text-[#4475F2]">{advisor.name}:</p>
            <p className="text-[15px] font-light text-gray-600 leading-relaxed">{advisor.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
