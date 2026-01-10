
                let tabLinks = document.getElementsByClassName('tab-links');
                let tabContents = document.getElementsByClassName('tab-contents');
                function openTab(tabName){
                    for(tablink of tabLinks){
                        tablink.classList.remove('active-link');
                    }
                    for(tabcontents of tabContents){
                        tabcontents.classList.remove('active-tab');
                    }
                    event.currentTarget.classList.add('active-link')
                    document.getElementById(tabName).classList.add('active-tab')
                }

  


    const scriptURL = 'https://script.google.com/macros/s/AKfycbyAPcxdAIm91bw2uyW6p3ZaJDy1Byw-3sMIjrgaJdzIbBsnYy0TDlWZg9fFmiHnjr0d/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })


    document.addEventListener('DOMContentLoaded', function () {
        const texts = ["Hello, I am Abhilash", "A fullstack Developer from India"];
        let textIndex = 0;
        let charIndex = 0;
      
        function type() {
          const currentText = texts[textIndex];
          document.querySelector('.text').textContent = currentText.slice(0, charIndex);
      
          charIndex++;
      
          if (charIndex > currentText.length) {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
          }
      
          setTimeout(type, 160);
        }
      
        type();
      });
      