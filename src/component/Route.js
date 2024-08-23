import useNavigation from "../hooks/use-navigation";

function Route({path,children}){
   //引用currentPath來自useNavigation hook
   const {currentPath} = useNavigation()
   if(path === currentPath){
    return children
   }
   return console.log("Route returned path:"+path)
}
export default Route