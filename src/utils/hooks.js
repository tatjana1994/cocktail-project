import React, { useEffect, useState } from "react"

export function useMounted() {
  const [isMounted, setIsMounted] = useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted
}

export function useDebounce({
  value,
  miliseconds = 500,
  callback,
  noValueCallback,
  condition = true,
}) {
  const isMounted = useMounted()

  useEffect(() => {
    if (!isMounted || !condition) {
      return undefined
    }

    if (noValueCallback && !value) {
      noValueCallback()
    }

    const delayedCall = setTimeout(() => {
      callback()
    }, miliseconds)

    return () => clearTimeout(delayedCall)
  }, [value])
}

export default { useMounted, useDebounce }
