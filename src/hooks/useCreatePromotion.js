import { gql, useMutation } from "@apollo/client";

const CREATE_PROMOTION = gql`
    mutation CreatePrmotion($promotion: AddPromotionInput!){
        addPromotion(promotion: $promotion){
            id,
            company,
            promotion_budget,
            start_date_time,
            end_date_time
        }
    }
`

function useCreatePromotion(AddPromotionInput) {
    const [createPromotion, { data, loading, error }] = useMutation(CREATE_PROMOTION);
    
    const addPromotion = (promotionData) => {
        return createPromotion({
          variables: {
            promotion: promotionData,
          },
        });
      };
    
        return { addPromotion, data, loading, error };
}

export default useCreatePromotion;