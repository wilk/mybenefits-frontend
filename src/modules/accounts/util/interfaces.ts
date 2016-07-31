export interface IAccount {
    id: string
    label: string
    balance: number
    transitions?: ITransition[]
}

export interface ITransition {
    id: string
    title: string
    date: Date
    balance: number
    tags?: string[]
}