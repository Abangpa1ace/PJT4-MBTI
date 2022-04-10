type TestOptions = {
  EI: { E: string, I: string },
  SN: { S: string, N: string },
  TF: { T: string, F: string },
  JP: { J: string, P: string },
}

type TestAnswer = 'I' | 'E' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'

type TestCodes = 
  'INFJ' | 'INFP' | 'INTJ' | 'INTP' |
  'ISFJ' | 'ISFP' | 'ISTJ' | 'ISTP' |
  'ENFJ' | 'ENFP' | 'ENTJ' | 'ENTP' |
  'ESFJ' | 'ESFP' | 'ESTJ' | 'ESTP'

interface TestItem {
  category: keyof TestOptions;
  question: string;
  options: ValueOf<TestOptions>;
}

type TestList = TestItem[];

interface TestResultItem extends TestItem {
  result: TestAnswer
}

type TestResultList = TestResultItem[];