type TestOptions = {
  IE: { I: string, E: string },
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