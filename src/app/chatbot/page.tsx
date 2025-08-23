// "use client"
// import { useState, useRef, useEffect } from "react"
// import type React from "react"

// import { motion, AnimatePresence } from "framer-motion"
// import { Send, MessageSquare, Bot, User, ArrowLeft, Sparkles, Clock, CheckCircle, Loader2 } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"

// interface Message {
//     id: string
//     type: "user" | "bot"
//     content: string
//     timestamp: Date
//     isTyping?: boolean
// }

// const suggestedQuestions = [
//     "What are the key elements of a valid contract?",
//     "Explain the difference between civil and criminal law",
//     "What is the statute of limitations for personal injury cases?",
//     "How does intellectual property law protect creators?",
//     "What are the requirements for filing a trademark?",
// ]

// const mockResponses = [
//     "Based on Indian contract law, a valid contract requires: 1) Offer and acceptance, 2) Consideration, 3) Capacity to contract, 4) Free consent, and 5) Lawful object. These elements are outlined in the Indian Contract Act, 1872.",
//     "Civil law deals with disputes between private parties seeking compensation or specific performance, while criminal law involves prosecution by the state for offenses against society. Civil cases typically result in monetary damages, whereas criminal cases can lead to imprisonment or fines.",
//     "In India, the limitation period for personal injury cases is generally 3 years from the date of the incident under the Limitation Act, 1963. However, this may vary based on specific circumstances and the nature of the injury.",
//     "Intellectual property law protects creators through various mechanisms: copyrights for creative works, patents for inventions, trademarks for brand identifiers, and trade secrets for confidential business information. These provide exclusive rights and legal remedies against infringement.",
//     "To file a trademark in India, you need: 1) A distinctive mark, 2) Proper classification of goods/services, 3) Application to the Trademark Registry, 4) Payment of prescribed fees, and 5) Compliance with examination requirements under the Trade Marks Act, 1999.",
// ]

// export default function ChatbotPage() {
//     const [messages, setMessages] = useState<Message[]>([
//         {
//             id: "1",
//             type: "bot",
//             content:
//                 "Hello! I'm your AI legal assistant. I can help you with legal questions, explain concepts, and provide guidance on various legal matters. How can I assist you today?",
//             timestamp: new Date(),
//         },
//     ])
//     const [inputValue, setInputValue] = useState("")
//     const [isTyping, setIsTyping] = useState(false)
//     const messagesEndRef = useRef<HTMLDivElement>(null)

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//     }

//     useEffect(() => {
//         scrollToBottom()
//     }, [messages])

//     const handleSendMessage = async (message?: string) => {
//         const messageText = message || inputValue.trim()
//         if (!messageText) return

//         // Add user message
//         const userMessage: Message = {
//             id: Date.now().toString(),
//             type: "user",
//             content: messageText,
//             timestamp: new Date(),
//         }

//         setMessages((prev) => [...prev, userMessage])
//         setInputValue("")
//         setIsTyping(true)

//         // Simulate bot typing delay
//         setTimeout(() => {
//             const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]
//             const botMessage: Message = {
//                 id: (Date.now() + 1).toString(),
//                 type: "bot",
//                 content: randomResponse,
//                 timestamp: new Date(),
//             }

//             setMessages((prev) => [...prev, botMessage])
//             setIsTyping(false)
//         }, 1500)
//     }

//     const handleKeyPress = (e: React.KeyboardEvent) => {
//         if (e.key === "Enter" && !e.shiftKey) {
//             e.preventDefault()
//             handleSendMessage()
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
//             {/* Header */}
//             <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b border-border/50 shadow-sm">
//                 <div className="max-w-7xl mx-auto px-4 py-4">
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-4">
//                             <Link href="/">
//                                 <Button variant="ghost" size="sm" className="gap-2">
//                                     <ArrowLeft className="h-4 w-4" />
//                                     Back to Home
//                                 </Button>
//                             </Link>
//                             <div className="flex items-center gap-3">
//                                 <div className="p-2 bg-accent/10 rounded-lg">
//                                     <MessageSquare className="h-6 w-6 text-accent" />
//                                 </div>
//                                 <div>
//                                     <h1 className="text-xl font-serif font-bold text-foreground">Legal Chatbot</h1>
//                                     <p className="text-xs text-muted-foreground">AI-Powered Legal Assistant</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <Badge className="bg-accent/10 text-accent border-accent/20">
//                             <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
//                             Online
//                         </Badge>
//                     </div>
//                 </div>
//             </header>

