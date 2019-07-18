window.onload = () => {
  const textareaElement = document.querySelector('.input-question');
  if (textareaElement) {
    textareaElement.addEventListener('input', (event) => {
      const content = textareaElement.value;
      const chactersLeft = 200 - content.length;

      const chactersLeftElement = document.querySelector('.characters-left');
      if (chactersLeftElement) {
        chactersLeftElement.innerHTML = `<p class="text-muted">Còn ${chactersLeft}/200 kí tự<p>`;
      }
    });
  }

  const submitElement = document.querySelector('.submit-button');
  if (submitElement) {
    submitElement.addEventListener('click', (event) => {
      const textareaElement = document.querySelector('.input-question');
      if (textareaElement) {
        const content = textareaElement.value;
        if (!content || content.length === 0) {
          const inputContainerElement = document.querySelector('.input-container');
          if (inputContainerElement) {
            inputContainerElement.insertAdjacentHTML(
              'beforeend',
              `<div class='error-message'>Please input question</div>`,
            )
          }
        } else {
          const parentElement = document.querySelector('.input-container');
          if (parentElement) {
            const errorMessageElement = document.querySelector('.error-message');
            if (errorMessageElement) {
              parentElement.removeChild(errorMessageElement);
            }
          }
          const content = textareaElement.value;
          fetch(`/create-question`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              questionContent: content,
            }),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              if (data.success) {
                window.location.href = `/question/${data.id}`;
              } else {
                window.alert(data.message);
              }
            })
            .catch((error) => {
              console.log(error);
              window.alert(error.message);
            });
        }
      }
    });
  }
};