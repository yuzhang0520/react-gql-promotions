import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
        id
        name
        description
        promotion_product {
          id
          promotion_id
          product_id
        }
    }
  }
`;

function useProducts() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
  
    return {
        error,
        loading,
        data
    }
}

export default useProducts;