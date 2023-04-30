import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Victor",11122233309);

const cliente2 = new Cliente("Alice",88822233309);

const conta1 = new ContaCorrente(cliente1,1001);

const conta2 = new ContaCorrente(cliente2,1002);

console.log(conta1);

