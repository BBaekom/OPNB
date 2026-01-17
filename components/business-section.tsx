import Image from "next/image"

export default function BusinessSection() {
  return (
    <section id="business" className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            살아있는 캐릭터, 공감가는 스토리, 이 시대가 원하는 드라마
          </p>

          {/* Background Watermark */}
          <div className="relative">
            <p className="text-[6vw] md:text-[5vw] font-bold text-opinion-purple/10 whitespace-nowrap leading-tight">
              listen to your feelings
            </p>
            <p className="text-[6vw] md:text-[5vw] font-bold text-opinion-purple/10 whitespace-nowrap leading-tight">
              and tune to this drama
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">BUSINESS</h3>

          <div className="relative group cursor-pointer w-full max-w-sm mx-auto">
            {/* Poster Card */}
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/img-5584.jpeg"
                alt="우리들의 오즈 포스터"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Coming Soon Ribbon - natural integration */}
              <div className="absolute top-6 left-0 bg-opinion-purple text-white px-6 py-2 text-sm font-bold tracking-wide shadow-lg">
                COMING SOON
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-widest mb-2 text-white/70">Web Drama Project</p>
                <h4 className="text-2xl font-bold mb-3">우리들의 오즈</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  연극 '우리들의 오즈'를 웹드라마로 재탄생시킵니다.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Description */}
          <p className="text-center text-foreground/60 mt-10 max-w-md text-sm leading-relaxed">
            곧 새로운 이야기로 찾아뵙겠습니다.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2 mt-12 justify-center">
          <button className="w-10 h-10 border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors">
            <span className="text-foreground/60">↑</span>
          </button>
          <button className="w-10 h-10 border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors">
            <span className="text-foreground/60">↓</span>
          </button>
        </div>
      </div>
    </section>
  )
}
