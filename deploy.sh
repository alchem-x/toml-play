#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1

git checkout -b gh-pages
NEXT_PUBLIC_BASE_PATH=/toml-play bun run build
mv dist docs
touch docs/.nojekyll
git add -f docs
git commit -m "Generate pages: $(date '+%Y-%m-%dT%H:%M:%S%z')"
git push -fu origin gh-pages
git checkout main
rm -rf docs
git branch -D gh-pages