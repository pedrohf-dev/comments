const section = document.getElementById('section');
const form = document.getElementById('form');
const input = document.getElementById('q');
const text = document.getElementById('comment');
const deleteToggle = document.getElementById('deleteToggle');
let buttons = Array.from(document.getElementsByClassName('button'));
let num = 1;

deleteToggle.addEventListener('click', () => {
    deleteToggle.classList.toggle('clicked')
    if (num === 1) {
        buttons.forEach(button => {
            button.classList.add('toggle');
        });
        num = 0;
    } else {
        buttons.forEach(button => {
            button.classList.remove('toggle');
        });
        num = 1;
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const div_card = document.createElement('div');
    div_card.setAttribute('class', 'card');
    
    const commentElement = document.createElement('h3');
    commentElement.innerText = input.value;
    div_card.append(commentElement);
    
    const buttonElement = document.createElement('button');
    buttonElement.setAttribute('class', 'button');
    if (num === 0) {
        buttonElement.classList.add('toggle');
    };
    buttonElement.innerHTML = '<span class="material-symbols-outlined">delete</span> Delete';
    div_card.append(buttonElement);
    section.append(div_card);
    setTimeout(() => {
        div_card.classList.add('visible');
    }, 10);

    const addComment = await fetch('/save-comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input.value })
    });

    const commentAdd = await addComment.json();
    buttonElement.addEventListener('click', async () => {
        const response = await fetch(`delete-comment/${commentAdd._id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            div_card.remove();
        }
    });

    buttons = Array.from(document.getElementsByClassName('button'));
});

async function loadComments() {
    const response = await fetch('/get-comments');
    const comments = await response.json();
    comments.forEach(comment => {
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');
        
        const commentElement = document.createElement('h3');
        commentElement.innerText = comment.text;
    
        const buttonElement = document.createElement('button');
        buttonElement.setAttribute('class', 'button');
        buttonElement.innerHTML = '<span class="material-symbols-outlined">delete</span> Delete';
        buttonElement.addEventListener('click', async () => {
            const response = await fetch(`delete-comment/${comment._id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                div_card.remove();
            }
        });
        
        div_card.append(commentElement);
        div_card.append(buttonElement);
        section.append(div_card);
        setTimeout(() => {
            div_card.classList.add('visible');
        }, 10);
    });

    buttons = Array.from(document.getElementsByClassName('button'));
}

loadComments();
