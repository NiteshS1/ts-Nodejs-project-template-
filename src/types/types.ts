export type THttpResponse = {
    success: boolean
    statusCode: number
    resquest: {
        ip?: string | null
        method: string
        url: string
    }
    message: string
    data: unknown
}

export type THttpError = {
    success: boolean
    statusCode: number
    resquest: {
        ip?: string | null
        method: string
        url: string
    }
    message: string
    data: unknown
    trace?: object | null
}