import {useEffect,useState,useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers,addUser} from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";

function UserList() {

    const [doFetchUsers, isLoadingUsers, isLoadingUsersError] = useThunk(fetchUsers)
    const [doCreatUser, isCreatingUser, creatingUserError] = useThunk(addUser)
    // const [isLoadingUsers, setIsLoadingUsers] = useState(false)
    // const [isLoadingUsersError, setIsLoadingUsersError] = useState(null)
    // const [isCreatingUser, setIsCreatingUsers] = useState(false)
    // const [creatingUserError, setCreatingUserError] = useState(null)
    // const dispatch = useDispatch();

    const { data} = useSelector((state) => {//use useselector to get state from users slice 
        return state.users
    })

    useEffect(() => {
        doFetchUsers()
    }, [ doFetchUsers])

    const handleUserAdd = ()=>{
        doCreatUser()
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
            return <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                   Name: {user.name} Email: {user.email}
                </div>
            </div>
        })
    }
    
    

    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                
                  :<Button loading={isCreatingUser} primary onClick={handleUserAdd}>+Add User</Button>
                
                { creatingUserError && 'creating user error...'}
            </div>
            {content}
        </div>
    )
}

export default UserList;