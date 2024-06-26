import { useQuery, gql } from '@apollo/client';

const GET_PROMOTIONS = gql`
  query GetPromotions {
    promotions {
      id
      company
      promotion_budget
      start_date_time
      end_date_time
    }
  }
`;

function usePromotions() {
    const { loading, error, data } = useQuery(GET_PROMOTIONS);
  
    return {
        error,
        loading,
        data
    }
}

  export default usePromotions;