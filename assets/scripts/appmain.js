ListOfStyles = [
    `./assets/styles/tailwinds.css`,
    `/assets/style/sitestyle.css`,
    `./pagestyle.css`
]

function LoadStyles(srcList) {
    for (i = 0; i <= srcList.length; i++) {
        var s = document.createElement("link");  // create a script DOM node
        s.rel = 'stylesheet';
        // s.type = 'text/javascript';
        s.href = srcList[i];  // set its src to the provided URL

        // script.crossorigin = "anonymous";
        // script.integrity = "sha384-EzBXYPt0/T6gxNp0nuPtLkmRpmDBbjg6WmCUZRLXBBwYYmwAUxzlSGej0ARHX0Bo";
        document.head.appendChild(s);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    }
}
// dynamicallyLoadScript(HTMXURL);
LoadStyles(ListOfStyles);

const div = 'div';
const p = 'p';
const span = 'span';
const img = 'img';
const h1 = 'h1';
const h2 = 'h2';
const h3 = 'h3'
const table = 'table';
const thead = 'thead';
const tbody = 'tbody';
const tr = 'tr';
const td = 'td';
const button = 'button';
const a = 'a';
const input = 'input';
const textarea = 'textarea';
const svg = 'svg';
const canvas = 'canvas';
const video = 'video';
const ul = 'ul';
const ol = 'ol';

const li = 'li';
const embed = 'embed';
const object = 'object';
const iframe = 'iframe';
const kbd = 'kbd';

function gen(elementtype, idin, htmlin, classin, src) {

    if (htmlin != undefined) {
        // console.log(htmlin.isArray)
        if (Array.isArray(htmlin) != true) {
            var element = document.createElement(elementtype);
            if (idin != undefined && idin != "") {
                element.id = idin;
            }
            if (htmlin.nodeName === undefined) {
                // console.log(typeof (htmlin))
                if (typeof (htmlin) != "object") {
                    element.innerHTML = htmlin;
                    element.value = htmlin;
                }
                if (typeof (htmlin) == "object") {
                    element.innerHTML = htmlin;
                    element.value = htmlin;
                }
            };
            if (htmlin.nodeName != undefined) {
                element.append(htmlin);
                // console.log(htmlin);
                // console.log(htmlin.nodeName);
            };
            if (classin != undefined && classin != "") {
                // element.classList.add(classin);
                element.classList += classin.replace(',', ' ').replace(', ', ' ');
            }
        }
        // console.log("array")
        // console.log(htmlin)



        //generate multiple element if array
        if (Array.isArray(htmlin) == true) {
            console.log(htmlin)
            // var element = [];

            var element = document.createElement("div")
            let arrayholder = document.createElement("div", "arrayholder", "")
            console.log(htmlin.length)
            for (jj = 0; jj < htmlin.length; jj++) {

                var elementarray = document.createElement(elementtype);
                if (idin != undefined && idin != "") {
                    elementarray.id = `${idin}-${jj}`;
                }
                if (htmlin[jj].nodeName === undefined) {
                    // console.log(typeof (htmlin))
                    if (typeof (htmlin) != "object") {
                        elementarray.innerHTML = htmlin[jj];
                        elementarray.value = htmlin[jj];
                    }
                    if (typeof (htmlin) == "object") {
                        elementarray.innerHTML = htmlin[jj];
                        elementarray.value = htmlin[jj];
                    }
                };
                if (htmlin[jj].nodeName != undefined) {
                    elementarray.append(htmlin[jj]);
                    // console.log(htmlin);
                    // console.log(htmlin.nodeName);
                };
                if (classin != undefined && classin != "") {
                    // element.classList.add(classin);
                    elementarray.classList += classin.replace(',', ' ').replace(', ', ' ');
                }
                arrayholder.append(elementarray)

            }
            element = arrayholder.innerHTML
            console.log(element)
        }


    }

    if (htmlin == undefined) {
        var element = document.createElement(elementtype);
        if (idin != undefined && idin != "") {
            element.id = idin;
        }
        if (classin != undefined && classin != "") {
            // element.classList.add(classin);
            element.classList += classin.replace(',', ' ').replace(', ', ' ');
        }
    }

    if (src != undefined) {
        element.src = src
        element.href = src
    }
    return element;
};



function log(data = null) {
    if (data === 'clear' || data === 'hide' || data === null) {
        logBlock.innerHTML = "";
        logBlock.style.display = 'none';
    } else {
        logBlock.style.display = 'flex';
        var i = logBlock.childNodes.length;
        logBlock.append(gen(p, `logp${i}`));
        var logp = document.getElementById(`logp${i}`);
        logp.scrollIntoView('false')
        logp.append(gen(span, '', `${i + 1}. (${typeof (data)})`))
        logp.append(gen(span, '', data))
        // logp.append(gen(span, '', ``))
        //   ${data} ${typeof (data)}`

    }

    // app.append(gen(div, 'logBlock', gen(p, '', 'ap', 'log')))
}



list = ["Sharpen Your Mind",
    "Wave Away Stress",
    "Seduce Total Strangers",
    "Feel Serious Pleasure",
    "It’s a stress reliever"
]


function loadApp() {

    const appmain = document.getElementById('app');

    const header = gen(div, "header");
    const main = gen(div, "main", "", "maincontainer");
    const footer = gen(div, "footer");
    appmain.innerHTML = "";
    header.innerHTML = "";
    main.innerHTML = "";

    footer.innerHTML = "";
    appmain.append(header, main, footer, gen(div, 'logBlock'));
    // main.append()
    // logBlock.style.display = 'none';
    // log()
    // loadHeader();
    // loadFooter();
}
loadApp()
ListOfScripts = [
    `/assets/scripts/header.js`,
    `/assets/scripts/footer.js`,
    // `/assets/scripts/space.js`,
    `./script.js`,
    `https://unpkg.com/htmx.org@1.7.0`,
    // `https://cdn.tailwindcss.com`,
]

function LoadScripts(srcList) {
    for (i = 0; i < srcList.length; i++) {
        var s = document.createElement("script");  // create a script DOM node
        s.type = 'text/javascript'
        s.src = srcList[i];  // set its src to the provided URL
        // s.async = true
        // s.defer = true
        s.setAttribute('async', '');
        s.setAttribute('defer', '');

        // script.crossorigin = "anonymous";
        // script.integrity = "sha384-EzBXYPt0/T6gxNp0nuPtLkmRpmDBbjg6WmCUZRLXBBwYYmwAUxzlSGej0ARHX0Bo";
        document.head.appendChild(s);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    }

}
// dynamicallyLoadScript(HTMXURL);
LoadScripts(ListOfScripts);
//Load Styles



//To aimate typing
// var resp = typeAnimate(element, testStr);
// var resp = typeAnimate(element, testStr,delay);
async function typeAnimate(elemid, textstr, delay = 50, start = 0) {
    var elem = document.getElementById(elemid);
    var cursor = gen(span, 'cursor', '', 'cursor');
    if (start < textstr.length) {
        start = start + 1;
        elem.innerHTML = textstr.slice(0, start);
        elem.appendChild(cursor);
        setTimeout(typeAnimate, delay, elemid, textstr, delay, start);
        if (start == textstr.length) {
            state = 'typed';
            cursor.remove();
            cursor.style.display = 'none'
            // console.log(state);
            return state;
        }
    }


    // console.log(state);
    // return state;
}

window.onload = () => {
    main.append(gen(div, 'logBlock'))
    log()

};



window.scrollTo({ top: 0, behavior: 'smooth' })




//debuging code

// log(gen(li, "", list))