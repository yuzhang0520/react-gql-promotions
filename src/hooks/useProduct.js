import { gql, useQuery } from "@apollo/client";

const GET_PRODUCT = gql`
    query GetProduct($id: ID!) {
        product(id: $id) {
            id
            name
            description
            promotions {
                id
                company
                promotion_budget
                start_date_time
                end_date_time
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
                influencer {
                    name
                }
            }
            promotion_product {
                id
                promotion_id
                product_id
            }
        }
    }
`

function useProduct(id) {
    const {data, error, loading } = useQuery(GET_PRODUCT, {
        variables: {
            id
        }
    });

    return { data, error, loading};
}

export default useProduct;