import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

const cliente = new Cliente("Victor", 33344455508, "01010101")
const diretor = new Diretor("Victor", 11122233369, 5000);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Marciano", 22233344403, 2500);
gerente.cadastrarSenha("12345");

const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, "12345");
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, "01010101");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);