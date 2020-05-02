;(this.workbox = this.workbox || {}),
  (this.workbox.streams = (function(e) {
    'use strict'
    try {
      self['workbox:streams:4.3.1'] && _()
    } catch (e) {}
    function n(e) {
      const n = e.map(e =>
        Promise.resolve(e).then(e =>
          (function(e) {
            return e.body && e.body.getReader
              ? e.body.getReader()
              : e.getReader
              ? e.getReader()
              : new Response(e).body.getReader()
          })(e)
        )
      )
      let t, r
      const s = new Promise((e, n) => {
        ;(t = e), (r = n)
      })
      let o = 0
      return {
        done: s,
        stream: new ReadableStream({
          pull(e) {
            return n[o]
              .then(e => e.read())
              .then(r => {
                if (r.done)
                  return ++o >= n.length ? (e.close(), void t()) : this.pull(e)
                e.enqueue(r.value)
              })
              .catch(e => {
                throw (r(e), e)
              })
          },
          cancel() {
            t()
          },
        }),
      }
    }
    function t(e = {}) {
      const n = new Headers(e)
      return n.has('content-type') || n.set('content-type', 'text/html'), n
    }
    function r(e, r) {
      const { done: s, stream: o } = n(e),
        a = t(r)
      return { done: s, response: new Response(o, { headers: a }) }
    }
    let s = void 0
    function o() {
      if (void 0 === s)
        try {
          new ReadableStream({ start() {} }), (s = !0)
        } catch (e) {
          s = !1
        }
      return s
    }
    return (
      (e.concatenate = n),
      (e.concatenateToResponse = r),
      (e.isSupported = o),
      (e.strategy = function(e, n) {
        return async ({ event: s, url: a, params: c }) => {
          if (o()) {
            const { done: t, response: o } = r(
              e.map(e => e({ event: s, url: a, params: c })),
              n
            )
            return s.waitUntil(t), o
          }
          const i = await Promise.all(
              e
                .map(e => e({ event: s, url: a, params: c }))
                .map(async e => {
                  const n = await e
                  return n instanceof Response ? n.blob() : n
                })
            ),
            u = t(n)
          return new Response(new Blob(i), { headers: u })
        }
      }),
      e
    )
  })({}))
//# sourceMappingURL=workbox-streams.prod.js.map
