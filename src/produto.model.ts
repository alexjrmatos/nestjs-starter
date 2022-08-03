import { Injectable } from "@nestjs/common"

@Injectable()
export class Produto {
    id: number
    nome: string
    valor: number

    constructor(id: number, nome: string, valor: number) {
        this.id = id
        this.nome = nome
        this.valor = valor
    }


}