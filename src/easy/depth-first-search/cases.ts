export default [
  {
    input: {name:"A",children:[{name:"B",children:[{name:"E",children:[]},{name:"F",children:[{name:"I",children:[]},{name:"J",children:[]}]}]},{name:"C",children:[]},{name:"D",children:[{name:"G",children:[{name:"K",children:[]}]},{name:"H",children:[]}]}]},
    expected: ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
  },
  {
    input: {name:"A",children:[{name:"B",children:[{name:"D",children:[]}]},{name:"C",children:[]}]},
    expected: ["A", "B", "D", "C"]
  },
  {
    input: {name:"A",children:[{name:"B",children:[]},{name:"C",children:[{name:"F",children:[]}]},{name:"D",children:[]},{name:"E",children:[]}]},
    expected: ["A", "B", "C", "F", "D", "E"]
  },
  {
    input: {name:"A",children:[{name:"B",children:[{name:"C",children:[{name:"D",children:[{name:"F",children:[]}]},{name:"E",children:[]}]}]}]},
    expected: ["A", "B", "C", "D", "F", "E"]
  },
  {
    input: {name:"A",children:[{name:"B",children:[{name:"G",children:[]},{name:"H",children:[{name:"O",children:[]},{name:"P",children:[{name:"T",children:[]},{name:"U",children:[]}]},{name:"Q",children:[]},{name:"R",children:[{name:"V",children:[{name:"W",children:[]},{name:"X",children:[{name:"Z",children:[]}]},{name:"Y",children:[]}]}]}]},{name:"I",children:[]}]},{name:"C",children:[{name:"J",children:[]}]},{name:"D",children:[{name:"K",children:[{name:"S",children:[]}]},{name:"L",children:[]}]},{name:"E",children:[]},{name:"F",children:[{name:"M",children:[]},{name:"N",children:[]}]}]},
    expected: ["A", "B", "G", "H", "O", "P", "T", "U", "Q", "R", "V", "W", "X", "Z", "Y", "I", "C", "J", "D", "K", "S", "L", "E", "F", "M", "N"]
  }
];
