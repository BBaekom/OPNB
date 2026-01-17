import { Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-opinion-purple flex items-center overflow-hidden">
      {/* Background Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-opinion-purple via-opinion-purple/90 to-opinion-purple-dark" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
          <span className="block">새로운 이야기를 만드는</span>
          <span className="block">디지털 콘텐츠 스튜디오,</span>
          <span className="block">OPINION</span>
        </h1>
      </div>

      {/* Play Button */}
      <button className="absolute bottom-10 left-6 w-14 h-14 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors">
        <Play size={24} fill="white" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-6 flex flex-col items-center gap-2">
        <span className="text-white text-xs tracking-widest vertical-text">SCROLL DOWN</span>
      </div>
    </section>
  )
}
