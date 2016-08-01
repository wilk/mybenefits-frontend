export interface IAccount {
    id: string
    label: string
    balance: number
    transactions?: ITransaction[]
}

export interface ITransaction {
    id: string
    title: string
    date: Date
    balance: number
    tags?: string[]
}