import { useLocation, useNavigate } from 'react-router-dom'

interface ReturnType {
  // useLocation
  key: string;
  hash: string;
  pathname: string;
  search: string;
  state: any;

  // useNavigate (v5 useHistory)
  navigate: (to: string, options?: { replace: boolean, state: any; }) => void;
}

const useReactRouter = (): ReturnType => {
  const location = useLocation();
  const navigate = useNavigate();

  return { ...location, navigate }
}

export default useReactRouter