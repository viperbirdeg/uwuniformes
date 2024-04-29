document.getElementById('Jimmynoveash').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const registerAPI = 'https://uwuniformes-lhpc.onrender.com/uwuniformes/v1/users/add';

    const body = {
        name: document.getElementById('wf-sign-up-name').value,
        email: document.getElementById('wf-sign-up-email').value,
        password: document.getElementById('wf-sign-up-password').value
    };

    try {
        const response = await fetch(registerAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error('Error submitting form'); // Throw error if response is not ok
        }

        // Handle success
        console.log('Form submitted successfully');
        // You can add any further actions here
    } catch (error) {
        console.error('Error submitting form:', error.message);
        // Handle error, show message to the user, etc.
    }
});
