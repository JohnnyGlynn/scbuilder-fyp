FROM golang:1.14-alpine AS build

ADD . $HOME/project

WORKDIR $HOME/project/cmd
RUN CGO_ENABLED=0 go build -o /bin/scbuilder-backend

FROM scratch
COPY --from=build /bin/scbuilder-backend /bin/scbuilder-backend
ENTRYPOINT ["/bin/scbuilder-backend"]