import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  status:"IDLE",
  userData:[],
  pageNo:1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setStatus: (state, action) => {
        state.status = action.payload
      },
      setUserData: (state, action) => {
        state.userData = action.payload
      },
      setPageNo: (state, action) => {
     
        state.pageNo = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount ,setStatus,setUserData,setPageNo} = counterSlice.actions

// export const fetchUser=(page)=>{
//     return abc=async(dispatch,getState)=>{
//         dispatch(setStatus("LOADING"))
     
//             // dispatch(setProducts(STATUS.LOADING))
//            await fetch('https://reqres.in/api/users?page='+page) 
//              .then((response) => response.json())
//             .then((data) =>{
//                 // return(data)
               
                   
                   
//                 dispatch(setPageNo(page))
//                 dispatch(setUserData(data.data))
//                 dispatch(setStatus("COMP"))
                
//             })
//             .catch((error) => {
//                 // console.log("error")
//                 // console.log(error)
//                 dispatch(setStatus(error))
//               });
//             // var data=JSON.parse(res)
            
       
           
         
       
//     }
// }

export default counterSlice.reducer