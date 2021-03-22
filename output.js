(() => {
    const t = document.createElement("audio");
    t.style.display = "none", t.src = "https://bad-apple.pages.dev/output.mp3", t.volume = .4, document.body.append(t), t.addEventListener("canplay", () => {
        t.pause(), fetch("https://cors-anywhere.herokuapp.com/https://bad-apple.pages.dev/output.srt").then(t => t.text()).then(e => {
            let n = e.split(/^\n$/gm),
                o = Array.from(document.querySelectorAll(".markup-2BOw-j.messageContent-2qWWxC")).filter(t => "START" === t.textContent);
            if (!o || 0 === o.length) return console.warn("MESSAGE NOT FOUND");
            o = o[o.length - 1], console.log("RUNNING VIDEO");
            const a = Date.now();
            let l = Date.now(),
                s = 0;
            const p = t => {
                let e = t.split(/\d$/gm),
                    d = ++s * (1 / 30) * 1e3,
                    r = Date.now() - a;
                o.textContent = e[2], l = Date.now(), setTimeout(() => {
                    n.length > 0 ? p(n.shift()) : console.log("ENDED")
                }, Math.max(d - r, 0))
            };
            t.addEventListener("play", () => {
                l = Date.now(), p(n.shift())
            }), t.play()
        })
    })
})();
