//a function to delete a post

async function deleteFormHandler(event) {
    event.preventDefault();


    //get the post id from the url
    const id =window.location.toString().split('/')[
        window/location.toString().split('/').length -1
    ];
    //delete the post function
    const response = await fetch(`/api/posts/${id}`, {
     method: 'DELETE'
    });
    //if delete is successful, then redirectto dashboard otherwise display error
    if (response.ok) {
        document.location.replace('/dashboard');

    }else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);