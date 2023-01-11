import React from "react";
import { gql } from "@apollo/client";
//import { Query } from "@testing-library/user-event";
//import { Query, Mutation, Subscription } from '@apollo/client/react/components';
import { useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
    {
    company {
      ceo
    }
  }
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
`;

const Newcomponent =() =>{
    const {data,loading, error } = useQuery(GET_LOCATIONS);
    console.log(data,loading,error);
    if (loading) return <p>Loading...</p>;
    if (error) return <div>Error : {error.toString()}</div>;
    if (!data)
    return(
   
        <div>
            hiii
        </div>
    )
}

export default Newcomponent;