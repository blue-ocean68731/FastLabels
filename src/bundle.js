/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
function showEmailSignupPopup() {
    $("#email-popup").delay(1e4).fadeIn(function() {
        $(".submit-discount-email").on("click", function() {
            var n = $(".discount-email-address input").val();
            newsletterSignup(n, "popup") ? ($("#email-popup h3").text("Now start shopping..."),
            $("#email-popup .discount-email-address").html('<p>Thank you for signing up to our newsletter. We have already added the 5% discount to your basket, so you can start shopping anytime you are ready.<\/p><a href="/company/privacy.html" class="privacy">Privacy policy<\/a>'),
            setCookie("first_visit", "0", 7300)) : alert("Sorry, we could not sign you up to our mailing list. Please check your address and try again.")
        });
        $("#email-popup .close-popup").on("click", function(n) {
            n.preventDefault();
            $("#email-popup").fadeOut();
            setCookie("first_visit", "0", 7300)
        })
    });
    $(".tablet-desktop-menus .sign-up-button button").on("click", function(n) {
        n.preventDefault()
    })
}
function newsletterSignup(n, t) {
    return isEmail(n) ? ($.ajax({
        url: "/Assets/FastLabels/Services/NewsletterSignUp.aspx",
        method: "POST",
        data: {
            Email: n,
            List: t
        }
    }),
    !0) : !1
}
function cleartext(n, t) {
    n.value == t && (n.value = "",
    n.style.color = "#333333")
}
function recalltext(n, t) {
    n.value == "" && (n.value = t,
    n.style.color = "#333333")
}
function isEmail(n) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(n)
}
function showNotification(n, t) {
    $(".notifications").html("");
    $(".notifications").append('<div class="' + t + '-message message" style="display: none;"><p>' + n + '<\/p><a href="#" class="close-notification"><i class="far fa-times-circle"><\/i><\/a><\/div>');
    $("." + t + "-message").fadeIn(500, function() {
        var n = $(this);
        setTimeout(function() {
            n.fadeOut(500, function() {
                n.remove()
            })
        }, 15e3)
    })
}
function getCookie(n) {
    var t = " " + document.cookie, i = t.indexOf(" " + n + "="), r;
    return (i == -1 && (i = t.indexOf(";" + n + "=")),
    i == -1 || n == "") ? "" : (r = t.indexOf(";", i + 1),
    r == -1 && (r = t.length),
    unescape(t.substring(i + n.length + 2, r)))
}
function setCookie(n, t, i) {
    var u = new Date
      , r = new Date;
    (i == null || i == 0) && (i = 1);
    r.setTime(u.getTime() + 864e5 * i);
    document.cookie = n + "=" + escape(t) + ";expires=" + r.toGMTString() + ";path=/;"
}
!function(n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    }
    : t(n)
}("undefined" != typeof window ? window : undefined, function(n, t) {
    function ri(n) {
        var t = "length"in n && n.length
          , r = i.type(n);
        return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
    }
    function ui(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t !== r
            });
        if ("string" == typeof t) {
            if (ue.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }
    function hr(n, t) {
        do
            n = n[t];
        while (n && 1 !== n.nodeType);
        return n
    }
    function oe(n) {
        var t = fi[n] = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }),
        t
    }
    function cr() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", a, !1),
        n.removeEventListener("load", a, !1)) : (u.detachEvent("onreadystatechange", a),
        n.detachEvent("onload", a))
    }
    function a() {
        (u.addEventListener || "load" === event.type || "complete" === u.readyState) && (cr(),
        i.ready())
    }
    function yr(n, t, r) {
        if (void 0 === r && 1 === n.nodeType) {
            var u = "data-" + t.replace(vr, "-$1").toLowerCase();
            if (r = n.getAttribute(u),
            "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : ar.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                i.data(n, t, r)
            } else
                r = void 0
        }
        return r
    }
    function ei(n) {
        for (var t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function pr(n, t, r, u) {
        if (i.acceptData(n)) {
            var s, e, h = i.expando, l = n.nodeType, o = l ? i.cache : n, f = l ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || void 0 !== r || "string" != typeof t)
                return f || (f = l ? n[h] = c.pop() || i.guid++ : h),
                o[f] || (o[f] = l ? {} : {
                    toJSON: i.noop
                }),
                ("object" == typeof t || "function" == typeof t) && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)),
                e = o[f],
                u || (e.data || (e.data = {}),
                e = e.data),
                void 0 !== r && (e[i.camelCase(t)] = r),
                "string" == typeof t ? (s = e[t],
                null == s && (s = e[i.camelCase(t)])) : s = e,
                s
        }
    }
    function wr(n, t, u) {
        if (i.acceptData(n)) {
            var o, s, h = n.nodeType, f = h ? i.cache : n, e = h ? n[i.expando] : i.expando;
            if (f[e]) {
                if (t && (o = u ? f[e] : f[e].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in o) ? t = [t] : (t = i.camelCase(t),
                    t = (t in o) ? [t] : t.split(" ")),
                    s = t.length; s--; )
                        delete o[t[s]];
                    if (u ? !ei(o) : !i.isEmptyObject(o))
                        return
                }
                (u || (delete f[e].data,
                ei(f[e]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[e] : f[e] = null)
            }
        }
    }
    function vt() {
        return !0
    }
    function it() {
        return !1
    }
    function dr() {
        try {
            return u.activeElement
        } catch (n) {}
    }
    function gr(n) {
        var i = nu.split("|")
          , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function f(n, t) {
        var e, u, s = 0, r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [],
            e = n.childNodes || n; null != (u = e[s]); s++)
                !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }
    function be(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }
    function eu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function ou(n) {
        return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type,
        n
    }
    function su(n) {
        var t = ye.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
        n
    }
    function li(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++)
            i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }
    function hu(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0,
                    o = e[u].length; o > f; f++)
                        i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function ke(n, t) {
        var u, e, f;
        if (1 === t.nodeType) {
            if (u = t.nodeName.toLowerCase(),
            !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events)
                    i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            "script" === u && t.text !== n.text ? (ou(t).text = n.text,
            su(t)) : "object" === u ? (t.parentNode && (t.outerHTML = n.outerHTML),
            r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === u && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked,
            t.value !== n.value && (t.value = n.value)) : "option" === u ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === u || "textarea" === u) && (t.defaultValue = n.defaultValue)
        }
    }
    function cu(t, r) {
        var f, u = i(r.createElement(t)).appendTo(r.body), e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
        return u.detach(),
        e
    }
    function yt(n) {
        var r = u
          , t = ai[n];
        return t || (t = cu(n, r),
        "none" !== t && t || (ot = (ot || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement),
        r = (ot[0].contentWindow || ot[0].contentDocument).document,
        r.write(),
        r.close(),
        t = cu(n, r),
        ot.detach()),
        ai[n] = t),
        t
    }
    function au(n, t) {
        return {
            get: function() {
                var i = n();
                if (null != i)
                    return i ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function pu(n, t) {
        if (t in n)
            return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = yu.length; i--; )
            if (t = yu[i] + r,
            t in n)
                return t;
        return u
    }
    function wu(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++)
            r = n[u],
            r.style && (e[u] = i._data(r, "olddisplay"),
            f = r.style.display,
            t ? (e[u] || "none" !== f || (r.style.display = ""),
            "" === r.style.display && et(r) && (e[u] = i._data(r, "olddisplay", yt(r.nodeName)))) : (o = et(r),
            (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; s > u; u++)
            r = n[u],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }
    function bu(n, t, i) {
        var r = to.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function ku(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)
            "margin" === r && (o += i.css(n, r + w[e], !0, f)),
            u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)),
            "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f),
            "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }
    function du(n, t, u) {
        var o = !0
          , f = "width" === t ? n.offsetWidth : n.offsetHeight
          , e = k(n)
          , s = r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e);
        if (0 >= f || null == f) {
            if (f = d(n, t, e),
            (0 > f || null == f) && (f = n.style[t]),
            pt.test(f))
                return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + ku(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }
    function e(n, t, i, r, u) {
        return new e.prototype.init(n,t,i,r,u)
    }
    function nf() {
        return setTimeout(function() {
            rt = void 0
        }),
        rt = i.now()
    }
    function kt(n, t) {
        var r, i = {
            height: n
        }, u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t)
            r = w[u],
            i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function tf(n, t, i) {
        for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function eo(n, t, u) {
        var f, a, p, v, s, w, h, b, l = this, y = {}, o = n.style, c = n.nodeType && et(n), e = i._data(n, "fxshow");
        u.queue || (s = i._queueHooks(n, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        w = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || w()
        }
        ),
        s.unqueued++,
        l.always(function() {
            l.always(function() {
                s.unqueued--;
                i.queue(n, "fx").length || s.empty.fire()
            })
        }));
        1 === n.nodeType && ("height"in t || "width"in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY],
        h = i.css(n, "display"),
        b = "none" === h ? i._data(n, "olddisplay") || yt(n.nodeName) : h,
        "inline" === b && "none" === i.css(n, "float") && (r.inlineBlockNeedsLayout && "inline" !== yt(n.nodeName) ? o.zoom = 1 : o.display = "inline-block"));
        u.overflow && (o.overflow = "hidden",
        r.shrinkWrapBlocks() || l.always(function() {
            o.overflow = u.overflow[0];
            o.overflowX = u.overflow[1];
            o.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (a = t[f],
            uo.exec(a)) {
                if (delete t[f],
                p = p || "toggle" === a,
                a === (c ? "hide" : "show")) {
                    if ("show" !== a || !e || void 0 === e[f])
                        continue;
                    c = !0
                }
                y[f] = e && e[f] || i.style(n, f)
            } else
                h = void 0;
        if (i.isEmptyObject(y))
            "inline" === ("none" === h ? yt(n.nodeName) : h) && (o.display = h);
        else {
            e ? "hidden"in e && (c = e.hidden) : e = i._data(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() {
                i(n).hide()
            });
            l.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in y)
                    i.style(n, t, y[t])
            });
            for (f in y)
                v = tf(c ? e[f] : 0, f, l),
                f in e || (e[f] = v.start,
                c && (v.end = v.start,
                v.start = "width" === f || "height" === f ? 1 : 0))
        }
    }
    function oo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r),
            e = t[f],
            u = n[r],
            i.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            o = i.cssHooks[f],
            o && "expand"in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function rf(n, t, r) {
        var h, e, o = 0, l = bt.length, f = i.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (e)
                return !1;
            for (var s = rt || nf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++)
                u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
            1 > i && o ? t : (f.resolveWith(n, [u]),
            !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: rt || nf(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                var i = 0
                  , r = t ? u.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; r > i; i++)
                    u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                this
            }
        }), s = u.props;
        for (oo(s, u.opts.specialEasing); l > o; o++)
            if (h = bt[o].call(u, n, s, u.opts))
                return h;
        return i.map(s, tf, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function vf(n) {
        return function(t, r) {
            "string" != typeof t && (r = t,
            t = "*");
            var u, f = 0, e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++])
                    "+" === u.charAt(0) ? (u = u.slice(1) || "*",
                    (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function yf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0,
            i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s),
                e(s),
                !1)
            }),
            h
        }
        var f = {}
          , o = n === bi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function ki(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
        n
    }
    function vo(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes; "*" === r[0]; )
            r.shift(),
            void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (f in s)
                if (s[f] && s[f].test(e)) {
                    r.unshift(f);
                    break
                }
        if (r[0]in i)
            u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u)
            return (u !== r[0] && r.unshift(u),
            i[u])
    }
    function yo(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            e = u,
            u = c.shift())
                if ("*" === u)
                    u = e;
                else if ("*" !== e && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u],
                    !f)
                        for (h in o)
                            if (s = h.split(" "),
                            s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function di(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || wo.test(n) ? u(n, i) : di(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            });
        else if (r || "object" !== i.type(t))
            u(n, t);
        else
            for (f in t)
                di(n + "[" + f + "]", t[f], r, u)
    }
    function wf() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function ns() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function bf(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
    }
    var c = [], l = c.slice, ir = c.concat, ii = c.push, rr = c.indexOf, ct = {}, gf = ct.toString, tt = ct.hasOwnProperty, r = {}, ur = "1.11.3", i = function i(n, t) {
        return new i.fn.init(n,t)
    }, ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ie = /-([\da-z])/gi, re = function(n, t) {
        return t.toUpperCase()
    }, p, or, sr, h, fi, lt, o, lr, ar, vr, ot, ai, uf, ef, sf, gt, gi, ti, nr, tr, kf, df;
    i.fn = i.prototype = {
        jquery: ur,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(n) {
            return null != n ? 0 > n ? this[n + this.length] : this[n] : l.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ii,
        sort: c.sort,
        splice: c.splice
    };
    i.extend = i.fn.extend = function() {
        var r, e, t, f, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
        for ("boolean" == typeof n && (h = n,
        n = arguments[u] || {},
        u++),
        "object" == typeof n || i.isFunction(n) || (n = {}),
        u === c && (n = this,
        u--); c > u; u++)
            if (null != (o = arguments[u]))
                for (f in o)
                    r = n[f],
                    t = o[f],
                    n !== t && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1,
                    s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {},
                    n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === i.type(n)
        }
        ,
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            return !i.isArray(n) && n - parseFloat(n) + 1 >= 0
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        isPlainObject: function(n) {
            var t;
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n))
                return !1;
            try {
                if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (u) {
                return !1
            }
            if (r.ownLast)
                for (t in n)
                    return tt.call(n, t);
            for (t in n)
                ;
            return void 0 === t || tt.call(n, t)
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ct[gf.call(n)] || "object" : typeof n
        },
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            }
            )(t)
        },
        camelCase: function(n) {
            return n.replace(te, "ms-").replace(ie, re)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0, f = n.length, e = ri(n);
            if (i) {
                if (e) {
                    for (; f > r; r++)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
            } else if (e) {
                for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break;
            return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(ne, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (ri(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ii.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (rr)
                    return rr.call(t, n, i);
                for (r = t.length,
                i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                    if (i in t && t[i] === n)
                        return i
            }
            return -1
        },
        merge: function(n, t) {
            for (var r = +t.length, i = 0, u = n.length; r > i; )
                n[u++] = t[i++];
            if (r !== r)
                while (void 0 !== t[i])
                    n[u++] = t[i++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++)
                u = !t(n[r], r),
                u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0, e = n.length, o = ri(n), f = [];
            if (o)
                for (; e > r; r++)
                    u = t(n[r], r, i),
                    null != u && f.push(u);
            else
                for (r in n)
                    u = t(n[r], r, i),
                    null != u && f.push(u);
            return ir.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, r, f;
            return "string" == typeof t && (f = n[t],
            t = n,
            n = f),
            i.isFunction(n) ? (u = l.call(arguments, 2),
            r = function() {
                return n.apply(t || this, u.concat(l.call(arguments)))
            }
            ,
            r.guid = n.guid = n.guid || i.guid++,
            r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: r
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ct["[object " + t + "]"] = t.toLowerCase()
    });
    p = function(n) {
        function r(n, t, i, r) {
            var p, s, a, c, w, y, d, v, nt, g;
            if ((t ? t.ownerDocument || t : h) !== o && k(t),
            t = t || o,
            i = i || [],
            c = t.nodeType,
            "string" != typeof n || !n || 1 !== c && 9 !== c && 11 !== c)
                return i;
            if (!r && l) {
                if (11 !== c && (p = hr.exec(n)))
                    if (a = p[1]) {
                        if (9 === c) {
                            if (s = t.getElementById(a),
                            !s || !s.parentNode)
                                return i;
                            if (s.id === a)
                                return i.push(s),
                                i
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && et(t, s) && s.id === a)
                            return i.push(s),
                            i
                    } else {
                        if (p[2])
                            return b.apply(i, t.getElementsByTagName(n)),
                            i;
                        if ((a = p[3]) && u.getElementsByClassName)
                            return b.apply(i, t.getElementsByClassName(a)),
                            i
                    }
                if (u.qsa && (!e || !e.test(n))) {
                    if (v = d = f,
                    nt = t,
                    g = 1 !== c && n,
                    1 === c && "object" !== t.nodeName.toLowerCase()) {
                        for (y = ft(n),
                        (d = t.getAttribute("id")) ? v = d.replace(cr, "\\$&") : t.setAttribute("id", v),
                        v = "[id='" + v + "'] ",
                        w = y.length; w--; )
                            y[w] = v + vt(y[w]);
                        nt = dt.test(n) && ti(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g)
                        try {
                            return b.apply(i, nt.querySelectorAll(g)),
                            i
                        } catch (tt) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return oi(n.replace(lt, "$1"), t, i, r)
        }
        function gt() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()],
                n[r + " "] = u
            }
            var i = [];
            return n
        }
        function c(n) {
            return n[f] = !0,
            n
        }
        function v(n) {
            var t = o.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ni(n, i) {
            for (var u = n.split("|"), r = n.length; r--; )
                t.attrHandle[u[r]] = i
        }
        function wi(n, t) {
            var i = t && n
              , r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }
        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function tt(n) {
            return c(function(t) {
                return t = +t,
                c(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ti(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }
        function bi() {}
        function vt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++)
                i += n[t].value;
            return i
        }
        function ii(n, t, i) {
            var r = t.dir
              , u = i && "parentNode" === r
              , e = ki++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u)
                        return n(t, i, f)
            }
            : function(t, i, o) {
                var s, h, c = [a, e];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, o))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u) {
                            if (h = t[f] || (t[f] = {}),
                            (s = h[r]) && s[0] === a && s[1] === e)
                                return c[2] = s[2];
                            if (h[r] = c,
                            c[2] = n(t, i, o))
                                return !0
                        }
            }
        }
        function ri(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function vr(n, t, i) {
            for (var u = 0, f = t.length; f > u; u++)
                r(n, t[u], i);
            return i
        }
        function yt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e),
                h && t.push(f));
            return o
        }
        function ui(n, t, i, r, u, e) {
            return r && !r[f] && (r = ui(r)),
            u && !u[f] && (u = ui(u, e)),
            c(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, k = f || vr(t || "*", o.nodeType ? [o] : o, []), v = !n || !f && t ? k : yt(k, p, n, o, s), h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s),
                r)
                    for (l = yt(h, y),
                    r(l, [], o, s),
                    c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [],
                            c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = yt(h === e ? h.splice(w, h.length) : h),
                    u ? u(null, e, h, s) : b.apply(e, h)
            })
        }
        function fi(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ii(function(n) {
                return n === o
            }, c, !0), a = ii(function(n) {
                return nt(o, n) > -1
            }, c, !0), e = [function(n, t, i) {
                var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null,
                r
            }
            ]; s > i; i++)
                if (u = t.relative[n[i].type])
                    e = [ii(ri(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches),
                    u[f]) {
                        for (r = ++i; s > r; r++)
                            if (t.relative[n[r].type])
                                break;
                        return ui(i > 1 && ri(e), i > 1 && vt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(lt, "$1"), u, r > i && fi(n.slice(i, r)), s > r && fi(n = n.slice(r)), s > r && vt(n))
                    }
                    e.push(u)
                }
            return ri(e)
        }
        function yr(n, i) {
            var u = i.length > 0
              , f = n.length > 0
              , e = function(e, s, h, c, l) {
                var y, d, w, k = 0, v = "0", g = e && [], p = [], nt = ht, tt = e || f && t.find.TAG("*", l), it = a += null == nt ? 1 : Math.random() || .1, rt = tt.length;
                for (l && (ht = s !== o && s); v !== rt && null != (y = tt[v]); v++) {
                    if (f && y) {
                        for (d = 0; w = n[d++]; )
                            if (w(y, s, h)) {
                                c.push(y);
                                break
                            }
                        l && (a = it)
                    }
                    u && ((y = !w && y) && k--,
                    e && g.push(y))
                }
                if (k += v,
                u && v !== k) {
                    for (d = 0; w = i[d++]; )
                        w(g, p, s, h);
                    if (e) {
                        if (k > 0)
                            while (v--)
                                g[v] || p[v] || (p[v] = gi.call(c));
                        p = yt(p)
                    }
                    b.apply(c, p);
                    l && !e && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                }
                return l && (a = it,
                ht = nt),
                g
            };
            return u ? c(e) : e
        }
        var it, u, t, st, ei, ft, pt, oi, ht, w, rt, k, o, s, l, e, d, ct, et, f = "sizzle" + 1 * new Date, h = n.document, a = 0, ki = 0, si = gt(), hi = gt(), ci = gt(), wt = function(n, t) {
            return n === t && (rt = !0),
            0
        }, li = -2147483648, di = {}.hasOwnProperty, g = [], gi = g.pop, nr = g.push, b = g.push, ai = g.slice, nt = function(n, t) {
            for (var i = 0, r = n.length; r > i; i++)
                if (n[i] === t)
                    return i;
            return -1
        }, bt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", i = "[\\x20\\t\\r\\n\\f]", ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", vi = ut.replace("w", "w#"), yi = "\\[" + i + "*(" + ut + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + vi + "))|)" + i + "*\\]", kt = ":(" + ut + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + yi + ")*)|.*)\\)|)", tr = new RegExp(i + "+","g"), lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$","g"), ir = new RegExp("^" + i + "*," + i + "*"), rr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"), ur = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]","g"), fr = new RegExp(kt), er = new RegExp("^" + vi + "$"), at = {
            ID: new RegExp("^#(" + ut + ")"),
            CLASS: new RegExp("^\\.(" + ut + ")"),
            TAG: new RegExp("^(" + ut.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + yi),
            PSEUDO: new RegExp("^" + kt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)","i"),
            bool: new RegExp("^(?:" + bt + ")$","i"),
            needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)","i")
        }, or = /^(?:input|select|textarea|button)$/i, sr = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/, hr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, dt = /[+~]/, cr = /'|\\/g, y = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)","ig"), p = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, pi = function() {
            k()
        };
        try {
            b.apply(g = ai.call(h.childNodes), h.childNodes);
            g[h.childNodes.length].nodeType
        } catch (pr) {
            b = {
                apply: g.length ? function(n, t) {
                    nr.apply(n, ai.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        u = r.support = {};
        ei = r.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ;
        k = r.setDocument = function(n) {
            var a, c, r = n ? n.ownerDocument || n : h;
            return r !== o && 9 === r.nodeType && r.documentElement ? (o = r,
            s = r.documentElement,
            c = r.defaultView,
            c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", pi, !1) : c.attachEvent && c.attachEvent("onunload", pi)),
            l = !ei(r),
            u.attributes = v(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            u.getElementsByTagName = v(function(n) {
                return n.appendChild(r.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            u.getElementsByClassName = ot.test(r.getElementsByClassName),
            u.getById = v(function(n) {
                return s.appendChild(n).id = f,
                !r.getElementsByName || !r.getElementsByName(f).length
            }),
            u.getById ? (t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && l) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }
            ,
            t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ) : (delete t.find.ID,
            t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            t.find.TAG = u.getElementsByTagName ? function(n, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : u.qsa ? t.querySelectorAll(n) : void 0
            }
            : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++])
                        1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }
            ,
            t.find.CLASS = u.getElementsByClassName && function(n, t) {
                if (l)
                    return t.getElementsByClassName(n)
            }
            ,
            d = [],
            e = [],
            (u.qsa = ot.test(r.querySelectorAll)) && (v(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\f]' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && e.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || e.push("\\[" + i + "*(?:value|" + bt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || e.push("~=");
                n.querySelectorAll(":checked").length || e.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || e.push(".#.+[+~]")
            }),
            v(function(n) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && e.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                e.push(",.*:")
            })),
            (u.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && v(function(n) {
                u.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                d.push("!=", kt)
            }),
            e = e.length && new RegExp(e.join("|")),
            d = d.length && new RegExp(d.join("|")),
            a = ot.test(s.compareDocumentPosition),
            et = a || ot.test(s.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            wt = a ? function(n, t) {
                if (n === t)
                    return rt = !0,
                    0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1,
                1 & i || !u.sortDetached && t.compareDocumentPosition(n) === i ? n === r || n.ownerDocument === h && et(h, n) ? -1 : t === r || t.ownerDocument === h && et(h, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(n, t) {
                if (n === t)
                    return rt = !0,
                    0;
                var i, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                if (!o || !s)
                    return n === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                if (o === s)
                    return wi(n, t);
                for (i = n; i = i.parentNode; )
                    f.unshift(i);
                for (i = t; i = i.parentNode; )
                    e.unshift(i);
                while (f[u] === e[u])
                    u++;
                return u ? wi(f[u], e[u]) : f[u] === h ? -1 : e[u] === h ? 1 : 0
            }
            ,
            r) : o
        }
        ;
        r.matches = function(n, t) {
            return r(n, null, null, t)
        }
        ;
        r.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== o && k(n),
            t = t.replace(ur, "='$1']"),
            !(!u.matchesSelector || !l || d && d.test(t) || e && e.test(t)))
                try {
                    var i = ct.call(n, t);
                    if (i || u.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return i
                } catch (f) {}
            return r(t, o, null, [n]).length > 0
        }
        ;
        r.contains = function(n, t) {
            return (n.ownerDocument || n) !== o && k(n),
            et(n, t)
        }
        ;
        r.attr = function(n, i) {
            (n.ownerDocument || n) !== o && k(n);
            var f = t.attrHandle[i.toLowerCase()]
              , r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : void 0;
            return void 0 !== r ? r : u.attributes || !l ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
        }
        ;
        r.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        r.uniqueSort = function(n) {
            var r, f = [], t = 0, i = 0;
            if (rt = !u.detectDuplicates,
            w = !u.sortStable && n.slice(0),
            n.sort(wt),
            rt) {
                while (r = n[i++])
                    r === n[i] && (t = f.push(i));
                while (t--)
                    n.splice(f[t], 1)
            }
            return w = null,
            n
        }
        ;
        st = r.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += st(n)
                } else if (3 === t || 4 === t)
                    return n.nodeValue
            } else
                while (r = n[u++])
                    i += st(r);
            return i
        }
        ;
        t = r.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: at,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p),
                    n[3] = (n[3] || n[4] || n[5] || "").replace(y, p),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])),
                    n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return at.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
                    n[2] = t.slice(0, i)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = si[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(u) {
                        var f = r.attr(u, n);
                        return null == f ? "!=" === t : t ? (f += "",
                        "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3)
                      , o = "last" !== n.slice(-4)
                      , e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling", p = t.parentNode, g = e && t.nodeName.toLowerCase(), d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; )
                                        if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
                                            return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild],
                            o && d) {
                                for (k = p[f] || (p[f] = {}),
                                v = k[n] || [],
                                y = v[0] === a && v[1],
                                l = v[0] === a && v[2],
                                c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop(); )
                                    if (1 === c.nodeType && ++l && c === t) {
                                        k[n] = [a, y, l];
                                        break
                                    }
                            } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a)
                                l = v[1];
                            else
                                while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]),
                                    c === t))
                                        break;
                            return l -= u,
                            l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                    return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i],
                    t.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, t) {
                        for (var r, f = u(n, i), e = f.length; e--; )
                            r = nt(n, f[e]),
                            n[r] = !(t[r] = f[e])
                    }) : function(n) {
                        return u(n, 0, e)
                    }
                    ) : u
                }
            },
            pseudos: {
                not: c(function(n) {
                    var t = []
                      , r = []
                      , i = pt(n.replace(lt, "$1"));
                    return i[f] ? c(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n,
                        i(t, null, f, r),
                        t[0] = null,
                        !r.pop()
                    }
                }),
                has: c(function(n) {
                    return function(t) {
                        return r(n, t).length > 0
                    }
                }),
                contains: c(function(n) {
                    return n = n.replace(y, p),
                    function(t) {
                        return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                    }
                }),
                lang: c(function(n) {
                    return er.test(n || "") || r.error("unsupported lang: " + n),
                    n = n.replace(y, p).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === o.activeElement && (!o.hasFocus || o.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return sr.test(n.nodeName)
                },
                input: function(n) {
                    return or.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[it] = lr(it);
        for (it in {
            submit: !0,
            reset: !0
        })
            t.pseudos[it] = ar(it);
        return bi.prototype = t.filters = t.pseudos,
        t.setFilters = new bi,
        ft = r.tokenize = function(n, i) {
            var e, f, s, o, u, h, c, l = hi[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (u = n,
            h = [],
            c = t.preFilter; u; ) {
                (!e || (f = ir.exec(u))) && (f && (u = u.slice(f[0].length) || u),
                h.push(s = []));
                e = !1;
                (f = rr.exec(u)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(lt, " ")
                }),
                u = u.slice(e.length));
                for (o in t.filter)
                    (f = at[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    u = u.slice(e.length));
                if (!e)
                    break
            }
            return i ? u.length : u ? r.error(n) : hi(n, h).slice(0)
        }
        ,
        pt = r.compile = function(n, t) {
            var r, u = [], e = [], i = ci[n + " "];
            if (!i) {
                for (t || (t = ft(n)),
                r = t.length; r--; )
                    i = fi(t[r]),
                    i[f] ? u.push(i) : e.push(i);
                i = ci(n, yr(e, u));
                i.selector = n
            }
            return i
        }
        ,
        oi = r.select = function(n, i, r, f) {
            var s, e, o, a, v, c = "function" == typeof n && n, h = !f && ft(n = c.selector || n);
            if (r = r || [],
            1 === h.length) {
                if (e = h[0] = h[0].slice(0),
                e.length > 2 && "ID" === (o = e[0]).type && u.getById && 9 === i.nodeType && l && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0],
                    !i)
                        return r;
                    c && (i = i.parentNode);
                    n = n.slice(e.shift().value.length)
                }
                for (s = at.needsContext.test(n) ? 0 : e.length; s--; ) {
                    if (o = e[s],
                    t.relative[a = o.type])
                        break;
                    if ((v = t.find[a]) && (f = v(o.matches[0].replace(y, p), dt.test(e[0].type) && ti(i.parentNode) || i))) {
                        if (e.splice(s, 1),
                        n = f.length && vt(e),
                        !n)
                            return b.apply(r, f),
                            r;
                        break
                    }
                }
            }
            return (c || pt(n, h))(f, i, !l, r, dt.test(n) && ti(i.parentNode) || i),
            r
        }
        ,
        u.sortStable = f.split("").sort(wt).join("") === f,
        u.detectDuplicates = !!rt,
        k(),
        u.sortDetached = v(function(n) {
            return 1 & n.compareDocumentPosition(o.createElement("div"))
        }),
        v(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            "#" === n.firstChild.getAttribute("href")
        }) || ni("type|href|height|width", function(n, t, i) {
            if (!i)
                return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        u.attributes && v(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }) || ni("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase())
                return n.defaultValue
        }),
        v(function(n) {
            return null == n.getAttribute("disabled")
        }) || ni(bt, function(n, t, i) {
            var r;
            if (!i)
                return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        r
    }(n);
    i.find = p;
    i.expr = p.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = p.uniqueSort;
    i.text = p.getText;
    i.isXMLDoc = p.isXML;
    i.contains = p.contains;
    var fr = i.expr.match.needsContext
      , er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , ue = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"),
        1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    }
    ;
    i.fn.extend({
        find: function(n) {
            var t, r = [], u = this, f = u.length;
            if ("string" != typeof n)
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; f > t; t++)
                        if (i.contains(u[t], this))
                            return !0
                }));
            for (t = 0; f > t; t++)
                i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + n : n,
            r
        },
        filter: function(n) {
            return this.pushStack(ui(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ui(this, n || [], !0))
        },
        is: function(n) {
            return !!ui(this, "string" == typeof n && fr.test(n) ? i(n) : n || [], !1).length
        }
    });
    var ft, u = n.document, fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ee = i.fn.init = function(n, t) {
        var r, f;
        if (!n)
            return this;
        if ("string" == typeof n) {
            if (r = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : fe.exec(n),
            !r || !r[1] && t)
                return !t || t.jquery ? (t || ft).find(n) : this.constructor(t).find(n);
            if (r[1]) {
                if (t = t instanceof i ? t[0] : t,
                i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)),
                er.test(r[1]) && i.isPlainObject(t))
                    for (r in t)
                        i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if (f = u.getElementById(r[2]),
            f && f.parentNode) {
                if (f.id !== r[2])
                    return ft.find(n);
                this.length = 1;
                this[0] = f
            }
            return this.context = u,
            this.selector = n,
            this
        }
        return n.nodeType ? (this.context = this[0] = n,
        this.length = 1,
        this) : i.isFunction(n) ? "undefined" != typeof ft.ready ? ft.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector,
        this.context = n.context),
        i.makeArray(n, this))
    }
    ;
    ee.prototype = i.fn;
    ft = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.extend({
        dir: function(n, t, r) {
            for (var f = [], u = n[t]; u && 9 !== u.nodeType && (void 0 === r || 1 !== u.nodeType || !i(u).is(r)); )
                1 === u.nodeType && f.push(u),
                u = u[t];
            return f
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function(n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++)
                    if (i.contains(this, r[t]))
                        return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = fr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return hr(n, "nextSibling")
        },
        prev: function(n) {
            return hr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            this.length > 1 && (sr[n] || (f = i.unique(f)),
            or.test(n) && (f = f.reverse())),
            this.pushStack(f)
        }
    });
    h = /\S+/g;
    fi = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? fi[n] || oe(n) : i.extend({}, n);
        var o, u, h, f, e, c, t = [], r = !n.once && [], l = function l(i) {
            for (u = n.memory && i,
            h = !0,
            e = c || 0,
            c = 0,
            f = t.length,
            o = !0; t && f > e; e++)
                if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                    u = !1;
                    break
                }
            o = !1;
            t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
        }, s = {
            add: function() {
                if (t) {
                    var r = t.length;
                    !function e(r) {
                        i.each(r, function(r, u) {
                            var f = i.type(u);
                            "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
                        })
                    }(arguments);
                    o ? f = t.length : u && (c = r,
                    l(u))
                }
                return this
            },
            remove: function() {
                return t && i.each(arguments, function(n, r) {
                    for (var u; (u = i.inArray(r, t, u)) > -1; )
                        t.splice(u, 1),
                        o && (f >= u && f--,
                        e >= u && e--)
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
            },
            empty: function() {
                return t = [],
                f = 0,
                this
            },
            disable: function() {
                return t = r = u = void 0,
                this
            },
            disabled: function() {
                return !t
            },
            lock: function() {
                return r = void 0,
                u || s.disable(),
                this
            },
            locked: function() {
                return !r
            },
            fireWith: function(n, i) {
                return !t || h && !r || (i = i || [],
                i = [n, i.slice ? i.slice() : i],
                o ? r.push(i) : l(i)),
                this
            },
            fire: function() {
                return s.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!h
            }
        };
        return s
    }
    ;
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
              , f = "pending"
              , r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u, function(u, e) {
                            var o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return null != n ? i.extend(n, r) : r
                }
            }
              , t = {};
            return r.pipe = r.then,
            i.each(u, function(n, i) {
                var e = i[2]
                  , o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments),
                    this
                }
                ;
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0, u = l.call(arguments), r = u.length, e = 1 !== r || n && i.isFunction(n.promise) ? r : 0, f = 1 === e ? n : i.Deferred(), h = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? l.call(arguments) : r;
                    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            }, o, c, s;
            if (r > 1)
                for (o = new Array(r),
                c = new Array(r),
                s = new Array(r); r > t; t++)
                    u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u),
            f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n),
        this
    }
    ;
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!u.body)
                    return setTimeout(i.ready);
                i.isReady = !0;
                n !== !0 && --i.readyWait > 0 || (lt.resolveWith(u, [i]),
                i.fn.triggerHandler && (i(u).triggerHandler("ready"),
                i(u).off("ready")))
            }
        }
    });
    i.ready.promise = function(t) {
        if (!lt)
            if (lt = i.Deferred(),
            "complete" === u.readyState)
                setTimeout(i.ready);
            else if (u.addEventListener)
                u.addEventListener("DOMContentLoaded", a, !1),
                n.addEventListener("load", a, !1);
            else {
                u.attachEvent("onreadystatechange", a);
                n.attachEvent("onload", a);
                var r = !1;
                try {
                    r = null == n.frameElement && u.documentElement
                } catch (e) {}
                r && r.doScroll && !function f() {
                    if (!i.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        cr();
                        i.ready()
                    }
                }()
            }
        return lt.promise(t)
    }
    ;
    o = "undefined";
    for (lr in i(r))
        break;
    r.ownLast = "0" !== lr;
    r.inlineBlockNeedsLayout = !1;
    i(function() {
        var f, t, n, i;
        n = u.getElementsByTagName("body")[0];
        n && n.style && (t = u.createElement("div"),
        i = u.createElement("div"),
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(t),
        typeof t.style.zoom !== o && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        r.inlineBlockNeedsLayout = f = 3 === t.offsetWidth,
        f && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var n = u.createElement("div");
        if (null == r.deleteExpando) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (t) {
                r.deleteExpando = !1
            }
        }
        n = null
    }();
    i.acceptData = function(n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()]
          , r = +n.nodeType || 1;
        return 1 !== r && 9 !== r ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
    }
    ;
    ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    vr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !ei(n)
        },
        data: function(n, t, i) {
            return pr(n, t, i)
        },
        removeData: function(n, t) {
            return wr(n, t)
        },
        _data: function(n, t, i) {
            return pr(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return wr(n, t, !0)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, r = this[0], o = r && r.attributes;
            if (void 0 === n) {
                if (this.length && (e = i.data(r),
                1 === r.nodeType && !i._data(r, "parsedAttrs"))) {
                    for (f = o.length; f--; )
                        o[f] && (u = o[f].name,
                        0 === u.indexOf("data-") && (u = i.camelCase(u.slice(5)),
                        yr(r, u, e[u])));
                    i._data(r, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, t)
            }) : r ? yr(r, n, i.data(r, n)) : void 0
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n)
                return (t = (t || "fx") + "queue",
                u = i._data(n, t),
                r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)),
                u || [])
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            };
            "inprogress" === u && (u = r.shift(),
            e--);
            u && ("fx" === t && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n,
            n = "fx",
            r--),
            arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var r, f = 1, e = i.Deferred(), u = this, o = this.length, s = function() {
                --f || e.resolveWith(u, [u])
            };
            for ("string" != typeof n && (t = n,
            n = void 0),
            n = n || "fx"; o--; )
                r = i._data(u[o], n + "queueHooks"),
                r && r.empty && (f++,
                r.empty.add(s));
            return s(),
            e.promise(t)
        }
    });
    var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , w = ["Top", "Right", "Bottom", "Left"]
      , et = function(n, t) {
        return n = t || n,
        "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    }
      , b = i.access = function(n, t, r, u, f, e, o) {
        var s = 0
          , c = n.length
          , h = null == r;
        if ("object" === i.type(r)) {
            f = !0;
            for (s in r)
                i.access(n, t, s, r[s], !0, e, o)
        } else if (void 0 !== u && (f = !0,
        i.isFunction(u) || (o = !0),
        h && (o ? (t.call(n, u),
        t = null) : (h = t,
        t = function(n, t, r) {
            return h.call(i(n), r)
        }
        )),
        t))
            for (; c > s; s++)
                t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    }
      , oi = /^(?:checkbox|radio)$/i;
    !function() {
        var t = u.createElement("input")
          , n = u.createElement("div")
          , i = u.createDocumentFragment();
        if (n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>",
        r.leadingWhitespace = 3 === n.firstChild.nodeType,
        r.tbody = !n.getElementsByTagName("tbody").length,
        r.htmlSerialize = !!n.getElementsByTagName("link").length,
        r.html5Clone = "<:nav><\/:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML,
        t.type = "checkbox",
        t.checked = !0,
        i.appendChild(t),
        r.appendChecked = t.checked,
        n.innerHTML = "<textarea>x<\/textarea>",
        r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue,
        i.appendChild(n),
        n.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked,
        r.noCloneEvent = !0,
        n.attachEvent && (n.attachEvent("onclick", function() {
            r.noCloneEvent = !1
        }),
        n.cloneNode(!0).click()),
        null == r.deleteExpando) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (f) {
                r.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, i, f = u.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            i = "on" + t,
            (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"),
            r[t + "Bubbles"] = f.attributes[i].expando === !1);
        f = null
    }();
    var si = /^(?:input|select|textarea)$/i
      , se = /^key/
      , he = /^(?:mouse|pointer|contextmenu)|click/
      , br = /^(?:focusinfocus|focusoutblur)$/
      , kr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, r, u, f) {
            var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
            if (v) {
                for (r.handler && (p = r,
                r = p.handler,
                f = p.selector),
                r.guid || (r.guid = i.guid++),
                (y = v.events) || (y = v.events = {}),
                (c = v.handle) || (c = v.handle = function(n) {
                    if (typeof i !== o && (!n || i.event.triggered !== n.type))
                        return i.event.dispatch.apply(c.elem, arguments)
                }
                ,
                c.elem = n),
                t = (t || "").match(h) || [""],
                b = t.length; b--; )
                    w = kr.exec(t[b]) || [],
                    e = d = w[1],
                    k = (w[2] || "").split(".").sort(),
                    e && (s = i.event.special[e] || {},
                    e = (f ? s.delegateType : s.bindType) || e,
                    s = i.event.special[e] || {},
                    l = i.extend({
                        type: e,
                        origType: d,
                        data: u,
                        handler: r,
                        guid: r.guid,
                        selector: f,
                        needsContext: f && i.expr.match.needsContext.test(f),
                        namespace: k.join(".")
                    }, p),
                    (a = y[e]) || (a = y[e] = [],
                    a.delegateCount = 0,
                    s.setup && s.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))),
                    s.add && (s.add.call(n, l),
                    l.handler.guid || (l.handler.guid = r.guid)),
                    f ? a.splice(a.delegateCount++, 0, l) : a.push(l),
                    i.event.global[e] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(h) || [""],
                p = t.length; p--; )
                    if (s = kr.exec(t[p]) || [],
                    e = k = s[1],
                    w = (s[2] || "").split(".").sort(),
                    e) {
                        for (c = i.event.special[e] || {},
                        e = (u ? c.delegateType : c.bindType) || e,
                        l = a[e] || [],
                        s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        b = y = l.length; y--; )
                            o = l[y],
                            !f && k !== o.origType || r && r.guid !== o.guid || s && !s.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1),
                            o.selector && l.delegateCount--,
                            c.remove && c.remove.call(n, o));
                        b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle),
                        delete a[e])
                    } else
                        for (e in a)
                            i.event.remove(n, e + t[p], r, u, !0);
                i.isEmptyObject(a) && (delete v.handle,
                i._removeData(n, "events"))
            }
        },
        trigger: function(t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u], s = tt.call(t, "type") ? t.type : t, v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = h = f = f || u,
            3 !== f.nodeType && 8 !== f.nodeType && !br.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."),
            s = v.shift(),
            v.sort()),
            a = s.indexOf(":") < 0 && "on" + s,
            t = t[i.expando] ? t : new i.Event(s,"object" == typeof t && t),
            t.isTrigger = e ? 2 : 3,
            t.namespace = v.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = f),
            r = null == r ? [t] : i.makeArray(r, [t]),
            c = i.event.special[s] || {},
            e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s,
                    br.test(p + s) || (o = o.parentNode); o; o = o.parentNode)
                        y.push(o),
                        h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0; (o = y[w++]) && !t.isPropagationStopped(); )
                    t.type = w > 1 ? p : c.bindType || s,
                    l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"),
                    l && l.apply(o, r),
                    l = a && o[a],
                    l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r),
                    t.result === !1 && t.preventDefault());
                if (t.type = s,
                !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a];
                    h && (f[a] = null);
                    i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) {}
                    i.event.triggered = void 0;
                    h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var e, f, t, r, o, s = [], h = l.call(arguments), c = (i._data(this, "events") || {})[n.type] || [], u = i.event.special[n.type] || {};
            if (h[0] = n,
            n.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c),
                e = 0; (r = s[e++]) && !n.isPropagationStopped(); )
                    for (n.currentTarget = r.elem,
                    o = 0; (t = r.handlers[o++]) && !n.isImmediatePropagationStopped(); )
                        (!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t,
                        n.data = t.data,
                        f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h),
                        void 0 !== f && (n.result = f) === !1 && (n.preventDefault(),
                        n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n),
                n.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, h = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && (!n.button || "click" !== n.type))
                for (; r != this; r = r.parentNode || this)
                    if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
                        for (u = [],
                        o = 0; s > o; o++)
                            e = t[o],
                            f = e.selector + " ",
                            void 0 === u[f] && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length),
                            u[f] && u.push(e);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }),
            h
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var e, o, s, r = n.type, f = n, t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = he.test(r) ? this.mouseHooks : se.test(r) ? this.keyHooks : {}),
            s = t.props ? this.props.concat(t.props) : this.props,
            n = new i.Event(f),
            e = s.length; e--; )
                o = s[e],
                n[o] = f[o];
            return n.target || (n.target = f.srcElement || u),
            3 === n.target.nodeType && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var i, e, r, f = t.button, o = t.fromElement;
                return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u,
                r = e.documentElement,
                i = e.body,
                n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o),
                n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== dr() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === dr() && this.blur)
                        return (this.blur(),
                        !1)
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return (this.click(),
                        !1)
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = u.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }
    : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null),
        n.detachEvent(r, i))
    }
    ;
    i.Event = function(n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? vt : it) : this.type = n,
        t && i.extend(this, t),
        this.timeStamp = n && n.timeStamp || i.now(),
        void (this[i.expando] = !0)) : new i.Event(n,t)
    }
    ;
    i.Event.prototype = {
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = vt;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = vt;
            n && (n.stopPropagation && n.stopPropagation(),
            n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = vt;
            n && n.stopImmediatePropagation && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType,
                u = e.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    });
    r.submitBubbles || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.add(this, "click._submit keypress._submit", function(n) {
                var r = n.target
                  , t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : void 0;
                t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }),
                i._data(t, "submitBubbles", !0))
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble,
            this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.remove(this, "._submit")
        }
    });
    r.changeBubbles || (i.event.special.change = {
        setup: function() {
            return si.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
                "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
            }),
            i.event.add(this, "click._change", function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            })),
            !1) : void i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                si.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }),
                i._data(t, "changeBubbles", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            !si.test(this.nodeName)
        }
    });
    r.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var u = this.ownerDocument || this
                  , f = i._data(u, t);
                f || u.addEventListener(n, r, !0);
                i._data(u, t, (f || 0) + 1)
            },
            teardown: function() {
                var u = this.ownerDocument || this
                  , f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0),
                i._removeData(u, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, r, u, f) {
            var o, e;
            if ("object" == typeof n) {
                "string" != typeof t && (r = r || t,
                t = void 0);
                for (o in n)
                    this.on(o, t, r, n[o], f);
                return this
            }
            if (null == r && null == u ? (u = t,
            r = t = void 0) : null == u && ("string" == typeof t ? (u = r,
            r = void 0) : (u = r,
            r = t,
            t = void 0)),
            u === !1)
                u = it;
            else if (!u)
                return this;
            return 1 === f && (e = u,
            u = function(n) {
                return i().off(n),
                e.apply(this, arguments)
            }
            ,
            u.guid = e.guid || (e.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, u, r, t)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj)
                return u = n.handleObj,
                i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
                this;
            if ("object" == typeof n) {
                for (f in n)
                    this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (r = t,
            t = void 0),
            r === !1 && (r = it),
            this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r)
                return i.event.trigger(n, t, r, !0)
        }
    });
    var nu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , ce = / jQuery\d+="(?:null|\d+)"/g
      , tu = new RegExp("<(?:" + nu + ")[\\s/>]","i")
      , hi = /^\s+/
      , iu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , ru = /<([\w:]+)/
      , uu = /<tbody/i
      , le = /<|&#?\w+;/
      , ae = /<(?:script|style|link)/i
      , ve = /checked\s*(?:[^=]|=\s*.checked.)/i
      , fu = /^$|\/(?:java|ecma)script/i
      , ye = /^true\/(.*)/
      , pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , s = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        area: [1, "<map>", "<\/map>"],
        param: [1, "<object>", "<\/object>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
    }
      , we = gr(u)
      , ci = we.appendChild(u.createElement("div"));
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.extend({
        clone: function(n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
            if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (ci.innerHTML = n.outerHTML,
            ci.removeChild(s = ci.firstChild)),
            !(r.noCloneEvent && r.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = f(s),
                h = f(n),
                o = 0; null != (c = h[o]); ++o)
                    e[o] && ke(c, e[o]);
            if (t)
                if (u)
                    for (h = h || f(n),
                    e = e || f(s),
                    o = 0; null != (c = h[o]); o++)
                        hu(c, e[o]);
                else
                    hu(n, s);
            return e = f(s, "script"),
            e.length > 0 && li(e, !l && f(n, "script")),
            e = h = c = null,
            s
        },
        buildFragment: function(n, t, u, e) {
            for (var c, o, b, h, p, w, a, k = n.length, v = gr(t), l = [], y = 0; k > y; y++)
                if (o = n[y],
                o || 0 === o)
                    if ("object" === i.type(o))
                        i.merge(l, o.nodeType ? [o] : o);
                    else if (le.test(o)) {
                        for (h = h || v.appendChild(t.createElement("div")),
                        p = (ru.exec(o) || ["", ""])[1].toLowerCase(),
                        a = s[p] || s._default,
                        h.innerHTML = a[1] + o.replace(iu, "<$1><\/$2>") + a[2],
                        c = a[0]; c--; )
                            h = h.lastChild;
                        if (!r.leadingWhitespace && hi.test(o) && l.push(t.createTextNode(hi.exec(o)[0])),
                        !r.tbody)
                            for (o = "table" !== p || uu.test(o) ? "<table>" !== a[1] || uu.test(o) ? 0 : h : h.firstChild,
                            c = o && o.childNodes.length; c--; )
                                i.nodeName(w = o.childNodes[c], "tbody") && !w.childNodes.length && o.removeChild(w);
                        for (i.merge(l, h.childNodes),
                        h.textContent = ""; h.firstChild; )
                            h.removeChild(h.firstChild);
                        h = v.lastChild
                    } else
                        l.push(t.createTextNode(o));
            for (h && v.removeChild(h),
            r.appendChecked || i.grep(f(l, "input"), be),
            y = 0; o = l[y++]; )
                if ((!e || -1 === i.inArray(o, e)) && (b = i.contains(o.ownerDocument, o),
                h = f(v.appendChild(o), "script"),
                b && li(h),
                u))
                    for (c = 0; o = h[c++]; )
                        fu.test(o.type || "") && u.push(o);
            return h = null,
            v
        },
        cleanData: function(n, t) {
            for (var u, e, f, s, a = 0, h = i.expando, l = i.cache, v = r.deleteExpando, y = i.event.special; null != (u = n[a]); a++)
                if ((t || i.acceptData(u)) && (f = u[h],
                s = f && l[f])) {
                    if (s.events)
                        for (e in s.events)
                            y[e] ? i.event.remove(u, e) : i.removeEvent(u, e, s.handle);
                    l[f] && (delete l[f],
                    v ? delete u[h] : typeof u.removeAttribute !== o ? u.removeAttribute(h) : u[h] = null,
                    c.push(f))
                }
        }
    });
    i.fn.extend({
        text: function(n) {
            return b(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, u = 0; null != (r = e[u]); u++)
                t || 1 !== r.nodeType || i.cleanData(f(r)),
                r.parentNode && (t && i.contains(r.ownerDocument, r) && li(f(r, "script")),
                r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(f(n, !1)); n.firstChild; )
                    n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n,
            t = null == t ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return b(this, function(n) {
                var t = this[0] || {}
                  , u = 0
                  , e = this.length;
                if (void 0 === n)
                    return 1 === t.nodeType ? t.innerHTML.replace(ce, "") : void 0;
                if (!("string" != typeof n || ae.test(n) || !r.htmlSerialize && tu.test(n) || !r.leadingWhitespace && hi.test(n) || s[(ru.exec(n) || ["", ""])[1].toLowerCase()])) {
                    n = n.replace(iu, "<$1><\/$2>");
                    try {
                        for (; e > u; u++)
                            t = this[u] || {},
                            1 === t.nodeType && (i.cleanData(f(t, !1)),
                            t.innerHTML = n);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments, function(t) {
                n = this.parentNode;
                i.cleanData(f(this));
                n && n.replaceChild(t, this)
            }),
            n && (n.length || n.nodeType) ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = ir.apply([], n);
            var h, u, c, o, v, s, e = 0, l = this.length, p = this, w = l - 1, a = n[0], y = i.isFunction(a);
            if (y || l > 1 && "string" == typeof a && !r.checkClone && ve.test(a))
                return this.each(function(i) {
                    var r = p.eq(i);
                    y && (n[0] = a.call(this, i, r.html()));
                    r.domManip(n, t)
                });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this),
            h = s.firstChild,
            1 === s.childNodes.length && (s = h),
            h)) {
                for (o = i.map(f(s, "script"), ou),
                c = o.length; l > e; e++)
                    u = s,
                    e !== w && (u = i.clone(u, !0, !0),
                    c && i.merge(o, f(u, "script"))),
                    t.call(this[e], u, e);
                if (c)
                    for (v = o[o.length - 1].ownerDocument,
                    i.map(o, su),
                    e = 0; c > e; e++)
                        u = o[e],
                        fu.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(pe, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                ii.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    ai = {};
    !function() {
        var n;
        r.shrinkWrapBlocks = function() {
            if (null != n)
                return n;
            n = !1;
            var t, i, r;
            return i = u.getElementsByTagName("body")[0],
            i && i.style ? (t = u.createElement("div"),
            r = u.createElement("div"),
            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            i.appendChild(r).appendChild(t),
            typeof t.style.zoom !== o && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(u.createElement("div")).style.width = "5px",
            n = 3 !== t.offsetWidth),
            i.removeChild(r),
            n) : void 0
        }
    }();
    var lu = /^margin/, pt = new RegExp("^(" + at + ")(?!px)[a-z%]+$","i"), k, d, de = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (k = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
    }
    ,
    d = function(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || k(n),
        u = r ? r.getPropertyValue(t) || r[t] : void 0,
        r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)),
        pt.test(u) && lu.test(t) && (e = f.width,
        o = f.minWidth,
        s = f.maxWidth,
        f.minWidth = f.maxWidth = f.width = u,
        u = r.width,
        f.width = e,
        f.minWidth = o,
        f.maxWidth = s)),
        void 0 === u ? u : u + ""
    }
    ) : u.documentElement.currentStyle && (k = function(n) {
        return n.currentStyle
    }
    ,
    d = function(n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || k(n),
        r = i ? i[t] : void 0,
        null == r && u && u[t] && (r = u[t]),
        pt.test(r) && !de.test(t) && (o = u.left,
        f = n.runtimeStyle,
        e = f && f.left,
        e && (f.left = n.currentStyle.left),
        u.left = "fontSize" === t ? "1em" : r,
        r = u.pixelLeft + "px",
        u.left = o,
        e && (f.left = e)),
        void 0 === r ? r : r + "" || "auto"
    }
    );
    !function() {
        var f, t, c, o, s, e, h;
        (f = u.createElement("div"),
        f.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>",
        c = f.getElementsByTagName("a")[0],
        t = c && c.style) && function() {
            var c = function() {
                var i, r, f, t;
                r = u.getElementsByTagName("body")[0];
                r && r.style && (i = u.createElement("div"),
                f = u.createElement("div"),
                f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                r.appendChild(f).appendChild(i),
                i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                o = s = !1,
                h = !0,
                n.getComputedStyle && (o = "1%" !== (n.getComputedStyle(i, null) || {}).top,
                s = "4px" === (n.getComputedStyle(i, null) || {
                    width: "4px"
                }).width,
                t = i.appendChild(u.createElement("div")),
                t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                t.style.marginRight = t.style.width = "0",
                i.style.width = "1px",
                h = !parseFloat((n.getComputedStyle(t, null) || {}).marginRight),
                i.removeChild(t)),
                i.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>",
                t = i.getElementsByTagName("td"),
                t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                e = 0 === t[0].offsetHeight,
                e && (t[0].style.display = "",
                t[1].style.display = "none",
                e = 0 === t[0].offsetHeight),
                r.removeChild(f))
            };
            t.cssText = "float:left;opacity:.5";
            r.opacity = "0.5" === t.opacity;
            r.cssFloat = !!t.cssFloat;
            f.style.backgroundClip = "content-box";
            f.cloneNode(!0).style.backgroundClip = "";
            r.clearCloneStyle = "content-box" === f.style.backgroundClip;
            r.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" === t.WebkitBoxSizing;
            i.extend(r, {
                reliableHiddenOffsets: function() {
                    return null == e && c(),
                    e
                },
                boxSizingReliable: function() {
                    return null == s && c(),
                    s
                },
                pixelPosition: function() {
                    return null == o && c(),
                    o
                },
                reliableMarginRight: function() {
                    return null == h && c(),
                    h
                }
            })
        }()
    }();
    i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u],
            n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t)
            n.style[u] = e[u];
        return f
    }
    ;
    var vi = /alpha\([^)]*\)/i
      , ge = /opacity\s*=\s*([^)]*)/
      , no = /^(none|table(?!-c[ea]).+)/
      , to = new RegExp("^(" + at + ")(.*)$","i")
      , io = new RegExp("^([+-])=(" + at + ")","i")
      , ro = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , vu = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , yu = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = d(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: r.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, t, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, h, e, s = i.camelCase(t), c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = pu(c, s)),
                e = i.cssHooks[t] || i.cssHooks[s],
                void 0 === u)
                    return e && "get"in e && void 0 !== (o = e.get(n, !1, f)) ? o : c[t];
                if (h = typeof u,
                "string" === h && (o = io.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)),
                h = "number"),
                null != u && u === u && ("number" !== h || i.cssNumber[s] || (u += "px"),
                r.clearCloneStyle || "" !== u || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                !(e && "set"in e && void 0 === (u = e.set(n, u, f)))))
                    try {
                        c[t] = u
                    } catch (l) {}
            }
        },
        css: function(n, t, r, u) {
            var s, f, e, o = i.camelCase(t);
            return t = i.cssProps[o] || (i.cssProps[o] = pu(n.style, o)),
            e = i.cssHooks[t] || i.cssHooks[o],
            e && "get"in e && (f = e.get(n, !0, r)),
            void 0 === f && (f = d(n, t, u)),
            "normal" === f && t in vu && (f = vu[t]),
            "" === r || r ? (s = parseFloat(f),
            r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return no.test(i.css(n, "display")) && 0 === n.offsetWidth ? i.swap(n, ro, function() {
                        return du(n, t, u)
                    }) : du(n, t, u)
            },
            set: function(n, u, f) {
                var e = f && k(n);
                return bu(n, u, f ? ku(n, t, f, r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e), e) : 0)
            }
        }
    });
    r.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return ge.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
              , u = n.currentStyle
              , e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , f = u && u.filter || r.filter || "";
            r.zoom = 1;
            (t >= 1 || "" === t) && "" === i.trim(f.replace(vi, "")) && r.removeAttribute && (r.removeAttribute("filter"),
            "" === t || u && !u.filter) || (r.filter = vi.test(f) ? f.replace(vi, e) : f + " " + e)
        }
    });
    i.cssHooks.marginRight = au(r.reliableMarginRight, function(n, t) {
        if (t)
            return i.swap(n, {
                display: "inline-block"
            }, d, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)
                    f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        lu.test(n) || (i.cssHooks[n + t].set = bu)
    });
    i.fn.extend({
        css: function(n, t) {
            return b(this, function(n, t, r) {
                var f, e, o = {}, u = 0;
                if (i.isArray(t)) {
                    for (f = k(n),
                    e = t.length; e > u; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return wu(this, !0)
        },
        hide: function() {
            return wu(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                et(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = e.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            r && r.set ? r.set(this) : e.propHooks._default.set(this),
            this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""),
                t && "auto" !== t ? t : 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    var rt, wt, uo = /^(?:toggle|show|hide)$/, gu = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$","i"), fo = /queueHooks$/, bt = [eo], st = {
        "*": [function(n, t) {
            var f = this.createTween(n, t)
              , s = f.cur()
              , r = gu.exec(t)
              , e = r && r[3] || (i.cssNumber[n] ? "" : "px")
              , u = (i.cssNumber[n] || "px" !== e && +s) && gu.exec(i.css(f.elem, n))
              , o = 1
              , h = 20;
            if (u && u[3] !== e) {
                e = e || u[3];
                r = r || [];
                u = +s || 1;
                do
                    o = o || ".5",
                    u /= o,
                    i.style(f.elem, n, u + e);
                while (o !== (o = f.cur() / s) && 1 !== o && --h)
            }
            return r && (u = f.start = +u || +s || 0,
            f.unit = e,
            f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]),
            f
        }
        ]
    };
    i.Animation = i.extend(rf, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n,
            n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; f > u; u++)
                r = n[u],
                st[r] = st[r] || [],
                st[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? bt.unshift(n) : bt.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (null == u.queue || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }
        ,
        u
    }
    ;
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(et).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n)
              , e = i.speed(t, r, u)
              , f = function() {
                var t = rf(this, i.extend({}, n), e);
                (o || i._data(this, "finish")) && t.stop(!0)
            };
            return f.finish = f,
            o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, t, r) {
            var u = function(n) {
                var t = n.stop;
                delete n.stop;
                t(r)
            };
            return "string" != typeof n && (r = t,
            t = n,
            n = void 0),
            t && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0
                  , t = null != n && n + "queueHooks"
                  , e = i.timers
                  , f = i._data(this);
                if (t)
                    f[t] && f[t].stop && u(f[t]);
                else
                    for (t in f)
                        f[t] && f[t].stop && fo.test(t) && u(f[t]);
                for (t = e.length; t--; )
                    e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(r),
                    o = !1,
                    e.splice(t, 1));
                (o || !r) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, f = i._data(this), r = f[n + "queue"], e = f[n + "queueHooks"], u = i.timers, o = r ? r.length : 0;
                for (f.finish = !0,
                i.queue(this, n, []),
                e && e.stop && e.stop.call(this, !0),
                t = u.length; t--; )
                    u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0),
                    u.splice(t, 1));
                for (t = 0; o > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(kt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: kt("show"),
        slideUp: kt("hide"),
        slideToggle: kt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = i.timers, t = 0;
        for (rt = i.now(); t < n.length; t++)
            r = n[t],
            r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop();
        rt = void 0
    }
    ;
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        wt || (wt = setInterval(i.fx.tick, i.fx.interval))
    }
    ;
    i.fx.stop = function() {
        clearInterval(wt);
        wt = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(n, t) {
        return n = i.fx ? i.fx.speeds[n] || n : n,
        t = t || "fx",
        this.queue(t, function(t, i) {
            var r = setTimeout(t, n);
            i.stop = function() {
                clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var n, t, f, i, e;
        t = u.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        i = t.getElementsByTagName("a")[0];
        f = u.createElement("select");
        e = f.appendChild(u.createElement("option"));
        n = t.getElementsByTagName("input")[0];
        i.style.cssText = "top:1px";
        r.getSetAttribute = "t" !== t.className;
        r.style = /top/.test(i.getAttribute("style"));
        r.hrefNormalized = "/a" === i.getAttribute("href");
        r.checkOn = !!n.value;
        r.optSelected = e.selected;
        r.enctype = !!u.createElement("form").enctype;
        f.disabled = !0;
        r.optDisabled = !e.disabled;
        n = u.createElement("input");
        n.setAttribute("value", "");
        r.input = "" === n.getAttribute("value");
        n.value = "t";
        n.setAttribute("type", "radio");
        r.radioValue = "t" === n.value
    }();
    uf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n),
            this.each(function(r) {
                var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n,
                null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })),
                t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value,
            "string" == typeof r ? r.replace(uf, "") : null == r ? "" : r)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : i.trim(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, u = n.selectedIndex, f = "select-one" === n.type || 0 > u, h = f ? null : [], c = f ? u + 1 : s.length, e = 0 > u ? c : f ? u : 0; c > e; e++)
                        if (t = s[e],
                        !(!t.selected && e !== u || (r.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(),
                            f)
                                return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--; )
                        if (r = u[e],
                        i.inArray(i.valHooks.option.get(r), o) >= 0)
                            try {
                                r.selected = f = !0
                            } catch (s) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return f || (n.selectedIndex = -1),
                    u
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        r.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        }
        )
    });
    var ut, ff, v = i.expr.attrHandle, yi = /^(?:checked|selected)$/i, g = r.getSetAttribute, dt = r.input;
    i.fn.extend({
        attr: function(n, t) {
            return b(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e)
                return typeof n.getAttribute === o ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(),
                u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? ff : ut)),
                void 0 === r ? u && "get"in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t),
                null == f ? void 0 : f) : null !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""),
                r) : void i.removeAttr(n, t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0, f = t && t.match(h);
            if (f && 1 === n.nodeType)
                while (r = f[e++])
                    u = i.propFix[r] || r,
                    i.expr.match.bool.test(r) ? dt && g || !yi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""),
                    n.removeAttribute(g ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!r.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t),
                        u && (n.value = u),
                        t
                    }
                }
            }
        }
    });
    ff = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : dt && g || !yi.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0,
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = v[t] || i.find.attr;
        v[t] = dt && g || !yi.test(t) ? function(n, t, i) {
            var u, f;
            return i || (f = v[t],
            v[t] = u,
            u = null != r(n, t, i) ? t.toLowerCase() : null,
            v[t] = f),
            u
        }
        : function(n, t, r) {
            if (!r)
                return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    dt && g || (i.attrHooks.value = {
        set: function(n, t, r) {
            return i.nodeName(n, "input") ? void (n.defaultValue = t) : ut && ut.set(n, t, r)
        }
    });
    g || (ut = {
        set: function(n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)),
            r.value = t += "",
            "value" === i || t === n.getAttribute(i) ? t : void 0
        }
    },
    v.id = v.name = v.coords = function(n, t, i) {
        var r;
        if (!i)
            return (r = n.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }
    ,
    i.valHooks.button = {
        get: function(n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified)
                return i.value
        },
        set: ut.set
    },
    i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            ut.set(n, "" === t ? !1 : t, i)
        }
    },
    i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = {
            set: function(n, i) {
                if ("" === i)
                    return (n.setAttribute(t, "auto"),
                    i)
            }
        }
    }));
    r.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || void 0
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    ef = /^(?:input|select|textarea|button|object)$/i;
    sf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return b(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = void 0;
                    delete this[n]
                } catch (t) {}
            })
        }
    });
    i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e)
                return o = 1 !== e || !i.isXMLDoc(n),
                o && (t = i.propFix[t] || t,
                u = i.propHooks[t]),
                void 0 !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get"in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : ef.test(n.nodeName) || sf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    r.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    r.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    gt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, e = 0, c = this.length, l = "string" == typeof n && n;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
            if (l)
                for (o = (n || "").match(h) || []; c > e; e++)
                    if (t = this[e],
                    r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(gt, " ") : " ")) {
                        for (s = 0; u = o[s++]; )
                            r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        f = i.trim(r);
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, e = 0, c = this.length, l = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
            if (l)
                for (o = (n || "").match(h) || []; c > e; e++)
                    if (t = this[e],
                    r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(gt, " ") : "")) {
                        for (s = 0; u = o[s++]; )
                            while (r.indexOf(" " + u + " ") >= 0)
                                r = r.replace(" " + u + " ", " ");
                        f = n ? i.trim(r) : "";
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }
            : function() {
                if ("string" === r)
                    for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    (r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className),
                    this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(gt, " ").indexOf(i) >= 0)
                    return !0;
            return !1
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var pi = i.now()
      , wi = /\?/
      , so = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
        if (n.JSON && n.JSON.parse)
            return n.JSON.parse(t + "");
        var f, r = null, u = i.trim(t + "");
        return u && !i.trim(u.replace(so, function(n, t, i, u) {
            return f && t && (r = 0),
            0 === r ? n : (f = i || t,
            r += !u - !i,
            "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    }
    ;
    i.parseXML = function(t) {
        var r, u;
        if (!t || "string" != typeof t)
            return null;
        try {
            n.DOMParser ? (u = new DOMParser,
            r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
            r.async = "false",
            r.loadXML(t))
        } catch (f) {
            r = void 0
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t),
        r
    }
    ;
    var nt, y, ho = /#.*$/, hf = /([?&])_=[^&]*/, co = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, lo = /^(?:GET|HEAD)$/, ao = /^\/\//, cf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lf = {}, bi = {}, af = "*/".concat("*");
    try {
        y = location.href
    } catch (iy) {
        y = u.createElement("a");
        y.href = "";
        y = y.href
    }
    nt = cf.exec(y.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: y,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
            global: !0,
            processData: !0,
            "async": !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": af,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
        },
        ajaxPrefilter: vf(lf),
        ajaxTransport: vf(bi),
        ajax: function(n, t) {
            function w(n, t, s, h) {
                var v, it, nt, y, w, c = t;
                2 !== e && (e = 2,
                k && clearTimeout(k),
                a = void 0,
                b = h || "",
                u.readyState = n > 0 ? 4 : 0,
                v = n >= 200 && 300 > n || 304 === n,
                s && (y = vo(r, u, s)),
                y = yo(r, y, u, v),
                v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"),
                w && (i.lastModified[f] = w),
                w = u.getResponseHeader("etag"),
                w && (i.etag[f] = w)),
                204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = y.state,
                it = y.data,
                nt = y.error,
                v = !nt)) : (nt = c,
                (n || !c) && (c = "error",
                0 > n && (n = 0))),
                u.status = n,
                u.statusText = (t || c) + "",
                v ? g.resolveWith(o, [it, c, u]) : g.rejectWith(o, [u, c, nt]),
                u.statusCode(p),
                p = void 0,
                l && d.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : nt]),
                tt.fireWith(o, [u, c]),
                l && (d.trigger("ajaxComplete", [u, r]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (t = n,
            n = void 0);
            t = t || {};
            var s, c, f, b, k, l, a, v, r = i.ajaxSetup({}, t), o = r.context || r, d = r.context && (o.nodeType || o.jquery) ? i(o) : i.event, g = i.Deferred(), tt = i.Callbacks("once memory"), p = r.statusCode || {}, it = {}, rt = {}, e = 0, ut = "canceled", u = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (2 === e) {
                        if (!v)
                            for (v = {}; t = co.exec(b); )
                                v[t[1].toLowerCase()] = t[2];
                        t = v[n.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === e ? b : null
                },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return e || (n = rt[i] = rt[i] || n,
                    it[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return e || (r.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (2 > e)
                            for (t in n)
                                p[t] = [p[t], n[t]];
                        else
                            u.always(n[u.status]);
                    return this
                },
                abort: function(n) {
                    var t = n || ut;
                    return a && a.abort(t),
                    w(0, t),
                    this
                }
            };
            if (g.promise(u).complete = tt.add,
            u.success = u.done,
            u.error = u.fail,
            r.url = ((n || r.url || y) + "").replace(ho, "").replace(ao, nt[1] + "//"),
            r.type = t.method || t.type || r.method || r.type,
            r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""],
            null == r.crossDomain && (s = cf.exec(r.url.toLowerCase()),
            r.crossDomain = !(!s || s[1] === nt[1] && s[2] === nt[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (nt[3] || ("http:" === nt[1] ? "80" : "443")))),
            r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)),
            yf(lf, r, t, u),
            2 === e)
                return u;
            l = i.event && r.global;
            l && 0 == i.active++ && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !lo.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (wi.test(f) ? "&" : "?") + r.data,
            delete r.data),
            r.cache === !1 && (r.url = hf.test(f) ? f.replace(hf, "$1_=" + pi++) : f + (wi.test(f) ? "&" : "?") + "_=" + pi++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]),
            i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + af + "; q=0.01" : "") : r.accepts["*"]);
            for (c in r.headers)
                u.setRequestHeader(c, r.headers[c]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e))
                return u.abort();
            ut = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            })
                u[c](r[c]);
            if (a = yf(bi, r, t, u)) {
                u.readyState = 1;
                l && d.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (k = setTimeout(function() {
                    u.abort("timeout")
                }, r.timeout));
                try {
                    e = 1;
                    a.send(it, w)
                } catch (ft) {
                    if (!(2 > e))
                        throw ft;
                    w(-1, ft)
                }
            } else
                w(-1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u,
            u = r,
            r = void 0),
            i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            "async": !1,
            global: !1,
            throws: !0
        })
    }
    ;
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType; )
                        n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return this.each(i.isFunction(n) ? function(t) {
                i(this).wrapInner(n.call(this, t))
            }
            : function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            }
            )
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && "none" === (n.style && n.style.display || i.css(n, "display"))
    }
    ;
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    ;
    var po = /%20/g
      , wo = /\[\]$/
      , pf = /\r?\n/g
      , bo = /^(?:submit|button|image|reset|file)$/i
      , ko = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [], f = function(n, t) {
            t = i.isFunction(t) ? t() : null == t ? "" : t;
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                f(this.name, this.value)
            });
        else
            for (r in n)
                di(r, n[r], t, f);
        return u.join("&").replace(po, "+")
    }
    ;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ko.test(this.nodeName) && !bo.test(n) && (this.checked || !oi.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(pf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(pf, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && wf() || ns()
    }
    : wf;
    var go = 0
      , ni = {}
      , ht = i.ajaxSettings.xhr();
    return n.attachEvent && n.attachEvent("onunload", function() {
        for (var n in ni)
            ni[n](void 0, !0)
    }),
    r.cors = !!ht && "withCredentials"in ht,
    ht = r.ajax = !!ht,
    ht && i.ajaxTransport(function(n) {
        if (!n.crossDomain || r.cors) {
            var t;
            return {
                send: function(r, u) {
                    var e, f = n.xhr(), o = ++go;
                    if (f.open(n.type, n.url, n.async, n.username, n.password),
                    n.xhrFields)
                        for (e in n.xhrFields)
                            f[e] = n.xhrFields[e];
                    n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
                    n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (e in r)
                        void 0 !== r[e] && f.setRequestHeader(e, r[e] + "");
                    f.send(n.hasContent && n.data || null);
                    t = function(r, e) {
                        var s, c, h;
                        if (t && (e || 4 === f.readyState))
                            if (delete ni[o],
                            t = void 0,
                            f.onreadystatechange = i.noop,
                            e)
                                4 !== f.readyState && f.abort();
                            else {
                                h = {};
                                s = f.status;
                                "string" == typeof f.responseText && (h.text = f.responseText);
                                try {
                                    c = f.statusText
                                } catch (l) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = h.text ? 200 : 404
                            }
                        h && u(s, c, h, f.getAllResponseHeaders())
                    }
                    ;
                    n.async ? 4 === f.readyState ? setTimeout(t) : f.onreadystatechange = ni[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET",
        n.global = !1)
    }),
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var t, r = u.head || i("head")[0] || u.documentElement;
            return {
                send: function(i, f) {
                    t = u.createElement("script");
                    t.async = !0;
                    n.scriptCharset && (t.charset = n.scriptCharset);
                    t.src = n.url;
                    t.onload = t.onreadystatechange = function(n, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        i || f(200, "success"))
                    }
                    ;
                    r.insertBefore(t, r.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    }),
    gi = [],
    ti = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = gi.pop() || i.expando + "_" + pi++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (wi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f),
            t.converters["script json"] = function() {
                return e || i.error(f + " was not called"),
                e[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = n[f],
            n[f] = function() {
                e = arguments
            }
            ,
            u.always(function() {
                n[f] = o;
                t[f] && (t.jsonpCallback = r.jsonpCallback,
                gi.push(f));
                e && i.isFunction(o) && o(e[0]);
                e = o = void 0
            }),
            "script")
    }),
    i.parseHTML = function(n, t, r) {
        if (!n || "string" != typeof n)
            return null;
        "boolean" == typeof t && (r = t,
        t = !1);
        t = t || u;
        var f = er.exec(n)
          , e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e),
        e && e.length && i(e).remove(),
        i.merge([], f.childNodes))
    }
    ,
    nr = i.fn.load,
    i.fn.load = function(n, t, r) {
        if ("string" != typeof n && nr)
            return nr.apply(this, arguments);
        var u, o, s, f = this, e = n.indexOf(" ");
        return e >= 0 && (u = i.trim(n.slice(e, n.length)),
        n = n.slice(0, e)),
        i.isFunction(t) ? (r = t,
        t = void 0) : t && "object" == typeof t && (s = "POST"),
        f.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: t
        }).done(function(n) {
            o = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r && function(n, t) {
            f.each(r, o || [n.responseText, t, n])
        }
        ),
        this
    }
    ,
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ,
    tr = n.document.documentElement,
    i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && i.inArray("auto", [s, c]) > -1;
            v ? (e = a.position(),
            h = e.top,
            o = e.left) : (h = parseFloat(s) || 0,
            o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using"in t ? t.using.call(n, f) : a.css(f)
        }
    },
    i.fn.extend({
        offset: function(n) {
            if (arguments.length)
                return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
            var t, f, u = {
                top: 0,
                left: 0
            }, r = this[0], e = r && r.ownerDocument;
            if (e)
                return t = e.documentElement,
                i.contains(t, r) ? (typeof r.getBoundingClientRect !== o && (u = r.getBoundingClientRect()),
                f = bf(e),
                {
                    top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : u
        },
        position: function() {
            if (this[0]) {
                var n, r, t = {
                    top: 0,
                    left: 0
                }, u = this[0];
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(),
                r = this.offset(),
                i.nodeName(n[0], "html") || (t = n.offset()),
                t.top += i.css(n[0], "borderTopWidth", !0),
                t.left += i.css(n[0], "borderLeftWidth", !0)),
                {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || tr; n && !i.nodeName(n, "html") && "static" === i.css(n, "position"); )
                    n = n.offsetParent;
                return n || tr
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = /Y/.test(t);
        i.fn[n] = function(u) {
            return b(this, function(n, u, f) {
                var e = bf(n);
                return void 0 === f ? e ? t in e ? e[t] : e.document.documentElement[u] : n[u] : void (e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f)
            }, n, u, arguments.length, null)
        }
    }),
    i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = au(r.pixelPosition, function(n, r) {
            if (r)
                return (r = d(n, t),
                pt.test(r) ? i(n).position()[t] + "px" : r)
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || "boolean" != typeof u)
                  , o = r || (u === !0 || f === !0 ? "margin" : "border");
                return b(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement,
                    Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : void 0, e, null)
            }
        })
    }),
    i.fn.size = function() {
        return this.length
    }
    ,
    i.fn.andSelf = i.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }),
    kf = n.jQuery,
    df = n.$,
    i.noConflict = function(t) {
        return n.$ === i && (n.$ = df),
        t && n.jQuery === i && (n.jQuery = kf),
        i
    }
    ,
    typeof t === o && (n.jQuery = n.$ = i),
    i
});
!function(n) {
    var t = {}
      , r = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        autoHover: !1,
        autoDelay: 0,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {},
        onSliderResize: function() {}
    };
    n.fn.bxSlider = function(u) {
        var f, e;
        if (0 == this.length)
            return this;
        if (this.length > 1)
            return this.each(function() {
                n(this).bxSlider(u)
            }),
            this;
        f = {};
        e = this;
        t.el = this;
        var w = n(window).width()
          , b = n(window).height()
          , k = function() {
            f.settings = n.extend({}, r, u);
            f.settings.slideWidth = parseInt(f.settings.slideWidth);
            f.children = e.children(f.settings.slideSelector);
            f.children.length < f.settings.minSlides && (f.settings.minSlides = f.children.length);
            f.children.length < f.settings.maxSlides && (f.settings.maxSlides = f.children.length);
            f.settings.randomStart && (f.settings.startSlide = Math.floor(Math.random() * f.children.length));
            f.active = {
                index: f.settings.startSlide
            };
            f.carousel = f.settings.minSlides > 1 || f.settings.maxSlides > 1;
            f.carousel && (f.settings.preloadImages = "all");
            f.minThreshold = f.settings.minSlides * f.settings.slideWidth + (f.settings.minSlides - 1) * f.settings.slideMargin;
            f.maxThreshold = f.settings.maxSlides * f.settings.slideWidth + (f.settings.maxSlides - 1) * f.settings.slideMargin;
            f.working = !1;
            f.controls = {};
            f.interval = null;
            f.animProp = "vertical" == f.settings.mode ? "top" : "left";
            f.usingCSS = f.settings.useCSS && "fade" != f.settings.mode && function() {
                var i = document.createElement("div")
                  , n = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                for (var t in n)
                    if (void 0 !== i.style[n[t]])
                        return f.cssPrefix = n[t].replace("Perspective", "").toLowerCase(),
                        f.animProp = "-" + f.cssPrefix + "-transform",
                        !0;
                return !1
            }();
            "vertical" == f.settings.mode && (f.settings.maxSlides = f.settings.minSlides);
            e.data("origStyle", e.attr("style"));
            e.children(f.settings.slideSelector).each(function() {
                n(this).data("origStyle", n(this).attr("style"))
            });
            ft()
        }
          , ft = function() {
            e.wrap('<div class="bx-wrapper"><div class="bx-viewport"><\/div><\/div>');
            f.viewport = e.parent();
            f.loader = n('<div class="bx-loading" />');
            f.viewport.prepend(f.loader);
            e.css({
                width: "horizontal" == f.settings.mode ? 100 * f.children.length + 215 + "%" : "auto",
                position: "relative"
            });
            f.usingCSS && f.settings.easing ? e.css("-" + f.cssPrefix + "-transition-timing-function", f.settings.easing) : f.settings.easing || (f.settings.easing = "swing");
            h();
            f.viewport.css({
                width: "100%",
                overflow: "hidden",
                position: "relative"
            });
            f.viewport.parent().css({
                maxWidth: st()
            });
            f.settings.pager || f.viewport.parent().css({
                margin: "0 auto 0px"
            });
            f.children.css({
                float: "horizontal" == f.settings.mode ? "left" : "none",
                listStyle: "none",
                position: "relative"
            });
            f.children.css("width", d());
            "horizontal" == f.settings.mode && f.settings.slideMargin > 0 && f.children.css("marginRight", f.settings.slideMargin);
            "vertical" == f.settings.mode && f.settings.slideMargin > 0 && f.children.css("marginBottom", f.settings.slideMargin);
            "fade" == f.settings.mode && (f.children.css({
                position: "absolute",
                zIndex: 0,
                display: "none"
            }),
            f.children.eq(f.settings.startSlide).css({
                zIndex: f.settings.slideZIndex,
                display: "block"
            }));
            f.controls.el = n('<div class="bx-controls" />');
            f.settings.captions && at();
            f.active.last = f.settings.startSlide == s() - 1;
            f.settings.video && e.fitVids();
            var t = f.children.eq(f.settings.startSlide);
            "all" == f.settings.preloadImages && (t = f.children);
            f.settings.ticker ? f.settings.pager = !1 : (f.settings.pager && ht(),
            f.settings.controls && ct(),
            f.settings.auto && f.settings.autoControls && lt(),
            (f.settings.controls || f.settings.autoControls || f.settings.pager) && f.viewport.after(f.controls.el));
            et(t, ot)
        }
          , et = function(t, i) {
            var r = t.find("img, iframe").length, u;
            if (0 == r)
                return i(),
                void 0;
            u = 0;
            t.find("img, iframe").each(function() {
                n(this).one("load", function() {
                    ++u == r && i()
                }).each(function() {
                    this.complete && n(this).load()
                })
            })
        }
          , ot = function() {
            if (f.settings.infiniteLoop && "fade" != f.settings.mode && !f.settings.ticker) {
                var t = "vertical" == f.settings.mode ? f.settings.minSlides : f.settings.maxSlides
                  , i = f.children.slice(0, t).clone().addClass("bx-clone")
                  , r = f.children.slice(-t).clone().addClass("bx-clone");
                e.append(i).prepend(r)
            }
            f.loader.remove();
            g();
            "vertical" == f.settings.mode && (f.settings.adaptiveHeight = !0);
            f.viewport.height(l());
            e.redrawSlider();
            f.settings.onSliderLoad(f.active.index);
            f.initialized = !0;
            f.settings.responsive && n(window).bind("resize", ut);
            f.settings.auto && f.settings.autoStart && kt();
            f.settings.ticker && dt();
            f.settings.pager && v(f.settings.startSlide);
            f.settings.controls && tt();
            f.settings.touchEnabled && !f.settings.ticker && gt()
        }
          , l = function() {
            var r = 0, t = n(), u;
            if ("vertical" == f.settings.mode || f.settings.adaptiveHeight)
                if (f.carousel)
                    for (u = 1 == f.settings.moveSlides ? f.active.index : f.active.index * c(),
                    t = f.children.eq(u),
                    i = 1; i <= f.settings.maxSlides - 1; i++)
                        t = u + i >= f.children.length ? t.add(f.children.eq(i - 1)) : t.add(f.children.eq(u + i));
                else
                    t = f.children.eq(f.active.index);
            else
                t = f.children;
            return "vertical" == f.settings.mode ? (t.each(function() {
                r += n(this).outerHeight()
            }),
            f.settings.slideMargin > 0 && (r += f.settings.slideMargin * (f.settings.minSlides - 1))) : r = Math.max.apply(Math, t.map(function() {
                return n(this).outerHeight(!1)
            }).get()),
            r
        }
          , st = function() {
            var n = "100%";
            return f.settings.slideWidth > 0 && (n = "horizontal" == f.settings.mode ? f.settings.maxSlides * f.settings.slideWidth + (f.settings.maxSlides - 1) * f.settings.slideMargin : f.settings.slideWidth),
            n
        }
          , d = function() {
            var t = f.settings.slideWidth
              , n = f.viewport.width();
            return 0 == f.settings.slideWidth || f.settings.slideWidth > n && !f.carousel || "vertical" == f.settings.mode ? t = n : f.settings.maxSlides > 1 && "horizontal" == f.settings.mode && (n > f.maxThreshold || n < f.minThreshold && (t = (n - f.settings.slideMargin * (f.settings.minSlides - 1)) / f.settings.minSlides)),
            t
        }
          , h = function() {
            var n = 1, t;
            return "horizontal" == f.settings.mode && f.settings.slideWidth > 0 ? f.viewport.width() < f.minThreshold ? n = f.settings.minSlides : f.viewport.width() > f.maxThreshold ? n = f.settings.maxSlides : (t = f.children.first().width(),
            n = Math.floor(f.viewport.width() / t)) : "vertical" == f.settings.mode && (n = f.settings.minSlides),
            n
        }
          , s = function() {
            var n = 0, t, i;
            if (f.settings.moveSlides > 0)
                if (f.settings.infiniteLoop)
                    n = f.children.length / c();
                else
                    for (t = 0,
                    i = 0; t < f.children.length; )
                        ++n,
                        t = i + h(),
                        i += f.settings.moveSlides <= h() ? f.settings.moveSlides : h();
            else
                n = Math.ceil(f.children.length / h());
            return n
        }
          , c = function() {
            return f.settings.moveSlides > 0 && f.settings.moveSlides <= h() ? f.settings.moveSlides : h()
        }
          , g = function() {
            var t, i, n;
            f.children.length > f.settings.maxSlides && f.active.last && !f.settings.infiniteLoop ? "horizontal" == f.settings.mode ? (t = f.children.last(),
            n = t.position(),
            o(-(n.left - (f.viewport.width() - t.width())), "reset", 0)) : "vertical" == f.settings.mode && (i = f.children.length - f.settings.minSlides,
            n = f.children.eq(i).position(),
            o(-n.top, "reset", 0)) : (n = f.children.eq(f.active.index * c()).position(),
            f.active.index == s() - 1 && (f.active.last = !0),
            void 0 != n && ("horizontal" == f.settings.mode ? o(-n.left, "reset", 0) : "vertical" == f.settings.mode && o(-n.top, "reset", 0)))
        }
          , o = function o(n, t, i, r) {
            var u, s;
            f.usingCSS ? (u = "vertical" == f.settings.mode ? "translate3d(0, " + n + "px, 0)" : "translate3d(" + n + "px, 0, 0)",
            e.css("-" + f.cssPrefix + "-transition-duration", i / 1e3 + "s"),
            "slide" == t ? (e.css(f.animProp, u),
            e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                y()
            })) : "reset" == t ? e.css(f.animProp, u) : "ticker" == t && (e.css("-" + f.cssPrefix + "-transition-timing-function", "linear"),
            e.css(f.animProp, u),
            e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                o(r.resetValue, "reset", 0);
                a()
            }))) : (s = {},
            s[f.animProp] = n,
            "slide" == t ? e.animate(s, i, f.settings.easing, function() {
                y()
            }) : "reset" == t ? e.css(f.animProp, n) : "ticker" == t && e.animate(s, speed, "linear", function() {
                o(r.resetValue, "reset", 0);
                a()
            }))
        }
          , nt = function() {
            for (var i, r = "", u = s(), t = 0; u > t; t++)
                i = "",
                f.settings.buildPager && n.isFunction(f.settings.buildPager) ? (i = f.settings.buildPager(t),
                f.pagerEl.addClass("bx-custom-pager")) : (i = t + 1,
                f.pagerEl.addClass("bx-default-pager")),
                r += '<div class="bx-pager-item"><a href="" data-slide-index="' + t + '" class="bx-pager-link">' + i + "<\/a><\/div>";
            f.pagerEl.html(r)
        }
          , ht = function() {
            f.settings.pagerCustom ? f.pagerEl = n(f.settings.pagerCustom) : (f.pagerEl = n('<div class="bx-pager" />'),
            f.settings.pagerSelector ? n(f.settings.pagerSelector).html(f.pagerEl) : f.controls.el.addClass("bx-has-pager").append(f.pagerEl),
            nt());
            f.pagerEl.on("click", "a", bt)
        }
          , ct = function() {
            f.controls.next = n('<a class="bx-next" href="">' + f.settings.nextText + "<\/a>");
            f.controls.prev = n('<a class="bx-prev" href="">' + f.settings.prevText + "<\/a>");
            f.controls.next.bind("click", vt);
            f.controls.prev.bind("click", yt);
            f.settings.nextSelector && n(f.settings.nextSelector).append(f.controls.next);
            f.settings.prevSelector && n(f.settings.prevSelector).append(f.controls.prev);
            f.settings.nextSelector || f.settings.prevSelector || (f.controls.directionEl = n('<div class="bx-controls-direction" />'),
            f.controls.directionEl.append(f.controls.prev).append(f.controls.next),
            f.controls.el.addClass("bx-has-controls-direction").append(f.controls.directionEl))
        }
          , lt = function() {
            f.controls.start = n('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + f.settings.startText + "<\/a><\/div>");
            f.controls.stop = n('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + f.settings.stopText + "<\/a><\/div>");
            f.controls.autoEl = n('<div class="bx-controls-auto" />');
            f.controls.autoEl.on("click", ".bx-start", pt);
            f.controls.autoEl.on("click", ".bx-stop", wt);
            f.settings.autoControlsCombine ? f.controls.autoEl.append(f.controls.start) : f.controls.autoEl.append(f.controls.start).append(f.controls.stop);
            f.settings.autoControlsSelector ? n(f.settings.autoControlsSelector).html(f.controls.autoEl) : f.controls.el.addClass("bx-has-controls-auto").append(f.controls.autoEl);
            p(f.settings.autoStart ? "stop" : "start")
        }
          , at = function() {
            f.children.each(function() {
                var t = n(this).find("img:first").attr("title");
                void 0 != t && ("" + t).length && n(this).append('<div class="bx-caption"><span>' + t + "<\/span><\/div>")
            })
        }
          , vt = function(n) {
            f.settings.auto && e.stopAuto();
            e.goToNextSlide();
            n.preventDefault()
        }
          , yt = function(n) {
            f.settings.auto && e.stopAuto();
            e.goToPrevSlide();
            n.preventDefault()
        }
          , pt = function(n) {
            e.startAuto();
            n.preventDefault()
        }
          , wt = function(n) {
            e.stopAuto();
            n.preventDefault()
        }
          , bt = function(t) {
            f.settings.auto && e.stopAuto();
            var r = n(t.currentTarget)
              , i = parseInt(r.attr("data-slide-index"));
            i != f.active.index && e.goToSlide(i);
            t.preventDefault()
        }
          , v = function(t) {
            var i = f.children.length;
            return "short" == f.settings.pagerType ? (f.settings.maxSlides > 1 && (i = Math.ceil(f.children.length / f.settings.maxSlides)),
            f.pagerEl.html(t + 1 + f.settings.pagerShortSeparator + i),
            void 0) : (f.pagerEl.find("a").removeClass("active"),
            f.pagerEl.each(function(i, r) {
                n(r).find("a").eq(t).addClass("active")
            }),
            void 0)
        }
          , y = function() {
            if (f.settings.infiniteLoop) {
                var n = "";
                0 == f.active.index ? n = f.children.eq(0).position() : f.active.index == s() - 1 && f.carousel ? n = f.children.eq((s() - 1) * c()).position() : f.active.index == f.children.length - 1 && (n = f.children.eq(f.children.length - 1).position());
                n && ("horizontal" == f.settings.mode ? o(-n.left, "reset", 0) : "vertical" == f.settings.mode && o(-n.top, "reset", 0))
            }
            f.working = !1;
            f.settings.onSlideAfter(f.children.eq(f.active.index), f.oldIndex, f.active.index)
        }
          , p = function(n) {
            f.settings.autoControlsCombine ? f.controls.autoEl.html(f.controls[n]) : (f.controls.autoEl.find("a").removeClass("active"),
            f.controls.autoEl.find("a:not(.bx-" + n + ")").addClass("active"))
        }
          , tt = function() {
            1 == s() ? (f.controls.prev.addClass("disabled"),
            f.controls.next.addClass("disabled")) : !f.settings.infiniteLoop && f.settings.hideControlOnEnd && (0 == f.active.index ? (f.controls.prev.addClass("disabled"),
            f.controls.next.removeClass("disabled")) : f.active.index == s() - 1 ? (f.controls.next.addClass("disabled"),
            f.controls.prev.removeClass("disabled")) : (f.controls.prev.removeClass("disabled"),
            f.controls.next.removeClass("disabled")))
        }
          , kt = function() {
            f.settings.autoDelay > 0 ? setTimeout(e.startAuto, f.settings.autoDelay) : e.startAuto();
            f.settings.autoHover && e.hover(function() {
                f.interval && (e.stopAuto(!0),
                f.autoPaused = !0)
            }, function() {
                f.autoPaused && (e.startAuto(!0),
                f.autoPaused = null)
            })
        }
          , dt = function() {
            var i = 0, t;
            "next" == f.settings.autoDirection ? e.append(f.children.clone().addClass("bx-clone")) : (e.prepend(f.children.clone().addClass("bx-clone")),
            t = f.children.first().position(),
            i = "horizontal" == f.settings.mode ? -t.left : -t.top);
            o(i, "reset", 0);
            f.settings.pager = !1;
            f.settings.controls = !1;
            f.settings.autoControls = !1;
            f.settings.tickerHover && !f.usingCSS && f.viewport.hover(function() {
                e.stop()
            }, function() {
                var t = 0;
                f.children.each(function() {
                    t += "horizontal" == f.settings.mode ? n(this).outerWidth(!0) : n(this).outerHeight(!0)
                });
                var i = f.settings.speed / t
                  , r = "horizontal" == f.settings.mode ? "left" : "top"
                  , u = i * (t - Math.abs(parseInt(e.css(r))));
                a(u)
            });
            a()
        }
          , a = function(n) {
            var t, i;
            speed = n ? n : f.settings.speed;
            t = {
                left: 0,
                top: 0
            };
            i = {
                left: 0,
                top: 0
            };
            "next" == f.settings.autoDirection ? t = e.find(".bx-clone").first().position() : i = f.children.first().position();
            var r = "horizontal" == f.settings.mode ? -t.left : -t.top
              , u = "horizontal" == f.settings.mode ? -i.left : -i.top
              , s = {
                resetValue: u
            };
            o(r, "ticker", speed, s)
        }
          , gt = function() {
            f.touch = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            f.viewport.bind("touchstart", ni)
        }
          , ni = function(n) {
            if (f.working)
                n.preventDefault();
            else {
                f.touch.originalPos = e.position();
                var t = n.originalEvent;
                f.touch.start.x = t.changedTouches[0].pageX;
                f.touch.start.y = t.changedTouches[0].pageY;
                f.viewport.bind("touchmove", it);
                f.viewport.bind("touchend", rt)
            }
        }
          , it = function(n) {
            var t = n.originalEvent, u = Math.abs(t.changedTouches[0].pageX - f.touch.start.x), e = Math.abs(t.changedTouches[0].pageY - f.touch.start.y), i, r;
            (3 * u > e && f.settings.preventDefaultSwipeX ? n.preventDefault() : 3 * e > u && f.settings.preventDefaultSwipeY && n.preventDefault(),
            "fade" != f.settings.mode && f.settings.oneToOneTouch) && (i = 0,
            "horizontal" == f.settings.mode ? (r = t.changedTouches[0].pageX - f.touch.start.x,
            i = f.touch.originalPos.left + r) : (r = t.changedTouches[0].pageY - f.touch.start.y,
            i = f.touch.originalPos.top + r),
            o(i, "reset", 0))
        }
          , rt = function rt(n) {
            var r, i, t;
            f.viewport.unbind("touchmove", it);
            r = n.originalEvent;
            i = 0;
            (f.touch.end.x = r.changedTouches[0].pageX,
            f.touch.end.y = r.changedTouches[0].pageY,
            "fade" == f.settings.mode) ? (t = Math.abs(f.touch.start.x - f.touch.end.x),
            t >= f.settings.swipeThreshold && (f.touch.start.x > f.touch.end.x ? e.goToNextSlide() : e.goToPrevSlide(),
            e.stopAuto())) : (t = 0,
            "horizontal" == f.settings.mode ? (t = f.touch.end.x - f.touch.start.x,
            i = f.touch.originalPos.left) : (t = f.touch.end.y - f.touch.start.y,
            i = f.touch.originalPos.top),
            !f.settings.infiniteLoop && (0 == f.active.index && t > 0 || f.active.last && 0 > t) ? o(i, "reset", 200) : Math.abs(t) >= f.settings.swipeThreshold ? (0 > t ? e.goToNextSlide() : e.goToPrevSlide(),
            e.stopAuto()) : o(i, "reset", 200));
            f.viewport.unbind("touchend", rt)
        }
          , ut = function() {
            var t = n(window).width()
              , i = n(window).height();
            (w != t || b != i) && (w = t,
            b = i,
            e.redrawSlider(),
            f.settings.onSliderResize.call(e, f.active.index))
        };
        return e.goToSlide = function(t, i) {
            var h, r, a, p, u, w, b;
            f.working || f.active.index == t || ((f.working = !0,
            f.oldIndex = f.active.index,
            f.active.index = 0 > t ? s() - 1 : t >= s() ? 0 : t,
            f.settings.onSlideBefore(f.children.eq(f.active.index), f.oldIndex, f.active.index),
            "next" == i ? f.settings.onSlideNext(f.children.eq(f.active.index), f.oldIndex, f.active.index) : "prev" == i && f.settings.onSlidePrev(f.children.eq(f.active.index), f.oldIndex, f.active.index),
            f.active.last = f.active.index >= s() - 1,
            f.settings.pager && v(f.active.index),
            f.settings.controls && tt(),
            "fade" == f.settings.mode) ? (f.settings.adaptiveHeight && f.viewport.height() != l() && f.viewport.animate({
                height: l()
            }, f.settings.adaptiveHeightSpeed),
            f.children.filter(":visible").fadeOut(f.settings.speed).css({
                zIndex: 0
            }),
            f.children.eq(f.active.index).css("zIndex", f.settings.slideZIndex + 1).fadeIn(f.settings.speed, function() {
                n(this).css("zIndex", f.settings.slideZIndex);
                y()
            })) : (f.settings.adaptiveHeight && f.viewport.height() != l() && f.viewport.animate({
                height: l()
            }, f.settings.adaptiveHeightSpeed),
            h = 0,
            r = {
                left: 0,
                top: 0
            },
            !f.settings.infiniteLoop && f.carousel && f.active.last ? "horizontal" == f.settings.mode ? (u = f.children.eq(f.children.length - 1),
            r = u.position(),
            h = f.viewport.width() - u.outerWidth()) : (a = f.children.length - f.settings.minSlides,
            r = f.children.eq(a).position()) : f.carousel && f.active.last && "prev" == i ? (p = 1 == f.settings.moveSlides ? f.settings.maxSlides - c() : (s() - 1) * c() - (f.children.length - f.settings.maxSlides),
            u = e.children(".bx-clone").eq(p),
            r = u.position()) : "next" == i && 0 == f.active.index ? (r = e.find("> .bx-clone").eq(f.settings.maxSlides).position(),
            f.active.last = !1) : t >= 0 && (w = t * c(),
            r = f.children.eq(w).position()),
            "undefined" != typeof r && (b = "horizontal" == f.settings.mode ? -(r.left - h) : -r.top,
            o(b, "slide", f.settings.speed))))
        }
        ,
        e.goToNextSlide = function() {
            if (f.settings.infiniteLoop || !f.active.last) {
                var n = parseInt(f.active.index) + 1;
                e.goToSlide(n, "next")
            }
        }
        ,
        e.goToPrevSlide = function() {
            if (f.settings.infiniteLoop || 0 != f.active.index) {
                var n = parseInt(f.active.index) - 1;
                e.goToSlide(n, "prev")
            }
        }
        ,
        e.startAuto = function(n) {
            f.interval || (f.interval = setInterval(function() {
                "next" == f.settings.autoDirection ? e.goToNextSlide() : e.goToPrevSlide()
            }, f.settings.pause),
            f.settings.autoControls && 1 != n && p("stop"))
        }
        ,
        e.stopAuto = function(n) {
            f.interval && (clearInterval(f.interval),
            f.interval = null,
            f.settings.autoControls && 1 != n && p("start"))
        }
        ,
        e.getCurrentSlide = function() {
            return f.active.index
        }
        ,
        e.getCurrentSlideElement = function() {
            return f.children.eq(f.active.index)
        }
        ,
        e.getSlideCount = function() {
            return f.children.length
        }
        ,
        e.redrawSlider = function() {
            f.children.add(e.find(".bx-clone")).outerWidth(d());
            f.viewport.css("height", l());
            f.settings.ticker || g();
            f.active.last && (f.active.index = s() - 1);
            f.active.index >= s() && (f.active.last = !0);
            f.settings.pager && !f.settings.pagerCustom && (nt(),
            v(f.active.index))
        }
        ,
        e.destroySlider = function() {
            f.initialized && (f.initialized = !1,
            n(".bx-clone", this).remove(),
            f.children.each(function() {
                void 0 != n(this).data("origStyle") ? n(this).attr("style", n(this).data("origStyle")) : n(this).removeAttr("style")
            }),
            void 0 != n(this).data("origStyle") ? this.attr("style", n(this).data("origStyle")) : n(this).removeAttr("style"),
            n(this).unwrap().unwrap(),
            f.controls.el && f.controls.el.remove(),
            f.controls.next && f.controls.next.remove(),
            f.controls.prev && f.controls.prev.remove(),
            f.pagerEl && f.settings.controls && f.pagerEl.remove(),
            n(".bx-caption", this).remove(),
            f.controls.autoEl && f.controls.autoEl.remove(),
            clearInterval(f.interval),
            f.settings.responsive && n(window).unbind("resize", ut))
        }
        ,
        e.reloadSlider = function(n) {
            void 0 != n && (u = n);
            e.destroySlider();
            k()
        }
        ,
        k(),
        this
    }
}(jQuery);
!function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    var e = -1, r = -1, i = function(n) {
        return parseFloat(n) || 0
    }, o = function(t) {
        var f = 1
          , e = n(t)
          , u = null
          , r = [];
        return e.each(function() {
            var t = n(this)
              , e = t.offset().top - i(t.css("margin-top"))
              , o = r.length > 0 ? r[r.length - 1] : null;
            null === o ? r.push(t) : Math.floor(Math.abs(u - e)) <= f ? r[r.length - 1] = o.add(t) : r.push(t);
            u = e
        }),
        r
    }, u = function(t) {
        var i = {
            byRow: !0,
            property: "height",
            target: null,
            remove: !1
        };
        return "object" == typeof t ? n.extend(i, t) : ("boolean" == typeof t ? i.byRow = t : "remove" === t && (i.remove = !0),
        i)
    }, t = n.fn.matchHeight = function(i) {
        var r = u(i), f;
        return r.remove ? (f = this,
        this.css(r.property, ""),
        n.each(t._groups, function(n, t) {
            t.elements = t.elements.not(f)
        }),
        this) : this.length <= 1 && !r.target ? this : (t._groups.push({
            elements: this,
            options: r
        }),
        t._apply(this, r),
        this)
    }
    , f;
    t.version = "master";
    t._groups = [];
    t._throttle = 80;
    t._maintainScroll = !1;
    t._beforeUpdate = null;
    t._afterUpdate = null;
    t._rows = o;
    t._parse = i;
    t._parseOptions = u;
    t._apply = function(r, f) {
        var e = u(f)
          , s = n(r)
          , c = [s]
          , l = n(window).scrollTop()
          , a = n("html").outerHeight(!0)
          , h = s.parents().filter(":hidden");
        return h.each(function() {
            var t = n(this);
            t.data("style-cache", t.attr("style"))
        }),
        h.css("display", "block"),
        e.byRow && !e.target && (s.each(function() {
            var i = n(this)
              , t = i.css("display");
            "inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block");
            i.data("style-cache", i.attr("style"));
            i.css({
                display: t,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }),
        c = o(s),
        s.each(function() {
            var t = n(this);
            t.attr("style", t.data("style-cache") || "")
        })),
        n.each(c, function(t, r) {
            var u = n(r)
              , f = 0;
            if (e.target)
                f = e.target.outerHeight(!1);
            else {
                if (e.byRow && u.length <= 1)
                    return void u.css(e.property, "");
                u.each(function() {
                    var t = n(this), i = t.css("display"), r;
                    "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                    r = {
                        display: i
                    };
                    r[e.property] = "";
                    t.css(r);
                    t.outerHeight(!1) > f && (f = t.outerHeight(!1));
                    t.css("display", "")
                })
            }
            u.each(function() {
                var t = n(this)
                  , r = 0;
                e.target && t.is(e.target) || ("border-box" !== t.css("box-sizing") && (r += i(t.css("border-top-width")) + i(t.css("border-bottom-width")),
                r += i(t.css("padding-top")) + i(t.css("padding-bottom"))),
                t.css(e.property, f - r + "px"))
            })
        }),
        h.each(function() {
            var t = n(this);
            t.attr("style", t.data("style-cache") || null)
        }),
        t._maintainScroll && n(window).scrollTop(l / a * n("html").outerHeight(!0)),
        this
    }
    ;
    t._applyDataApi = function() {
        var t = {};
        n("[data-match-height], [data-mh]").each(function() {
            var i = n(this)
              , r = i.attr("data-mh") || i.attr("data-match-height");
            t[r] = r in t ? t[r].add(i) : i
        });
        n.each(t, function() {
            this.matchHeight(!0)
        })
    }
    ;
    f = function(i) {
        t._beforeUpdate && t._beforeUpdate(i, t._groups);
        n.each(t._groups, function() {
            t._apply(this.elements, this.options)
        });
        t._afterUpdate && t._afterUpdate(i, t._groups)
    }
    ;
    t._update = function(i, u) {
        if (u && "resize" === u.type) {
            var o = n(window).width();
            if (o === e)
                return;
            e = o
        }
        i ? -1 === r && (r = setTimeout(function() {
            f(u);
            r = -1
        }, t._throttle)) : f(u)
    }
    ;
    n(t._applyDataApi);
    n(window).bind("load", function(n) {
        t._update(!1, n)
    });
    n(window).bind("resize orientationchange", function(n) {
        t._update(!0, n)
    })
});
/*! Sidr - v1.2.1 - 2013-11-06
 * https://github.com/artberri/sidr
 * Copyright (c) 2013 Alberto Varela; Licensed MIT */
