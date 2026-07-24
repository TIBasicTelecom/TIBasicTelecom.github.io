from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class Handler(SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code != 404:
            return super().send_error(code, message, explain)

        content = Path(__file__).with_name("404.html").read_bytes()
        self.send_response(404)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(content)


if __name__ == "__main__":
    print("Basic Telecom: http://127.0.0.1:8000")
    ThreadingHTTPServer(("127.0.0.1", 8000), partial(Handler, directory=Path(__file__).parent)).serve_forever()
