export default [
  {
    input: {
      characters: "Bste!hetsi ogEAxpelrt x ",
      document: "AlgoExpert is the Best!"
    },
    expected: true
  },
  {
    input: {
      characters: "A", 
      document: "a"
    },
    expected: false
  },
  {
    input: {
      characters: "a", 
      document: "a"
    },
    expected: true
  },
  {
    input: {
      characters: "a hsgalhsa sanbjksbdkjba kjx", 
      document: ""
    },
    expected: true
  },
  {
    input: {
      characters: " ", 
      document: "hello"
    },
    expected: false
  },
  {
    input: {
      characters: "     ", 
      document: "     "
    },
    expected: true
  },
  {
    input: {
      characters: "aheaollabbhb", 
      document: "hello"
    },
    expected: true
  },
  {
    input: {
      characters: "aheaolabbhb", 
      document: "hello"
    },
    expected: false
  },
  {
    input: {
      characters: "estssa", 
      document: "testing"
    },
    expected: false
  },
  {
    input: {
      characters: "Bste!hetsi ogEAxpert", 
      document: "AlgoExpert is the Best!"
    },
    expected: false
  },
  {
    input: {
      characters: "helloworld ", 
      document: "hello wOrld"
    },
    expected: false
  },
  {
    input: {
      characters: "helloworldO", 
      document: "hello wOrld"
    },
    expected: false
  },
  {
    input: {
      characters: "helloworldO ", 
      document: "hello wOrld"
    },
    expected: true
  },
  {
    input: {
      characters: "&*&you^a%^&8766 _=-09     docanCMakemthisdocument", 
      document: "Can you make this document &"
    },
    expected: true
  },
  {
    input: {
      characters: "abcabcabcacbcdaabc", 
      document: "bacaccadac"
    },
    expected: true
  }
];
