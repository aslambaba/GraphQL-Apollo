import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GetData = gql`
  query{
    Customers{
      Name
    }
  }
`;
function Students() {
    const { loading, error, data } = useQuery(GetData);
    let { Students } = {data};
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    if (data) {
        return (
            <div>
                {console.log(Object.keys(data))}
                {console.log(Students)}
            </div>
        );
    }
}

export default Students;
