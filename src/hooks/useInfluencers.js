import { useQuery, gql } from '@apollo/client';

const GET_INFLUENCERS = gql`
  query GetInfluencers {
    influencers {
        id
        name
        email
        social_media_links
    }
  }
`;

function useInfluencers() {
    const { loading, error, data } = useQuery(GET_INFLUENCERS);
  
    return {
        error,
        loading,
        data
    }
}

  export default useInfluencers;