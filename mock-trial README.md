## Overview 💻
* We have created a chat app in C that runs through a Linux machine
* Users would be able to see who’s online and offline in the network and send messages to one another
## How 🖱️
* Uses UDP Broadcasting to send online presence periodically
* App uses poll() to receive presence and chat messages from other users on the network
* Use TCP sockets to send and receive messages from other users 
* Use perror for error checking and unavailable sockets
## Purpose 😆
* Have fun and chat with other users!
