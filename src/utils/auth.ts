export function validateEmailAndLogin(email: string, password: string): boolean {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (emailRegex.test(email) && password === '123') {
        return true;
    }
    return false;
}
