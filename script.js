/* 
t1 = window.setTimeout(function () {
    var redirectUrl = "https://www.researchgate.net/profile/Prateek-Raj-Gautam";
    //var redirectUrl = "https://formhelper.mgeek.in";
    //window.location.href = redirectUrl;
}, 10000); */

const releaseUrlWIN = "/assets/release/Release.zip";
const releaseUrlLINUX = "/assets/release/ReleaseLinux.zip";
const GithubIssueUrl = "https://github.com/mgeekin/formfiller.mgeek.in/issues";
const ytIdentifier = 'AU6rH9O8WfA'
const youtubeCode = `<div class="ytContainer"><iframe class="ytVideo" src="https://www.youtube.com/embed/${ytIdentifier}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
const youtubePlaylistCode = [`<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL6k5dQkCY1_FJNt5FV16C3MLJqmAdhRyq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]
const youtubeUrl = `https://www.youtube.com/watch?v=${ytIdentifier}`;
//var youtubeComments = `<div class="ytContainer"><iframe class="ytVideo" src="http://gdata.youtube.com/feeds/api/videos/${ytIdentifier}/comments"></iframe></div>`
const gifSrc = '/assets/img/preview.gif';
const webmSrc = '/assets/img/preview.webm';
const webMvideoElement = `<video autoplay loop muted playsinline>
<source src="${webmSrc}" type="video/webm">
</video>`;


const TPoll = `<script async src="https://telegram.org/js/telegram-widget.js?15" data-telegram-post="FreeFormHelper/4" data-width="100%"></script>`;
const og = [
    ['title', 'Automation tool for filling forms and data entry'],
    ['description', 'It provides a way to fill forms in less time.    1. Open your form where data needs to be filled'],
    ['type', 'website'],
    ['image', '/assets/img/preview.webp']
];
head = document.querySelector("head");
for (i = 0; i < og.length; i++) {
    var metaid = `metaid${og[i][0]}`;
    console.log(metaid)
    head.append(gen("meta", `${metaid}`));
    document.getElementById(`${metaid}`).name = `og:${og[i][0]}`;
    document.getElementById(`${metaid}`).property = `og:${og[i][0]}`;
    document.getElementById(`${metaid}`).content = `${og[i][1]}`;
}
main.append(gen("div", "hero", gen("h1", "", "Archana School of Music and Arts"), "section"))

hero.append(gen(p, '', 'We offer Instrumental Music classes for most loved instruments like <b>Guitar, Piano, Casio, Violin, Mouthorgan</b>.<br />\
We also teach Western Music Theory and How to read Sheet Music.<hr /> <br />Playing musical Instrument is associated with <b>Intelligence, Commitment, Hard work, Perseverance, & Physical prowess</b>.'))
hero.append(gen(span, 'registerButton', 'Register', 'button'))
registerButton.addEventListener('click', () => { download.scrollIntoView({ block: 'center', behavior: 'smooth' }) })

hero.append(gen(span, 'YTButton', 'Youtube Channel', 'button-blank'))
YTButton.addEventListener('click', () => {
    var offset = -80;
    var elemTop = YoutubeChannel.getBoundingClientRect().top;
    var pos = elemTop + offset;
    window.scrollTo({ top: pos, behavior: 'smooth' })
})
// hero.append(gen(div, 'gameInst', ''))
// gameInst.append(gen(h3, '', 'And while you are here roam around by pressing'), gen(div, 'keylist'))
// keylist.append(gen(span, '', 'w', 'gamekey'), gen(span, '', 's', 'gamekey'), gen(span, '', 'a', 'gamekey'), gen(span, '', 'd', 'gamekey'))














// //screenshot
// main.append(gen("div", "screenshots", gen("h2", "", "Screenshots"), "section"))
// //GIF


// screenshots.append(gen("div", "screenshotGif"));
// screenshotGif.innerHTML = webMvideoElement;
// //gif.alt = "";
// //gif.type = "video/webm";
// //gif.src = gifSrc;


// //IMG
// screenshots.append(gen("div", "screenshotScroll"));
// screenshotURL = [
//     "https://formhelper.mgeek.in/assets/img/screenshots/01.webp",
//     "https://formhelper.mgeek.in/assets/img/screenshots/02.webp",
//     "https://formhelper.mgeek.in/assets/img/screenshots/03.webp",
//     "https://formhelper.mgeek.in/assets/img/screenshots/04.webp",
//     "https://formhelper.mgeek.in/assets/img/screenshots/05.webp",
//     "https://formhelper.mgeek.in/assets/img/screenshots/06.webp"
// ]
// for (i = 0; i < screenshotURL.length; i++) {
//     screenshotScroll.append(gen("div", "", gen("img", `screenimg${i}`, `${screenshotURL[i]}`, 'screehshotimg'), "screenshotdiv"));
//     document.getElementById(`screenimg${i}`).src = `${screenshotURL[i]}`;
// }
// //addButton("TEMP", main);

// //download
// main.append(gen("div", "download", "", "section"));
// download.append(gen("h2", "", "Download and Run"));
// download.append(gen("a", "dlbtnWIN", "Download (Windows)", "button"));
// dlbtnWIN.href = releaseUrlWIN;
// dlbtnWIN.download = "FormHelper.mgeek.in_WIN.zip"
// download.append(gen("a", "dlbtnLINUX", "Download (Linux)", "button"));
// dlbtnLINUX.href = releaseUrlLINUX;
// dlbtnLINUX.download = "FormHelper.mgeek.in_LINUX.zip"
// download.append(gen("a", "demoForm", "Demo form", "button-blank"))
// demoForm.href = "demoform/"
// // demoForm.style.marginLeft = "20px";
// download.append(gen("p", "", "zip file contains Demo files you can edit with your data"))



