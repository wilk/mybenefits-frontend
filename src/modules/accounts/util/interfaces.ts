export interface IAccount {
    id: string
    label: string
    amount: number
    transitions?: ITransition[]
}

export interface ITransition {
    id: string
    title: string
    date: Date
    amount: number
    tags?: string[]
}