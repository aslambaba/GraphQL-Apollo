import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GetData = gql`
  query getall{
    Customers{
      Name
      Product
    }
  }
`;
function Students() {
    const { loading, error, data } = useQuery(GetData);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    let mydata = data.Customers;
    return (
      <div>
        {
          mydata.map((student)=>{
            return(
              <div key={student.Name}>
                <h1>{student.Name}</h1>
                <h1>{student.Product}</h1>
              </div>
              
            )
          })
        }
      </div>
    );
    
}

export default Students;
