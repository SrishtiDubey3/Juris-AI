"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import {
  Scale,
  FileText,
  Upload,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowLeft,
  Download,
  Eye,
  Sparkles,
  Clock,
  Shield,
  Target,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentAnalyzer() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setAnalysisComplete(false)
    }
  }

  const startAnalysis = () => {
    setIsAnalyzing(true)
    setAnalysisProgress(0)

    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsAnalyzing(false)
          setAnalysisComplete(true)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const mockAnalysisResults = {
    documentType: "Commercial Contract",
    riskLevel: "Medium",
    keyFindings: [
      {
        type: "risk",
        title: "Liability Clause",
        description: "Limited liability clause may not provide adequate protection",
        severity: "high",
      },
      {
        type: "opportunity",
        title: "Termination Rights",
        description: "Favorable termination conditions for your organization",
        severity: "low",
      },
      {
        type: "compliance",
        title: "Data Protection",
        description: "GDPR compliance requirements are adequately addressed",
        severity: "low",
      },
    ],
    clauses: [
      { name: "Payment Terms", status: "compliant", risk: "low" },
      { name: "Intellectual Property", status: "review", risk: "medium" },
      { name: "Confidentiality", status: "compliant", risk: "low" },
      { name: "Force Majeure", status: "missing", risk: "high" },
    ],
    recommendations: [
      "Consider adding a force majeure clause to protect against unforeseen circumstances",
      "Review intellectual property ownership terms for clarity",
      "Negotiate liability cap limitations for better protection",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()} className="hover:bg-primary/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Scale className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-lg font-serif font-bold text-foreground">JurisAI</h1>
                  <p className="text-xs text-muted-foreground">Document Analyzer</p>
                </div>
              </div>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20">AI-Powered Analysis</Badge>
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
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Legal Document Analyzer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Upload your contracts, agreements, or legal documents and get comprehensive AI-powered analysis including
              risk assessment, clause identification, and compliance checking.
            </p>
          </div>
        </motion.div>

        {!uploadedFile ? (
          /* Upload Section */
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors">
              <CardContent className="p-12 text-center space-y-6">
                <div className="p-6 bg-primary/10 rounded-full w-fit mx-auto">
                  <Upload className="h-12 w-12 text-primary" />
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
                      <Button size="lg" className="bg-primary hover:bg-primary/90 cursor-pointer" asChild>
                        <span>
                          <FileText className="h-5 w-5 mr-2" />
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
          /* Analysis Section */
          <div className="space-y-8">
            {/* File Info */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{uploadedFile.name}</h3>
                      <p className="text-sm text-muted-foreground">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!analysisComplete && !isAnalyzing && (
                      <Button onClick={startAnalysis} className="bg-primary hover:bg-primary/90">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Analyze Document
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analysis Progress */}
            {isAnalyzing && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
                      <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-serif font-semibold">Analyzing Document...</h3>
                      <p className="text-muted-foreground">
                        Our AI is examining clauses, identifying risks, and checking compliance
                      </p>
                      <div className="max-w-md mx-auto space-y-2">
                        <Progress value={analysisProgress} className="h-2" />
                        <p className="text-sm text-muted-foreground">{analysisProgress}% Complete</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Analysis Results */}
            {analysisComplete && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                {/* Summary Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Document Type</h3>
                        <p className="text-sm text-muted-foreground">{mockAnalysisResults.documentType}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-yellow-500/5 to-yellow-500/10 border-yellow-500/20">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="p-3 bg-yellow-500/10 rounded-full w-fit mx-auto">
                        <Shield className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Risk Level</h3>
                        <Badge className="bg-yellow-500/10 text-yellow-700 border-yellow-500/20">
                          {mockAnalysisResults.riskLevel}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="p-3 bg-green-500/10 rounded-full w-fit mx-auto">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Analysis Complete</h3>
                        <p className="text-sm text-muted-foreground">Ready for Review</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Analysis */}
                <Tabs defaultValue="findings" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="findings">Key Findings</TabsTrigger>
                    <TabsTrigger value="clauses">Clause Analysis</TabsTrigger>
                    <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  </TabsList>

                  <TabsContent value="findings" className="space-y-4">
                    {mockAnalysisResults.keyFindings.map((finding, index) => (
                      <Card key={index} className="bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div
                              className={`p-2 rounded-lg ${
                                finding.type === "risk"
                                  ? "bg-red-500/10"
                                  : finding.type === "opportunity"
                                    ? "bg-green-500/10"
                                    : "bg-blue-500/10"
                              }`}
                            >
                              {finding.type === "risk" ? (
                                <AlertTriangle
                                  className={`h-5 w-5 ${
                                    finding.severity === "high" ? "text-red-600" : "text-yellow-600"
                                  }`}
                                />
                              ) : finding.type === "opportunity" ? (
                                <Target className="h-5 w-5 text-green-600" />
                              ) : (
                                <Info className="h-5 w-5 text-blue-600" />
                              )}
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold">{finding.title}</h4>
                                <Badge
                                  className={`${
                                    finding.severity === "high"
                                      ? "bg-red-500/10 text-red-700 border-red-500/20"
                                      : finding.severity === "medium"
                                        ? "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
                                        : "bg-green-500/10 text-green-700 border-green-500/20"
                                  }`}
                                >
                                  {finding.severity} priority
                                </Badge>
                              </div>
                              <p className="text-muted-foreground">{finding.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="clauses" className="space-y-4">
                    {mockAnalysisResults.clauses.map((clause, index) => (
                      <Card key={index} className="bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div
                                className={`p-2 rounded-lg ${
                                  clause.status === "compliant"
                                    ? "bg-green-500/10"
                                    : clause.status === "review"
                                      ? "bg-yellow-500/10"
                                      : "bg-red-500/10"
                                }`}
                              >
                                {clause.status === "compliant" ? (
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                ) : clause.status === "review" ? (
                                  <Clock className="h-5 w-5 text-yellow-600" />
                                ) : (
                                  <AlertTriangle className="h-5 w-5 text-red-600" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-semibold">{clause.name}</h4>
                                <p className="text-sm text-muted-foreground capitalize">Status: {clause.status}</p>
                              </div>
                            </div>
                            <Badge
                              className={`${
                                clause.risk === "low"
                                  ? "bg-green-500/10 text-green-700 border-green-500/20"
                                  : clause.risk === "medium"
                                    ? "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
                                    : "bg-red-500/10 text-red-700 border-red-500/20"
                              }`}
                            >
                              {clause.risk} risk
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="recommendations" className="space-y-4">
                    {mockAnalysisResults.recommendations.map((recommendation, index) => (
                      <Card key={index} className="bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Target className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-muted-foreground">{recommendation}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setUploadedFile(null)
                      setAnalysisComplete(false)
                      setAnalysisProgress(0)
                    }}
                  >
                    Analyze Another Document
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