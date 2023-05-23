
export type User = {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    terms: boolean,
};

export async function submitForm(data: User) {
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
            // The signup was successful. 
            // You can now redirect the user to another page or do something else.
        } else {
            console.log(responseData.errors);
            // The signup failed. 
            // The errors from your backend will be logged in the console. 
            // You can decide how to handle these errors in the UI.
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        // An unexpected error occurred. This could be a network error or any other type of error.
    }
};


