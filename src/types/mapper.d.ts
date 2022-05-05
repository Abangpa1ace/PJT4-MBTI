interface routeMapper {
  name?: string;              // state key값
  isParams?: boolean;   // useParams 여부, 없으면 query string
  number?: boolean;           // number 여부(page 등)
  map: object;                // 기본값, 허용값 등을 지정하는 객체

  // strict?: boolean;        // map이외의 값이 들어올 경우 처리(추후 추가)
}

interface routeMappers {
  [key: string]: routeMapper
}