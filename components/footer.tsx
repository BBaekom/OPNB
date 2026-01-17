import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo & Info */}
          <div>
            <div className="relative w-32 h-10 mb-6 bg-white rounded p-1">
              <Image src="/images/img-5585.jpeg" alt="Opinion Logo" fill className="object-contain" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              새로운 이야기를 만드는 디지털 콘텐츠 스튜디오
              <br />© 2025 Opinion. All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h4 className="font-bold mb-4">CONTACT</h4>
            <p className="text-white/60 text-sm">
              contact@opinion.co.kr
              <br />
              서울특별시
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
