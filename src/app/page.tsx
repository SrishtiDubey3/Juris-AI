"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import {
    Scale,
    Search,
    Sparkles,
    BookOpen,
    TrendingUp,
    Clock,
    Menu,
    X,
    ChevronRight,
    FileText,
    MessageSquare,
    Database,
    Users,
    Github,
    Linkedin,
    Mail,
    Play,
    CheckCircle,
    ArrowRight,
    Zap,
    Target,
    Award,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function JurisAILandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [demoQuery, setDemoQuery] = useState("")
    const [showDemoResults, setShowDemoResults] = useState(false)

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
    }

    const handleDemoSearch = () => {
        setShowDemoResults(true)
        setTimeout(() => setShowDemoResults(false), 5000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b border-border/50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
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

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <button
                                onClick={() => scrollToSection("home")}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection("features")}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection("demo")}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Demo
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Contact
                            </button>
                            <div className="flex items-center gap-3">
                                <Button variant="ghost" size="sm">
                                    Login
                                </Button>
                                <Button size="sm" className="bg-primary hover:bg-primary/90">
                                    Sign Up
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="md:hidden mt-4 pb-4 border-t border-border/50"
                        >
                            <div className="flex flex-col gap-4 pt-4">
                                <button
                                    onClick={() => scrollToSection("home")}
                                    className="text-left text-sm font-medium hover:text-primary transition-colors"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => scrollToSection("features")}
                                    className="text-left text-sm font-medium hover:text-primary transition-colors"
                                >
                                    Features
                                </button>
                                <button
                                    onClick={() => scrollToSection("demo")}
                                    className="text-left text-sm font-medium hover:text-primary transition-colors"
                                >
                                    Demo
                                </button>
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="text-left text-sm font-medium hover:text-primary transition-colors"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="text-left text-sm font-medium hover:text-primary transition-colors"
                                >
                                    Contact
                                </button>
                                <div className="flex gap-3 pt-2">
                                    <Button variant="ghost" size="sm" className="flex-1">
                                        Login
                                    </Button>
                                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="max-w-7xl mx-auto px-4 pt-20 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    <div className="space-y-6">
                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                                JurisAI
                            </span>
                            <br />
                            <span className="text-foreground">Your Own Legal Assistant</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Empowering lawyers, students, and researchers with AI-driven legal solutions. Search, analyze, and
                            summarize case law instantly with our advanced AI platform.
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => scrollToSection("demo")}
                        >
                            <Play className="h-5 w-5 mr-2" />
                            Try Demo
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-4 text-lg rounded-xl border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 bg-transparent"
                            onClick={() => scrollToSection("features")}
                        >
                            Explore Features
                            <ChevronRight className="h-5 w-5 ml-2" />
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Problem Statement */}
            <section className="bg-muted/30 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-12"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                                The Legal Research Challenge
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Traditional legal research is time-consuming, complex, and often inefficient
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="bg-card/50 backdrop-blur-sm border-destructive/20">
                                <CardContent className="p-8 text-center space-y-4">
                                    <div className="p-4 bg-destructive/10 rounded-full w-fit mx-auto">
                                        <Clock className="h-8 w-8 text-destructive" />
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold">Time-Consuming</h3>
                                    <p className="text-muted-foreground">
                                        Legal research takes hours of manual searching through vast databases
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-card/50 backdrop-blur-sm border-destructive/20">
                                <CardContent className="p-8 text-center space-y-4">
                                    <div className="p-4 bg-destructive/10 rounded-full w-fit mx-auto">
                                        <Database className="h-8 w-8 text-destructive" />
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold">Overwhelming Data</h3>
                                    <p className="text-muted-foreground">
                                        Case law databases are massive and difficult to navigate effectively
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-card/50 backdrop-blur-sm border-destructive/20">
                                <CardContent className="p-8 text-center space-y-4">
                                    <div className="p-4 bg-destructive/10 rounded-full w-fit mx-auto">
                                        <FileText className="h-8 w-8 text-destructive" />
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold">Manual Analysis</h3>
                                    <p className="text-muted-foreground">
                                        Summarizing and analyzing legal documents requires extensive manual effort
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="pt-8">
                            <p className="text-xl font-serif font-semibold text-primary">
                                JurisAI solves this by using advanced AI/ML technology
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section - Zig-Zag Layout */}
            <section id="features" className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4 mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Powerful AI-Driven Features</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Transform your legal research with our comprehensive suite of AI tools
                        </p>
                    </motion.div>

                    <div className="space-y-24">
                        {/* Service 1 - Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            <div className="space-y-6">
                                <div className="p-4 bg-primary/10 rounded-2xl w-fit">
                                    <FileText className="h-12 w-12 text-primary" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif font-bold text-foreground">Legal Document Analyzer</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Upload your contracts, petitions, or judgments and let AI analyze them for key clauses, risks, and
                                        insights. Get comprehensive analysis in seconds, not hours.
                                    </p>
                                    <Button
                                        className="bg-primary hover:bg-primary/90"
                                        onClick={() => (window.location.href = "/analyzer")}
                                    >
                                        Learn More
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Contract clause identification</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Risk assessment analysis</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Key insights extraction</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Compliance checking</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Service 2 - Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 lg:order-2">
                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Sparkles className="h-5 w-5 text-secondary" />
                                            <span className="text-sm">AI-powered summarization</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Sparkles className="h-5 w-5 text-secondary" />
                                            <span className="text-sm">Context-aware analysis</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Sparkles className="h-5 w-5 text-secondary" />
                                            <span className="text-sm">Key precedents extraction</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Sparkles className="h-5 w-5 text-secondary" />
                                            <span className="text-sm">Customizable summary length</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="space-y-6 lg:order-1">
                                <div className="p-4 bg-secondary/10 rounded-2xl w-fit">
                                    <BookOpen className="h-12 w-12 text-secondary" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif font-bold text-foreground">Legal Document Summarizer</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        No more lengthy judgments. Get crisp, context-aware summaries tailored for your needs. Our AI
                                        understands legal nuances and extracts the most relevant information.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="border-secondary/30 hover:bg-secondary/5 bg-transparent"
                                        onClick={() => (window.location.href = "/summarizer")}
                                    >
                                        Learn More
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 3 - Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            <div className="space-y-6">
                                <div className="p-4 bg-accent/10 rounded-2xl w-fit">
                                    <MessageSquare className="h-12 w-12 text-accent" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif font-bold text-foreground">Legal Chatbot</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Ask any legal query and get instant answers from our AI-powered assistant. Get clarifications,
                                        explanations, and guidance on complex legal matters.
                                    </p>
                                    <Button className="bg-accent hover:bg-accent/90" onClick={() => (window.location.href = "/chatbot")}>
                                        Learn More
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Zap className="h-5 w-5 text-accent" />
                                            <span className="text-sm">Instant legal answers</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Zap className="h-5 w-5 text-accent" />
                                            <span className="text-sm">Natural language queries</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Zap className="h-5 w-5 text-accent" />
                                            <span className="text-sm">24/7 availability</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Zap className="h-5 w-5 text-accent" />
                                            <span className="text-sm">Multi-jurisdiction support</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Service 4 - Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 lg:order-2">
                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Target className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Intelligent case matching</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Target className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Relevance scoring</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Target className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Precedent analysis</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Target className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Citation tracking</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="space-y-6 lg:order-1">
                                <div className="p-4 bg-primary/10 rounded-2xl w-fit">
                                    <Search className="h-12 w-12 text-primary" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif font-bold text-foreground">Case Law Search Engine</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Find relevant precedents instantly with our intelligent case law retrieval system. Advanced semantic
                                        search understands context and delivers precise results.
                                    </p>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-primary/30 hover:bg-primary/5 bg-transparent"
                                        onClick={() => (window.location.href = "/search")}
                                    >
                                        Learn More
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Live Demo Section */}
            <section id="demo" className="bg-muted/30 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-12"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">See JurisAI in Action</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Try our live demo and experience the power of AI-driven legal research
                            </p>
                        </div>

                        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-serif font-semibold">Interactive Search Demo</h3>
                                    <div className="relative">
                                        <Input
                                            value={demoQuery}
                                            onChange={(e) => setDemoQuery(e.target.value)}
                                            placeholder="Try: 'Find Supreme Court cases on data privacy rights'"
                                            className="pl-12 pr-32 h-14 text-base rounded-xl border-2"
                                        />
                                        <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                        <Button
                                            onClick={handleDemoSearch}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-primary hover:bg-primary/90"
                                        >
                                            Search
                                        </Button>
                                    </div>
                                </div>

                                {showDemoResults && (
                                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                                        <div className="text-left">
                                            <p className="text-sm text-muted-foreground mb-4">Found 3 relevant cases in 0.8 seconds</p>
                                            <Card className="bg-background border-primary/20">
                                                <CardContent className="p-4">
                                                    <h4 className="font-serif font-semibold text-primary">
                                                        Justice K.S. Puttaswamy v. Union of India
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground mt-2">
                                                        The landmark privacy judgment that established privacy as a fundamental right...
                                                    </p>
                                                    <Badge className="mt-2 bg-secondary/10 text-secondary">98% Relevance</Badge>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </motion.div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-16"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">How JurisAI Works</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Simple, fast, and intelligent legal research in four easy steps
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Enter Query",
                                    desc: "Type your legal question in natural language",
                                    icon: MessageSquare,
                                },
                                {
                                    step: "02",
                                    title: "AI Processing",
                                    desc: "Our AI analyzes and understands your query context",
                                    icon: Sparkles,
                                },
                                {
                                    step: "03",
                                    title: "Smart Search",
                                    desc: "Advanced algorithms search through millions of cases",
                                    icon: Search,
                                },
                                {
                                    step: "04",
                                    title: "Get Results",
                                    desc: "Receive ranked, relevant results with AI summaries",
                                    icon: TrendingUp,
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                                        <CardContent className="p-6 text-center space-y-4">
                                            <div className="relative">
                                                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
                                                    <item.icon className="h-8 w-8 text-primary" />
                                                </div>
                                                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                                                    {item.step}
                                                </Badge>
                                            </div>
                                            <h3 className="text-lg font-serif font-semibold">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About & Tech Stack */}
            <section id="about" className="bg-muted/30 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Bridging AI and Law</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                JurisAI is built with cutting-edge technology to revolutionize legal research. Our mission is to make
                                legal knowledge accessible, searchable, and actionable for legal professionals, students, and
                                researchers worldwide.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>Advanced Natural Language Processing</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>Machine Learning-powered Analysis</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>Comprehensive Legal Database</span>
                                </div>
                            </div>
                        </div>

                        <Card className="bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-8 space-y-6">
                                <h3 className="text-xl font-serif font-semibold text-center">Technology Stack</h3>
                                <div className="grid grid-cols-3 gap-6">
                                    {[
                                        { name: "React", desc: "Frontend" },
                                        { name: "FastAPI", desc: "Backend" },
                                        { name: "Python", desc: "AI/ML" },
                                        { name: "Tailwind", desc: "Styling" },
                                        { name: "NLP", desc: "Processing" },
                                        { name: "ML", desc: "Intelligence" },
                                    ].map((tech, index) => (
                                        <div key={index} className="text-center space-y-2">
                                            <div className="p-3 bg-primary/10 rounded-lg">
                                                <div className="w-8 h-8 bg-primary/20 rounded mx-auto"></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm">{tech.name}</p>
                                                <p className="text-xs text-muted-foreground">{tech.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose JurisAI */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-16"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Why Choose JurisAI?</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Trusted by legal professionals for accuracy, efficiency, and innovation
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                                <CardContent className="p-8 text-center space-y-4">
                                    <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
                                        <Award className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold">Accuracy-Driven AI</h3>
                                    <p className="text-muted-foreground">
                                        Our AI models are trained on verified legal data with continuous accuracy improvements
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                                <CardContent className="p-8 text-center space-y-4">
                                    <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto">
                                        <Clock className="h-8 w-8 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold">Save Hours of Research</h3>
                                    <p className="text-muted-foreground">
                                        Reduce research time from hours to minutes with intelligent search and analysis
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                                <CardContent className="p-8 text-center space-y-4">
                                    <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto">
                                        <Users className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold">Free for Students</h3>
                                    <p className="text-muted-foreground">
                                        Supporting legal education with free access for students and researchers
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-muted/30 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-12"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Meet the Team</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Passionate developers and legal experts working to transform legal research
                            </p>
                        </div>

                        <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                                    <Users className="h-12 w-12 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-serif font-semibold">Development Team</h3>
                                    <p className="text-muted-foreground">Founder & Lead Developer</p>
                                    <p className="text-sm text-muted-foreground">
                                        Building the future of legal technology with AI and machine learning
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                                Ready to Simplify Legal Research?
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Join thousands of legal professionals who trust JurisAI for their research needs
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                onClick={() => scrollToSection("demo")}
                            >
                                <Play className="h-5 w-5 mr-2" />
                                Try Demo
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-8 py-4 text-lg rounded-xl border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 bg-transparent"
                                onClick={() => scrollToSection("contact")}
                            >
                                Contact Us
                                <Mail className="h-5 w-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="border-t border-border/50 bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Scale className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-serif font-semibold text-foreground">JurisAI</p>
                                    <p className="text-xs text-muted-foreground">Legal Intelligence Platform</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Transforming legal research with AI-powered solutions for professionals worldwide.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-serif font-semibold">Quick Links</h4>
                            <div className="space-y-2 text-sm">
                                <button onClick={() => scrollToSection("home")} className="block hover:text-primary transition-colors">
                                    Home
                                </button>
                                <button
                                    onClick={() => scrollToSection("features")}
                                    className="block hover:text-primary transition-colors"
                                >
                                    Features
                                </button>
                                <button onClick={() => scrollToSection("demo")} className="block hover:text-primary transition-colors">
                                    Demo
                                </button>
                                <button onClick={() => scrollToSection("about")} className="block hover:text-primary transition-colors">
                                    About
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-serif font-semibold">Legal</h4>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Privacy Policy</p>
                                <p>Terms of Service</p>
                                <p>Cookie Policy</p>
                                <p>Disclaimer</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-serif font-semibold">Connect</h4>
                            <div className="flex gap-3">
                                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                                    <Mail className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                                {/* <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Github className="h-4 w-4" />
                </Button> */}
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="p-2 bg-transparent"
                                    onClick={() => window.open("https://github.com/SrishtiDubey3/Juris-AI", "_blank")}
                                >
                                    <Github className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">contact@jurisai.com</p>
                        </div>
                    </div>

                    <div className="border-t border-border/50 mt-8 pt-8 text-center">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} JurisAI. All rights reserved. Built with React • Next.js • Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
