// Sample data for initial blog posts
let blogPosts = [
    { id: 1, title: "First Blog Post", content: "This is my first blog post." },
    { id: 2, title: "Second Blog Post", content: "This is my second blog post." },
];

// Function to display blog posts
function displayBlogPosts() {
    const blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = "";

    blogPosts.forEach((post) => {
        const blogPostDiv = document.createElement("div");
        blogPostDiv.classList.add("blog-post");
        blogPostDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="deletePost(${post.id})">
                <span>Delete</span>
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        blogContainer.appendChild(blogPostDiv);
    });
}


// Function to add a new blog post
function addPost() {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");

    const newPost = {
        id: blogPosts.length + 1,
        title: titleInput.value,
        content: contentInput.value,
    };

    blogPosts.push(newPost);
    titleInput.value = "";
    contentInput.value = "";

    displayBlogPosts();
}

// Function to delete a blog post
function deletePost(id) {
    blogPosts = blogPosts.filter((post) => post.id !== id);
    displayBlogPosts();
}

// Initial display of blog posts
displayBlogPosts();

  
  
