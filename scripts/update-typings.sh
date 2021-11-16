#!/usr/bin/env bash

FILE="src/lenex-type.gen.ts"
echo "// Auto generated code, update with npm run update-typings" > $FILE
echo "// Last update $(date --iso)"  >> $FILE

node scripts/collect-examples.js | npx quicktype -l ts -t LenexRaw --telemetry disable --just-types --no-runtime-typecheck >> $FILE