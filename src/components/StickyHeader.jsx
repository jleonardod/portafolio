import { use, useEffect } from "react"

export default function StickyHeader() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header")
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return null
}