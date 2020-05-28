/**
 * Returns logger function
 * @return {Function} a function (message) => void
 */
export const initLogger = (name: string) => {
    return (message: string) => {
        Cypress.log({
            name: name,
            message: [message]
        });
    };
};
