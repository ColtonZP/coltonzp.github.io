import { useEffect, useState } from 'react'

export function useOnScreenHeadline(ref) {
  const [isIntersecting, setIntersecting] = useState(1)

  let options = {
    rootMargin: `-35% 0px -30% 0px`,
    threshold: 1,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref])
  return isIntersecting
}

export function useOnScreenImage(ref) {
  const [isIntersecting, setIntersecting] = useState(1)

  let options = {
    rootMargin: `-35% 0px 0px 0px`,
    threshold: 1,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref])
  return isIntersecting
}

export function useOnScreenProjects(ref) {
  const [isIntersecting, setIntersecting] = useState(1)

  let options = {
    rootMargin: `1000% 0px -30% 0px`,
    threshold: 1,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref])
  return isIntersecting
}
