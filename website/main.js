function getUrls() {
    return document.querySelector("#input-urls textarea").value.split("\n").map(
        (line) => line.trim()
    ).filter( // Remove Erroneous Lines/Whitespaces
        (line) => {
            try {
                new URL(line)
                return line != ""
            }
            catch(e){
                console.error("ERROR : "+ e + " : " + line);
                return false;
            }
        }
    ).reduce( // Remove Duplicates
        (finalUrlList, curr) => {
            if (!finalUrlList.filter(url => compareUrls(url, curr)).length)
                finalUrlList.push(curr);
            return finalUrlList;
        },
        []
    );
}

function compareUrls(url1, url2) {
    let similarity = true;

    try{
        let urlObject1 = new URL(url1);
        let urlObject2 = new URL(url2);

        similarity = 
            (
                urlObject1.host === urlObject2.host 
                || console.log("check host")
                || false
            ) && (
                urlObject1.pathname === urlObject2.pathname 
                || console.log("check pathname") 
                || false
            ) && (
                urlObject1.searchParams.size === urlObject2.searchParams.size 
                || console.log("check params.size") 
                || false
            )
            
        for (let key of urlObject1.searchParams.keys()) {
            similarity = similarity && urlObject1.searchParams.get(key) == urlObject2.searchParams.get(key);
            if (!similarity) {
                console.log(`check params[${key}]`);
                break;
            }
        }
    }
    catch (e){
        console.error(e);
        similarity = false;
    }

    return similarity
}



function generate_output() {
    document.querySelector("#output-urls").innerHTML = "List of iFrames :";
    getUrls().forEach(
        (site, index) => {
            let btn = document.createElement("button");
            btn.classList.add("btn");
            btn.classList.add("btn-primary");
            btn.classList.add("w-100");
            btn.type = "button";
            btn.setAttribute("data-bs-toggle", "collapse" );
            btn.setAttribute("data-bs-target", `#collapseExample${index}`);
            btn.setAttribute("aria-expanded", "false" );
            btn.setAttribute("aria-controls", `collapseExample${index}`);
            btn.innerText = site;

            //INNER LEVEL 2
            let new_iframe = document.createElement("iframe");
            new_iframe.classList.add("embed-responsive-item");
            new_iframe.classList.add("w-100");
            new_iframe.src = site;
            new_iframe.width = "100%";
            new_iframe.height = "400px";
            
            //INNER LEVEL 1
            let new_div_inner = document.createElement("div");
            new_div_inner.classList.add("embed-responsive");
            new_div_inner.classList.add("embed-responsive-16by9");
            new_div_inner.classList.add("collapse");
            new_div_inner.appendChild(new_iframe);

            //OUTER DIV
            let new_div_outer = document.createElement("div");
            new_div_outer.classList.add("card-body");
            new_div_outer.classList.add("mt-1");
            new_div_inner.id = `collapseExample${index}`;
            new_div_outer.appendChild(new_div_inner);

            let new_div_wrapper = document.createElement("div");
            new_div_wrapper.classList.add("col-12");
            new_div_wrapper.classList.add("mt-2");
            new_div_wrapper.classList.add("px-0");
            new_div_wrapper.classList.add("px-0");
            new_div_wrapper.appendChild(btn);
            new_div_wrapper.appendChild(new_div_outer);

            document.querySelector("#output-urls").appendChild(new_div_wrapper);
        }
    );
}

document.querySelector("#input-urls").onsubmit = (e) => {
    e.preventDefault();
    generate_output();
}
