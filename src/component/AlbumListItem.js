import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";
function AlbumListItem({album}){

    const [removeAlbum,results] = useRemoveAlbumMutation() 

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }

    const header = <>
        <Button className='m-2' loading={results.isLoading} onClick={handleRemoveAlbum}>
            <GoTrashcan />
        </Button>
        {album.title}
        </>
    return <ExpandablePanel key={album.id} header={header}>
        <PhotoList album={album}/>
    </ExpandablePanel>
}
export default AlbumListItem;