import React from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// const ADD_LOCATIONS = gql`
// mutation {
//     insert_locations(objects: [{ name: "solapur" }]) {
//       returning {
//         id
//       name
        
//       }
//     }
//   }
// `;
    
    

//const [newdata,setNewdata]=useState([])

const onSubmit =(data)=>{
    console.log(data)
    //setNewdata(data)
}  
const Mutation =() =>{
    const schema = yup.object().shape({
        name:yup.string().min(2).required(),
        
    });
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(schema)
    });
    
    // const [{data, error, loading }] = useMutation(ADD_LOCATIONS);
    // console.log(data,error,loading);
    // // console.log(data,loading,error);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <div>Error : {error.toString()}</div>;
    // if (!data)
    return(
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="id" name='id' type='text' {...register('id')}/>
                <input placeholder="name" name='name' type='name' {...register('name')}/>
                <button type="submit">submit</button>
            </form>
            
        </div>

    )
}

export default Mutation;