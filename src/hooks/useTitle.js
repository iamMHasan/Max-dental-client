import { useEffect } from "react"

const useTitle= title =>{
    useEffect(()=>{
        document.title = `${title} - Max Dental`
    },[title])
}

export default useTitle