// //How to Use
// //instructions

// main.append(gen("div", "howblock", gen(h2, '', "How to use")))
// howblock.append(gen("div", "howToUse"));
// howToUse.append(gen("div", "instructions", gen("h3", "", "Steps")))
// instructions.append(gen("ol", "InstList"));
// list = [
//     "Open your form in your web browser.",
//     "Launch FormHelper application.",
//     "Browse and load your data file (*.xlsx).",
//     "Align form window and FormHelper app in split screen mode.",
//     "Select the type area of form then click on button to fill it with data.",
//     '<i>* App requires internet to check licence information at the start and when using "Download BiBTeX from DOI" function.</i>',
// ]


// // async function* typ() {
// //     while (true) {
// //         i = InstList.childNodes.length;
// //         InstList.append(gen("li", `instulli${i}`, "", 'p1 m1'));
// //         var res = await typeAnimate(`instulli${i}`, `${list[i]}`)
// //         // console.log(res)
// //         yield i
// //     }
// // }



// async function typ() {
//     i = InstList.childNodes.length;
//     InstList.append(gen("li", `instulli${i}`, "", 'p1 m1'));
//     var res = await typeAnimate(`instulli${i}`, `${list[i]}`)
//     if (InstList.childNodes.length < list.length) {
//         await typ(res);
//     }
// }




// window.addEventListener("scroll", startTyping)

// // let scroll = this.scrollY;
// // var diff = scroll - howblock.getBoundingClientRect().top - window.innerHeight
// // if (diff > window.innerHeight / 2) {
// //     log(diff)
// //     startTyping();
// //     window.removeEventListener("scroll", (event))
// // }
// // });

// async function startTyping() {

//     var diff = window.scrollY - howblock.getBoundingClientRect().top - window.innerHeight
//     if (diff > window.innerHeight / 2) {
//         window.removeEventListener("scroll", startTyping)
//         // if (InstList.childNodes.length < list.length) {
//         res = await typ()
//         // }
//     }
// }





//youtube
main.append(gen(div, "YoutubeChannel"))
YoutubeChannel.append(gen("div", "yt", gen("h1", "", "Youtube Channel")))
yt.append(gen("ytcode", "ytcode"));


ytcode.innerHTML = youtubePlaylistCode;
//yt.append(gen("ytcode", "ytcomment"));
//ytcomment.innerHTML = youtubeComments;

/* main.append(gen("div", "telegrampoll", gen("h2", "", "Feedback"), "section"))
telegrampoll.append(gen("p", "poll", TPoll));
 */




// //feedback
// main.append(gen("div", "feedback", "", "section"));
// feedback.append(gen("h2", "", "Feedback and Report Issue"));
// feedback.append(gen("p", '', "Plese send Feedback on Youtube and Issue on Github"));
// feedback.append(gen("a", "ytComment", "Feedback", "button"));
// feedback.append(gen("a", "gitIssue", "Report Issue", "button"));
// ytComment.href = youtubeUrl;
// ytComment.target = "_blank";
// gitIssue.href = GithubIssueUrl;
// gitIssue.target = "_blank";
// // feedback.append(gen("a", "demoForm", "Demo web form to test working with app", "button"))


// // LoadScripts([`/assets/scripts/space.js`])
LoadScripts([`/assets/scripts/spacegame.js`])


sections = [{
    "heading": "Guitar",
    "list": ["Sharpen Your Mind",
        "Wave Away Stress",
        "Seduce Total Strangers",
        "Feel Serious Pleasure",
        "It’s a stress reliever"
    ]
},
{
    "heading": "Piano",
    "list": [
        "Playing the piano can increase cognitive development.",
        "Split concentration",
        "Inspires creativity",
        "Foster hand/eye coordination",
        "Better coordination and motor skills",

    ]
},
{
    "heading": "Violin",
    "list": [
        "Improved finger dexterity",
        "Greater perseverance",
        "Higher standards for yourself",
        "Increased feelings of accomplishment",


    ]
},
{
    "heading": "Harmonica/Mouth-Organ",
    "list": ["        Strengthen Lungs",
        "It has a Meditative Effect on Brain.",
        "Helps mind & breath control and coordination",
        "Music Benefits Our Health"
    ]
},
{
    "heading": "Sheet music",
    "list": [

        "Improves visual & verbal skills.",
        "Keeps an aging brain healthy.",
        "Music Makes You Happier.",
        "Heartbeat, Pulse Rate & Blood Pressure.",
        "Improves Sleep Quality.",
        "Boosts Your Immune System & Reduces Pain.",
        "Reduces Depression & Anxiety."



    ]
}
]


for (i = 0; i < sections.length; i++) {
    main.append(gen(div, `section${sections[i].heading}`, gen(h1, "", sections[i].heading), 'section-small'))
    let elem = document.getElementById(`section${sections[i].heading}`)
    // console.log(sections[i].list)
    elem.append(gen(ul, `ul${sections[i].heading}`))
    document.getElementById(`ul${sections[i].heading}`).innerHTML = gen(li, "", sections[i].list)
}


main.append(gen(div, 'Fee', gen(h1, '', "Fee Structure"), "section"))
Fee.append(gen(div, "", ""))

main.append(gen(div, 'timing', gen(h1, '', "Timing"), 'section'))
timing.append(gen(div, "",
    "Evening Class on Monday, Wednesday and Friday\
    <br />05.00PM-06.00PM\
    <hr /><br />Morning Class on Sunday\
<br />10.00AM-11.00AM<hr />\
"))