//             <div className="max-w-4xl mx-auto px-4 py-8">
//                 {/* Chat Interface */}
//                 <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
//                     <CardContent className="p-0">
//                         {/* Messages Area */}
//                         <div className="h-[600px] overflow-y-auto p-6 space-y-4">
//                             <AnimatePresence>
//                                 {messages.map((message) => (
//                                     <motion.div
//                                         key={message.id}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -20 }}
//                                         className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
//                                     >
//                                         {message.type === "bot" && (
//                                             <div className="p-2 bg-accent/10 rounded-full shrink-0">
//                                                 <Bot className="h-5 w-5 text-accent" />
//                                             </div>
//                                         )}

//                                         <div className={`max-w-[80%] ${message.type === "user" ? "order-2" : ""}`}>
//                                             <Card
//                                                 className={`${message.type === "user"
//                                                         ? "bg-primary text-primary-foreground"
//                                                         : "bg-muted/50 border-accent/20"
//                                                     }`}
//                                             >
//                                                 <CardContent className="p-4">
//                                                     <p className="text-sm leading-relaxed">{message.content}</p>
//                                                     <p
//                                                         className={`text-xs mt-2 ${message.type === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
//                                                             }`}
//                                                     >
//                                                         {message.timestamp.toLocaleTimeString([], {
//                                                             hour: "2-digit",
//                                                             minute: "2-digit",
//                                                         })}
//                                                     </p>
//                                                 </CardContent>
//                                             </Card>
//                                         </div>

//                                         {message.type === "user" && (
//                                             <div className="p-2 bg-primary/10 rounded-full shrink-0 order-3">
//                                                 <User className="h-5 w-5 text-primary" />
//                                             </div>
//                                         )}
//                                     </motion.div>
//                                 ))}
//                             </AnimatePresence>

//                             {/* Typing Indicator */}
//                             {isTyping && (
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     className="flex gap-3 justify-start"
//                                 >
//                                     <div className="p-2 bg-accent/10 rounded-full">
//                                         <Bot className="h-5 w-5 text-accent" />
//                                     </div>
//                                     <Card className="bg-muted/50 border-accent/20">
//                                         <CardContent className="p-4">
//                                             <div className="flex items-center gap-2">
//                                                 <Loader2 className="h-4 w-4 animate-spin text-accent" />
//                                                 <span className="text-sm text-muted-foreground">AI is thinking...</span>
//                                             </div>
//                                         </CardContent>
//                                     </Card>
//                                 </motion.div>
//                             )}

//                             <div ref={messagesEndRef} />
//                         </div>

//                         {/* Suggested Questions */}
//                         {messages.length === 1 && (
//                             <div className="px-6 pb-4">
//                                 <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {suggestedQuestions.slice(0, 3).map((question, index) => (
//                                         <Button
//                                             key={index}
//                                             variant="outline"
//                                             size="sm"
//                                             className="text-xs bg-transparent hover:bg-accent/5 hover:border-accent/30"
//                                             onClick={() => handleSendMessage(question)}
//                                         >
//                                             {question}
//                                         </Button>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}

//                         {/* Input Area */}
//                         <div className="border-t border-border/50 p-6">
//                             <div className="flex gap-3">
//                                 <div className="flex-1 relative">
//                                     <Input
//                                         value={inputValue}
//                                         onChange={(e) => setInputValue(e.target.value)}
//                                         onKeyPress={handleKeyPress}
//                                         placeholder="Ask any legal question..."
//                                         className="pr-12 h-12 rounded-xl border-2 focus:border-accent/50"
//                                         disabled={isTyping}
//                                     />
//                                     <Button
//                                         onClick={() => handleSendMessage()}
//                                         disabled={!inputValue.trim() || isTyping}
//                                         size="sm"
//                                         className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-accent hover:bg-accent/90"
//                                     >
//                                         <Send className="h-4 w-4" />
//                                     </Button>
//                                 </div>
//                             </div>
//                             <p className="text-xs text-muted-foreground mt-2 text-center">
//                                 This AI assistant provides general legal information and should not replace professional legal advice.
//                             </p>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 {/* Features */}
//                 <div className="grid md:grid-cols-3 gap-6 mt-8">
//                     <Card className="bg-card/30 backdrop-blur-sm">
//                         <CardContent className="p-6 text-center space-y-3">
//                             <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto">
//                                 <Sparkles className="h-6 w-6 text-accent" />
//                             </div>
//                             <h3 className="font-serif font-semibold">Instant Answers</h3>
//                             <p className="text-sm text-muted-foreground">
//                                 Get immediate responses to your legal questions with AI-powered analysis
//                             </p>
//                         </CardContent>
//                     </Card>

//                     <Card className="bg-card/30 backdrop-blur-sm">
//                         <CardContent className="p-6 text-center space-y-3">
//                             <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
//                                 <Clock className="h-6 w-6 text-primary" />
//                             </div>
//                             <h3 className="font-serif font-semibold">24/7 Available</h3>
//                             <p className="text-sm text-muted-foreground">
//                                 Access legal guidance anytime, anywhere with our always-on AI assistant
//                             </p>
//                         </CardContent>
//                     </Card>

