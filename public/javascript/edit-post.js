async function editPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#edit-post-title').value.trim();
    const body = document.querySelector('#edit-post-body').value.trim();
    console.log(title);
    console.log(body);

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/posts/{$id}', {
        method: 'PUT',
        body: JSON.stringify({
            title: title,
            body: body
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

const saveButton = document.querySelector('#save-post-update');
saveButton.addEventListener('click', editPostHandler);

const cancelButton = document.querySelector('#cancel-post-update');
cancelButton.addEventListener('click', function(){
    document.location.replace('/dashboard')
});