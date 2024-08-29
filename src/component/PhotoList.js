import { useFetchPhotosQuery,useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotoListItem from "./PhotoListItem";
function PhotoList({album}){

    const {data , isFetching, error}=useFetchPhotosQuery(album)
    const [addPhoto, addPhotoResult] = useAddPhotoMutation();
    console.log('addPhotoResult',addPhotoResult,'ablum',album)
    const handleAddPhotoClick = () => {
         addPhoto(album)
    }

    
    let content
    if(isFetching){
        content = <Skeleton count={6} className="h-8 w-8"/>
    }else if(error){
        content = <div>Error fetching photos</div>
    } else {
        content = data.map(photo=>{
            return <PhotoListItem key={photo.id} photo={photo}/>
 
        })
    }
    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Photos In {album.title}</h3>

            <Button warning loading={addPhotoResult.isLoading} onClick={handleAddPhotoClick}>
                + Add Photo
            </Button>
        </div>
        <div className="mx-8 flex flex-row flex-wrap justify-center">{content}</div>
    </div>
}

export default PhotoList;