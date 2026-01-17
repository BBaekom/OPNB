import { Button } from "@/components/ui/button"

export default function CareersSection() {
  return (
    <section id="careers" className="min-h-[70vh] bg-white flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8">RECRUIT</h2>
      <p className="text-lg md:text-xl text-foreground/80 text-center mb-12">
        오피니언과 함께 성장할 여러분의 지원을 기다립니다.
      </p>
      <Button className="bg-opinion-purple hover:bg-opinion-purple-dark text-white px-8 py-6 text-lg font-bold">
        채용 홈페이지 바로 가기
      </Button>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-opinion-purple" />
    </section>
  )
}