(function(n) {
    var r = !1
      , u = !1
      , t = {
        isUrl: function(n) {
            var t = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
            return t.test(n) ? !0 : !1
        },
        loadContent: function(n, t) {
            n.html(t)
        },
        addPrefix: function(n) {
            var i = n.attr("id")
              , t = n.attr("class");
            "string" == typeof i && "" !== i && n.attr("id", i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1"));
            "string" == typeof t && "" !== t && "sidr-inner" !== t && n.attr("class", t.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1"));
            n.removeAttr("style")
        },
        execute: function(t, f, e) {
            "function" == typeof f ? (e = f,
            f = "sidr") : f || (f = "sidr");
            var h, c, a, o = n("#" + f), s = n(o.data("body")), v = n("html"), y = o.outerWidth(!0), l = o.data("speed"), w = o.data("side"), b = o.data("displace"), k = o.data("onOpen"), d = o.data("onClose"), p = "sidr" === f ? "sidr-open" : "sidr-open " + f + "-open";
            if ("open" !== t && ("toggle" !== t || o.is(":visible"))) {
                if (!o.is(":visible") || r)
                    return;
                r = !0;
                "left" === w ? (h = {
                    left: 0
                },
                c = {
                    left: "-" + y + "px"
                }) : (h = {
                    right: 0
                },
                c = {
                    right: "-" + y + "px"
                });
                s.is("body") && (a = v.scrollTop(),
                v.removeAttr("style").scrollTop(a));
                s.addClass("sidr-animating").animate(h, l).removeClass(p);
                o.animate(c, l, function() {
                    o.removeAttr("style").hide();
                    s.removeAttr("style");
                    n("html").removeAttr("style");
                    r = !1;
                    u = !1;
                    "function" == typeof e && e(f);
                    s.removeClass("sidr-animating")
                });
                d()
            } else {
                if (o.is(":visible") || r)
                    return;
                if (u !== !1)
                    return i.close(u, function() {
                        i.open(f)
                    }),
                    void 0;
                r = !0;
                "left" === w ? (h = {
                    left: y + "px"
                },
                c = {
                    left: "0px"
                }) : (h = {
                    right: y + "px"
                },
                c = {
                    right: "0px"
                });
                s.is("body") && (a = v.scrollTop(),
                v.css("overflow-x", "hidden").scrollTop(a));
                b ? s.addClass("sidr-animating").css({
                    width: s.width(),
                    position: "absolute"
                }).animate(h, l, function() {
                    n(this).addClass(p)
                }) : setTimeout(function() {
                    n(this).addClass(p)
                }, l);
                o.css("display", "block").animate(c, l, function() {
                    r = !1;
                    u = f;
                    "function" == typeof e && e(f);
                    s.removeClass("sidr-animating")
                });
                k()
            }
        }
    }
      , i = {
        open: function(n, i) {
            t.execute("open", n, i)
        },
        close: function(n, i) {
            t.execute("close", n, i)
        },
        toggle: function(n, i) {
            t.execute("toggle", n, i)
        },
        toogle: function(n, i) {
            t.execute("toggle", n, i)
        }
    };
    n.sidr = function(t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof t && "string" != typeof t && t ? (n.error("Method " + t + " does not exist on jQuery.sidr"),
        void 0) : i.toggle.apply(this, arguments)
    }
    ;
    n.fn.sidr = function(r) {
        var u = n.extend({
            name: "sidr",
            speed: 200,
            side: "left",
            source: null,
            renaming: !0,
            body: "body",
            displace: !0,
            onOpen: function() {},
            onClose: function() {}
        }, r), f = u.name, e = n("#" + f), h, o, c, s;
        return (0 === e.length && (e = n("<div />").attr("id", f).appendTo(n("body"))),
        e.addClass("sidr").addClass(u.side).data({
            speed: u.speed,
            side: u.side,
            body: u.body,
            displace: u.displace,
            onOpen: u.onOpen,
            onClose: u.onClose
        }),
        "function" == typeof u.source) ? (h = u.source(f),
        t.loadContent(e, h)) : "string" == typeof u.source && t.isUrl(u.source) ? n.get(u.source, function(n) {
            t.loadContent(e, n)
        }) : "string" == typeof u.source ? (o = "",
        c = u.source.split(","),
        (n.each(c, function(t, i) {
            o += '<div class="sidr-inner">' + n(i).html() + "<\/div>"
        }),
        u.renaming) && (s = n("<div />").html(o),
        s.find("*").each(function(i, r) {
            var u = n(r);
            t.addPrefix(u)
        }),
        o = s.html()),
        t.loadContent(e, o)) : null !== u.source && n.error("Invalid Sidr Source"),
        this.each(function() {
            var t = n(this)
              , r = t.data("sidr");
            r || (t.data("sidr", f),
            "ontouchstart"in document.documentElement ? (t.bind("touchstart", function(n) {
                n.originalEvent.touches[0];
                this.touched = n.timeStamp
            }),
            t.bind("touchend", function(n) {
                var t = Math.abs(n.timeStamp - this.touched);
                200 > t && (n.preventDefault(),
                i.toggle(f))
            })) : t.click(function(n) {
                n.preventDefault();
                i.toggle(f)
            }))
        })
    }
}
)(jQuery);
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(n, t, i, r) {
    var p = i("html")
      , e = i(n)
      , o = i(t)
      , u = i.fancybox = function() {
        u.open.apply(this, arguments)
    }
      , y = navigator.userAgent.match(/msie/i)
      , v = null
      , s = t.createTouch !== r
      , a = function(n) {
        return n && n.hasOwnProperty && n instanceof i
    }
      , c = function(n) {
        return n && "string" === i.type(n)
    }
      , l = function(n) {
        return c(n) && 0 < n.indexOf("%")
    }
      , f = function(n, t) {
        var i = parseInt(n, 10) || 0;
        return t && l(n) && (i *= u.getViewport()[t] / 100),
        Math.ceil(i)
    }
      , h = function(n, t) {
        return f(n, t) + "px"
    };
    i.extend(u, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"><\/div><\/div><\/div><\/div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (y ? ' allowtransparency="true"' : "") + "><\/iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.<\/p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><\/a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><\/span><\/a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><\/span><\/a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeChange: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(n, t) {
            if (n && (i.isPlainObject(t) || (t = {}),
            !1 !== u.close(!0)))
                return i.isArray(n) || (n = a(n) ? i(n).get() : [n]),
                i.each(n, function(f, e) {
                    var h = {}, s, y, l, o, v;
                    "object" === i.type(e) && (e.nodeType && (e = i(e)),
                    a(e) ? (h = {
                        href: e.data("fancybox-href") || e.attr("href"),
                        title: e.data("fancybox-title") || e.attr("title"),
                        isDom: !0,
                        element: e
                    },
                    i.metadata && i.extend(!0, h, e.metadata())) : h = e);
                    s = t.href || h.href || (c(e) ? e : null);
                    y = t.title !== r ? t.title : h.title || "";
                    o = (l = t.content || h.content) ? "html" : t.type || h.type;
                    !o && h.isDom && (o = e.data("fancybox-type"),
                    o || (o = (o = e.prop("class").match(/fancybox\.(\w+)/)) ? o[1] : null));
                    c(s) && (o || (u.isImage(s) ? o = "image" : u.isSWF(s) ? o = "swf" : "#" === s.charAt(0) ? o = "inline" : c(e) && (o = "html",
                    l = e)),
                    "ajax" === o && (v = s.split(/\s+/, 2),
                    s = v.shift(),
                    v = v.shift()));
                    l || ("inline" === o ? s ? l = i(c(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : h.isDom && (l = e) : "html" === o ? l = s : !o && !s && h.isDom && (o = "inline",
                    l = e));
                    i.extend(h, {
                        href: s,
                        type: o,
                        content: l,
                        title: y,
                        selector: v
                    });
                    n[f] = h
                }),
                u.opts = i.extend(!0, {}, u.defaults, t),
                t.keys !== r && (u.opts.keys = t.keys ? i.extend({}, u.defaults.keys, t.keys) : !1),
                u.group = n,
                u._start(u.opts.index)
        },
        cancel: function() {
            var n = u.coming;
            n && !1 !== u.trigger("onCancel") && (u.hideLoading(),
            u.ajaxLoad && u.ajaxLoad.abort(),
            u.ajaxLoad = null,
            u.imgPreload && (u.imgPreload.onload = u.imgPreload.onerror = null),
            n.wrap && n.wrap.stop(!0, !0).trigger("onReset").remove(),
            u.coming = null,
            u.current || u._afterZoomOut(n))
        },
        close: function(n) {
            u.cancel();
            !1 !== u.trigger("beforeClose") && (u.unbindEvents(),
            u.isActive && (!u.isOpen || !0 === n ? (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
            u._afterZoomOut()) : (u.isOpen = u.isOpened = !1,
            u.isClosing = !0,
            i(".fancybox-item, .fancybox-nav").remove(),
            u.wrap.stop(!0, !0).removeClass("fancybox-opened"),
            u.transitions[u.current.closeMethod]())))
        },
        play: function(n) {
            var t = function() {
                clearTimeout(u.player.timer)
            }
              , i = function() {
                t();
                u.current && u.player.isActive && (u.player.timer = setTimeout(u.next, u.current.playSpeed))
            }
              , r = function() {
                t();
                o.unbind(".player");
                u.player.isActive = !1;
                u.trigger("onPlayEnd")
            };
            !0 !== n && (u.player.isActive || !1 === n) ? r() : u.current && (u.current.loop || u.current.index < u.group.length - 1) && (u.player.isActive = !0,
            o.bind({
                "onCancel.player beforeClose.player": r,
                "onUpdate.player": i,
                "beforeLoad.player": t
            }),
            i(),
            u.trigger("onPlayStart"))
        },
        next: function(n) {
            var t = u.current;
            t && (c(n) || (n = t.direction.next),
            u.jumpto(t.index + 1, n, "next"))
        },
        prev: function(n) {
            var t = u.current;
            t && (c(n) || (n = t.direction.prev),
            u.jumpto(t.index - 1, n, "prev"))
        },
        jumpto: function(n, t, i) {
            var e = u.current;
            e && (n = f(n),
            u.direction = t || e.direction[n >= e.index ? "next" : "prev"],
            u.router = i || "jumpto",
            e.loop && (0 > n && (n = e.group.length + n % e.group.length),
            n %= e.group.length),
            e.group[n] !== r && (u.cancel(),
            u._start(n)))
        },
        reposition: function(n, t) {
            var f = u.current, e = f ? f.wrap : null, r;
            e && (r = u._getPosition(t),
            n && "scroll" === n.type ? (delete r.position,
            e.stop(!0, !0).animate(r, 200)) : (e.css(r),
            f.pos = i.extend({}, f.dim, r)))
        },
        update: function(n) {
            var t = n && n.type
              , i = !t || "orientationchange" === t;
            i && (clearTimeout(v),
            v = null);
            u.isOpen && !v && (v = setTimeout(function() {
                var r = u.current;
                r && !u.isClosing && (u.wrap.removeClass("fancybox-tmp"),
                (i || "load" === t || "resize" === t && r.autoResize) && u._setDimension(),
                "scroll" === t && r.canShrink || u.reposition(n),
                u.trigger("onUpdate"),
                v = null)
            }, i && !s ? 0 : 300))
        },
        toggle: function(n) {
            u.isOpen && (u.current.fitToView = "boolean" === i.type(n) ? n : !u.current.fitToView,
            s && (u.wrap.removeAttr("style").addClass("fancybox-tmp"),
            u.trigger("onUpdate")),
            u.update())
        },
        hideLoading: function() {
            o.unbind(".loading");
            i("#fancybox-loading").remove()
        },
        showLoading: function() {
            var t, n;
            u.hideLoading();
            t = i('<div id="fancybox-loading"><div><\/div><\/div>').click(u.cancel).appendTo("body");
            o.bind("keydown.loading", function(n) {
                27 === (n.which || n.keyCode) && (n.preventDefault(),
                u.cancel())
            });
            u.defaults.fixed || (n = u.getViewport(),
            t.css({
                position: "absolute",
                top: .5 * n.h + n.y,
                left: .5 * n.w + n.x
            }))
        },
        getViewport: function() {
            var i = u.current && u.current.locked || !1
              , t = {
                x: e.scrollLeft(),
                y: e.scrollTop()
            };
            return i ? (t.w = i[0].clientWidth,
            t.h = i[0].clientHeight) : (t.w = s && n.innerWidth ? n.innerWidth : e.width(),
            t.h = s && n.innerHeight ? n.innerHeight : e.height()),
            t
        },
        unbindEvents: function() {
            u.wrap && a(u.wrap) && u.wrap.unbind(".fb");
            o.unbind(".fb");
            e.unbind(".fb")
        },
        bindEvents: function() {
            var n = u.current, t;
            n && (e.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (n.autoCenter && !n.locked ? " scroll.fb" : ""), u.update),
            (t = n.keys) && o.bind("keydown.fb", function(f) {
                var e = f.which || f.keyCode
                  , o = f.target || f.srcElement;
                if (27 === e && u.coming)
                    return !1;
                f.ctrlKey || f.altKey || f.shiftKey || f.metaKey || o && (o.type || i(o).is("[contenteditable]")) || i.each(t, function(t, o) {
                    return 1 < n.group.length && o[e] !== r ? (u[t](o[e]),
                    f.preventDefault(),
                    !1) : -1 < i.inArray(e, o) ? (u[t](),
                    f.preventDefault(),
                    !1) : void 0
                })
            }),
            i.fn.mousewheel && n.mouseWheel && u.wrap.bind("mousewheel.fb", function(t, r, f, e) {
                for (var o = i(t.target || null), s = !1; o.length && !s && !o.is(".fancybox-skin") && !o.is(".fancybox-wrap"); )
                    s = o[0] && !(o[0].style.overflow && "hidden" === o[0].style.overflow) && (o[0].clientWidth && o[0].scrollWidth > o[0].clientWidth || o[0].clientHeight && o[0].scrollHeight > o[0].clientHeight),
                    o = i(o).parent();
                0 !== r && !s && 1 < u.group.length && !n.canShrink && (0 < e || 0 < f ? u.prev(0 < e ? "down" : "left") : (0 > e || 0 > f) && u.next(0 > e ? "up" : "right"),
                t.preventDefault())
            }))
        },
        trigger: function(n, t) {
            var f, r = t || u.coming || u.current;
            if (r) {
                if (i.isFunction(r[n]) && (f = r[n].apply(r, Array.prototype.slice.call(arguments, 1))),
                !1 === f)
                    return !1;
                r.helpers && i.each(r.helpers, function(t, f) {
                    f && u.helpers[t] && i.isFunction(u.helpers[t][n]) && u.helpers[t][n](i.extend(!0, {}, u.helpers[t].defaults, f), r)
                });
                o.trigger(n)
            }
        },
        isImage: function(n) {
            return c(n) && n.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(n) {
            return c(n) && n.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(n) {
            var t = {}, e, r;
            if (n = f(n),
            e = u.group[n] || null,
            !e)
                return !1;
            if (t = i.extend(!0, {}, u.opts, e),
            e = t.margin,
            r = t.padding,
            "number" === i.type(e) && (t.margin = [e, e, e, e]),
            "number" === i.type(r) && (t.padding = [r, r, r, r]),
            t.modal && i.extend(!0, t, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            }),
            t.autoSize && (t.autoWidth = t.autoHeight = !0),
            "auto" === t.width && (t.autoWidth = !0),
            "auto" === t.height && (t.autoHeight = !0),
            t.group = u.group,
            t.index = n,
            u.coming = t,
            !1 === u.trigger("beforeLoad"))
                u.coming = null;
            else {
                if (r = t.type,
                e = t.href,
                !r)
                    return u.coming = null,
                    u.current && u.router && "jumpto" !== u.router ? (u.current.index = n,
                    u[u.router](u.direction)) : !1;
                if (u.isActive = !0,
                ("image" === r || "swf" === r) && (t.autoHeight = t.autoWidth = !1,
                t.scrolling = "visible"),
                "image" === r && (t.aspectRatio = !0),
                "iframe" === r && s && (t.scrolling = "scroll"),
                t.wrap = i(t.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body"),
                i.extend(t, {
                    skin: i(".fancybox-skin", t.wrap),
                    outer: i(".fancybox-outer", t.wrap),
                    inner: i(".fancybox-inner", t.wrap)
                }),
                i.each(["Top", "Right", "Bottom", "Left"], function(n, i) {
                    t.skin.css("padding" + i, h(t.padding[n]))
                }),
                u.trigger("onReady"),
                "inline" === r || "html" === r) {
                    if (!t.content || !t.content.length)
                        return u._error("content")
                } else if (!e)
                    return u._error("href");
                "image" === r ? u._loadImage() : "ajax" === r ? u._loadAjax() : "iframe" === r ? u._loadIframe() : u._afterLoad()
            }
        },
        _error: function(n) {
            i.extend(u.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: n,
                content: u.coming.tpl.error
            });
            u._afterLoad()
        },
        _loadImage: function() {
            var n = u.imgPreload = new Image;
            n.onload = function() {
                this.onload = this.onerror = null;
                u.coming.width = this.width / u.opts.pixelRatio;
                u.coming.height = this.height / u.opts.pixelRatio;
                u._afterLoad()
            }
            ;
            n.onerror = function() {
                this.onload = this.onerror = null;
                u._error("image")
            }
            ;
            n.src = u.coming.href;
            !0 !== n.complete && u.showLoading()
        },
        _loadAjax: function() {
            var n = u.coming;
            u.showLoading();
            u.ajaxLoad = i.ajax(i.extend({}, n.ajax, {
                url: n.href,
                error: function(n, t) {
                    u.coming && "abort" !== t ? u._error("ajax", n) : u.hideLoading()
                },
                success: function(t, i) {
                    "success" === i && (n.content = t,
                    u._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var n = u.coming
              , t = i(n.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : n.iframe.scrolling).attr("src", n.href);
            i(n.wrap).bind("onReset", function() {
                try {
                    i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (n) {}
            });
            n.iframe.preload && (u.showLoading(),
            t.one("load", function() {
                i(this).data("ready", 1);
                s || i(this).bind("load.fb", u.update);
                i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                u._afterLoad()
            }));
            n.content = t.appendTo(n.inner);
            n.iframe.preload || u._afterLoad()
        },
        _preloadImages: function() {
            for (var r = u.group, i = u.current, f = r.length, e = i.preload ? Math.min(i.preload, f - 1) : 0, n, t = 1; t <= e; t += 1)
                n = r[(i.index + t) % f],
                "image" === n.type && n.href && ((new Image).src = n.href)
        },
        _afterLoad: function() {
            var n = u.coming, r = u.current, t, s, f, e, o;
            if (u.hideLoading(),
            n && !1 !== u.isActive)
                if (!1 === u.trigger("afterLoad", n, r))
                    n.wrap.stop(!0).trigger("onReset").remove(),
                    u.coming = null;
                else {
                    r && (u.trigger("beforeChange", r),
                    r.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    u.unbindEvents();
                    t = n.content;
                    s = n.type;
                    f = n.scrolling;
                    i.extend(u, {
                        wrap: n.wrap,
                        skin: n.skin,
                        outer: n.outer,
                        inner: n.inner,
                        current: n,
                        previous: r
                    });
                    e = n.href;
                    switch (s) {
                    case "inline":
                    case "ajax":
                    case "html":
                        n.selector ? t = i("<div>").html(t).find(n.selector) : a(t) && (t.data("fancybox-placeholder") || t.data("fancybox-placeholder", i('<div class="fancybox-placeholder"><\/div>').insertAfter(t).hide()),
                        t = t.show().detach(),
                        n.wrap.bind("onReset", function() {
                            i(this).find(t).length && t.hide().replaceAll(t.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                        }));
                        break;
                    case "image":
                        t = n.tpl.image.replace("{href}", e);
                        break;
                    case "swf":
                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + e + '"><\/param>';
                        o = "";
                        i.each(n.swf, function(n, i) {
                            t += '<param name="' + n + '" value="' + i + '"><\/param>';
                            o += " " + n + '="' + i + '"'
                        });
                        t += '<embed src="' + e + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "><\/embed><\/object>"
                    }
                    a(t) && t.parent().is(n.inner) || n.inner.append(t);
                    u.trigger("beforeShow");
                    n.inner.css("overflow", "yes" === f ? "scroll" : "no" === f ? "hidden" : f);
                    u._setDimension();
                    u.reposition();
                    u.isOpen = !1;
                    u.coming = null;
                    u.bindEvents();
                    u.isOpened ? r.prevMethod && u.transitions[r.prevMethod]() : i(".fancybox-wrap").not(n.wrap).stop(!0).trigger("onReset").remove();
                    u.transitions[u.isOpened ? n.nextMethod : n.openMethod]();
                    u._preloadImages()
                }
        },
        _setDimension: function() {
            var o = u.getViewport(), st = 0, s = !1, n = !1, s = u.wrap, nt = u.skin, e = u.inner, r = u.current, n = r.width, t = r.height, c = r.minWidth, a = r.minHeight, v = r.maxWidth, y = r.maxHeight, ht = r.scrolling, ft = r.scrollOutside ? r.scrollbarWidth : 0, p = r.margin, w = f(p[1] + p[3]), tt = f(p[0] + p[2]), et, b, rt, d, k, it, ot, g, ut;
            if (s.add(nt).add(e).width("auto").height("auto").removeClass("fancybox-tmp"),
            p = f(nt.outerWidth(!0) - nt.width()),
            et = f(nt.outerHeight(!0) - nt.height()),
            b = w + p,
            rt = tt + et,
            d = l(n) ? (o.w - b) * f(n) / 100 : n,
            k = l(t) ? (o.h - rt) * f(t) / 100 : t,
            "iframe" === r.type) {
                if (ut = r.content,
                r.autoHeight && 1 === ut.data("ready"))
                    try {
                        ut[0].contentWindow.document.location && (e.width(d).height(9999),
                        it = ut.contents().find("body"),
                        ft && it.css("overflow-x", "hidden"),
                        k = it.outerHeight(!0))
                    } catch (ct) {}
            } else
                (r.autoWidth || r.autoHeight) && (e.addClass("fancybox-tmp"),
                r.autoWidth || e.width(d),
                r.autoHeight || e.height(k),
                r.autoWidth && (d = e.width()),
                r.autoHeight && (k = e.height()),
                e.removeClass("fancybox-tmp"));
            if (n = f(d),
            t = f(k),
            g = d / k,
            c = f(l(c) ? f(c, "w") - b : c),
            v = f(l(v) ? f(v, "w") - b : v),
            a = f(l(a) ? f(a, "h") - rt : a),
            y = f(l(y) ? f(y, "h") - rt : y),
            it = v,
            ot = y,
            r.fitToView && (v = Math.min(o.w - b, v),
            y = Math.min(o.h - rt, y)),
            b = o.w - w,
            tt = o.h - tt,
            r.aspectRatio ? (n > v && (n = v,
            t = f(n / g)),
            t > y && (t = y,
            n = f(t * g)),
            n < c && (n = c,
            t = f(n / g)),
            t < a && (t = a,
            n = f(t * g))) : (n = Math.max(c, Math.min(n, v)),
            r.autoHeight && "iframe" !== r.type && (e.width(n),
            t = e.height()),
            t = Math.max(a, Math.min(t, y))),
            r.fitToView)
                if (e.width(n).height(t),
                s.width(n + p),
                o = s.width(),
                w = s.height(),
                r.aspectRatio)
                    for (; (o > b || w > tt) && n > c && t > a && !(19 < st++); )
                        t = Math.max(a, Math.min(y, t - 10)),
                        n = f(t * g),
                        n < c && (n = c,
                        t = f(n / g)),
                        n > v && (n = v,
                        t = f(n / g)),
                        e.width(n).height(t),
                        s.width(n + p),
                        o = s.width(),
                        w = s.height();
                else
                    n = Math.max(c, Math.min(n, n - (o - b))),
                    t = Math.max(a, Math.min(t, t - (w - tt)));
            ft && "auto" === ht && t < k && n + p + ft < b && (n += ft);
            e.width(n).height(t);
            s.width(n + p);
            o = s.width();
            w = s.height();
            s = (o > b || w > tt) && n > c && t > a;
            n = r.aspectRatio ? n < it && t < ot && n < d && t < k : (n < it || t < ot) && (n < d || t < k);
            i.extend(r, {
                dim: {
                    width: h(o),
                    height: h(w)
                },
                origWidth: d,
                origHeight: k,
                canShrink: s,
                canExpand: n,
                wPadding: p,
                hPadding: et,
                wrapSpace: w - nt.outerHeight(!0),
                skinSpace: nt.height() - t
            });
            !ut && r.autoHeight && t > a && t < y && !n && e.height("auto")
        },
        _getPosition: function(n) {
            var i = u.current
              , r = u.getViewport()
              , t = i.margin
              , f = u.wrap.width() + t[1] + t[3]
              , e = u.wrap.height() + t[0] + t[2]
              , t = {
                position: "absolute",
                top: t[0],
                left: t[3]
            };
            return i.autoCenter && i.fixed && !n && e <= r.h && f <= r.w ? t.position = "fixed" : i.locked || (t.top += r.y,
            t.left += r.x),
            t.top = h(Math.max(t.top, t.top + (r.h - e) * i.topRatio)),
            t.left = h(Math.max(t.left, t.left + (r.w - f) * i.leftRatio)),
            t
        },
        _afterZoomIn: function() {
            var n = u.current;
            n && (u.isOpen = u.isOpened = !0,
            u.wrap.css("overflow", "visible").addClass("fancybox-opened"),
            u.update(),
            (n.closeClick || n.nextClick && 1 < u.group.length) && u.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(),
                u[n.closeClick ? "close" : "next"]())
            }),
            n.closeBtn && i(n.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function(n) {
                n.preventDefault();
                u.close()
            }),
            n.arrows && 1 < u.group.length && ((n.loop || 0 < n.index) && i(n.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev),
            (n.loop || n.index < u.group.length - 1) && i(n.tpl.next).appendTo(u.outer).bind("click.fb", u.next)),
            u.trigger("afterShow"),
            !n.loop && n.index === n.group.length - 1 ? u.play(!1) : u.opts.autoPlay && !u.player.isActive && (u.opts.autoPlay = !1,
            u.play()))
        },
        _afterZoomOut: function(n) {
            n = n || u.current;
            i(".fancybox-wrap").trigger("onReset").remove();
            i.extend(u, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            u.trigger("afterClose", n)
        }
    });
    u.transitions = {
        getOrigPosition: function() {
            var n = u.current
              , f = n.element
              , t = n.orig
              , i = {}
              , e = 50
              , o = 50
              , s = n.hPadding
              , c = n.wPadding
              , r = u.getViewport();
            return !t && n.isDom && f.is(":visible") && (t = f.find("img:first"),
            t.length || (t = f)),
            a(t) ? (i = t.offset(),
            t.is("img") && (e = t.outerWidth(),
            o = t.outerHeight())) : (i.top = r.y + (r.h - o) * n.topRatio,
            i.left = r.x + (r.w - e) * n.leftRatio),
            ("fixed" === u.wrap.css("position") || n.locked) && (i.top -= r.y,
            i.left -= r.x),
            {
                top: h(i.top - s * n.topRatio),
                left: h(i.left - c * n.leftRatio),
                width: h(e + c),
                height: h(o + s)
            }
        },
        step: function(n, t) {
            var e, i, r = t.prop, o, s;
            i = u.current;
            o = i.wrapSpace;
            s = i.skinSpace;
            ("width" === r || "height" === r) && (e = t.end === t.start ? 1 : (n - t.start) / (t.end - t.start),
            u.isClosing && (e = 1 - e),
            i = "width" === r ? i.wPadding : i.hPadding,
            i = n - i,
            u.skin[r](f("width" === r ? i : i - o * e)),
            u.inner[r](f("width" === r ? i : i - o * e - s * e)))
        },
        zoomIn: function() {
            var n = u.current
              , t = n.pos
              , r = n.openEffect
              , f = "elastic" === r
              , e = i.extend({
                opacity: 1
            }, t);
            delete e.position;
            f ? (t = this.getOrigPosition(),
            n.openOpacity && (t.opacity = .1)) : "fade" === r && (t.opacity = .1);
            u.wrap.css(t).animate(e, {
                duration: "none" === r ? 0 : n.openSpeed,
                easing: n.openEasing,
                step: f ? this.step : null,
                complete: u._afterZoomIn
            })
        },
        zoomOut: function() {
            var n = u.current
              , i = n.closeEffect
              , r = "elastic" === i
              , t = {
                opacity: .1
            };
            r && (t = this.getOrigPosition(),
            n.closeOpacity && (t.opacity = .1));
            u.wrap.animate(t, {
                duration: "none" === i ? 0 : n.closeSpeed,
                easing: n.closeEasing,
                step: r ? this.step : null,
                complete: u._afterZoomOut
            })
        },
        changeIn: function() {
            var i = u.current, o = i.nextEffect, t = i.pos, e = {
                opacity: 1
            }, r = u.direction, n;
            t.opacity = .1;
            "elastic" === o && (n = "down" === r || "up" === r ? "top" : "left",
            "down" === r || "right" === r ? (t[n] = h(f(t[n]) - 200),
            e[n] = "+=200px") : (t[n] = h(f(t[n]) + 200),
            e[n] = "-=200px"));
            "none" === o ? u._afterZoomIn() : u.wrap.css(t).animate(e, {
                duration: i.nextSpeed,
                easing: i.nextEasing,
                complete: u._afterZoomIn
            })
        },
        changeOut: function() {
            var n = u.previous
              , r = n.prevEffect
              , f = {
                opacity: .1
            }
              , t = u.direction;
            "elastic" === r && (f["down" === t || "up" === t ? "top" : "left"] = ("up" === t || "left" === t ? "-" : "+") + "=200px");
            n.wrap.animate(f, {
                duration: "none" === r ? 0 : n.prevSpeed,
                easing: n.prevEasing,
                complete: function() {
                    i(this).trigger("onReset").remove()
                }
            })
        }
    };
    u.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !s,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: i("html"),
        create: function(n) {
            n = i.extend({}, this.defaults, n);
            this.overlay && this.close();
            this.overlay = i('<div class="fancybox-overlay"><\/div>').appendTo(u.coming ? u.coming.parent : n.parent);
            this.fixed = !1;
            n.fixed && u.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"),
            this.fixed = !0)
        },
        open: function(n) {
            var t = this;
            n = i.extend({}, this.defaults, n);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(n);
            this.fixed || (e.bind("resize.overlay", i.proxy(this.update, this)),
            this.update());
            n.closeClick && this.overlay.bind("click.overlay", function(n) {
                if (i(n.target).hasClass("fancybox-overlay"))
                    return u.isActive ? u.close() : t.close(),
                    !1
            });
            this.overlay.css(n.css).show()
        },
        close: function() {
            var n, t;
            e.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"),
            n = e.scrollTop(),
            t = e.scrollLeft(),
            this.el.removeClass("fancybox-lock"),
            e.scrollTop(n).scrollLeft(t));
            i(".fancybox-overlay").remove().hide();
            i.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var n = "100%", i;
            this.overlay.width(n).height("100%");
            y ? (i = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth),
            o.width() > i && (n = o.width())) : o.width() > e.width() && (n = o.width());
            this.overlay.width(n).height(o.height())
        },
        onReady: function(n, t) {
            var r = this.overlay;
            i(".fancybox-overlay").stop(!0, !0);
            r || this.create(n);
            n.locked && this.fixed && t.fixed && (r || (this.margin = o.height() > e.height() ? i("html").css("margin-right").replace("px", "") : !1),
            t.locked = this.overlay.append(t.wrap),
            t.fixed = !1);
            !0 === n.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(n, t) {
            var r, u;
            t.locked && (!1 !== this.margin && (i("*").filter(function() {
                return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"),
            this.el.addClass("fancybox-margin")),
            r = e.scrollTop(),
            u = e.scrollLeft(),
            this.el.addClass("fancybox-lock"),
            e.scrollTop(r).scrollLeft(u));
            this.open(n)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(n) {
            this.overlay && !u.coming && this.overlay.fadeOut(n.speedOut, i.proxy(this.close, this))
        }
    };
    u.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(n) {
            var t = u.current
              , e = t.title
              , r = n.type;
            if (i.isFunction(e) && (e = e.call(t.element, t)),
            c(e) && "" !== i.trim(e)) {
                t = i('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + e + "<\/div>");
                switch (r) {
                case "inside":
                    r = u.skin;
                    break;
                case "outside":
                    r = u.wrap;
                    break;
                case "over":
                    r = u.inner;
                    break;
                default:
                    r = u.skin;
                    t.appendTo("body");
                    y && t.width(t.width());
                    t.wrapInner('<span class="child"><\/span>');
                    u.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
                }
                t["top" === n.position ? "prependTo" : "appendTo"](r)
            }
        }
    };
    i.fn.fancybox = function(n) {
        var r, f = i(this), t = this.selector || "", e = function(e) {
            var o = i(this).blur(), c = r, h, s;
            e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || o.is(".fancybox-wrap") || (h = n.groupAttr || "data-fancybox-group",
            s = o.attr(h),
            s || (h = "rel",
            s = o.get(0)[h]),
            s && "" !== s && "nofollow" !== s && (o = t.length ? i(t) : f,
            o = o.filter("[" + h + '="' + s + '"]'),
            c = o.index(this)),
            n.index = c,
            !1 !== u.open(o, n) && e.preventDefault())
        };
        return n = n || {},
        r = n.index || 0,
        !t || !1 === n.live ? f.unbind("click.fb-start").bind("click.fb-start", e) : o.undelegate(t, "click.fb-start").delegate(t + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", e),
        this.filter("[data-fancybox-start=1]").trigger("click"),
        this
    }
    ;
    o.ready(function() {
        var f, t, e;
        i.scrollbarWidth === r && (i.scrollbarWidth = function() {
            var t = i('<div style="width:50px;height:50px;overflow:auto"><div/><\/div>').appendTo("body")
              , n = t.children()
              , n = n.innerWidth() - n.height(99).innerWidth();
            return t.remove(),
            n
        }
        );
        i.support.fixedPosition === r && (f = i.support,
        t = i('<div style="position:fixed;top:20px;"><\/div>').appendTo("body"),
        e = 20 === t[0].offsetTop || 15 === t[0].offsetTop,
        t.remove(),
        f.fixedPosition = e);
        i.extend(u.defaults, {
            scrollbarWidth: i.scrollbarWidth(),
            fixed: i.support.fixedPosition,
            parent: i("body")
        });
        f = i(n).width();
        p.addClass("fancybox-lock-test");
        t = i(n).width();
        p.removeClass("fancybox-lock-test");
        i("<style type='text/css'>.fancybox-margin{margin-right:" + (t - f) + "px;}<\/style>").appendTo("head")
    })
}
)(window, document, jQuery);
$.fn.responsiveTabs = function() {
    return this.each(function() {
        var n = $(this);
        n.find(".responsive-tabs-nav > li > a").on("click", function(t) {
            var i, r;
            t.preventDefault();
            i = $(this).parent("li");
            n.find(".responsive-tabs-nav > li > .responsive-tab-content").hide();
            n.find(".responsive-tabs-nav > li.active").removeClass("active");
            i.addClass("active");
            i.find(".responsive-tab-content").show();
            r = 0;
            $(window).width() <= 768 ? n.find(".responsive-tabs-nav > li > a").each(function() {
                r += $(this).height()
            }) : r = $(this).height();
            n.height(r + i.find(".responsive-tab-content").height())
        });
        n.find(".responsive-tabs-nav:visible > li:first-child > a").trigger("click");
        $(window).resize(function() {
            n.find(".responsive-tabs-nav > li.active > a").trigger("click")
        })
    })
}
;
$.fn.hasAttr = function(n) {
    return this.attr(n) !== undefined
}
;
$(document).ready(function() {
    function n() {
        var n = t("hideCookie");
        n == null || n == "" ? $("#cookie-banner").css("display", "block") : $("#cookie-banner").css("display", "none")
    }
    function t(n) {
        var t = " " + document.cookie, i = t.indexOf(" " + n + "="), r;
        return (i == -1 && (i = t.indexOf(";" + n + "=")),
        i == -1 || n == "") ? "" : (r = t.indexOf(";", i + 1),
        r == -1 && (r = t.length),
        unescape(t.substring(i + n.length + 2, r)))
    }
    function i(n, t, i) {
        var u = new Date
          , r = new Date;
        (i == null || i == 0) && (i = 1);
        r.setTime(u.getTime() + 864e5 * i);
        document.cookie = n + "=" + escape(t) + ";expires=" + r.toGMTString() + ";path=/;"
    }
    $(window).load(function() {
        $(".cookie-banner-button").bind("click", function() {
            i("hideCookie", "0", 365);
            $("#cookie-banner").fadeOut()
        })
    });
    $(window).load(function() {
        n()
    });
    $(".close-notice").on("click", function() {
        $.post("/Assets/FastLabels/Services/DismissNotice.aspx");
        $("#divChristmas").slideUp()
    });
    $(".accordion-container").on("click", function(n) {
        n.preventDefault()
    });
    $(".responsive-tabs-nav").on("click", function(n) {
        n.preventDefault()
    });
    $(".has-nav.our-products > a").on("click", function(n) {
        n.preventDefault()
    });
    $(".has-nav.our-products > a").on("click", function(n) {
        n.preventDefault()
    });
    $(".has-nav.our-products > ul > li > a").on("click", function(n) {
        n.preventDefault()
    });
    $(".remove-void").each(function() {
        $(this).find("a:first").on("click", function(n) {
            n.preventDefault()
        })
    });
    $(".browse").on("click", function(n) {
        n.preventDefault();
        $(window).width() >= 992 ? ($(".has-nav > a").trigger("click"),
        $("html, body").animate({
            scrollTop: "0px"
        }, 300)) : ($.sidr("open", "sidr"),
        $("#sidr > span ul > li:first > a").trigger("click"))
    });
    $(".has-nav > ul > li:not(.title)").each(function() {
        if ($(this).find("> ul > li").length > 0) {
            var n = $(this).find("> a").text();
            $(this).find("> ul").prepend('<li class="title">' + n + "<\/li>")
        }
    });
    $("header .desktop-navigation > span > ul > li.has-nav > ul > li > ul > li").matchHeight();
    $(".has-nav > a").on("click", function(n) {
        n.preventDefault();
        $(this).parent("li").toggleClass("active");
        var t = $(this).next("ul")
          , i = t.find("> li");
        $(this).parent("li").hasClass("active") ? (i.each(function() {
            var n = $(this);
            n.addClass("show")
        }),
        t.find("> li:first").addClass("active"),
        $(".wrapper").animate({
            opacity: .5
        }, 400)) : ($(i.get().reverse()).each(function() {
            var n = $(this);
            n.removeClass("show")
        }),
        $(".wrapper").animate({
            opacity: 1
        }, 400));
        t.find("> li:not(.title)").hover(function() {
            if (t.find("> li").removeClass("active"),
            $(this).addClass("active"),
            $(this).find("> ul > li").length > 0) {
                var n = 0;
                console.log($(this).find("> ul").offset().top);
                console.log(t.find("> li:first").offset().top);
                n = t.find("> li:first").offset().top - $(this).find("> ul").offset().top;
                $(this).find("> ul").hasAttr("style") || $(this).find("> ul").css({
                    top: n
                })
            }
        })
    });
    $(window).width() < 1080 && $("#product-drop").click(function() {
        $("#product-menu").toggle()
    });
    screen.width < 767 && (mySlider = $(".about-me-slider").bxSlider({
        controls: !1
    }));
    $(".testimonials-img-holder").matchHeight();
    $(".risk-reducers .risk-info").matchHeight();
    $(".category-item").matchHeight();
    $(".responsive-tabs").responsiveTabs();
    $(".product-tabs-large").responsiveTabs();
    screen.width < 767 && (mySlider = $(".testimonial-slider").bxSlider({
        controls: !1
    }));
    $(".testimonials-item").matchHeight();
    $(".team-holder").matchHeight();
    $("#about .main-image").matchHeight();
    $(".accordian ul > li a").click(function(n) {
        var r;
        if (n.preventDefault(),
        $(this).parent("li").length > 0) {
            var t = $(this)
              , i = t.closest(".accordian").find("li.active div")
              , u = t.closest("li").hasClass("active");
            $(".accordian ul li.active").removeClass("active");
            i.length == 0 ? (t.closest("li").addClass("active"),
            t.next().slideDown("fast", function() {
                t.parents(".responsive-tab-content").length > 0 && t.closest(".responsive-tabs").height(t.closest(".accordian").outerHeight() + 50)
            })) : i.slideUp({
                duration: 300,
                step: function() {
                    t.parents(".responsive-tab-content").length > 0 && t.closest(".responsive-tabs").height(t.closest(".accordian").outerHeight() + 50)
                },
                complete: function() {
                    u || (t.closest("li").addClass("active"),
                    t.next().slideDown({
                        duration: 300,
                        step: function() {
                            t.parents(".responsive-tab-content").length > 0 && t.closest(".responsive-tabs").height(t.closest(".accordian").outerHeight() + 50)
                        },
                        complete: function() {
                            t.parents(".responsive-tab-content").length > 0 && t.closest(".responsive-tabs").height(t.closest(".accordian").outerHeight() + 50)
                        }
                    }))
                }
            })
        } else
            $(this).attr("target") == "_blank" ? (r = window.open($(this).attr("href"), "_blank"),
            r.focus()) : window.top.location.href = $(this).attr("href")
    });
    $(window).width() > 1200 && $("#eya .info-section").matchHeight({
        target: $("#eya .holder")
    });
    $(".product-tabs-desktop").responsiveTabs();
    $(".product-tabs-small").responsiveTabs();
    $("#mobile-menu").sidr({
        side: "right"
    });
    $("#mobile-menu").on("click", function() {
        $.sidr("open", "sidr")
    });
    $(".close-menu").click(function() {
        $.sidr("close", "sidr")
    });
    $(".sidr ul li a").click(function() {
        $(this).closest("li").children("ul").length && ($(this).addClass("clicked"),
        $(this).closest("li").children("ul").show())
    });
    $(".sidr ul li ul li a").click(function(n) {
        $(n.target).closest("ul").find("a.clicked").not($(this)).next("ul").hide();
        $(n.target).closest("ul").find("a.clicked").not($(this)).removeClass("clicked")
    });
    $("ul li.our-products > a").on("click", function(n) {
        n.preventDefault();
        $(this).next("ul").find("> li:first-of-type > a").addClass("clicked");
        $(this).next("ul").find("> li:first-of-type > a").next("ul").show()
    });
    $(window).width() > 1200 && $(".upload-box").matchHeight();
    $(".home-product-section .product-box-holder").matchHeight();
    $(".newsletter button").on("click", function(n) {
        n.preventDefault();
        var t = $(this).prev("input").val();
        newsletterSignup(t, "course") ? ($(".newsletter").addClass("signed-up"),
        $(".newsletter .title").text("Thanks for signing up free design course"),
        $(".newsletter button").html("&#10004;")) : $(".newsletter .info").text("Sorry, we could not sign you up to our mailing list. Please check your address and try again.")
    });
    $(".tablet-desktop-menus .sign-up-button button").on("click", function(n) {
        n.preventDefault();
        var t = $(".tablet-desktop-menus .sign-up-input input").val();
        newsletterSignup(t, "newsletter") ? ($(".tablet-desktop-menus .sign-up-text p").text("Thanks for signing up to our newsletter, you'll soon here about our great offers and insights."),
        $(".tablet-desktop-menus .sign-up-input").slideUp(),
        $(".tablet-desktop-menus .sign-up-button").slideUp()) : $(".tablet-desktop-menus .sign-up-text p").text("Sorry, we could not sign you up to our mailing list. Please check your address and try again.")
    });
    $(".connected .sign-up-button button").on("click", function(n) {
        n.preventDefault();
        var t = $(".connected .sign-up-input input").val();
        newsletterSignup(t, "newsletter") ? ($(".connected .sign-up-text p").text("Thanks for signing up to our newsletter, you'll soon here about our great offers and insights."),
        $(".connected .sign-up-input").slideUp(),
        $(".connected .sign-up-button").slideUp()) : $(".connected .sign-up-text p").text("Sorry, we could not sign you up to our mailing list. Please check your address and try again.")
    });
    +function(n) {
        "use strict";
        function r(t) {
            var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return n(r)
        }
        function i(i) {
            return this.each(function() {
                var u = n(this)
                  , r = u.data("bs.collapse")
                  , f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i);
                !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
                r || u.data("bs.collapse", r = new t(this,f));
                typeof i == "string" && r[i]()
            })
        }
        var t = function t(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        }, u;
        t.VERSION = "3.3.5";
        t.TRANSITION_DURATION = 350;
        t.DEFAULTS = {
            toggle: !0
        };
        t.prototype.dimension = function() {
            var n = this.$element.hasClass("width");
            return n ? "width" : "height"
        }
        ;
        t.prototype.show = function() {
            var f, r, e, u, o, s;
            if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"),
            !r || !r.length || (f = r.data("bs.collapse"),
            !f || !f.transitioning)) && (e = n.Event("show.bs.collapse"),
            this.$element.trigger(e),
            !e.isDefaultPrevented())) {
                if (r && r.length && (i.call(r, "hide"),
                f || r.data("bs.collapse", null)),
                u = this.dimension(),
                this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0),
                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                this.transitioning = 1,
                o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }
                ,
                !n.support.transition)
                    return o.call(this);
                s = n.camelCase(["scroll", u].join("-"));
                this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
            }
        }
        ;
        t.prototype.hide = function() {
            var r, i, u;
            if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"),
            this.$element.trigger(r),
            !r.isDefaultPrevented())) {
                if (i = this.dimension(),
                this.$element[i](this.$element[i]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1,
                u = function() {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }
                ,
                !n.support.transition)
                    return u.call(this);
                this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
            }
        }
        ;
        t.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
        ;
        t.prototype.getParent = function() {
            return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
                var u = n(i);
                this.addAriaAndCollapsedClass(r(u), u)
            }, this)).end()
        }
        ;
        t.prototype.addAriaAndCollapsedClass = function(n, t) {
            var i = n.hasClass("in");
            n.attr("aria-expanded", i);
            t.toggleClass("collapsed", !i).attr("aria-expanded", i)
        }
        ;
        u = n.fn.collapse;
        n.fn.collapse = i;
        n.fn.collapse.Constructor = t;
        n.fn.collapse.noConflict = function() {
            return n.fn.collapse = u,
            this
        }
        ;
        n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
            var u = n(this);
            u.attr("data-target") || t.preventDefault();
            var f = r(u)
              , e = f.data("bs.collapse")
              , o = e ? "toggle" : u.data();
            i.call(f, o)
        })
    }(jQuery)
});
$(document).ready(function() {
    ourProducts = screen.width < 767 ? $("#our-products").bxSlider({
        controls: !0,
        pager: !1
    }) : $("#our-products").bxSlider({
        controls: !0,
        pager: !1,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 490,
        slideMargin: 10
    })
});
$("body").on("click", "a.close-notification", function() {
    console.log($(this).closest(".message").html());
    $(this).closest(".message").fadeOut(500, function() {
        $(this).remove()
    })
});
(function(n) {
    "use strict";
    var t = {
        item: 3,
        autoWidth: !1,
        slideMove: 1,
        slideMargin: 10,
        addClass: "",
        mode: "slide",
        useCSS: !0,
        cssEasing: "ease",
        easing: "linear",
        speed: 400,
        auto: !1,
        pauseOnHover: !1,
        loop: !1,
        slideEndAnimation: !0,
        pause: 2e3,
        keyPress: !1,
        controls: !0,
        prevHtml: "",
        nextHtml: "",
        rtl: !1,
        adaptiveHeight: !1,
        vertical: !1,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: !0,
        gallery: !1,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: "middle",
        enableTouch: !0,
        enableDrag: !0,
        freeMove: !0,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function() {},
        onSliderLoad: function() {},
        onBeforeSlide: function() {},
        onAfterSlide: function() {},
        onBeforeNextSlide: function() {},
        onBeforePrevSlide: function() {}
    };
    n.fn.lightSlider = function(i) {
        if (this.length === 0)
            return this;
        if (this.length > 1)
            return this.each(function() {
                n(this).lightSlider(i)
            }),
            this;
        var a = {}
          , r = n.extend(!0, {}, t, i)
          , p = {}
          , u = this;
        a.$el = this;
        r.mode === "fade" && (r.vertical = !1);
        var s = u.children()
          , g = n(window).width()
          , ut = null
          , b = null
          , w = 0
          , c = 0
          , nt = !1
          , o = 0
          , f = ""
          , e = 0
          , tt = r.vertical === !0 ? "height" : "width"
          , it = r.vertical === !0 ? "margin-bottom" : "margin-right"
          , l = 0
          , d = 0
          , y = 0
          , k = 0
          , v = null
          , rt = "ontouchstart"in document.documentElement
          , h = {};
        h.chbreakpoint = function() {
            var f, i, t, u;
            if (g = n(window).width(),
            r.responsive.length) {
                if (r.autoWidth === !1 && (f = r.item),
                g < r.responsive[0].breakpoint)
                    for (i = 0; i < r.responsive.length; i++)
                        g < r.responsive[i].breakpoint && (ut = r.responsive[i].breakpoint,
                        b = r.responsive[i]);
                if (typeof b != "undefined" && b !== null)
                    for (t in b.settings)
                        b.settings.hasOwnProperty(t) && ((typeof p[t] == "undefined" || p[t] === null) && (p[t] = r[t]),
                        r[t] = b.settings[t]);
                if (!n.isEmptyObject(p) && g > r.responsive[0].breakpoint)
                    for (u in p)
                        p.hasOwnProperty(u) && (r[u] = p[u]);
                r.autoWidth === !1 && l > 0 && y > 0 && f !== r.item && (e = Math.round(l / ((y + r.slideMargin) * r.slideMove)))
            }
        }
        ;
        h.calSW = function() {
            r.autoWidth === !1 && (y = (o - (r.item * r.slideMargin - r.slideMargin)) / r.item)
        }
        ;
        h.calWidth = function(n) {
            var i = n === !0 ? f.find(".lslide").length : s.length, t;
            if (r.autoWidth === !1)
                c = i * (y + r.slideMargin);
            else
                for (c = 0,
                t = 0; t < i; t++)
                    c += parseInt(s.eq(t).width()) + r.slideMargin;
            return c
        }
        ;
        a = {
            doCss: function() {
                var n = function() {
                    for (var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], i = document.documentElement, n = 0; n < t.length; n++)
                        if (t[n]in i.style)
                            return !0
                };
                return r.useCSS && n() ? !0 : !1
            },
            keyPress: function() {
                if (r.keyPress)
                    n(document).on("keyup.lightslider", function(t) {
                        n(":focus").is("input, textarea") || (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                        t.keyCode === 37 ? u.goToPrevSlide() : t.keyCode === 39 && u.goToNextSlide())
                    })
            },
            controls: function() {
                if (r.controls) {
                    u.after('<div class="lSAction"><a class="lSPrev">' + r.prevHtml + '<\/a><a class="lSNext">' + r.nextHtml + "<\/a><\/div>");
                    r.autoWidth ? h.calWidth(!1) < o && f.find(".lSAction").hide() : w <= r.item && f.find(".lSAction").hide();
                    f.find(".lSAction a").on("click", function(t) {
                        return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                        n(this).attr("class") === "lSPrev" ? u.goToPrevSlide() : u.goToNextSlide(),
                        !1
                    })
                }
            },
            initialStyle: function() {
                var n = this;
                r.mode === "fade" && (r.autoWidth = !1,
                r.slideEndAnimation = !1);
                r.auto && (r.slideEndAnimation = !1);
                r.autoWidth && (r.slideMove = 1,
                r.item = 1);
                r.loop && (r.slideMove = 1,
                r.freeMove = !1);
                r.onBeforeStart.call(this, u);
                h.chbreakpoint();
                u.addClass("lightSlider").wrap('<div class="lSSlideOuter ' + r.addClass + '"><div class="lSSlideWrapper"><\/div><\/div>');
                f = u.parent(".lSSlideWrapper");
                r.rtl === !0 && f.parent().addClass("lSrtl");
                r.vertical ? (f.parent().addClass("vertical"),
                o = r.verticalHeight,
                f.css("height", o + "px")) : o = u.outerWidth();
                s.addClass("lslide");
                r.loop === !0 && r.mode === "slide" && (h.calSW(),
                h.clone = function() {
                    var v, y, i, t, f, c, l, a;
                    if (h.calWidth(!0) > o) {
                        for (v = 0,
                        y = 0,
                        i = 0; i < s.length; i++)
                            if (v += parseInt(u.find(".lslide").eq(i).width()) + r.slideMargin,
                            y++,
                            v >= o + r.slideMargin)
                                break;
                        if (t = r.autoWidth === !0 ? y : r.item,
                        t < u.find(".clone.left").length)
                            for (f = 0; f < u.find(".clone.left").length - t; f++)
                                s.eq(f).remove();
                        if (t < u.find(".clone.right").length)
                            for (c = s.length - 1; c > s.length - 1 - u.find(".clone.right").length; c--)
                                e--,
                                s.eq(c).remove();
                        for (l = u.find(".clone.right").length; l < t; l++)
                            u.find(".lslide").eq(l).clone().removeClass("lslide").addClass("clone right").appendTo(u),
                            e++;
                        for (a = u.find(".lslide").length - u.find(".clone.left").length; a > u.find(".lslide").length - t; a--)
                            u.find(".lslide").eq(a - 1).clone().removeClass("lslide").addClass("clone left").prependTo(u);
                        s = u.children()
                    } else
                        s.hasClass("clone") && (u.find(".clone").remove(),
                        n.move(u, 0))
                }
                ,
                h.clone());
                h.sSW = function() {
                    w = s.length;
                    r.rtl === !0 && r.vertical === !1 && (it = "margin-left");
                    r.autoWidth === !1 && s.css(tt, y + "px");
                    s.css(it, r.slideMargin + "px");
                    c = h.calWidth(!1);
                    u.css(tt, c + "px");
                    r.loop === !0 && r.mode === "slide" && nt === !1 && (e = u.find(".clone.left").length)
                }
                ;
                h.calL = function() {
                    s = u.children();
                    w = s.length
                }
                ;
                this.doCss() && f.addClass("usingCss");
                h.calL();
                r.mode === "slide" ? (h.calSW(),
                h.sSW(),
                r.loop === !0 && (l = n.slideValue(),
                this.move(u, l)),
                r.vertical === !1 && this.setHeight(u, !1)) : (this.setHeight(u, !0),
                u.addClass("lSFade"),
                this.doCss() || (s.fadeOut(0),
                s.eq(e).fadeIn(0)));
                r.loop === !0 && r.mode === "slide" ? s.eq(e).addClass("active") : s.first().addClass("active")
            },
            pager: function() {
                var i = this, n, t;
                h.createPager = function() {
                    var p, a, t, s;
                    k = (o - (r.thumbItem * r.thumbMargin - r.thumbMargin)) / r.thumbItem;
                    for (var v = f.find(".lslide"), w = f.find(".lslide").length, n = 0, h = "", l = 0, n = 0; n < w; n++)
                        if (r.mode === "slide" && (r.autoWidth ? l += (parseInt(v.eq(n).width()) + r.slideMargin) * r.slideMove : l = n * (y + r.slideMargin) * r.slideMove),
                        p = v.eq(n * r.slideMove).attr("data-thumb"),
                        h += r.gallery === !0 ? '<li style="width:100%;' + tt + ":" + k + "px;" + it + ":" + r.thumbMargin + 'px"><a href="#"><img src="' + p + '" /><\/a><\/li>' : '<li><a href="#">' + (n + 1) + "<\/a><\/li>",
                        r.mode === "slide" && l >= c - o - r.slideMargin) {
                            n = n + 1;
                            a = 2;
                            r.autoWidth && (h += '<li><a href="#">' + (n + 1) + "<\/a><\/li>",
                            a = 1);
                            n < a ? (h = null,
                            f.parent().addClass("noPager")) : f.parent().removeClass("noPager");
                            break
                        }
                    t = f.parent();
                    t.find(".lSPager").html(h);
                    r.gallery === !0 && (r.vertical === !0 && t.find(".lSPager").css("width", r.vThumbWidth + "px"),
                    d = n * (r.thumbMargin + k) + .5,
                    t.find(".lSPager").css({
                        property: d + "px",
                        "transition-duration": r.speed + "ms"
                    }),
                    r.vertical === !0 && f.parent().css("padding-right", r.vThumbWidth + r.galleryMargin + "px"),
                    t.find(".lSPager").css(tt, d + "px"));
                    s = t.find(".lSPager").find("li");
                    s.first().addClass("active");
                    s.on("click", function() {
                        return e = r.loop === !0 && r.mode === "slide" ? e + (s.index(this) - t.find(".lSPager").find("li.active").index()) : s.index(this),
                        u.mode(!1),
                        r.gallery === !0 && i.slideThumb(),
                        !1
                    })
                }
                ;
                r.pager && (n = "lSpg",
                r.gallery && (n = "lSGallery"),
                f.after('<ul class="lSPager ' + n + '"><\/ul>'),
                t = r.vertical ? "margin-left" : "margin-top",
                f.parent().find(".lSPager").css(t, r.galleryMargin + "px"),
                h.createPager());
                setTimeout(function() {
                    h.init()
                }, 0)
            },
            setHeight: function(n, t) {
                var i = null, f = this, u;
                i = r.loop ? n.children(".lslide ").first() : n.children().first();
                u = function() {
                    var r = i.outerHeight()
                      , u = 0
                      , f = r;
                    t && (r = 0,
                    u = f * 100 / o);
                    n.css({
                        height: r + "px",
                        "padding-bottom": u + "%"
                    })
                }
                ;
                u();
                i.find("img").length ? i.find("img")[0].complete ? (u(),
                v || f.auto()) : i.find("img").load(function() {
                    setTimeout(function() {
                        u();
                        v || f.auto()
                    }, 100)
                }) : v || f.auto()
            },
            active: function(n, t) {
                var i, o, s;
                this.doCss() && r.mode === "fade" && f.addClass("on");
                i = 0;
                e * r.slideMove < w ? (n.removeClass("active"),
                this.doCss() || r.mode !== "fade" || t !== !1 || n.fadeOut(r.speed),
                i = t === !0 ? e : e * r.slideMove,
                t === !0 && (o = n.length,
                s = o - 1,
                i + 1 >= o && (i = s)),
                r.loop === !0 && r.mode === "slide" && (i = t === !0 ? e - u.find(".clone.left").length : e * r.slideMove,
                t === !0 && (o = n.length,
                s = o - 1,
                i + 1 === o ? i = s : i + 1 > o && (i = 0))),
                this.doCss() || r.mode !== "fade" || t !== !1 || n.eq(i).fadeIn(r.speed),
                n.eq(i).addClass("active")) : (n.removeClass("active"),
                n.eq(n.length - 1).addClass("active"),
                this.doCss() || r.mode !== "fade" || t !== !1 || (n.fadeOut(r.speed),
                n.eq(i).fadeIn(r.speed)))
            },
            move: function(n, t) {
                r.rtl === !0 && (t = -t);
                this.doCss() ? r.vertical === !0 ? n.css({
                    transform: "translate3d(0px, " + -t + "px, 0px)",
                    "-webkit-transform": "translate3d(0px, " + -t + "px, 0px)"
                }) : n.css({
                    transform: "translate3d(" + -t + "px, 0px, 0px)",
                    "-webkit-transform": "translate3d(" + -t + "px, 0px, 0px)"
                }) : r.vertical === !0 ? n.css("position", "relative").animate({
                    top: -t + "px"
                }, r.speed, r.easing) : n.css("position", "relative").animate({
                    left: -t + "px"
                }, r.speed, r.easing);
                var i = f.parent().find(".lSPager").find("li");
                this.active(i, !0)
            },
            fade: function() {
                this.active(s, !1);
                var n = f.parent().find(".lSPager").find("li");
                this.active(n, !0)
            },
            slide: function() {
                var n = this;
                h.calSlide = function() {
                    c > o && (l = n.slideValue(),
                    n.active(s, !1),
                    l > c - o - r.slideMargin ? l = c - o - r.slideMargin : l < 0 && (l = 0),
                    n.move(u, l),
                    r.loop === !0 && r.mode === "slide" && (e >= w - u.find(".clone.left").length / r.slideMove && n.resetSlide(u.find(".clone.left").length),
                    e === 0 && n.resetSlide(f.find(".lslide").length)))
                }
                ;
                h.calSlide()
            },
            resetSlide: function(n) {
                var t = this;
                f.find(".lSAction a").addClass("disabled");
                setTimeout(function() {
                    e = n;
                    f.css("transition-duration", "0ms");
                    l = t.slideValue();
                    t.active(s, !1);
                    a.move(u, l);
                    setTimeout(function() {
                        f.css("transition-duration", r.speed + "ms");
                        f.find(".lSAction a").removeClass("disabled")
                    }, 50)
                }, r.speed + 100)
            },
            slideValue: function() {
                var n = 0, t;
                if (r.autoWidth === !1)
                    n = e * (y + r.slideMargin) * r.slideMove;
                else
                    for (n = 0,
                    t = 0; t < e; t++)
                        n += parseInt(s.eq(t).width()) + r.slideMargin;
                return n
            },
            slideThumb: function() {
                var i, n, s, t;
                switch (r.currentPagerPosition) {
                case "left":
                    i = 0;
                    break;
                case "middle":
                    i = o / 2 - k / 2;
                    break;
                case "right":
                    i = o - k
                }
                n = e - u.find(".clone.left").length;
                s = f.parent().find(".lSPager");
                r.mode === "slide" && r.loop === !0 && (n >= s.children().length ? n = 0 : n < 0 && (n = s.children().length));
                t = n * (k + r.thumbMargin) - i;
                t + o > d && (t = d - o - r.thumbMargin);
                t < 0 && (t = 0);
                this.move(s, t)
            },
            auto: function() {
                r.auto && (clearInterval(v),
                v = setInterval(function() {
                    u.goToNextSlide()
                }, r.pause))
            },
            pauseOnHover: function() {
                var t = this;
                if (r.auto && r.pauseOnHover) {
                    f.on("mouseenter", function() {
                        n(this).addClass("ls-hover");
                        u.pause();
                        r.auto = !0
                    });
                    f.on("mouseleave", function() {
                        n(this).removeClass("ls-hover");
                        f.find(".lightSlider").hasClass("lsGrabbing") || t.auto()
                    })
                }
            },
            touchMove: function(n, t) {
                var s, i, e;
                f.css("transition-duration", "0ms");
                r.mode === "slide" && (s = n - t,
                i = l - s,
                i >= c - o - r.slideMargin ? r.freeMove === !1 ? i = c - o - r.slideMargin : (e = c - o - r.slideMargin,
                i = e + (i - e) / 5) : i < 0 && (i = r.freeMove === !1 ? 0 : i / 5),
                this.move(u, i))
            },
            touchEnd: function(n) {
                var i, t, h;
                f.css("transition-duration", r.speed + "ms");
                r.mode === "slide" ? (i = !1,
                t = !0,
                l = l - n,
                l > c - o - r.slideMargin ? (l = c - o - r.slideMargin,
                r.autoWidth === !1 && (i = !0)) : l < 0 && (l = 0),
                h = function(n) {
                    var u = 0, f, h, t;
                    if (i || n && (u = 1),
                    r.autoWidth) {
                        for (h = 0,
                        t = 0; t < s.length; t++)
                            if (h += parseInt(s.eq(t).width()) + r.slideMargin,
                            e = t + u,
                            h >= l)
                                break
                    } else
                        f = l / ((y + r.slideMargin) * r.slideMove),
                        e = parseInt(f) + u,
                        l >= c - o - r.slideMargin && f % 1 != 0 && e++
                }
                ,
                n >= r.swipeThreshold ? (h(!1),
                t = !1) : n <= -r.swipeThreshold && (h(!0),
                t = !1),
                u.mode(t),
                this.slideThumb()) : n >= r.swipeThreshold ? u.goToPrevSlide() : n <= -r.swipeThreshold && u.goToNextSlide()
            },
            enableDrag: function() {
                var e = this;
                if (!rt) {
                    var u = 0
                      , t = 0
                      , i = !1;
                    f.find(".lightSlider").addClass("lsGrab");
                    f.on("mousedown", function(t) {
                        if (c < o && c !== 0)
                            return !1;
                        n(t.target).attr("class") !== "lSPrev" && n(t.target).attr("class") !== "lSNext" && (u = r.vertical === !0 ? t.pageY : t.pageX,
                        i = !0,
                        t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                        f.scrollLeft += 1,
                        f.scrollLeft -= 1,
                        f.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),
                        clearInterval(v))
                    });
                    n(window).on("mousemove", function(n) {
                        i && (t = r.vertical === !0 ? n.pageY : n.pageX,
                        e.touchMove(t, u))
                    });
                    n(window).on("mouseup", function(o) {
                        if (i) {
                            f.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab");
                            i = !1;
                            t = r.vertical === !0 ? o.pageY : o.pageX;
                            var s = t - u;
                            if (Math.abs(s) >= r.swipeThreshold)
                                n(window).on("click.ls", function(t) {
                                    t.preventDefault ? t.preventDefault() : t.returnValue = !1;
                                    t.stopImmediatePropagation();
                                    t.stopPropagation();
                                    n(window).off("click.ls")
                                });
                            e.touchEnd(s)
                        }
                    })
                }
            },
            enableTouch: function() {
                var i = this, n, t;
                if (rt) {
                    n = {};
                    t = {};
                    f.on("touchstart", function(i) {
                        t = i.originalEvent.targetTouches[0];
                        n.pageX = i.originalEvent.targetTouches[0].pageX;
                        n.pageY = i.originalEvent.targetTouches[0].pageY;
                        clearInterval(v)
                    });
                    f.on("touchmove", function(u) {
                        var s, f, e;
                        if (c < o && c !== 0)
                            return !1;
                        s = u.originalEvent;
                        t = s.targetTouches[0];
                        f = Math.abs(t.pageX - n.pageX);
                        e = Math.abs(t.pageY - n.pageY);
                        r.vertical === !0 ? (e * 3 > f && u.preventDefault(),
                        i.touchMove(t.pageY, n.pageY)) : (f * 3 > e && u.preventDefault(),
                        i.touchMove(t.pageX, n.pageX))
                    });
                    f.on("touchend", function() {
                        if (c < o && c !== 0)
                            return !1;
                        var u;
                        u = r.vertical === !0 ? t.pageY - n.pageY : t.pageX - n.pageX;
                        i.touchEnd(u)
                    })
                }
            },
            build: function() {
                var t = this;
                t.initialStyle();
                this.doCss() && (r.enableTouch === !0 && t.enableTouch(),
                r.enableDrag === !0 && t.enableDrag());
                n(window).on("focus", function() {
                    t.auto()
                });
                n(window).on("blur", function() {
                    clearInterval(v)
                });
                t.pager();
                t.pauseOnHover();
                t.controls();
                t.keyPress()
            }
        };
        a.build();
        h.init = function() {
            h.chbreakpoint();
            r.vertical === !0 ? (o = r.item > 1 ? r.verticalHeight : s.outerHeight(),
            f.css("height", o + "px")) : o = f.outerWidth();
            r.loop === !0 && r.mode === "slide" && h.clone();
            h.calL();
            r.mode === "slide" && u.removeClass("lSSlide");
            r.mode === "slide" && (h.calSW(),
            h.sSW());
            setTimeout(function() {
                r.mode === "slide" && u.addClass("lSSlide")
            }, 1e3);
            r.pager && h.createPager();
            r.adaptiveHeight === !0 && r.vertical === !1 && u.css("height", s.eq(e).outerHeight(!0));
            r.adaptiveHeight === !1 && (r.mode === "slide" ? r.vertical === !1 ? a.setHeight(u, !1) : a.auto() : a.setHeight(u, !0));
            r.gallery === !0 && a.slideThumb();
            r.mode === "slide" && a.slide();
            r.autoWidth === !1 ? s.length <= r.item ? f.find(".lSAction").hide() : f.find(".lSAction").show() : h.calWidth(!1) < o && c !== 0 ? f.find(".lSAction").hide() : f.find(".lSAction").show()
        }
        ;
        u.goToPrevSlide = function() {
            if (e > 0)
                r.onBeforePrevSlide.call(this, u, e),
                e--,
                u.mode(!1),
                r.gallery === !0 && a.slideThumb();
            else if (r.loop === !0) {
                if (r.onBeforePrevSlide.call(this, u, e),
                r.mode === "fade") {
                    var n = w - 1;
                    e = parseInt(n / r.slideMove)
                }
                u.mode(!1);
                r.gallery === !0 && a.slideThumb()
            } else
                r.slideEndAnimation === !0 && (u.addClass("leftEnd"),
                setTimeout(function() {
                    u.removeClass("leftEnd")
                }, 400))
        }
        ;
        u.goToNextSlide = function() {
            var n = !0, t;
            r.mode === "slide" && (t = a.slideValue(),
            n = t < c - o - r.slideMargin);
            e * r.slideMove < w - r.slideMove && n ? (r.onBeforeNextSlide.call(this, u, e),
            e++,
            u.mode(!1),
            r.gallery === !0 && a.slideThumb()) : r.loop === !0 ? (r.onBeforeNextSlide.call(this, u, e),
            e = 0,
            u.mode(!1),
            r.gallery === !0 && a.slideThumb()) : r.slideEndAnimation === !0 && (u.addClass("rightEnd"),
            setTimeout(function() {
                u.removeClass("rightEnd")
            }, 400))
        }
        ;
        u.mode = function(n) {
            r.adaptiveHeight === !0 && r.vertical === !1 && u.css("height", s.eq(e).outerHeight(!0));
            nt === !1 && (r.mode === "slide" ? a.doCss() && (u.addClass("lSSlide"),
            r.speed !== "" && f.css("transition-duration", r.speed + "ms"),
            r.cssEasing !== "" && f.css("transition-timing-function", r.cssEasing)) : a.doCss() && (r.speed !== "" && u.css("transition-duration", r.speed + "ms"),
            r.cssEasing !== "" && u.css("transition-timing-function", r.cssEasing)));
            n || r.onBeforeSlide.call(this, u, e);
            r.mode === "slide" ? a.slide() : a.fade();
            f.hasClass("ls-hover") || a.auto();
            setTimeout(function() {
                n || r.onAfterSlide.call(this, u, e)
            }, r.speed);
            nt = !0
        }
        ;
        u.play = function() {
            u.goToNextSlide();
            r.auto = !0;
            a.auto()
        }
        ;
        u.pause = function() {
            r.auto = !1;
            clearInterval(v)
        }
        ;
        u.refresh = function() {
            h.init()
        }
        ;
        u.getCurrentSlideCount = function() {
            var i = e, t, n;
            return r.loop && (t = f.find(".lslide").length,
            n = u.find(".clone.left").length,
            i = e <= n - 1 ? t + (e - n) : e >= t + n ? e - t - n : e - n),
            i + 1
        }
        ;
        u.getTotalSlideCount = function() {
            return f.find(".lslide").length
        }
        ;
        u.goToSlide = function(n) {
            e = r.loop ? n + u.find(".clone.left").length - 1 : n;
            u.mode(!1);
            r.gallery === !0 && a.slideThumb()
        }
        ;
        u.destroy = function() {
            u.lightSlider && (u.goToPrevSlide = function() {}
            ,
            u.goToNextSlide = function() {}
            ,
            u.mode = function() {}
            ,
            u.play = function() {}
            ,
            u.pause = function() {}
            ,
            u.refresh = function() {}
            ,
            u.getCurrentSlideCount = function() {}
            ,
            u.getTotalSlideCount = function() {}
            ,
            u.goToSlide = function() {}
            ,
            u.lightSlider = null,
            h = {
                init: function() {}
            },
            u.parent().parent().find(".lSAction, .lSPager").remove(),
            u.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),
            u.children().removeAttr("style"),
            s.removeClass("lslide active"),
            u.find(".clone").remove(),
            s = null,
            v = null,
            nt = !1,
            e = 0)
        }
        ;
        setTimeout(function() {
            r.onSliderLoad.call(this, u)
        }, 10);
        n(window).on("resize orientationchange", function(n) {
            setTimeout(function() {
                n.preventDefault ? n.preventDefault() : n.returnValue = !1;
                h.init()
            }, 200)
        });
        return this
    }
}
)(jQuery);
jQuery.trumbowyg = {
    langs: {
        en: {
            viewHTML: "View HTML",
            undo: "Undo",
            redo: "Redo",
            formatting: "Formatting",
            p: "Paragraph",
            blockquote: "Quote",
            code: "Code",
            header: "Header",
            bold: "Bold",
            italic: "Italic",
            strikethrough: "Strikethrough",
            underline: "Underline",
            strong: "Strong",
            em: "Emphasis",
            del: "Deleted",
            superscript: "Superscript",
            subscript: "Subscript",
            unorderedList: "Unordered list",
            orderedList: "Ordered list",
            insertImage: "Insert Image",
            link: "Link",
            createLink: "Insert link",
            unlink: "Remove link",
            justifyLeft: "Align Left",
            justifyCenter: "Align Center",
            justifyRight: "Align Right",
            justifyFull: "Align Justify",
            horizontalRule: "Insert horizontal rule",
            removeformat: "Remove format",
            fullscreen: "Fullscreen",
            close: "Close",
            submit: "Confirm",
            reset: "Cancel",
            required: "Required",
            description: "Description",
            title: "Title",
            text: "Text",
            target: "Target",
            width: "Width"
        }
    },
    plugins: {},
    svgPath: null,
    hideButtonTexts: null
};
Object.defineProperty(jQuery.trumbowyg, "defaultOptions", {
    value: {
        lang: "en",
        fixedBtnPane: !1,
        fixedFullWidth: !1,
        autogrow: !1,
        autogrowOnEnter: !1,
        imageWidthModalEdit: !1,
        prefix: "trumbowyg-",
        semantic: !0,
        semanticKeepAttributes: !1,
        resetCss: !1,
        removeformatPasted: !1,
        tabToIndent: !1,
        tagsToRemove: [],
        tagsToKeep: ["hr", "img", "embed", "iframe", "input"],
        btns: [["viewHTML"], ["undo", "redo"], ["formatting"], ["strong", "em", "del"], ["superscript", "subscript"], ["link"], ["insertImage"], ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"], ["unorderedList", "orderedList"], ["horizontalRule"], ["removeformat"], ["fullscreen"]],
        btnsDef: {},
        changeActiveDropdownIcon: !1,
        inlineElementsSelector: "a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u",
        pasteHandlers: [],
        plugins: {},
        urlProtocol: !1,
        minimalLinks: !1
    },
    writable: !1,
    enumerable: !0,
    configurable: !1
}),
function(n, t, i, r) {
    "use strict";
    var u = "tbwconfirm", f = "tbwcancel", e;
    r.fn.trumbowyg = function(n, t) {
        var u = "trumbowyg", i;
        if (n === Object(n) || !n)
            return this.each(function() {
                r(this).data(u) || r(this).data(u, new e(this,n))
            });
        if (1 === this.length)
            try {
                i = r(this).data(u);
                switch (n) {
                case "execCmd":
                    return i.execCmd(t.cmd, t.param, t.forceCss);
                case "openModal":
                    return i.openModal(t.title, t.content);
                case "closeModal":
                    return i.closeModal();
                case "openModalInsert":
                    return i.openModalInsert(t.title, t.fields, t.callback);
                case "saveRange":
                    return i.saveRange();
                case "getRange":
                    return i.range;
                case "getRangeText":
                    return i.getRangeText();
                case "restoreRange":
                    return i.restoreRange();
                case "enable":
                    return i.setDisabled(!1);
                case "disable":
                    return i.setDisabled(!0);
                case "toggle":
                    return i.toggle();
                case "destroy":
                    return i.destroy();
                case "empty":
                    return i.empty();
                case "html":
                    return i.html(t)
                }
            } catch (f) {}
        return !1
    }
    ;
    e = function(u, f) {
        var e = this, w = "trumbowyg-icons", o = r.trumbowyg, s, v, c, l, y, a, h, p;
        if (e.doc = u.ownerDocument || i,
        e.$ta = r(u),
        e.$c = r(u),
        f = f || {},
        e.lang = null != f.lang || null != o.langs[f.lang] ? r.extend(!0, {}, o.langs.en, o.langs[f.lang]) : o.langs.en,
        e.hideButtonTexts = null != o.hideButtonTexts ? o.hideButtonTexts : f.hideButtonTexts,
        s = null != o.svgPath ? o.svgPath : f.svgPath,
        e.hasSvg = s !== !1,
        e.svgPath = e.doc.querySelector("base") ? t.location.href.split("#")[0] : "",
        0 === r("#" + w, e.doc).length && s !== !1) {
            if (null == s) {
                for (v = i.getElementsByTagName("script"),
                c = 0; c < v.length; c += 1)
                    l = v[c].src,
                    y = l.match("trumbowyg(.min)?.js"),
                    null != y && (s = l.substring(0, l.indexOf(y[0])) + "ui/icons.svg");
                null == s && console.warn("You must define svgPath: https://goo.gl/CfTY9U")
            }
            a = e.doc.createElement("div");
            a.id = w;
            e.doc.body.insertBefore(a, e.doc.body.childNodes[0]);
            r.ajax({
                "async": !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                dataType: "xml",
                crossDomain: !0,
                url: s,
                data: null,
                beforeSend: null,
                complete: null,
                success: function(n) {
                    a.innerHTML = (new XMLSerializer).serializeToString(n.documentElement)
                }
            })
        }
        h = e.lang.header;
        p = function() {
            return (t.chrome || t.Intl && Intl.v8BreakIterator) && "CSS"in t
        }
        ;
        e.btnsDef = {
            viewHTML: {
                fn: "toggle",
                "class": "trumbowyg-not-disable"
            },
            undo: {
                isSupported: p,
                key: "Z"
            },
            redo: {
                isSupported: p,
                key: "Y"
            },
            p: {
                fn: "formatBlock"
            },
            blockquote: {
                fn: "formatBlock"
            },
            h1: {
                fn: "formatBlock",
                title: h + " 1"
            },
            h2: {
                fn: "formatBlock",
                title: h + " 2"
            },
            h3: {
                fn: "formatBlock",
                title: h + " 3"
            },
            h4: {
                fn: "formatBlock",
                title: h + " 4"
            },
            h5: {
                fn: "formatBlock",
                title: h + " 5"
            },
            h6: {
                fn: "formatBlock",
                title: h + " 6"
            },
            subscript: {
                tag: "sub"
            },
            superscript: {
                tag: "sup"
            },
            bold: {
                key: "B",
                tag: "b"
            },
            italic: {
                key: "I",
                tag: "i"
            },
            underline: {
                tag: "u"
            },
            strikethrough: {
                tag: "strike"
            },
            strong: {
                fn: "bold",
                key: "B"
            },
            em: {
                fn: "italic",
                key: "I"
            },
            del: {
                fn: "strikethrough"
            },
            createLink: {
                key: "K",
                tag: "a"
            },
            unlink: {},
            insertImage: {},
            justifyLeft: {
                tag: "left",
                forceCss: !0
            },
            justifyCenter: {
                tag: "center",
                forceCss: !0
            },
            justifyRight: {
                tag: "right",
                forceCss: !0
            },
            justifyFull: {
                tag: "justify",
                forceCss: !0
            },
            unorderedList: {
                fn: "insertUnorderedList",
                tag: "ul"
            },
            orderedList: {
                fn: "insertOrderedList",
                tag: "ol"
            },
            horizontalRule: {
                fn: "insertHorizontalRule"
            },
            removeformat: {},
            fullscreen: {
                "class": "trumbowyg-not-disable"
            },
            close: {
                fn: "destroy",
                "class": "trumbowyg-not-disable"
            },
            formatting: {
                dropdown: ["p", "blockquote", "h1", "h2", "h3", "h4"],
                ico: "p"
            },
            link: {
                dropdown: ["createLink", "unlink"]
            }
        };
        e.o = r.extend(!0, {}, o.defaultOptions, f);
        e.o.hasOwnProperty("imgDblClickHandler") || (e.o.imgDblClickHandler = e.getDefaultImgDblClickHandler());
        e.urlPrefix = e.setupUrlPrefix();
        e.disabled = e.o.disabled || "TEXTAREA" === u.nodeName && u.disabled;
        f.btns ? e.o.btns = f.btns : e.o.semantic || (e.o.btns[3] = ["bold", "italic", "underline", "strikethrough"]);
        r.each(e.o.btnsDef, function(n, t) {
            e.addBtnDef(n, t)
        });
        e.eventNamespace = "trumbowyg-event";
        e.keys = [];
        e.tagToButton = {};
        e.tagHandlers = [];
        e.pasteHandlers = [].concat(e.o.pasteHandlers);
        e.isIE = n.userAgent.indexOf("MSIE") !== -1 || n.appVersion.indexOf("Trident/") !== -1;
        e.isMac = n.platform.toUpperCase().indexOf("MAC") !== -1;
        e.init()
    }
    ;
    e.prototype = {
        DEFAULT_SEMANTIC_MAP: {
            b: "strong",
            i: "em",
            s: "del",
            strike: "del",
            div: "p"
        },
        init: function() {
            var n = this;
            n.height = n.$ta.height();
            n.initPlugins();
            try {
                n.doc.execCommand("enableObjectResizing", !1, !1);
                n.doc.execCommand("defaultParagraphSeparator", !1, "p")
            } catch (t) {}
            n.buildEditor();
            n.buildBtnPane();
            n.fixedBtnPaneEvents();
            n.buildOverlay();
            setTimeout(function() {
                n.disabled && n.setDisabled(!0);
                n.$c.trigger("tbwinit")
            })
        },
        addBtnDef: function(n, t) {
            this.btnsDef[n] = r.extend(t, this.btnsDef[n] || {})
        },
        setupUrlPrefix: function() {
            var n = this.o.urlProtocol;
            if (n)
                return "string" != typeof n ? "https://" : n.replace("://", "") + "://"
        },
        buildEditor: function() {
            var n = this
              , i = n.o.prefix
              , u = "";
            n.$box = r("<div/>", {
                "class": i + "box " + i + "editor-visible " + i + n.o.lang + " trumbowyg"
            });
            n.isTextarea = n.$ta.is("textarea");
            n.isTextarea ? (u = n.$ta.val(),
            n.$ed = r("<div/>"),
            n.$box.insertAfter(n.$ta).append(n.$ed, n.$ta)) : (n.$ed = n.$ta,
            u = n.$ed.html(),
            n.$ta = r("<textarea/>", {
                name: n.$ta.attr("id"),
                height: n.height
            }).val(u),
            n.$box.insertAfter(n.$ed).append(n.$ta, n.$ed),
            n.syncCode());
            n.$ta.addClass(i + "textarea").attr("tabindex", -1);
            n.$ed.addClass(i + "editor").attr({
                contenteditable: !0,
                dir: n.lang._dir || "ltr"
            }).html(u);
            n.o.tabindex && n.$ed.attr("tabindex", n.o.tabindex);
            n.$c.is("[placeholder]") && n.$ed.attr("placeholder", n.$c.attr("placeholder"));
            n.$c.is("[spellcheck]") && n.$ed.attr("spellcheck", n.$c.attr("spellcheck"));
            n.o.resetCss && n.$ed.addClass(i + "reset-css");
            n.o.autogrow || n.$ta.add(n.$ed).css({
                height: n.height
            });
            n.semanticCode();
            n.o.autogrowOnEnter && n.$ed.addClass(i + "autogrow-on-enter");
            var o, f = !1, e = !1;
            n.$ed.on("dblclick", "img", n.o.imgDblClickHandler).on("keydown", function(t) {
                if ((t.ctrlKey || t.metaKey) && !t.altKey) {
                    f = !0;
                    var i = n.keys[String.fromCharCode(t.which).toUpperCase()];
                    try {
                        return n.execCmd(i.fn, i.param),
                        !1
                    } catch (r) {}
                } else if (n.o.tabToIndent && "Tab" === t.key)
                    try {
                        return t.shiftKey ? n.execCmd("outdent", !0, null) : n.execCmd("indent", !0, null),
                        !1
                    } catch (r) {}
            }).on("compositionstart compositionupdate", function() {
                e = !0
            }).on("keyup compositionend", function(t) {
                var i, r;
                if ("compositionend" === t.type)
                    e = !1;
                else if (e)
                    return;
                i = t.which;
                i >= 37 && i <= 40 || ((t.ctrlKey || t.metaKey) && (89 === i || 90 === i) ? (n.semanticCode(!1, !0),
                n.$c.trigger("tbwchange")) : f || 17 === i ? "undefined" == typeof t.which && n.semanticCode(!1, !1, !0) : (r = !n.isIE || "compositionend" === t.type,
                n.semanticCode(!1, r && 13 === i),
                n.$c.trigger("tbwchange")),
                setTimeout(function() {
                    f = !1
                }, 50))
            }).on("mouseup keydown keyup", function(t) {
                (t.ctrlKey || t.metaKey) && !t.altKey || setTimeout(function() {
                    f = !1
                }, 50);
                clearTimeout(o);
                o = setTimeout(function() {
                    n.updateButtonPaneStatus()
                }, 50)
            }).on("focus blur", function(t) {
                if (n.$c.trigger("tbw" + t.type),
                "blur" === t.type && n.clearButtonPaneStatus(),
                n.o.autogrowOnEnter) {
                    if (n.autogrowOnEnterDontClose)
                        return;
                    "focus" === t.type ? (n.autogrowOnEnterWasFocused = !0,
                    n.autogrowEditorOnEnter()) : n.o.autogrow || (n.$ed.css({
                        height: n.$ed.css("min-height")
                    }),
                    n.$c.trigger("tbwresize"))
                }
            }).on("cut drop", function() {
                setTimeout(function() {
                    n.semanticCode(!1, !0);
                    n.$c.trigger("tbwchange")
                }, 0)
            }).on("paste", function(i) {
                if (n.o.removeformatPasted) {
                    i.preventDefault();
                    t.getSelection && t.getSelection().deleteFromDocument && t.getSelection().deleteFromDocument();
                    try {
                        var u = t.clipboardData.getData("Text");
                        try {
                            n.doc.selection.createRange().pasteHTML(u)
                        } catch (f) {
                            n.doc.getSelection().getRangeAt(0).insertNode(n.doc.createTextNode(u))
                        }
                        n.$c.trigger("tbwchange", i)
                    } catch (e) {
                        n.execCmd("insertText", (i.originalEvent || i).clipboardData.getData("text/plain"))
                    }
                }
                r.each(n.pasteHandlers, function(n, t) {
                    t(i)
                });
                setTimeout(function() {
                    n.semanticCode(!1, !0);
                    n.$c.trigger("tbwpaste", i);
                    n.$c.trigger("tbwchange")
                }, 0)
            });
            n.$ta.on("keyup", function() {
                n.$c.trigger("tbwchange")
            }).on("paste", function() {
                setTimeout(function() {
                    n.$c.trigger("tbwchange")
                }, 0)
            });
            n.$box.on("keydown", function(t) {
                if (27 === t.which && 1 === r("." + i + "modal-box", n.$box).length)
                    return n.closeModal(),
                    !1
            })
        },
        autogrowEditorOnEnter: function() {
            var n = this, t, i;
            n.$ed.removeClass("autogrow-on-enter");
            t = n.$ed[0].clientHeight;
            n.$ed.height("auto");
            i = n.$ed[0].scrollHeight;
            n.$ed.addClass("autogrow-on-enter");
            t !== i && (n.$ed.height(t),
            setTimeout(function() {
                n.$ed.css({
                    height: i
                });
                n.$c.trigger("tbwresize")
            }, 0))
        },
        buildBtnPane: function() {
            var n = this
              , t = n.o.prefix
              , i = n.$btnPane = r("<div/>", {
                "class": t + "button-pane"
            });
            r.each(n.o.btns, function(u, f) {
                r.isArray(f) || (f = [f]);
                var e = r("<div/>", {
                    "class": t + "button-group " + (f.indexOf("fullscreen") >= 0 ? t + "right" : "")
                });
                r.each(f, function(t, i) {
                    try {
                        n.isSupportedBtn(i) && e.append(n.buildBtn(i))
                    } catch (r) {}
                });
                e.html().trim().length > 0 && i.append(e)
            });
            n.$box.prepend(i)
        },
        buildBtn: function(n) {
            var i = this, u = i.o.prefix, t = i.btnsDef[n], f = t.dropdown, h = null == t.hasIcon || t.hasIcon, l = i.lang[n] || n, c = r("<button/>", {
                type: "button",
                "class": u + n + "-button " + (t["class"] || "") + (h ? "" : " " + u + "textual-button"),
                html: i.hasSvg && h ? '<svg><use xlink:href="' + i.svgPath + "#" + u + (t.ico || n).replace(/([A-Z]+)/g, "-$1").toLowerCase() + '"/><\/svg>' : i.hideButtonTexts ? "" : t.text || t.title || i.lang[n] || n,
                title: (t.title || t.text || l) + (t.key ? " (" + (i.isMac ? "Cmd" : "Ctrl") + " + " + t.key + ")" : ""),
                tabindex: -1,
                mousedown: function() {
                    return f && !r("." + n + "-" + u + "dropdown", i.$box).is(":hidden") || r("body", i.doc).trigger("mousedown"),
                    !((i.$btnPane.hasClass(u + "disable") || i.$box.hasClass(u + "disabled")) && !r(this).hasClass(u + "active") && !r(this).hasClass(u + "not-disable")) && (i.execCmd(!!f && "dropdown" || t.fn || n, t.param || n, t.forceCss),
                    !1)
                }
            }), e, o, s;
            return f ? (c.addClass(u + "open-dropdown"),
            e = u + "dropdown",
            o = {
                "class": e + "-" + n + " " + e + " " + u + "fixed-top " + (t.dropdownClass || "")
            },
            o["data-" + e] = n,
            s = r("<div/>", o),
            r.each(f, function(n, t) {
                i.btnsDef[t] && i.isSupportedBtn(t) && s.append(i.buildSubBtn(t))
            }),
            i.$box.append(s.hide())) : t.key && (i.keys[t.key] = {
                fn: t.fn || n,
                param: t.param || n
            }),
            f || (i.tagToButton[(t.tag || n).toLowerCase()] = n),
            c
        },
        buildSubBtn: function(n) {
            var i = this
              , u = i.o.prefix
              , t = i.btnsDef[n]
              , f = null == t.hasIcon || t.hasIcon;
            return t.key && (i.keys[t.key] = {
                fn: t.fn || n,
                param: t.param || n
            }),
            i.tagToButton[(t.tag || n).toLowerCase()] = n,
            r("<button/>", {
                type: "button",
                "class": u + n + "-dropdown-button " + (t["class"] || "") + (t.ico ? " " + u + t.ico + "-button" : ""),
                html: i.hasSvg && f ? '<svg><use xlink:href="' + i.svgPath + "#" + u + (t.ico || n).replace(/([A-Z]+)/g, "-$1").toLowerCase() + '"/><\/svg>' + (t.text || t.title || i.lang[n] || n) : t.text || t.title || i.lang[n] || n,
                title: t.key ? "(" + (i.isMac ? "Cmd" : "Ctrl") + " + " + t.key + ")" : null,
                style: t.style || null,
                mousedown: function() {
                    return r("body", i.doc).trigger("mousedown"),
                    i.execCmd(t.fn || n, t.param || n, t.forceCss),
                    !1
                }
            })
        },
        isSupportedBtn: function(n) {
            try {
                return this.btnsDef[n].isSupported()
            } catch (t) {}
            return !0
        },
        buildOverlay: function() {
            var n = this;
            return n.$overlay = r("<div/>", {
                "class": n.o.prefix + "overlay"
            }).appendTo(n.$box),
            n.$overlay
        },
        showOverlay: function() {
            var n = this;
            r(t).trigger("scroll");
            n.$overlay.fadeIn(200);
            n.$box.addClass(n.o.prefix + "box-blur")
        },
        hideOverlay: function() {
            var n = this;
            n.$overlay.fadeOut(50);
            n.$box.removeClass(n.o.prefix + "box-blur")
        },
        fixedBtnPaneEvents: function() {
            var n = this
              , u = n.o.fixedFullWidth
              , i = n.$box;
            n.o.fixedBtnPane && (n.isFixed = !1,
            r(t).on("scroll." + n.eventNamespace + " resize." + n.eventNamespace, function() {
                if (i) {
                    n.syncCode();
                    var e = r(t).scrollTop()
                      , o = i.offset().top + 1
                      , f = n.$btnPane
                      , s = f.outerHeight() - 2;
                    e - o > 0 && e - o - n.height < 0 ? (n.isFixed || (n.isFixed = !0,
                    f.css({
                        position: "fixed",
                        top: 0,
                        left: u ? 0 : "auto",
                        zIndex: 7
                    }),
                    n.$box.css({
                        paddingTop: f.height()
                    })),
                    f.css({
                        width: u ? "100%" : i.width() - 1
                    }),
                    r("." + n.o.prefix + "fixed-top", i).css({
                        position: u ? "fixed" : "absolute",
                        top: u ? s : s + (e - o),
                        zIndex: 15
                    })) : n.isFixed && (n.isFixed = !1,
                    f.removeAttr("style"),
                    n.$box.css({
                        paddingTop: 0
                    }),
                    r("." + n.o.prefix + "fixed-top", i).css({
                        position: "absolute",
                        top: s
                    }))
                }
            }))
        },
        setDisabled: function(n) {
            var t = this
              , i = t.o.prefix;
            t.disabled = n;
            n ? t.$ta.attr("disabled", !0) : t.$ta.removeAttr("disabled");
            t.$box.toggleClass(i + "disabled", n);
            t.$ed.attr("contenteditable", !n)
        },
        destroy: function() {
            var n = this
              , i = n.o.prefix;
            n.isTextarea ? n.$box.after(n.$ta.css({
                height: ""
            }).val(n.html()).removeClass(i + "textarea").show()) : n.$box.after(n.$ed.css({
                height: ""
            }).removeClass(i + "editor").removeAttr("contenteditable").removeAttr("dir").html(n.html()).show());
            n.$ed.off("dblclick", "img");
            n.destroyPlugins();
            n.$box.remove();
            n.$c.removeData("trumbowyg");
            r("body").removeClass(i + "body-fullscreen");
            n.$c.trigger("tbwclose");
            r(t).off("scroll." + n.eventNamespace + " resize." + n.eventNamespace)
        },
        empty: function() {
            this.$ta.val("");
            this.syncCode(!0)
        },
        toggle: function() {
            var n = this
              , t = n.o.prefix;
            n.o.autogrowOnEnter && (n.autogrowOnEnterDontClose = !n.$box.hasClass(t + "editor-hidden"));
            n.semanticCode(!1, !0);
            setTimeout(function() {
                n.doc.activeElement.blur();
                n.$box.toggleClass(t + "editor-hidden " + t + "editor-visible");
                n.$btnPane.toggleClass(t + "disable");
                r("." + t + "viewHTML-button", n.$btnPane).toggleClass(t + "active");
                n.$box.hasClass(t + "editor-visible") ? n.$ta.attr("tabindex", -1) : n.$ta.removeAttr("tabindex");
                n.o.autogrowOnEnter && !n.autogrowOnEnterDontClose && n.autogrowEditorOnEnter()
            }, 0)
        },
        dropdown: function(n) {
            var i = this, e = r("body", i.doc), u = i.o.prefix, o = r("[data-" + u + "dropdown=" + n + "]", i.$box), f = r("." + u + n + "-button", i.$btnPane), h = o.is(":hidden"), s;
            (e.trigger("mousedown"),
            h) && (s = f.offset().left,
            f.addClass(u + "active"),
            o.css({
                position: "absolute",
                top: f.offset().top - i.$btnPane.offset().top + f.outerHeight(),
                left: i.o.fixedFullWidth && i.isFixed ? s : s - i.$btnPane.offset().left
            }).show(),
            r(t).trigger("scroll"),
            e.on("mousedown." + i.eventNamespace, function(n) {
                o.is(n.target) || (r("." + u + "dropdown", i.$box).hide(),
                r("." + u + "active", i.$btnPane).removeClass(u + "active"),
                e.off("mousedown." + i.eventNamespace))
            }))
        },
        html: function(n) {
            var t = this;
            return null != n ? (t.$ta.val(n),
            t.syncCode(!0),
            t.$c.trigger("tbwchange"),
            t) : t.$ta.val()
        },
        syncTextarea: function() {
            var n = this;
            n.$ta.val(n.$ed.text().trim().length > 0 || n.$ed.find(n.o.tagsToKeep.join(",")).length > 0 ? n.$ed.html() : "")
        },
        syncCode: function(n) {
            var t = this, f, i, u;
            !n && t.$ed.is(":visible") ? t.syncTextarea() : (f = r("<div>").html(t.$ta.val()),
            i = r("<div>").append(f),
            r(t.o.tagsToRemove.join(","), i).remove(),
            t.$ed.html(i.contents().html()));
            (t.o.autogrow && (t.height = t.$ed.height(),
            t.height !== t.$ta.css("height") && (t.$ta.css({
                height: t.height
            }),
            t.$c.trigger("tbwresize"))),
            t.o.autogrowOnEnter) && (t.$ed.height("auto"),
            u = t.autogrowOnEnterWasFocused ? t.$ed[0].scrollHeight : t.$ed.css("min-height"),
            u !== t.$ta.css("height") && (t.$ed.css({
                height: u
            }),
            t.$c.trigger("tbwresize")))
        },
        semanticCode: function(n, t, i) {
            var u = this, f, o, e;
            (u.saveRange(),
            u.syncCode(n),
            u.o.semantic) && ((u.semanticTag("b", u.o.semanticKeepAttributes),
            u.semanticTag("i", u.o.semanticKeepAttributes),
            u.semanticTag("s", u.o.semanticKeepAttributes),
            u.semanticTag("strike", u.o.semanticKeepAttributes),
            t) && (f = u.o.inlineElementsSelector,
            o = ":not(" + f + ")",
            u.$ed.contents().filter(function() {
                return 3 === this.nodeType && this.nodeValue.trim().length > 0
            }).wrap("<span data-tbw/>"),
            e = function e(n) {
                if (0 !== n.length) {
                    var t = n.nextUntil(o).addBack().wrapAll("<p/>").parent()
                      , i = t.nextAll(f).first();
                    t.next("br").remove();
                    e(i)
                }
            }
            ,
            e(u.$ed.children(f).first()),
            u.semanticTag("div", !0),
            u.$ed.find("p").filter(function() {
                return (!u.range || this !== u.range.startContainer) && 0 === r(this).text().trim().length && 0 === r(this).children().not("br,span").length
            }).contents().unwrap(),
            r("[data-tbw]", u.$ed).contents().unwrap(),
            u.$ed.find("p:empty").remove()),
            i || u.restoreRange(),
            u.syncTextarea())
        },
        semanticTag: function(n, t) {
            var i;
            if (null != this.o.semantic && "object" == typeof this.o.semantic && this.o.semantic.hasOwnProperty(n))
                i = this.o.semantic[n];
            else {
                if (this.o.semantic !== !0 || !this.DEFAULT_SEMANTIC_MAP.hasOwnProperty(n))
                    return;
                i = this.DEFAULT_SEMANTIC_MAP[n]
            }
            r(n, this.$ed).each(function() {
                var n = r(this);
                return 0 !== n.contents().length && (n.wrap("<" + i + "/>"),
                t && r.each(n.prop("attributes"), function() {
                    n.parent().attr(this.name, this.value)
                }),
                void n.contents().unwrap())
            })
        },
        createLink: function() {
            for (var i, f, e, o, s, h, n = this, u = n.doc.getSelection(), t = u.focusNode, c = (new XMLSerializer).serializeToString(u.getRangeAt(0).cloneContents()); ["A", "DIV"].indexOf(t.nodeName) < 0; )
                t = t.parentNode;
            t && "A" === t.nodeName && (i = r(t),
            c = i.text(),
            o = i.attr("href"),
            n.o.minimalLinks || (s = i.attr("title"),
            h = i.attr("target")),
            f = n.doc.createRange(),
            f.selectNode(t),
            u.removeAllRanges(),
            u.addRange(f));
            n.saveRange();
            e = {
                url: {
                    label: "URL",
                    required: !0,
                    value: o
                },
                text: {
                    label: n.lang.text,
                    value: c
                }
            };
            n.o.minimalLinks || Object.assign(e, {
                title: {
                    label: n.lang.title,
                    value: s
                },
                target: {
                    label: n.lang.target,
                    value: h
                }
            });
            n.openModalInsert(n.lang.createLink, e, function(t) {
                var u = n.prependUrlPrefix(t.url), i;
                return u.length ? (i = r(['<a href="', u, '">', t.text || t.url, "<\/a>"].join("")),
                n.o.minimalLinks || (t.title.length > 0 && i.attr("title", t.title),
                t.target.length > 0 && i.attr("target", t.target)),
                n.range.deleteContents(),
                n.range.insertNode(i[0]),
                n.syncCode(),
                n.$c.trigger("tbwchange"),
                !0) : !1
            })
        },
        prependUrlPrefix: function(n) {
            var t = this, i, r;
            return t.urlPrefix ? (i = /^([a-z][-+.a-z0-9]*:|\/|#)/i,
            i.test(n)) ? n : (r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            r.test(n) ? "mailto:" + n : t.urlPrefix + n) : n
        },
        unlink: function() {
            var i = this, t = i.doc.getSelection(), n = t.focusNode, r;
            if (t.isCollapsed) {
                for (; ["A", "DIV"].indexOf(n.nodeName) < 0; )
                    n = n.parentNode;
                n && "A" === n.nodeName && (r = i.doc.createRange(),
                r.selectNode(n),
                t.removeAllRanges(),
                t.addRange(r))
            }
            i.execCmd("unlink", void 0, void 0, !0)
        },
        insertImage: function() {
            var n = this, t;
            n.saveRange();
            t = {
                url: {
                    label: "URL",
                    required: !0
                },
                alt: {
                    label: n.lang.description,
                    value: n.getRangeText()
                }
            };
            n.o.imageWidthModalEdit && (t.width = {});
            n.openModalInsert(n.lang.insertImage, t, function(t) {
                n.execCmd("insertImage", t.url, !1, !0);
                var i = r('img[src="' + t.url + '"]:not([alt])', n.$box);
                return i.attr("alt", t.alt),
                n.o.imageWidthModalEdit && i.attr({
                    width: t.width
                }),
                n.syncCode(),
                n.$c.trigger("tbwchange"),
                !0
            })
        },
        fullscreen: function() {
            var i, n = this, f = n.o.prefix, u = f + "fullscreen", e = u + "-placeholder", o = n.$box.outerHeight();
            n.$box.toggleClass(u);
            i = n.$box.hasClass(u);
            i ? n.$box.before(r("<div/>", {
                "class": e
            }).css({
                height: o
            })) : r("." + e).remove();
            r("body").toggleClass(f + "body-fullscreen", i);
            r(t).trigger("scroll");
            n.$c.trigger("tbw" + (i ? "open" : "close") + "fullscreen")
        },
        execCmd: function(n, t, i, r) {
            var u = this;
            r = !!r || "";
            "dropdown" !== n && u.$ed.focus();
            try {
                u.doc.execCommand("styleWithCSS", !1, i || !1)
            } catch (f) {}
            try {
                u[n + r](t)
            } catch (f) {
                try {
                    n(t)
                } catch (i) {
                    "insertHorizontalRule" === n ? t = void 0 : "formatBlock" === n && u.isIE && (t = "<" + t + ">");
                    u.doc.execCommand(n, !1, t);
                    u.syncCode();
                    u.semanticCode(!1, !0)
                }
                "dropdown" !== n && (u.updateButtonPaneStatus(),
                u.$c.trigger("tbwchange"))
            }
        },
        openModal: function(n, i) {
            var e = this, s = e.o.prefix, o, c, h;
            if (r("." + s + "modal-box", e.$box).length > 0)
                return !1;
            e.o.autogrowOnEnter && (e.autogrowOnEnterDontClose = !0);
            e.saveRange();
            e.showOverlay();
            e.$btnPane.addClass(s + "disable");
            o = r("<div/>", {
                "class": s + "modal " + s + "fixed-top"
            }).css({
                top: e.$box.offset().top + e.$btnPane.height(),
                zIndex: 99999
            }).appendTo(r(e.doc.body));
            e.$overlay.one("click", function() {
                return o.trigger(f),
                !1
            });
            return c = r("<form/>", {
                action: "",
                html: i
            }).on("submit", function() {
                return o.trigger(u),
                !1
            }).on("reset", function() {
                return o.trigger(f),
                !1
            }).on("submit reset", function() {
                e.o.autogrowOnEnter && (e.autogrowOnEnterDontClose = !1)
            }),
            h = r("<div/>", {
                "class": s + "modal-box",
                html: c
            }).css({
                top: "-" + e.$btnPane.outerHeight(),
                opacity: 0
            }).appendTo(o).animate({
                top: 0,
                opacity: 1
            }, 100),
            r("<span/>", {
                text: n,
                "class": s + "modal-title"
            }).prependTo(h),
            o.height(h.outerHeight() + 10),
            r("input:first", h).focus(),
            e.buildModalBtn("submit", h),
            e.buildModalBtn("reset", h),
            r(t).trigger("scroll"),
            o
        },
        buildModalBtn: function(n, t) {
            var i = this
              , u = i.o.prefix;
            return r("<button/>", {
                "class": u + "modal-button " + u + "modal-" + n,
                type: n,
                text: i.lang[n] || n
            }).appendTo(r("form", t))
        },
        closeModal: function() {
            var n = this, i = n.o.prefix, t;
            n.$btnPane.removeClass(i + "disable");
            n.$overlay.off();
            t = r("." + i + "modal-box", r(n.doc.body));
            t.animate({
                top: "-" + t.height()
            }, 100, function() {
                t.parent().remove();
                n.hideOverlay()
            });
            n.restoreRange()
        },
        openModalInsert: function(n, t, i) {
            var e = this
              , h = e.o.prefix
              , o = e.lang
              , s = "";
            return r.each(t, function(n, t) {
                var i = t.label || n
                  , u = t.name || n
                  , r = t.attributes || {}
                  , f = Object.keys(r).map(function(n) {
                    return n + '="' + r[n] + '"'
                }).join(" ");
                s += '<label><input type="' + (t.type || "text") + '" name="' + u + '"' + ("checkbox" === t.type && t.value ? ' checked="checked"' : ' value="' + (t.value || "").replace(/"/g, "&quot;")) + '"' + f + '><span class="' + h + 'input-infos"><span>' + (o[i] ? o[i] : i) + "<\/span><\/span><\/label>"
            }),
            e.openModal(n, s).on(u, function() {
                var o = r("form", r(this))
                  , f = !0
                  , n = {};
                r.each(t, function(t, i) {
                    var u = i.name || t
                      , s = r('input[name="' + u + '"]', o)
                      , h = s.attr("type");
                    switch (h.toLowerCase()) {
                    case "checkbox":
                        n[u] = s.is(":checked");
                        break;
                    case "radio":
                        n[u] = s.filter(":checked").val();
                        break;
                    default:
                        n[u] = r.trim(s.val())
                    }
                    i.required && "" === n[u] ? (f = !1,
                    e.addErrorOnModalField(s, e.lang.required)) : i.pattern && !i.pattern.test(n[u]) && (f = !1,
                    e.addErrorOnModalField(s, i.patternError))
                });
                f && (e.restoreRange(),
                i(n, t) && (e.syncCode(),
                e.$c.trigger("tbwchange"),
                e.closeModal(),
                r(this).off(u)))
            }).one(f, function() {
                r(this).off(u);
                e.closeModal()
            })
        },
        addErrorOnModalField: function(n, t) {
            var i = this.o.prefix
              , f = i + "msg-error"
              , u = n.parent();
            n.on("change keyup", function() {
                u.removeClass(i + "input-error");
                setTimeout(function() {
                    u.find("." + f).remove()
                }, 150)
            });
            u.addClass(i + "input-error").find("input+span").append(r("<span/>", {
                "class": f,
                text: t
            }))
        },
        getDefaultImgDblClickHandler: function() {
            var n = this;
            return function() {
                var t = r(this), i = t.attr("src"), f = "(Base64)", u;
                return 0 === i.indexOf("data:image") && (i = f),
                u = {
                    url: {
                        label: "URL",
                        value: i,
                        required: !0
                    },
                    alt: {
                        label: n.lang.description,
                        value: t.attr("alt")
                    }
                },
                n.o.imageWidthModalEdit && (u.width = {
                    value: t.attr("width") ? t.attr("width") : ""
                }),
                n.openModalInsert(n.lang.insertImage, u, function(i) {
                    return i.url !== f && t.attr({
                        src: i.url
                    }),
                    t.attr({
                        alt: i.alt
                    }),
                    n.o.imageWidthModalEdit && (parseInt(i.width) > 0 ? t.attr({
                        width: i.width
                    }) : t.removeAttr("width")),
                    !0
                }),
                !1
            }
        },
        saveRange: function() {
            var n = this, r = n.doc.getSelection(), u, t, i;
            (n.range = null,
            r && r.rangeCount) && (t = n.range = r.getRangeAt(0),
            i = n.doc.createRange(),
            i.selectNodeContents(n.$ed[0]),
            i.setEnd(t.startContainer, t.startOffset),
            u = (i + "").length,
            n.metaRange = {
                start: u,
                end: u + (t + "").length
            })
        },
        restoreRange: function() {
            var u, r = this, n = r.metaRange, h = r.range, c = r.doc.getSelection(), f, s, e;
            if (h) {
                if (n && n.start !== n.end) {
                    var t, i = 0, l = [r.$ed[0]], o = !1, a = !1;
                    for (u = r.doc.createRange(); !a && (t = l.pop()); )
                        if (3 === t.nodeType)
                            f = i + t.length,
                            !o && n.start >= i && n.start <= f && (u.setStart(t, n.start - i),
                            o = !0),
                            o && n.end >= i && n.end <= f && (u.setEnd(t, n.end - i),
                            a = !0),
                            i = f;
                        else
                            for (s = t.childNodes,
                            e = s.length; e > 0; )
                                e -= 1,
                                l.push(s[e])
                }
                try {
                    c.removeAllRanges()
                } catch (v) {}
                c.addRange(u || h)
            }
        },
        getRangeText: function() {
            return this.range + ""
        },
        clearButtonPaneStatus: function() {
            var t = this
              , n = t.o.prefix
              , u = n + "active-button " + n + "active"
              , i = n + "original-icon";
            r("." + n + "active-button", t.$btnPane).removeClass(u);
            r("." + i, t.$btnPane).each(function() {
                r(this).find("svg use").attr("xlink:href", r(this).data(i))
            })
        },
        updateButtonPaneStatus: function() {
            var n = this
              , t = n.o.prefix
              , i = t + "active-button " + t + "active"
              , u = t + "original-icon"
              , f = n.getTagsRecursive(n.doc.getSelection().focusNode);
            n.clearButtonPaneStatus();
            r.each(f, function(f, e) {
                var h = n.tagToButton[e.toLowerCase()]
                  , o = r("." + t + h + "-button", n.$btnPane);
                if (o.length > 0)
                    o.addClass(i);
                else
                    try {
                        o = r("." + t + "dropdown ." + t + h + "-dropdown-button", n.$box);
                        var c = o.find("svg use")
                          , a = o.parent().data(t + "dropdown")
                          , s = r("." + t + a + "-button", n.$box)
                          , l = s.find("svg use");
                        s.addClass(i);
                        n.o.changeActiveDropdownIcon && c.length > 0 && (s.addClass(u).data(u, l.attr("xlink:href")),
                        l.attr("xlink:href", c.attr("xlink:href")))
                    } catch (v) {}
            })
        },
        getTagsRecursive: function(n, t) {
            var u = this, i;
            return (t = t || (n && n.tagName ? [n.tagName] : []),
            !n || !n.parentNode) ? t : (n = n.parentNode,
            i = n.tagName,
            "DIV" === i ? t : ("P" === i && "" !== n.style.textAlign && t.push(n.style.textAlign),
            r.each(u.tagHandlers, function(i, r) {
                t = t.concat(r(n, u))
            }),
            t.push(i),
            u.getTagsRecursive(n, t).filter(function(n) {
                return null != n
            })))
        },
        initPlugins: function() {
            var n = this;
            n.loadedPlugins = [];
            r.each(r.trumbowyg.plugins, function(t, i) {
                i.shouldInit && !i.shouldInit(n) || (i.init(n),
                i.tagHandler && n.tagHandlers.push(i.tagHandler),
                n.loadedPlugins.push(i))
            })
        },
        destroyPlugins: function() {
            var n = this;
            r.each(this.loadedPlugins, function(t, i) {
                i.destroy && i.destroy(n)
            })
        }
    }
}(navigator, window, document, jQuery);
