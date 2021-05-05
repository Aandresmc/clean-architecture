export interface UseCase<T, R> {
    call(params: T): Promise<R>;
}