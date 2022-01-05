rd/s/q node_modules\fansion-base
del package-lock.json
set NODE_OPTIONS=--openssl-legacy-provider
npm cache clean --force&&npm install
