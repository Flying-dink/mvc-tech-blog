//Function to edit a post

async function editFormHandler(event) {
    event.preventDefault();

    //Get user name, user id, email, and password from the form
    let username = document.querySelector(`input[name="user-name"]`).value.trim();
    if(username.length) username = ' "username": "' + username +'"';
    let email = document.querySelector(`input[name="email"]`).value.trim();
    if(email.length) email = '"email": "' + email + '"';
    let password= document.querySelector(`input[name="password"]`).value.trim();
    if (!passwword.length) {
        alert('You must enter your password to confirm changes');
        return
    }else {
        password = '"password": "'+ password + '"';
    }
    const id = document.querySelector('input[name="user-id"]').value;
        // create a string for any upadtaes that were provided
        let userUpdate = '{' [username, email, password].filter(value => value).join(',') + '}';
        userUpdate = JSON.parse(userUpdate)

        //use the update route ot update the post
        const response = await fetch(`/api/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(userUpdate),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //if the edit action is successful, redirect to the dashboard page, otherwise, display error
        if (response.ok) {
            document.location.replace('/dashboard');

        }else {
            alert(response.statusText);
        }
    

}
document.querySelector('.edit-user-form').addEventListener('submit', editFormHandler);