#!/bin/bash
# send a request to an URL with curl, and displays the size of the body of response
curl -s "$1" | wc -c
