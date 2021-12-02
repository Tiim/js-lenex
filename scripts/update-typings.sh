#!/usr/bin/env bash

# exit 0

FILE="src/lenex-type.gen.ts"
echo "// Auto generated code, update with npm run update-typings" > $FILE
echo "// Last update $(date --iso)"  >> $FILE
echo "// This file is only informational to help manually create lenex-type.ts"
echo "" >> $FILE

node scripts/collect-examples.js | npx quicktype -l ts -t LenexRaw --telemetry disable --just-types --no-runtime-typecheck >> $FILE

npx tslint -c tslint.gen.json 'src/lenex-type.gen.ts' --fix