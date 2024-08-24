import {useEffect} from "react";
import { useSelector} from "react-redux";
import {fetchUsers,addUser} from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import UserListItem from "./UserListItem";
function UserList() {

    const [doFetchUsers, isLoadingUsers, isLoadingUsersError] = useThunk(fetchUsers)
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)
 
//use useselector to get state from users slice 
    const { data} = useSelector((state) => {
        console.log(state.users)
        return state.users
    })

    useEffect(() => {
        doFetchUsers()
    }, [ doFetchUsers])

    const handleUserAdd = ()=>{
        doCreateUser()
    }
    let content
    if (isLoadingUsers) {
        console.log('should be loading...')
        content = <Skeleton times={6} className='h-10 w-full'/>
    }
    else if (isLoadingUsersError) {
        console.error('error loading users')
        content =  <div>Error{console.log(data)}</div>
    } else {
        content = data.map((user)=>{
            return <UserListItem key={user.id} user={user}/>
       
         })
    }
    
    

    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                
                  <Button loading={isCreatingUser} primary onClick={handleUserAdd}>+Add User</Button>
                
                { creatingUserError && 'creating user error...'}
            </div>
            {content}
        </div>
    )
}

export default UserList;