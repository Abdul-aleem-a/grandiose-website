#!/bin/bash
# Run this from your project root (where package.json is)
# It finds every file in public/images and force-renames it to lowercase via Git,
# so Git properly registers the case change for case-sensitive deployments (Linux servers).

cd public/images || { echo "public/images folder not found. Run this from your project root."; exit 1; }

for file in *; do
  # skip directories
  [ -d "$file" ] && continue

  lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')

  if [ "$file" != "$lower" ]; then
    echo "Renaming: $file -> $lower"
    git mv "$file" "${file}.tmp"
    git mv "${file}.tmp" "$lower"
  fi
done

echo ""
echo "Done. Now run:"
echo "  git add ."
echo "  git commit -m \"Fix image filename casing for case-sensitive deployment\""
echo "  git push"