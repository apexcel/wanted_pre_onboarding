export const isValidEmail = (email: string) => {
    return !!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|net)$/gi);
}
