
interface ErrorControl<T> {
    isValidValue(value: T): ErrorControlType<T>;
}

interface ErrorControlType<T> {
    hasError: boolean,
    errorMessage?: string
    correctValue?: T
}