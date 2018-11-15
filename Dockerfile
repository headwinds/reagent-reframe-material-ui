FROM clojure

WORKDIR /clj
ADD . /clj
VOLUME /clj


EXPOSE 5000
# 7888 is the default nrepl port
EXPOSE 7888

RUN lein deps
RUN lein cljsbuild once
CMD lein figwheel
# This command will start figwheel and open a repl socket
# This would need to change for a live environment -- you wouldn't want
# the figwheel socket open in production, but I'll leave that bit as an
# exercise for the reader.
