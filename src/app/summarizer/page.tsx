"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import {
  Scale,
  BookOpen,
  Upload,
  FileText,
  ArrowLeft,
  Download,
  Eye,
  Sparkles,
  Clock,
  BarChart3,
  Target,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"

export default function DocumentSummarizer() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isSummarizing, setIsSummarizing] = useState(false)
  const [summaryComplete, setSummaryComplete] = useState(false)
  const [summaryProgress, setSummaryProgress] = useState(0)
  const [summaryLength, setSummaryLength] = useState([50])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setSummaryComplete(false)
    }
  }

  const startSummarization = () => {
    setIsSummarizing(true)
    setSummaryProgress(0)

    // Simulate summarization progress
    const interval = setInterval(() => {
      setSummaryProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsSummarizing(false)
          setSummaryComplete(true)
          return 100
        }
        return prev + 12
      })
    }, 250)
  }

  const mockSummaryResults = {
    originalLength: "15,847 words",
    summaryLength: "1,584 words",
    compressionRatio: "90%",
    readingTime: "6 minutes",
    keyPoints: [
      "The Supreme Court established privacy as a fundamental right under Article 21",
      "The judgment overruled previous decisions that denied privacy as a fundamental right",
      "The court laid down a framework for testing privacy violations",
      "The decision has implications for Aadhaar and data protection laws",
      "The judgment emphasized the importance of informational privacy",
    ],
    executiveSummary: `The landmark judgment in Justice K.S. Puttaswamy v. Union of India represents a watershed moment in Indian constitutional law, establishing privacy as a fundamental right. The nine-judge bench of the Supreme Court unanimously held that privacy is an intrinsic part of the right to life and personal liberty under Article 21 of the Constitution.

The court overruled its previous decisions in M.P. Sharma and Kharak Singh cases, which had denied privacy as a fundamental right. The judgment established a comprehensive framework for testing privacy violations, requiring any interference with privacy to satisfy the tests of legality, necessity, and proportionality.

The decision has far-reaching implications for various government programs, particularly the Aadhaar system, and sets the foundation for comprehensive data protection legislation in India. The court emphasized that privacy includes informational privacy, bodily privacy, and privacy of choice, making it a multi-dimensional right.`,
    detailedSummary: `This comprehensive judgment by the Supreme Court of India in Justice K.S. Puttaswamy v. Union of India marks a pivotal moment in the evolution of fundamental rights jurisprudence in the country. The case arose in the context of challenges to the Aadhaar program and questions about whether privacy constitutes a fundamental right under the Indian Constitution.

The nine-judge constitutional bench, in a unanimous decision, held that privacy is indeed a fundamental right that flows from the right to life and personal liberty guaranteed under Article 21 of the Constitution. This decision overturned decades of precedent, specifically the decisions in M.P. Sharma v. Satish Chandra (1954) and Kharak Singh v. State of U.P. (1963), which had held that privacy was not a fundamental right.

The court established a comprehensive three-pronged test for any state action that interferes with privacy: (1) Legality - there must be a law authorizing the interference; (2) Necessity - the interference must be necessary in a democratic society for a legitimate aim; and (3) Proportionality - the extent of interference must be proportionate to the need for such interference.

The judgment recognized privacy as a multi-faceted right encompassing informational privacy (protection of personal data), bodily privacy (protection against searches and medical procedures), and privacy of choice (autonomy in making personal decisions). This broad conceptualization ensures comprehensive protection of individual autonomy and dignity.

The decision has significant implications for the Aadhaar program and other government initiatives involving data collection. While the court did not strike down Aadhaar in this judgment, it established the constitutional framework that would later be applied in subsequent Aadhaar-related cases.

Furthermore, the judgment laid the groundwork for India's data protection regime, emphasizing the need for robust safeguards when personal data is collected, processed, or stored. The court's recognition of informational privacy as a fundamental right has been instrumental in shaping India's approach to data protection legislation.`,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()} className="hover:bg-secondary/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Scale className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h1 className="text-lg font-serif font-bold text-foreground">JurisAI</h1>
                  <p className="text-xs text-muted-foreground">Document Summarizer</p>
                </div>
              </div>
            </div>
            <Badge className="bg-secondary/10 text-secondary border-secondary/20">AI-Powered Summarization</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold">
              <span className="bg-gradient-to-r from-secondary via-secondary to-accent bg-clip-text text-transparent">
                Legal Document Summarizer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform lengthy legal documents into concise, context-aware summaries. Our AI understands legal nuances
              and extracts the most relevant information for your needs.
            </p>
          </div>
        </motion.div>

        {!uploadedFile ? (
          /* Upload Section */
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-2 border-dashed border-secondary/30 hover:border-secondary/50 transition-colors">
              <CardContent className="p-12 text-center space-y-6">
                <div className="p-6 bg-secondary/10 rounded-full w-fit mx-auto">
                  <Upload className="h-12 w-12 text-secondary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-semibold">Upload Your Document</h3>
                  <p className="text-muted-foreground">Supported formats: PDF, DOC, DOCX (Max size: 10MB)</p>
                  <div className="space-y-4">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button size="lg" className="bg-secondary hover:bg-secondary/90 cursor-pointer" asChild>
                        <span>
                          <BookOpen className="h-5 w-5 mr-2" />
                          Choose Document
                        </span>
                      </Button>
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Your documents are processed securely and never stored permanently
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          /* Summarization Section */
          <div className="space-y-8">
            {/* File Info & Settings */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{uploadedFile.name}</h3>
                      <p className="text-sm text-muted-foreground">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>

                {/* Summary Settings */}
                {!summaryComplete && !isSummarizing && (
                  <div className="space-y-6 border-t border-border/50 pt-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Summary Settings</h4>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Summary Length: {summaryLength[0]}%</label>
                          <Slider
                            value={summaryLength}
                            onValueChange={setSummaryLength}
                            max={80}
                            min={10}
                            step={10}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Brief (10%)</span>
                            <span>Detailed (80%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button onClick={startSummarization} className="bg-secondary hover:bg-secondary/90">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Summary
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Summarization Progress */}
            {isSummarizing && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto">
                      <BookOpen className="h-8 w-8 text-secondary animate-pulse" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-serif font-semibold">Creating Summary...</h3>
                      <p className="text-muted-foreground">
                        Our AI is analyzing content, extracting key points, and generating your summary
                      </p>
                      <div className="max-w-md mx-auto space-y-2">
                        <Progress value={summaryProgress} className="h-2" />
                        <p className="text-sm text-muted-foreground">{summaryProgress}% Complete</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Summary Results */}
            {summaryComplete && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                {/* Summary Stats */}
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto">
                        <FileText className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Original</h3>
                        <p className="text-sm text-muted-foreground">{mockSummaryResults.originalLength}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="p-3 bg-green-500/10 rounded-full w-fit mx-auto">
                        <Zap className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Summary</h3>
                        <p className="text-sm text-muted-foreground">{mockSummaryResults.summaryLength}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="p-3 bg-blue-500/10 rounded-full w-fit mx-auto">
                        <BarChart3 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Compression</h3>
                        <p className="text-sm text-muted-foreground">{mockSummaryResults.compressionRatio}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="p-3 bg-purple-500/10 rounded-full w-fit mx-auto">
                        <Clock className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Reading Time</h3>
                        <p className="text-sm text-muted-foreground">{mockSummaryResults.readingTime}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Summary Content */}
                <Tabs defaultValue="executive" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="executive">Executive Summary</TabsTrigger>
                    <TabsTrigger value="detailed">Detailed Summary</TabsTrigger>
                    <TabsTrigger value="keypoints">Key Points</TabsTrigger>
                  </TabsList>

                  <TabsContent value="executive">
                    <Card className="bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-secondary" />
                          Executive Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="prose prose-sm max-w-none">
                        <p className="text-muted-foreground leading-relaxed">{mockSummaryResults.executiveSummary}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="detailed">
                    <Card className="bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-secondary" />
                          Detailed Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="prose prose-sm max-w-none">
                        <div className="text-muted-foreground leading-relaxed space-y-4">
                          {mockSummaryResults.detailedSummary.split("\n\n").map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="keypoints">
                    <Card className="bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-secondary" />
                          Key Points
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {mockSummaryResults.keyPoints.map((point, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="p-1 bg-secondary/10 rounded-full mt-1">
                              <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            </div>
                            <p className="text-muted-foreground">{point}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  <Button className="bg-secondary hover:bg-secondary/90">
                    <Download className="h-4 w-4 mr-2" />
                    Download Summary
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setUploadedFile(null)
                      setSummaryComplete(false)
                      setSummaryProgress(0)
                    }}
                  >
                    Summarize Another Document
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
