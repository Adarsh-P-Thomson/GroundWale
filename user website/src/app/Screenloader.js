"use client"

import { useEffect, useRef } from "react"

export default function ServicePage() {
  const screenLoaderRef = useRef(null)
  const taglineRef = useRef(null) // Ref for the new text element

  useEffect(() => {
    const screenLoader = screenLoaderRef.current
    const tagline = taglineRef.current

    if (!screenLoader || !tagline) return

    const fillRect = screenLoader.querySelector("#fillRectGW")

    if (!fillRect) return

    const fillRectText = screenLoader.querySelector("#fillRectText")

    function runLoaderAnimation() {
      const fillDuration = 1100
      const startTime = Date.now()

      function animateFill() {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / fillDuration, 1)

        const easedProgress =
          progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

        const fillWidth = easedProgress * 400
        fillRect.setAttribute("width", fillWidth.toString())

        if (fillRectText) {
          const textFillWidth = easedProgress * 800 // Adjusted for new viewBox width
          fillRectText.setAttribute("width", textFillWidth.toString())
        }

        if (progress < 1) {
          requestAnimationFrame(animateFill)
        }
      }

      requestAnimationFrame(animateFill)
    }

    function showTagline() {
      tagline.classList.add("fade-in-up")
    }

    function hideLoader() {
      screenLoader.classList.add("fade-out")
      setTimeout(() => {
        screenLoader.style.display = "none"
        document.body.classList.remove("loading")
      }, 500)
    }

    screenLoader.style.display = "flex"
    document.body.classList.add("loading")

    runLoaderAnimation()

    // CHANGED: Show tagline at 550ms, which is half of the 1100ms loader animation
    setTimeout(showTagline, 550)

    // Hide loader after the full sequence is done.
    setTimeout(hideLoader, 2600)
  }, [])

  return (
    <>
      <div
        ref={screenLoaderRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500"
        style={{ display: "none" }}
      >
        <div className="relative flex flex-col items-center justify-center gap-0">
          <div className="w-40 h-48">
            <svg
              viewBox="0 0 400 500"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <mask id="fillMaskGW">
                  <rect id="fillRectGW" x="0" y="0" width="0" height="500" fill="white" />
                </mask>
              </defs>
              <rect width="400" height="500" fill="white" />
              <g fill="none" stroke="#FFA500" strokeWidth="8" opacity="0.3" mask="url(#fillMaskGW)">
                <path d="M200 60 C280 60 340 120 340 200 C340 300 200 460 200 460 C200 460 60 300 60 200 C60 120 120 60 200 60 Z" />
              </g>
              <g mask="url(#fillMaskGW)">
                <path
                  d="M200 60 C280 60 340 120 340 200 C340 300 200 460 200 460 C200 460 60 300 60 200 C60 120 120 60 200 60 Z"
                  fill="#FFA500"
                />
              </g>
              <circle cx="200" cy="180" r="75" fill="none" stroke="white" strokeWidth="8" />
              <g fill="none" stroke="#0052CC" strokeWidth="4" opacity="0.3" mask="url(#fillMaskGW)">
                <circle cx="200" cy="180" r="65" />
              </g>
              <g mask="url(#fillMaskGW)">
                <circle cx="200" cy="180" r="65" fill="#0052CC" />
              </g>
              <g stroke="white" strokeWidth="4" strokeDasharray="6,6" fill="none" strokeLinecap="round">
                <path d="M245 150 Q190 215 135 200" opacity="0.95" />
                <path d="M250 165.03 Q190 225.03 130 215.03" opacity="0.95" />
              </g>
            </svg>
          </div>

          <div className="w-full max-w-2xl -mt-3">
            <svg
              viewBox="0 0 800 120"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <mask id="fillMaskText">
                  <rect id="fillRectText" x="0" y="0" width="0" height="120" fill="white" />
                </mask>
                <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.08" />
                </filter>
              </defs>
              <text
                x="50%"
                y="80"
                textAnchor="middle"
                fontSize="85"
                fontWeight="700"
                fontFamily="system-ui, -apple-system, sans-serif"
                fill="none"
                stroke="rgba(0, 0, 0, 0.1)"
                strokeWidth="1"
                mask="url(#fillMaskText)"
              >
                <tspan>GROUND</tspan>
                <tspan>WALE</tspan>
              </text>
              <g mask="url(#fillMaskText)" filter="url(#textShadow)">
                <text
                  x="50%"
                  y="80"
                  textAnchor="middle"
                  fontSize="85"
                  fontWeight="700"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  <tspan fill="#0052CC">GROUND</tspan>
                  <tspan fill="#FFA500">WALE</tspan>
                </text>
              </g>
            </svg>
          </div>

          <p
            ref={taglineRef}
            className="text-lg text-gray-600 font-medium tracking-wide mt-2 tagline"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            India&apos;s #1 Sports Booking App
          </p>
        </div>
      </div>

      <style jsx>{`
        .fade-out {
          opacity: 0 !important;
          visibility: hidden !important;
        }

        body.loading {
          overflow: hidden;
        }

        .tagline {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .tagline.fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}