(this["webpackJsonpsimple-api-fetch-with-react-mitlab-2021"] =
  this["webpackJsonpsimple-api-fetch-with-react-mitlab-2021"] || []).push([
  [0],
  {
    30: function (e, t, a) {},
    32: function (e, t, a) {},
    55: function (e, t, a) {
      "use strict";
      a.r(t);
      console.log(":::" + a.p + "static/media/loading.5a61fe4a.gif");
      var n = a(0),
        c = a.n(n),
        r = a(23),
        i = a.n(r),
        s = (a(30), a(13)),
        o = a.n(s),
        l = a(24),
        j = a(9),
        u = (a(32), a(56)),
        h = a(59),
        d = a(57),
        b = a(25),
        p = a.n(b),
        O = "static/media/loading.5a61fe4a.gif",
        x = a(4),
        f = function (e) {
          var t = e.isLoaded,
            a = e.animeArray;
          return (
            console.log(a),
            Object(x.jsxs)(x.Fragment, {
              children: [
                t &&
                  a.map(function (e, t) {
                    return Object(x.jsx)(
                      h.a,
                      {
                        className: "quote",
                        children: Object(x.jsxs)(h.a.Body, {
                          children: [
                            Object(x.jsx)(h.a.Title, {
                              children: Object(x.jsx)("h4", {
                                children: e.anime,
                              }),
                            }),
                            Object(x.jsxs)(h.a.Text, {
                              children: [
                                e.quote,
                                Object(x.jsx)("br", {}),
                                Object(x.jsx)("i", { children: e.character }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t
                    );
                  }),
                !t &&
                  Object(x.jsx)("img", {
                    className: "loading",
                    src: O,
                    alt: "loading",
                  }),
              ],
            })
          );
        },
        m = a(58),
        g = function (e) {
          var t = e.onSearch;
          return Object(x.jsxs)(m.a.Group, {
            children: [
              Object(x.jsxs)(m.a.Label, {
                children: [
                  Object(x.jsx)("i", {
                    children:
                      "Please have in mind that each page change will count against the API limits.",
                  }),
                  Object(x.jsx)("p", {
                    children: "* Use the Enter key to apply your filter",
                  }),
                ],
              }),
              Object(x.jsx)(m.a.Control, {
                id: "search",
                type: "text",
                placeholder: "Search by title",
                onKeyPress: function (e) {
                  "Enter" === e.key && t(e);
                },
              }),
            ],
          });
        },
        v = a(60),
        y = function (e) {
          var t = e.page,
            a = e.onChangePage;
          return (
            console.log("...." + new Array(10).fill(0)),
            Object(x.jsx)("div", {
              className: "pagination",
              children: new Array(10).fill(0).map(function (e, n) {
                return Object(x.jsx)(
                  v.a,
                  {
                    variant: t !== n + 1 ? "secondary" : "primary",
                    onClick: function () {
                      return a(n + 1);
                    },
                    children: n + 1,
                  },
                  n
                );
              }),
            })
          );
        };
      var w = function () {
        var e = Object(n.useState)([]),
          t = Object(j.a)(e, 2),
          a = t[0],
          c = t[1],
          r = Object(n.useState)(!1),
          i = Object(j.a)(r, 2),
          s = i[0],
          b = i[1],
          O = Object(n.useState)(1),
          m = Object(j.a)(O, 2),
          v = m[0],
          w = m[1];
        Object(n.useEffect)(
          function () {
            var e = document.getElementById("search");
            P(e.value ? e.value : "naruto");
          },
          [v]
        );
        var P = (function () {
            var e = Object(l.a)(
              o.a.mark(function e(t) {
                var a;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            b(!1),
                            console.log(v),
                            (e.prev = 2),
                            (e.next = 5),
                            p.a.get(
                              "https://animechan.vercel.app/api/quotes/anime?title="
                                .concat(encodeURIComponent(t), "&page=")
                                .concat(v)
                            )
                          );
                        case 5:
                          (a = e.sent), c(a.data), (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(2)),
                            c([
                              {
                                anime: "Error",
                                quote:
                                  "API Limit exceeded. Please try again in a couple of minutes.",
                                character: "",
                              },
                            ]);
                        case 12:
                          b(!0);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          k = function (e) {
            w(e);
          };
        return Object(x.jsxs)(u.a, {
          children: [
            Object(x.jsx)(h.a, {
              children: Object(x.jsx)(g, {
                onSearch: function (e) {
                  var t = e.target.value;
                  P(t);
                },
              }),
            }),
            Object(x.jsx)(d.a, {
              children: Object(x.jsx)(y, { page: v, onChangePage: k }),
            }),
            Object(x.jsx)(h.a, {
              children: Object(x.jsx)(f, { animeArray: a, isLoaded: s }),
            }),
            Object(x.jsx)(d.a, {
              children: Object(x.jsx)(y, { page: v, onChangePage: k }),
            }),
          ],
        });
      };
      i.a.render(
        Object(x.jsx)(c.a.StrictMode, { children: Object(x.jsx)(w, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[55, 1, 2]],
]);
//# sourceMappingURL=main.f4f63764.chunk.js.map
