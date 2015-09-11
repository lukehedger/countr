#!/bin/bash
genghisapp --no-launch
forever start -w -c "node --harmony" index.js
forever logs index.js -f
