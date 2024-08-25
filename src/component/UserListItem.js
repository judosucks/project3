import { GoTrashcan } from "react-icons/go";
import Button from './Button'
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";
function UserListItem({user}){
    
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)

    const handleClick =()=>{
      
        doRemoveUser(user)
    }
    const header = <>
     <Button className="mr-3" onClick={handleClick} loading={isLoading}>
            <GoTrashcan/>
        </Button>
        {error && <div>Error when deleting user</div>}
       {user.name} 
    </>
    return (
       <ExpandablePanel header={header}>
        <AlbumsList user={user}/>
       </ExpandablePanel>
    )
    
}

export default UserListItem;