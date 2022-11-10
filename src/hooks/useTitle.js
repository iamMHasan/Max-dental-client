import { useEffect } from "react"

const useTitle= title =>{
    useEffect(()=>{
        document.title = `${title} - Ran's Dental`
    },[title])
}

export default useTitle