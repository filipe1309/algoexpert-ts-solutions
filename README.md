
# <p align="center">AlgoExpert TS Solutions</p>

![github action deploy badge](https://github.com/filipe1309/algoexpert-solutions/actions/workflows/tests.yaml/badge.svg?event=push)
![TypeScript](https://img.shields.io/badge/Code-TypeScript-informational?style=flat-square&logo=typescript&color=3178C6)
![NodeJS](https://img.shields.io/badge/Code-NodeJS-informational?style=flat-square&logo=node.js&color=339933)
![Jest](https://img.shields.io/badge/Code-Jest-informational?style=flat-square&logo=jest&color=C21325)

## 💬 About

This project was developed following AlgoExpert's "[AlgoExpert](https://www.algoexpert.io/questions)" course.

All challenges and tests are in [src](./src)/level-name/challenge-name.

## :computer: Technologies

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

## :scroll: Requirements

- [Node.js](https://nodejs.org/en/)

## :cd: Installation

```sh
git clone git@github.com:filipe1309/algoexpert-solutions.git
```

```sh
cd algoexpert-solutions
```

## :white_check_mark: Tests

Run all tests:
```sh
make test
```

Run a specific test:
```sh
make test-one t=CHALLENGE_NAME
```
> Example: `make test-one t=two-number-sum`

Create a new test:
```sh
make new l=CHALLENGE_LEVEL n=CHALLENGE_NAME
```
> Example: `make new l=easy n=two-number-sum`  
> This will create a folder (`src/easy/two-number-sum`) with a new solution file and a new test file for the challenge `two-number-sum` in the `easy` level.  
>
> Levels: `easy`, `medium`, `hard`, `very-hard`  


<!-- 

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. -->

## License

[MIT](https://choosealicense.com/licenses/mit/)

## About Me

<p align="center">
    <a style="font-weight: bold" href="https://github.com/filipe1309/">
    <img style="border-radius:50%" width="100px; "src="https://github.com/filipe1309.png"/>
    </a>
</p>

---

<p align="center">
    Done with&nbsp;&nbsp;:heart:&nbsp;&nbsp;by <a style="font-weight: bold" href="https://github.com/filipe1309/">Filipe Leuch Bonfim</a> 🖖
</p>

---

> @ Generated with [ShubcoGen Template™](https://github.com/filipe1309/shubcogen-template)   
