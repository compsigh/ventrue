# The `phpeterson` Chat App 😮

## Overview 💻

 A chat app built in C for peer-to-peer communication via TCP, using presence broadcasts via UDP.

## How It Works 🖱️

- Uses `poll()` from the C sockets API to receive presence and chat messages from other users on the network
- Tracks users by building structs with information (`name`, `status`, `host`, and `port`)
- Complete with error checking

## Common Mistakes & How To Avoid Them 💀

- Segmentation Fault (Core Dump) 😀
- Have you tried `gdb`? 🔥

## Purpose ✨

- Send and receive DMs with other users on your network
- Troll the classroom
