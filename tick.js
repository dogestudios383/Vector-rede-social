document.addEventListener("DOMContentLoaded", () => {
    carregarFeed();
});

function publicarPost() {
    let content = document.getElementById("postContent").value;
    if (content.trim() !== "") {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(content);
        localStorage.setItem("posts", JSON.stringify(posts));
        carregarFeed();
        document.getElementById("postContent").value = "";
    } else {
        alert("Por favor, escreva algo antes de publicar!");
    }
}

function carregarFeed() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let feedDiv = document.getElementById("feed");
    feedDiv.innerHTML = "";

    if (posts.length === 0) {
        feedDiv.innerHTML = "<p>Seja o primeiro a postar!</p>";
    } else {
        posts.forEach((post) => {
            let postElement = document.createElement("p");
            postElement.textContent = post;
            feedDiv.appendChild(postElement);
        });
    }
}