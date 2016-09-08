#!/usr/bin/env bash

#############################################################
# Author      : Nicholas Perrin - nsperrin@mckendree.edu
# Date        : 9/8/2016
# Description :
#    This is used to generate the cert.pem and key.pem file
#    in ../bin/. This is needed in order to setup a secure
#    connection for the https server.
#############################################################

#path to the destination for the .pem files
path='../bin/'

#if either does not exist
if [ ! -f ${path}cert.pem ] || [ ! -f ${path}key.pem ]; then
    #if one of them already exists
    if [ -f ${path}cert.pem ] || [ -f ${path}key.pem ]; then
        #remove it to start fresh
        rm ${path}*.pem
    fi
    #generate the private key
    openssl genrsa -out ${path}key.pem
    #use the private key to generate the csr.pem file
    #then insert a heredoc to answer the prompts
    openssl req -new -key ${path}key.pem -out ${path}csr.pem << STDIN
US
Illinois
Lebanon
HellaFire
SeniorSeminar
.
hellafire.test@gmail.com
P@$$(0d3
HF
STDIN
    #use the key and csr to create and sign a certificate
    openssl x509 -req -days 9999 -in ${path}csr.pem -signkey ${path}key.pem -out ${path}cert.pem
    #remove the csr.pem file
    rm ${path}csr.pem
fi