//function to edit post

async function editFormHandler (event) {
    event.preventDefault();

    //get the post id form the url

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    //get the post title and text from the form
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;

    //update route to update post
    const response = await fectch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //if edit is successful, then redirect to the dashboard page, otherwise display error
    if (response.ok) {
        document.location.replace('/dashboard');

    }else{
        alert(response.statusText);
    }
}
document.querySelector('edit-post-form').addEventListener('submit', editFormHandler);