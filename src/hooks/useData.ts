import React, { useCallback } from "react"

export const useData = <T>(req: () => Promise<T>) => {
  const [data, setData] = React.useState<T | undefined>(undefined)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  const fetchData = useCallback(() => {
    req().then((res: T) => {
      setData(res)
      setIsLoading(false)
    })
  }, [req])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  type ReturnType = [
    T | undefined,
    {
      isLoading: boolean
      setData: React.Dispatch<React.SetStateAction<T | undefined>>
    },
  ]

  const returnedValue: ReturnType = [data, { isLoading, setData }]

  return returnedValue
}
