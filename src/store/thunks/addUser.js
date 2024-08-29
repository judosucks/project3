import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from "@faker-js/faker";
const addUser = createAsyncThunk('users/addUser',async()=>{
    const response = await axios.post('http://localhost:3001/users',{
        name:faker.name.fullName()
        
    })
    await pause(1000)
    return response.data

})
// dev only
const pause = (duration)=>{
    return new Promise(resolve => setTimeout(resolve, duration))
}
export {addUser}