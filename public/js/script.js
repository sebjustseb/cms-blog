const handlePostFormSubmit = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('../views/dashboard'); // Redirect to the dashboard after creating a post
    } else {
      alert('Failed to create a new post');
    }
  }
};

// Event listener for submitting the new post form
document.querySelector('#new-post-form').addEventListener('submit', handlePostFormSubmit);