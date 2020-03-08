import { useState, useRef, useEffect } from 'react'

function useIsInView<T extends HTMLElement>() {
  const elementRef = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        setIsIntersecting(entries[0].isIntersecting)
      },
      {
        rootMargin: '0px'
      }
    )

    if (elementRef.current) {
      const elem = elementRef.current
      observer.observe(elem)
      return () => {
        observer.unobserve(elem)
      }
    }
  }, [])

  return { elementRef, isIntersecting }
}

export { useIsInView }
