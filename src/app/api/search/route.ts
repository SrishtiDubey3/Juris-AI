import { type NextRequest, NextResponse } from "next/server"

export type CaseHit = {
  id: string
  title: string
  court: string
  date: string
  citation: string
  link: string
  summary: string
  score?: number
  jurisdiction?: string
}

// Mock search function (replace with real API later)
async function searchCasesMock(query: string): Promise<CaseHit[]> {
  // Simulate API latency
  await new Promise((r) => setTimeout(r, 1000))

  const seed: CaseHit[] = [
    {
      id: "p1",
      title: "Justice K.S. Puttaswamy (Retd.) v. Union of India",
      court: "Supreme Court of India",
      date: "2017-08-24",
      citation: "(2017) 10 SCC 1",
      link: "https://indiankanoon.org/doc/127517806/",
      summary:
        "The nine-judge bench recognized the right to privacy as a fundamental right under Article 21, shaping the constitutional basis for data protection in India.",
      score: 0.98,
      jurisdiction: "India",
    },
    {
      id: "p2",
      title: "K.S. Puttaswamy v. Union of India (Aadhaar, 2018)",
      court: "Supreme Court of India",
      date: "2018-09-26",
      citation: "(2019) 1 SCC 1",
      link: "https://indiankanoon.org/doc/127517806/",
      summary:
        "The Court upheld Aadhaar with restrictions, striking down parts enabling private use and mandating robust data protection measures.",
      score: 0.94,
      jurisdiction: "India",
    },
    {
      id: "p3",
      title: "Justice K.S. Puttaswamy v. Union of India (Review)",
      court: "Supreme Court of India",
      date: "2019-01-11",
      citation: "Review Petition (C) No. 122 of 2019",
      link: "https://www.supremecourtofindia.nic.in",
      summary:
        "Review petitions on aspects of Aadhaar and privacy; the Court addressed scope, proportionality, and permissible use of data.",
      score: 0.88,
      jurisdiction: "India",
    },
  ]

  // Filter based on query
  const q = query.toLowerCase()
  const filtered = seed.filter(
    (c) =>
      c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q) || c.court.toLowerCase().includes(q),
  )

  return filtered.length ? filtered : seed
}

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Query is required" }, { status: 400 })
    }

    const results = await searchCasesMock(query)
    return NextResponse.json(results)
  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
