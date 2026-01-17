export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-white flex flex-col items-center justify-center py-24 px-6 overflow-hidden"
    >
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <p className="text-[8vw] md:text-[10vw] font-bold text-opinion-purple/5 whitespace-nowrap leading-tight text-center">
          A Digital Studio
          <br />
          Creating Stories
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-black text-foreground mb-12">ABOUT</h2>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
          오피니언은 새로운 시대의 이야기를 만드는
          <br className="hidden md:block" />
          디지털 콘텐츠 스튜디오입니다.
          <br />
          <br />
          연극, 뮤지컬 등 무대 위의 감동을
          <br className="hidden md:block" />
          웹드라마로 재탄생시켜 더 많은 분들과 나눕니다.
        </p>
      </div>

      {/* Sidebar Indicator */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-opinion-purple text-white py-4 px-2 text-xs tracking-widest vertical-text hidden lg:block">
        TABLE OF CONTENTS
      </div>
    </section>
  )
}
