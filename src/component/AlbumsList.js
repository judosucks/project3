import { useFetchAlbumsQuery } from "../store";

function AlbumsList({user}){
    const {data,error,isLoading}=useFetchAlbumsQuery(user)

    console.log(data,error,isLoading);
    return<div className="transition-all duration-500 ease-linear">Albums for {user.name} </div>
}
export default AlbumsList;