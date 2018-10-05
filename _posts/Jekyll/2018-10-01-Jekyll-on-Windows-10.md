---
layout: post
title:  "Getting started with Jekyll on Windows 10"
date:   2018-10-05 09:00:00 +0100
categories: Jekyll
---

Jekyll is a static site generator, taking markdown files and compiling them into a static html website. It's perfect for blogging or indeed for note taking like this small site.

Jekyll requires a ruby environment in order to work and although an environment can be set up fow Windows, it is easier if it's run natively on Linux.

## Linux on Windows 10

Make use of the nifty Windows 10 feature that allows Linux to be installed as a Subsystem of Windows. This is actual Linux running on a Windows box.

The steps to install Linux on Windows are straight forward:

1. Turn on 'Windows Subsystem for Linux' within Windows Features
2. Restart Windows to complete installation
3. Search for Linux in the Microsoft Store app
4. Select the Ubuntu app and install it
5. Once installation is complete, run the 'Ubuntu' app from the Start Menu
6. Follow the instructions and create a UNIX user account

More details: [<https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/>](Install Linux on Windows 10)

## Setting up Jekyll environment on Linux

Now we have Linux on our Windows machine we need to install the relevant dependencies that Jekyll requires.

`sudo apt-get install ruby ruby-dev build-essential`

`sudo apt-get update`

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

`gem install jekyll bundler`

More information: [<https://jekyllrb.com/docs/installation/ubuntu/>](Install Jekyll on Ubuntu)

## Run Jekyll project

Navigate to your project folder `cd /mnt/c/projects/notes` and run `bundle exec jekyll serve --safe` to start Jekyll.