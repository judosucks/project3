import { createContext, useState,useEffect } from "react";

const NavigationContext = createContext()//創建一個context

function NavigationProvider({children}){
  // NavigationProvider 裡面有 NavigationContext的方法
  const [currentPath , setCurrentPath] = useState(window.location.pathname)
  // 設定路徑 currentPath and setCutrentPath
  useEffect(()=>{
    const handler = ()=>{
        setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate',handler)
     //移除useEffect的addEvent
    return ()=>{
        window.removeEventListener('popstate',handler)
    }
  })
  const navigate = (to)=>{
    window.history.pushState({},'',to)
    setCurrentPath(to)
  }
  return <NavigationContext.Provider value={{currentPath,navigate}}>{children}</NavigationContext.Provider>

}
export {NavigationProvider}
export default NavigationContext
