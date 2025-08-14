  const scriptURL = 'https://script.google.com/macros/s/AKfycbwW91DjB8O-edR2S21lUsfzYHnHuyG55wFx5btNL6HpxWxR7f4PO3cdan0Rp4_g-0D6/exec'

        const form = document.forms['contact-form']

        form.addEventListener('submit', e => {
        
        e.preventDefault()
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! Form is submitted" ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
        })