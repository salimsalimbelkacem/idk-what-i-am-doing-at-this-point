# My portfolio website
I know you couldn't believe your eyes when you saw my website and wanted to see the
code for yourself, and it is nothing to be ashamed of.

# dependencies
- `golang`
- `pnpm`, `npm`, `yarn` or `bun`
- `make`

> make sure to have the latest version of go

now these are optional and you can build the project without them, they are just nice
to have for development
- [air](https://github.com/air-verse/air) 
- a procfile-based process manager like [foreman](https://github.com/ddollar/foreman)
or [overmind](https://github.com/DarthSim/overmind) 

# Setup and build
using `make` will install the rest of the dependencies and libraries in the
project (echo, templ and tailwind) then build everything

using `make setup` will just install the dependencies

by default tailwind will be installed using pnpm so
if you want to use `npm`, `yarn` or `bun` for setup and build:
`make NPM=<your-package-manager>`

only the ones specified are suported

# build
you can build everything using `make build`

