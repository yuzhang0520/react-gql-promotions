import { gql, useQuery } from '@apollo/client';

const GET_PROMOTION = gql`
    query GetPromotion($id: ID!){
        promotion(id: $id) {
            id
            company
            promotion_budget
            start_date_time
            end_date_time
            products {
                id
                name
                description
            }
            influencers {
                id
                name
                email
                social_media_links
            }
            contents {
                id
                content_type
                views
                likes
                comments
                creation_date_time
            }
        }
    }
`;

export const usePromotion = (id) => {
    const {data, error, loading }= useQuery(GET_PROMOTION, {
        variables: {
            id
        }
    });

    return { data, error, loading};
};