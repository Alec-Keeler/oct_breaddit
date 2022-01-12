console.log('Hello from script');

const buttons = document.querySelectorAll('.delete-btn');

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', async (e) => {
        e.preventDefault()
        const postId = e.target.id
        // console.log(postId)
        const res = await fetch(`/posts/${postId}`, {
            method: "DELETE"
        })

        const data = await res.json()

        // console.log(data)
        if (data.message === "Success") {
            const container = document.querySelector(`#post-container-${postId}`)
            container.remove()
        }
    })
}