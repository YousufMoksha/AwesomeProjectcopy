import React, { useEffect } from 'react';
import {
    Button,
    View,
    Text,
    Image,
    ScrollView

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counter/counterSlice'
import { fetchUser } from './counter/counterSlice';
import {useGetPokemonByNameQuery} from './api/pokemonApi'

const Index2 = () => {

    const {data}=  useGetPokemonByNameQuery('pikachu')

    

    useEffect(() => {
        asdf()
      
    })

    const asdf= ()=>{
       
        console.log(data)
    }
    return (
        <View >
          
            
           
        </View>
    );
};


export default Index2;