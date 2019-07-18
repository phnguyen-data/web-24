window.onload = () => {
  const textareaElement = document.querySelector('.input-find');
  if (textareaElement) {
    textareaElement.addEventListener('input', (event) => {
      const content = textareaElement.value;
      const chactersLeftElement = document.querySelector('.find-left');
      if (chactersLeftElement) {
        chactersLeftElement.innerText = `${chactersLeft} characters left`;
      }
    });
  }
  const submitElement = document.querySelector('.find-button');
  if (submitElement) {
    submitElement.addEventListener('click', (event) => {
      const textareaElement = document.querySelector('.input-find');
      if (textareaElement) {
        const content = textareaElement.value;
        if (!content || content.length === 0) {
          const inputContainerElement = document.querySelector('.find-container');
          if (inputContainerElement) {
            inputContainerElement.insertAdjacentHTML('beforeend', `<div class='error-message'>Please input question</div>`)
          }
        } else {
          const parentElement = document.querySelector('.find-container');
          if (parentElement) {
            const errorMessageElement = document.querySelector('.error-message');
            if (errorMessageElement) {
              parentElement.removeChild(errorMessageElement);
            }
          }
          const contents = textareaElement.value;
          window.location.href = `/find/${contents}`;
        }
      }
    })
  }
}
