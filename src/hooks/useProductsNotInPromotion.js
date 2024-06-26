import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query notPromotion($promotionId: ID!){
    findProductsNotInPromotion(promotion_id: $promotionId) {
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

function useProductsNotInPromotion(promotionId) {
  
    const {data, error, loading }= useQuery(GET_PRODUCTS, {
        variables: {
            promotionId
        }
    });

    return { data, error, loading};
}

export default useProductsNotInPromotion;