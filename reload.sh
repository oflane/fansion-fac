#!/bin/bash

rm -rf node_modules/fansion-*
rm package-lock.json
npm cache clean --force
npm install
