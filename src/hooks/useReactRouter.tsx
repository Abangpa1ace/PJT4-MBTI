import { useLocation, useNavigate } from 'react-router-dom'
import qs from 'qs';
interface ReturnType {
  // useLocation
  key: string;
  hash: string;
  pathname: string;
  search: { [k in string]: string };
  state: any;

  // useNavigate (v5 useHistory)
  navigate: (to: string, options?: { replace: boolean, state: any; }) => void;
}

const useReactRouter = (): ReturnType => {
  const location = useLocation();
  const navigate = useNavigate();

  const { search } = location
  const parsedSearch = qs.parse(search, { ignoreQueryPrefix: true });

  return { ...location, search: parsedSearch, navigate }
}

export default useReactRouter