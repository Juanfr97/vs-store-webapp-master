export interface Response<T> {
    error: Boolean,
    status: number,
    body: T;
}