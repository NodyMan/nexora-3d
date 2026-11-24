#!/usr/bin/env sh
# Bundles the 3D scenes into site/js/fx: the v9 valley world (home + page
# headers) and the depth cards. Three.js comes from the workspace
# node_modules one level up. Run from the nexora-3d folder.
set -e
rm -rf site/js/fx
../node_modules/.bin/esbuild src-v9/world.js src-v6/cards.js \
  --bundle --splitting --format=esm --minify --target=es2020 --legal-comments=none \
  --outdir=site/js/fx --entry-names=[name] --chunk-names=three-[hash]

# v10: the whole site as one 3D world (site/index.html). The 3D text
# library lives in tools/deps (npm install there); Three.js is shared.
rm -rf site/js/fx10
../node_modules/.bin/esbuild src-v10/app.js \
  --bundle --splitting --format=esm --minify --target=es2020 --legal-comments=none \
  --alias:troika-three-text=./tools/deps/node_modules/troika-three-text \
  --outdir=site/js/fx10 --entry-names=[name] --chunk-names=chunk-[hash]
