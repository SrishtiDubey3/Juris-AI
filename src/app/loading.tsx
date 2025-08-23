import { Scale } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-primary/10 rounded-full animate-pulse">
            <Scale className="h-8 w-8 text-primary animate-bounce" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
          <h2 className="text-lg font-serif font-semibold text-foreground">Loading JurisAI</h2>
          <p className="text-sm text-muted-foreground">Preparing your legal research platform...</p>
        </div>
      </div>
    </div>
  )
}
