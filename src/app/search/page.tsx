"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Scale, Search, LinkIcon, Sparkles, BookOpen, Gavel, Shield, TrendingUp, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

// --- Types ---
export type CaseHit = {
  id: string
  title: string
  court: string
  date: string // ISO date
  citation: string // e.g., (2018) 1 SCC 123
  link: string // public URL to judgment
  summary: string // AI-generated
  score?: number // semantic relevance 0..1
  jurisdiction?: string
}

// --- Mock search (replace with real API later) ---
async function searchCasesMock(query: string): Promise<CaseHit[]> {
  // simulate latency
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

  // very naive filter to make the mock feel responsive to the query
  const q = query.toLowerCase()
  const filtered = seed.filter((c) => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q))

  return filtered.length ? filtered : seed
}

// --- UI Helpers ---
const niceDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

const EmptyState = ({ onPick }: { onPick: (q: string) => void }) => {
  const suggestions = [
    "Find all Supreme Court judgments on data privacy after 2017",
    "GDPR-like principles in Indian case law",
    "Article 21 right to privacy leading cases",
    "Constitutional validity of Aadhaar system",
    "Fundamental rights and digital privacy",
    "Proportionality test in privacy cases",
  ]

  return (
    <div className="space-y-8">
      <Card className="border-dashed border-2 bg-gradient-to-br from-background to-muted/30">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-semibold">Start Your Legal Research</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Ask conversational questions to discover relevant case law, precedents, and legal insights powered by AI.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
            {suggestions.map((s) => (
              <Button
                key={s}
                variant="outline"
                size="sm"
                onClick={() => onPick(s)}
                className="text-xs hover:bg-primary/5 hover:border-primary/20"
              >
                {s}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-6 text-center space-y-3">
            <BookOpen className="h-8 w-8 text-primary mx-auto" />
            <h4 className="font-serif font-semibold">Comprehensive Database</h4>
            <p className="text-sm text-muted-foreground">
              Access millions of judgments from Supreme Court, High Courts, and tribunals
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
          <CardContent className="p-6 text-center space-y-3">
            <Gavel className="h-8 w-8 text-secondary mx-auto" />
            <h4 className="font-serif font-semibold">AI-Powered Analysis</h4>
            <p className="text-sm text-muted-foreground">
              Get intelligent summaries and extract key legal principles automatically
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <CardContent className="p-6 text-center space-y-3">
            <TrendingUp className="h-8 w-8 text-accent mx-auto" />
            <h4 className="font-serif font-semibold">Relevance Scoring</h4>
            <p className="text-sm text-muted-foreground">
              Advanced semantic search ranks results by contextual relevance
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const LoadingList = () => (
  <div className="grid gap-4">
    {[...Array(3)].map((_, i) => (
      <Card key={i}>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-5 w-60" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-36" />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
)

function ResultCard({ hit }: { hit: CaseHit }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="hover:shadow-xl transition-all duration-300 hover:border-primary/30 bg-gradient-to-br from-card to-card/50">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-serif font-semibold leading-tight text-foreground hover:text-primary transition-colors">
                {hit.title}
              </h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Scale className="h-4 w-4" />
                  <span>{hit.court}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{niceDate(hit.date)}</span>
                </div>
                {hit.jurisdiction && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{hit.jurisdiction}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                <Sparkles className="h-3 w-3 mr-1" />
                AI Summary
              </Badge>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary/30">
            <p className="text-sm leading-relaxed text-foreground/90">{hit.summary}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="font-mono text-xs">
                {hit.citation}
              </Badge>
              {typeof hit.score === "number" && (
                <Badge
                  variant="outline"
                  className={`${hit.score > 0.9 ? "bg-secondary/10 text-secondary border-secondary/30" : "bg-muted/50"}`}
                >
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {(hit.score * 100).toFixed(0)}% match
                </Badge>
              )}
            </div>
            <a
              href={hit.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
            >
              <LinkIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Read Full Judgment
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function JurisAIPage() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<CaseHit[] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const canSearch = query.trim().length > 2 && !loading

  async function onSearch(e?: React.FormEvent) {
    e?.preventDefault()
    if (!canSearch) return
    setLoading(true)
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      })
      const hits = await res.json()
      setResults(hits) // must match CaseHit[]
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-foreground">JurisAI</h1>
                <p className="text-xs text-muted-foreground">Legal Intelligence Platform</p>
              </div>
            </motion.div>
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="hidden sm:inline-flex bg-secondary/10 text-secondary border-secondary/30"
              >
                <Shield className="h-3 w-3 mr-1" />
                Trusted by Legal Professionals
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Legal Research,
              <br />
              <span className="text-primary">Reimagined</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover relevant case law, precedents, and legal insights with our AI-powered research platform. Ask
              questions in natural language and get precise, contextual results.
            </p>
          </div>

          <form onSubmit={onSearch} className="mt-8">
            <div className="relative max-w-4xl mx-auto">
              <div className="relative group">
                <Input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., Find all Supreme Court judgments on data privacy after 2017..."
                  className="pl-12 pr-32 h-14 text-base rounded-2xl border-2 border-border/50 focus:border-primary/50 bg-background/50 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300"
                  aria-label="Legal research query"
                />
                <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Button
                    type="submit"
                    disabled={!canSearch}
                    className="rounded-xl px-6 h-10 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Searching...
                      </div>
                    ) : (
                      "Search"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </form>

          <div className="max-w-4xl mx-auto mt-4">
            <p className="text-sm text-muted-foreground mb-3">Popular searches:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Privacy rights",
                "Constitutional law",
                "Data protection",
                "Fundamental rights",
                "Digital governance",
              ].map((s) => (
                <Button
                  key={s}
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuery(s)}
                  className="text-xs hover:bg-primary/5 hover:text-primary transition-all duration-200"
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-20">
        <motion.div
          className="space-y-6"
          aria-live="polite"
          aria-busy={loading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {!results && !loading && <EmptyState onPick={(s) => setQuery(s)} />}
          {loading && <LoadingList />}
          {!loading && results && (
            <>
              {results.length > 0 && (
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <h2 className="text-lg font-serif font-semibold">
                    Found {results.length} relevant {results.length === 1 ? "case" : "cases"}
                  </h2>
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                    <Sparkles className="h-3 w-3 mr-1" />
                    AI-Ranked Results
                  </Badge>
                </div>
              )}
              <div className="space-y-6">
                {results.length ? (
                  results.map((hit, index) => (
                    <motion.div
                      key={hit.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ResultCard hit={hit} />
                    </motion.div>
                  ))
                ) : (
                  <Card className="border-dashed">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="p-4 bg-muted/30 rounded-full w-fit mx-auto">
                        <Search className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif font-semibold">No results found</h3>
                        <p className="text-muted-foreground">
                          Try rephrasing your query, using different keywords, or broadening your search criteria.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </>
          )}
        </motion.div>
      </main>

      <footer className="border-t border-border/50 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Scale className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-serif font-semibold text-foreground">JurisAI</p>
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} Legal Intelligence Platform
                </p>
              </div>
            </div>
            <div className="text-xs text-muted-foreground text-center md:text-right">
              <p>Powered by Advanced AI • Trusted by Legal Professionals</p>
              <p className="mt-1">Built with React • Next.js • Tailwind CSS • Framer Motion</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
