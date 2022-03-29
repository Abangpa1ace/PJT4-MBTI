type TestOptions = {
  EI: { E: string, I: string },
  SN: { S: string, N: string },
  TF: { T: string, F: string },
  JP: { J: string, P: string },
}

interface TestItem {
  category: keyof TestOptions;
  question: string;
  options: ValueOf<TestOptions>;
}

type TestList = TestItem[];

interface TestResultItem extends TestItem {
  result?: string;
}

type TestResultList = TestResultItem[];