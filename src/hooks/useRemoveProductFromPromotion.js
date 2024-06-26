import { useMutation, gql } from '@apollo/client';

const REMOVE_PRODUCT = gql`
  mutation removeProduct($promotionId: ID!, $productId: ID!){
  removeProductFromPromotion(promotion_id: $promotionId, product_id: $productId) {
    id
    promotion_id
    product_id

  }
}
`;

function useRemoveProductFromPromotion() {
    const [removePromotionProduct] = useMutation(REMOVE_PRODUCT);
    return { removePromotionProduct };
}

export default useRemoveProductFromPromotion;