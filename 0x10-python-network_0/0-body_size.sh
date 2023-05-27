#!/bin/bash
#Get the byte size of the HTTP response header for a given URL.
read -p "Enter URL: " url
size=$(curl -s "$url" | wc -c)
echo "Size of response body in bytes: $size"
