import typeA from "./testA";
import typeB from "./testB";

type Key = 'typeA' | 'typeB'

const testListObject: { [k in string]: TestList} = {
  typeA,
  typeB,
}

export default testListObject