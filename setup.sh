#!/usr/bin/env bash
npm install
webdriver-manager update
cd ./setup/
./createCertificateAndKeyIfNotExistsForSSL.sh