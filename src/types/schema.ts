export type Schema = {
  email: {
    required: string;
    email: string;
  };
  password: {
    required: string;
    whitespace: string;
    letter: string;
    number: string;
    symbol: string;
    length: string;
  };
  confirm: {
    required: string;
    match: string;
  };
};
