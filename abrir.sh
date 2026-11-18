#!/usr/bin/env bash
cd "$(dirname "$0")"
explorer.exe "$(wslpath -w src/index.html)" || true
