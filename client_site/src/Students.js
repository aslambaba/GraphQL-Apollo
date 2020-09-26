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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { Students } = data;
    if (data) {
        return (
            <div>
            </div>
        );
    }
}

export default Students;
