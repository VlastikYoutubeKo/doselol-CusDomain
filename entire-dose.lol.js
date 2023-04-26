export default {
  async fetch(request, env) {
    try {
      const { pathname } = new URL(request.url);

      if (pathname.startsWith("/")) {
        const content = pathname.substring(1);
        if (content) {
          return new Response(`
            <html>
              <body style="margin: 0; padding: 0;">
                <iframe src="https://dose.lol/${content}" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"></iframe>
              </body>
            </html>
          `, {
            headers: {
              "content-type": "text/html",
            },
          });
        }
        return new Response(`
          <html>
            <body style="margin: 0; padding: 0;">
              <iframe src="https://dose.lol" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"></iframe>
            </body>
          </html>
        `, {
          headers: {
            "content-type": "text/html",
          },
        });
      }
      return new Response("Not found", { status: 404 });
    } catch(e) {
      return new Response(e.stack, { status: 500 })
    }
  }
}
