export default [
  {
    input: "AAAAAAAAAAAAABBCCCCDD",
    expected: "9A4A2B4C2D"
  },
  { 
    input: "aA",
    expected: "1a1A"
  },
  { 
    input: "122333",
    expected: "112233"
  },
  { 
    input: "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA",
    expected: "9*3*7^6$7%6!9A9A2A"
  },
  { 
    input: "aAaAaaaaaAaaaAAAABbbbBBBB",
    expected: "1a1A1a1A5a1A3a4A1B3b4B"
  },
  { 
    input: "                          ",
    expected: "9 9 8 "
  },
  { 
    input: "1  222 333    444  555",
    expected: "112 321 334 342 35"
  },
  { 
    input: "1A2BB3CCC4DDDD",
    expected: "111A122B133C144D"
  },
  { 
    input: "........______=========AAAA   AAABBBB   BBB",
    expected: "8.6_9=4A3 3A4B3 3B"
  },
  { 
    input: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    expected: "9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a"
  },
  { 
    input: "        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    expected: "8 9a9a9a9a9a4a"
  },
  { 
    input: " ",
    expected: "1 "
  },
  { 
    input: "[(aaaaaaa,bbbbbbb,ccccc,dddddd)]",
    expected: "1[1(7a1,7b1,5c1,6d1)1]"
  },
  { 
    input: ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s",
    expected: "9;3;9'9'2'111273524142311s"
  },
  { 
    input: "AAAAAAAAAAAAABBCCCCDDDDDDDDDDD",
    expected: "9A4A2B4C9D2D"
  },
];
