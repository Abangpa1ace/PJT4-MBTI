import phaseA from "./testA";
import phaseB from "./testB";

type Key = 'phaseA' | 'phaseB'

const testListObject: { [k in Key]: TestList} = {
  phaseA,
  phaseB,
}

export default testListObject