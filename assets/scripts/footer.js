function loadCopyright() {
    app.append(gen("div", "copyright", ""));
    copyright.append(gen("span", "copyurl", `&copy 2022 <a href="https://mgeek.in">mGeek.in</a>`));
    copyright.append(gen("span", "copyauthor", `Designed by <a href="https://webmaster.mgeek.in/">Dr. Prateek Raj Gautam</a>`));
};
function loadFooter() {

    footer.innerHTML = '';
    footer.append(gen(div, "contact", gen(h1, "", "Contact",), 'container section-small'))
    contact.append(gen(p, '', gen(a, "", "Telegram", "", "https://t.me/archanaschoolofmusicandarts")))

    contact.append(gen(p, '', gen(a, "", "Facebook", "", "https://fb.com/archanaschoolofmusicandarts")))
    footer.append(gen(div, 'footlinks', '', ' p-1'))
    // footer.innerHTML = '';
    loadCopyright();
};


loadFooter();