(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

var form = document.getElementById("contact-form");

form.addEventListener("submit", event => {
    var data = new FormData(event.target);
    
    axios({
        url: 'https://formspree.io/f/YOUR_FORM_ID',
        method: 'post',
        headers: {
            'Accept': 'application/json'
        },
        data: data
    }).then((response) => {
        console.log(response);
    });
});
