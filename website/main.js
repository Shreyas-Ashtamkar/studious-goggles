function getUrls() {
    return document.querySelector("#input-urls textarea").value.split("\n").map(
        (line) => line.trim()
    ).filter(
        (line) => line != ""
    )
}

function generate_output() {
    document.querySelector("#output-urls").innerHTML = "Enter each url on a new line :";
    getUrls().forEach(
        (site) => {
            newDiv = document.createElement("div");
            newDiv.classList.add("card");
            newDiv.classList.add("mt-2");
            newDiv.classList.add("col-12");

            newDiv2 = document.createElement("div");
            newDiv2.classList.add("card-body");

            newP = document.createElement("p");
            newP.classList.add("card-text");
            newP.innerText = site;

            newDiv.appendChild(newDiv2);
            newDiv2.appendChild(newP);

            newDiv.onclick = (e) => {
                let site_url = e.target.textContent;
                console.log(`clicking on ${site_url}`);
                window.open(site_url, '_blank');
            }

            document.querySelector("#output-urls").appendChild(newDiv);
        }
    );
}

document.querySelector("#input-urls").onsubmit = (e) => {
    e.preventDefault();
    generate_output();
}
