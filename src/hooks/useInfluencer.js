import { gql, useQuery } from "@apollo/client";

const GET_INFLUENCER = gql`
    query GetInfluencer($id: ID!) {
        influencer(id: $id) {
            id
            name
            email
            social_media_links

            promotions {
                id
                company
                promotion_budget
                start_date_time
                end_date_time
            }

            products {
                id
                name
                description
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
`

function useInfluencer(id) {
    const { data, error, loading } = useQuery(GET_INFLUENCER, {
        variables: {
            id
        }
    });

    return { data, error, loading };
}

export default useInfluencer;