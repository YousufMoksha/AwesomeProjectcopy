import React, { useEffect, useState } from 'react';
import {
    Button,
    View,
    Text,
    Image,
    ScrollView

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setPageNo ,setUserData,setStatus} from './counter/counterSlice'
// import { fetchUser } from './counter/counterSlice';
import {useGetPokemonByNameQuery} from './api/pokemonApi'
import { useGetPicApiQuery,useSetPicApiMutation } from './api/pokemonApi';
import {useGetAladanApiQuery } from './api/pokemonApi';
import LocalizedStrings from 'react-native-localization';
const Index = () => {


    let strings = new LocalizedStrings({
        "en-US":{
          how:"How do you want your egg today?",
          boiledEgg:"Boiled egg",
          softBoiledEgg:"Soft-boiled egg",
          choice:"How to choose the egg"
        },
        en:{
          how:"How do you want your egg today?",
          boiledEgg:"Boiled egg",
          softBoiledEgg:"Soft-boiled egg",
          choice:"How to choose the egg"
        },
        it: {
          how:"Come vuoi il tuo uovo oggi?",
          boiledEgg:"Uovo sodo",
          softBoiledEgg:"Uovo alla coque",
          choice:"Come scegliere l'uovo"
        },
        hi: {
            how:"आज आप अपना अंडा कैसे चाहते हैं??",
            boiledEgg:"Uovo sodo",
            softBoiledEgg:"Uovo alla coque",
            choice:"Come scegliere l'uovo"
          }
       });
    // const [getpageNo,setPageNoL]=useState(1)
    const count = useSelector((state) => state.counter.value)
    const status = useSelector((state) => state.counter.status)
    const userData = useSelector((state) => state.counter.userData)
    const pageNo= useSelector((state) => state.counter.pageNo)

    const dispatch = useDispatch()

    // const {data:Pikachu,isSuccess:PikachuSuccess}=useGetPokemonByNameQuery('pikachu')
    // const {data:Pics,isSuccess:PicsSuccess}=useGetPicApiQuery(1)
    const [getData,setData]=useState(0)
    // const [getLatitude,setLatitude]=useState(51.508515)
    // const [getLongitude,setLongitude]=useState(-0.1254872)
    // const [getMethod,setMethod]=useState(2)
   


    const {data:aladanD,isSuccess:AladanDS,error,isError}=useGetAladanApiQuery({lat:'19.8761653',longitude:'75.34333139',method:'2'})


    const {data:Pics2,isSuccess:PicsSuccess2}=useGetPicApiQuery(getData,{skip:getData==0})
      const [addPost, { isLoading }] =useSetPicApiMutation()
    useEffect(() => {
     
        // 
        // dispatch(fetchUser(1))
    }, [])
    useEffect(() => {
        if(AladanDS)
        {
            // console.log(aladanD)
        }
        if(isError){
            console.log(error)
            console.log('error')
        }
       
        // if(isLoading){
        //     console.log(addPost)
        // }

        if(PicsSuccess2){
            // console.log(Pics2)
            // dispatch(setPageNo(pageNo))
            //     console.log(pageNo)
            dispatch(setUserData(Pics2.data))
            // dispatch(setStatus("COMP"))
            // dispatch(setUserData(data.data))
            // dispatch(setStatus("COMP"))
         
           }
        //    PicF.name
    
    })
    const asdf=()=>{
        
        // console.log(data)
// alert("")
    }

    
  const handleAddPost = async () => {
    var post=  {
        "name": "amorpheus",
        "job": "leader"
    }
    try {
     var s= await addPost(post)
     console.log(s)
    } catch(err) {
      console.log(err)
    }
  }
    return (
        <View >
          <View>
          <Text style={{backgroundColor:'red'}}>
  {strings.how}
</Text>
          </View>
            {/* <Button
         
          onPress={() => dispatch(increment())}
          title='Increment'
          />
        <Text>{count}</Text>
        <Button
         title='Decrement'
          onPress={() => dispatch(decrement())}
        /> */}

            {/* <Button
         title='Run'
          onPress={() => dispatch(fetchUser())}
        /> */}

            {/* <Text>Status: {status}</Text> */}
            {/* {console.log(userData.length)} */}
            <Button
         
         onPress={() =>{
            handleAddPost()
          
        }}
         title='Submit'
         />
            <ScrollView>
                {userData.map((item, index) => {
                    return (
                        <View key={item.avatar}>
                            <View  style={{ alignItems:'center' }}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={{ uri: item.avatar }}
                            />
                            <Text>{item.first_name}</Text>
                            </View>
                        </View>
                    )
                })}
                <View style={{flexDirection:'row-reverse',paddingBottom:100}}>
                {getData==1?  <Button
         
         onPress={() =>{
            // dispatch(setPageNo(2)); 
            setData(2)
        }}
         title='Next'
         />: <Button
         
         onPress={() => {
            // dispatch(setPageNo(1));
            setData(1)
        }}
         title={getData==0? 'load':'Previous'}
         />}
               
        
           
               
         
                </View>
              
            </ScrollView>
        </View>
    );
};


export default Index;