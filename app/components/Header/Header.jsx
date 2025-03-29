'use client'; // Needed for client-side interactivity
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import navItems from "@/app/content/navItem"; // Ensure this exports an array

export default function Header() {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 40); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    position: isFixed ? 'fixed' : 'relative', 
    top: isFixed ? '0' : '0', 
    transition: '0.1s',
    width: '100%',
    color: '#868686', 
    background: isFixed ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.8)",
    backdropFilter:isFixed ? 'blur(7px)':'none',
    zIndex: isFixed ? 100 : 10, 
    borderBottom: isFixed ? '1px solid #e5e5e5' : "1px solid rgba(0,0,0,0.05)"
  };

  const openSideMenu = () => setSideMenu(true);
  const closeSideMenu = () => setSideMenu(false);

  return (
    <div className="mx-auto w-full max-w-screen-2xl">
      <header
        id={isFixed ? "fixedHeader" : "mainHeader"}
        style={headerStyle}
        className="flex justify-around px-1 py-1 text-sm items-center"
      >
        <section className="hidden md:flex items-center gap-10">
          <div id="mainNav" className="flex items-center gap-4">
            {navItems.map((d, i) => (
              <div
                key={i}
                className="relative group px-2 py-3"
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={d.link}>
                  <p className="flex cursor-pointer tracking-wider font-semibold text-sm items-center gap-2 text-[#868686] group-hover:text-[#000000]">
                    <span>{d.label}</span>
                    {d.children && (
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="text-xs transition-transform group-hover:rotate-180 text-[#868686] group-hover:text-[#000000]"
                      />
                    )}
                  </p>
                </Link>
                {d.children && hoveredItem === i && (
                  <div
                  className="absolute left-0 top-10 bg-transparent backdrop-blur-md font-semibold w-auto flex flex-col  shadow-lg"
                  style={{ backgroundColor: '#fff', backdropFilter: 'blur(5px)' }}
                >
                  {d.children.map((ch, j) => (
                    <Link
                      key={j}
                      href={ch.link || "#"}
                      className="flex cursor-pointer text-sm items-center py-3 border-b border-dashed border-gray-300 pl-4 pr-8 text-[#868686] hover:text-[#000000] hover:bg-[#0369a1]/10"
                    >
                      <span className="whitespace-nowrap">{ch.label}</span>
                    </Link>
                  ))}
                </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center gap-8">
          <Link href="/login">
            <button
              className="px-4 py-2 font-semibold text-[#ffffff] hover:text-[#868686] rounded-md  transition-colors"
              style={{
                backgroundColor: '#0369a1',
                color: '#868686',
                border:"1px solid #0483c8"
                
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
            >
             Member Login
            </button>
          </Link>
        </section>

        <button
          onClick={openSideMenu}
          className="md:hidden flex justify-center items-center text-[#868686] text-4xl hover:text-[#000000]"
          aria-label="Open mobile menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
      </header>
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <div
      id="mobileNav"
      className="fixed inset-0 h-full w-full bg-black/60 md:hidden z-50"
    >
      <div className="h-full w-3/4 ml-auto bg-white px-4 py-4">
        <section className="flex justify-end">
          <button
            onClick={closeSideMenu}
            className="text-4xl text-[#868686] hover:text-[#000000]"
            aria-label="Close mobile menu"
          >
            ×
          </button>
        </section>
        <div className="flex flex-col text-base gap-2">
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} link={d.link} children={d.children} />
          ))}
          <Link href="/login">
            <button
              className="px-4 py-2 font-semibold rounded-md shadow-md transition-colors mt-2"
              style={{
                backgroundColor: '#000000',
                color: '#868686',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#000000')}
              onMouseLeave={(e) => (e.target.style.color = '#868686')}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({ label, link, children }) {
  const [isItemOpen, setItemOpen] = useState(false);

  const toggleItem = () => setItemOpen((prev) => !prev);

  return (
    <div className="relative px-2 py-3">
      <Link href={link || "#"} onClick={toggleItem}>
        <p className="flex cursor-pointer items-center gap-2 text-[#868686] hover:text-[#000000]">
          <span>{label}</span>
          {children && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`h-4 w-4 transition-transform ${isItemOpen ? "rotate-180" : ""} text-[#868686] hover:text-[#000000]`}
            >
              <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          )}
        </p>
      </Link>
      {isItemOpen && children && (
        <div className="flex flex-col gap-1 py-3 pl-6">
          {children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link || "#"}
              className="flex cursor-pointer items-center py-1 text-[#868686] hover:text-[#000000]"
            >
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" width={20} height={20} />}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}