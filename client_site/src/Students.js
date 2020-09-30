import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GetData = gql`
  query getall{
    Customers{
      Name
    }
  }
`;
function Students() {
    const { loading, error, data } = useQuery(GetData);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data)
    const  {Stud}  = data ;
    console.log(Stud);
    return (
      <div>
      </div>
    );
    
}

export default Students;
