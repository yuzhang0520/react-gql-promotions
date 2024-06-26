import { gql, useMutation } from "@apollo/client";

const CREATE_PROMOTION_PRODUCT = gql`
    mutation AddProductToPromotion($promotion_product: AddProductToPromotionInput!){
        addProductToPromotion(promotionProduct: $promotion_product) {
            id,
            promotion_id,
            product_id
        }
    }
`

function useAddProductToPromotion(AddPromotionProductInput) {
    const [createPromotionProduct, { data, loading, error }] = useMutation(CREATE_PROMOTION_PRODUCT);
    
    const addPromotionProduct = (promotionProductData) => {
        return createPromotionProduct({
          variables: {
            promotion_product: promotionProductData,
          },
        });
      };
    
        return { addPromotionProduct, data, loading, error };
}

export default useAddProductToPromotion;