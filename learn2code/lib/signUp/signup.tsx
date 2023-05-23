
export type User = {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    terms: boolean,
};

export async function submitForm(data: User): Promise<boolean> {
    const { terms, ...dataWithoutTerms } = data;
    try {
        const response = await fetch('http://localhost:3001/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (response.ok) {
            console.log(responseData);
            return true;
        } else {
            console.log(responseData.errors);
            return false;
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        return false;
    }
};


