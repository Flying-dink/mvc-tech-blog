//New Post Form Handler
async function newFormHandler(event) {
    event.preventDefault();

    //get post title and text from the form
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;

    //add a new post route to the add the post
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //If the response if ok reload page
    if (response.ok) {
        document.location.replace('/dashboard');
        //otherwise display error
        
    }else{
        alert(response.statusText);
    }
}
//Event Listener for the new post submit button
document.querySelector('.new-post-form').addEventListener('submit',newFormHandler);