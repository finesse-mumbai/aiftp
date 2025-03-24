import Image from "next/image"
import logo from '../../../public/aiftp-logo.png'; // Adjust path if needed
import logoethic from '../../../public/ethicslogo.png'; // Adjust path if needed

function PreHeader() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl bg-white">
      
      <div className="flex flex-col md:flex-row justify-between px-14 py-2 border-b border-[rgba(0,0,0,0.05)]">
      <Image
              src={logo}
              alt="AIFTP Logo"
              width="auto"
              height={70}
              priority
              className="logo"
              style={{objectFit:"contain"}}
            />
            <Image
              src={logoethic}
              alt="AIFTP Logo"
              width={240}
              height="auto"
              priority
              className="logo"
              style={{objectFit:"contain"}}
            />
      </div>
      
      
      </div>
  )
}

export default PreHeader