//                     <Card className="bg-card/30 backdrop-blur-sm">
//                         <CardContent className="p-6 text-center space-y-3">
//                             <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto">
//                                 <CheckCircle className="h-6 w-6 text-secondary" />
//                             </div>
//                             <h3 className="font-serif font-semibold">Accurate Information</h3>
//                             <p className="text-sm text-muted-foreground">
//                                 Trained on verified legal sources for reliable and accurate responses
//                             </p>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     )
// }



"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Send, MessageSquare, Bot, User, ArrowLeft, Sparkles, Clock, CheckCircle, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  isTyping?: boolean
}

const suggestedQuestions = [
  "What are the key elements of a valid contract?",
  "Explain the difference between civil and criminal law",
  "What is the statute of limitations for personal injury cases?",
  "How does intellectual property law protect creators?",
  "What are the requirements for filing a trademark?",
]

const mockResponses = [
  "Based on Indian contract law, a valid contract requires: 1) Offer and acceptance, 2) Consideration, 3) Capacity to contract, 4) Free consent, and 5) Lawful object. These elements are outlined in the Indian Contract Act, 1872.",
  "Civil law deals with disputes between private parties seeking compensation or specific performance, while criminal law involves prosecution by the state for offenses against society. Civil cases typically result in monetary damages, whereas criminal cases can lead to imprisonment or fines.",
  "In India, the limitation period for personal injury cases is generally 3 years from the date of the incident under the Limitation Act, 1963. However, this may vary based on specific circumstances and the nature of the injury.",
  "Intellectual property law protects creators through various mechanisms: copyrights for creative works, patents for inventions, trademarks for brand identifiers, and trade secrets for confidential business information. These provide exclusive rights and legal remedies against infringement.",
  "To file a trademark in India, you need: 1) A distinctive mark, 2) Proper classification of goods/services, 3) Application to the Trademark Registry, 4) Payment of prescribed fees, and 5) Compliance with examination requirements under the Trade Marks Act, 1999.",
]

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hello! I'm your AI legal assistant. I can help you with legal questions, explain concepts, and provide guidance on various legal matters. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (message?: string) => {
    const messageText = message || inputValue.trim()
    if (!messageText) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: messageText,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: randomResponse,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h1 className="text-xl font-serif font-bold text-foreground">Legal Chatbot</h1>
                  <p className="text-xs text-muted-foreground">AI-Powered Legal Assistant</p>
                </div>
              </div>
            </div>
            <Badge className="bg-accent/10 text-accent border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
              Online
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Chat Interface */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
          <CardContent className="p-0">
            <div className="px-6 pt-6 pb-2 border-b border-border/30">
              <div className="text-center">
                <h2 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Your Legal Buddy
                </h2>
                <p className="text-sm text-muted-foreground mt-1">Ready to assist you with all your legal questions</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-[600px] overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "bot" && (
                      <div className="p-2 bg-accent/10 rounded-full shrink-0">
                        <Bot className="h-5 w-5 text-accent" />
                      </div>
                    )}

                    <div className={`max-w-[80%] ${message.type === "user" ? "order-2" : ""}`}>
                      <Card
                        className={`${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted/50 border-accent/20"
                        }`}
                      >
                        <CardContent className="p-4">
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          <p
                            className={`text-xs mt-2 ${
                              message.type === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}
                          >
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {message.type === "user" && (
                      <div className="p-2 bg-primary/10 rounded-full shrink-0 order-3">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Bot className="h-5 w-5 text-accent" />
                  </div>
                  <Card className="bg-muted/50 border-accent/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-accent" />
                        <span className="text-sm text-muted-foreground">AI is thinking...</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-6 pb-4">
                <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.slice(0, 3).map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs bg-transparent hover:bg-accent/5 hover:border-accent/30"
                      onClick={() => handleSendMessage(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-border/50 p-6">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask any legal question..."
                    className="pr-12 h-12 rounded-xl border-2 focus:border-accent/50"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-accent hover:bg-accent/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                This AI assistant provides general legal information and should not replace professional legal advice.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-card/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center space-y-3">
              <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif font-semibold">Instant Answers</h3>
              <p className="text-sm text-muted-foreground">
                Get immediate responses to your legal questions with AI-powered analysis
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">
                Access legal guidance anytime, anywhere with our always-on AI assistant
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center space-y-3">
              <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-serif font-semibold">Accurate Information</h3>
              <p className="text-sm text-muted-foreground">
                Trained on verified legal sources for reliable and accurate responses
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
