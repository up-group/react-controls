
interface ErrorControl<T> {
    isValidValue(value: T): errorControlType<T>;
}

interface errorControlType<T> {
    hasError: boolean,
    errorMessage?: string
    correctValue?: T
}