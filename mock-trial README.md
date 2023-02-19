## Overview 💻
* We have created a chat app in C that runs through a Linux machine
* Users would be able to see who’s online and offline in the network and send messages to one another

## How 🖱️
* Uses UDP Broadcasting to send online presence periodically
* App uses poll() to receive presence and chat messages from other users on the network
* Keep track of users in a list by building a struct with informatioin (e.g. status, name, port, host)
* Use TCP sockets to send and receive messages from other users 
* Use perror for error checking and unavailable sockets

## Common Mistakes 💀
* Segmentation Fault (Core Dump) 😀

## Purpose 😆
* Gain experience in the socket API!
* Have fun and chat with other users!
