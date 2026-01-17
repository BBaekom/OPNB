import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="bg-opinion-purple text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">

        {/* Left Column: Logo */}
        <div className="flex-1">
          <div className="relative w-40 h-12 mb-6 bg-white rounded-lg p-2 flex items-center justify-center">
            <Image
              src="/logo-removebg.png"
              alt="Opinion Logo"
              fill
              className="object-contain p-1"
            />
          </div>
        </div>

        {/* Center Column: Socials & Contact */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-2 font-bold text-lg">
            <span className="cursor-pointer hover:opacity-80">YouTube</span>
            <span className="cursor-pointer hover:opacity-80">Instagram</span>
            <span className="cursor-pointer hover:opacity-80">Facebook</span>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-lg">Contact</h4>
            <p className="text-white/80 text-sm">
              op_official@opinioncorp.com
            </p>
          </div>
        </div>

        {/* Right Column: Address & Copyright */}
        <div className="flex-1 text-left md:text-right flex flex-col justify-between h-full gap-8">
          <p className="text-white/80 text-sm leading-relaxed">
            서울특별시
          </p>

          <div className="text-xs text-white/60">
            <p className="mb-1 hover:underline cursor-pointer">개인정보 처리방침</p>
            <p>© copyright opinion</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
