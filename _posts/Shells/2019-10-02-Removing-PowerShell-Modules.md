---
layout: post
title:  "Removing PowerShell Modules"
date:   2018-10-02 10:00:00 +0100
categories: Shells
---

A while back I installed Posh-Git, a module for PowerShell that incorporates some git information into the shell if your within a git repository. This is a welcome addition, although it brings the initial load up time of PS down to a grinding halt. 11+ seconds to load up the shell is not acceptable.

## PowerShell Module file

PowerShell has a list of installed modules located in a `.ps1` file within the following path. `%USERPROFILE%\Documents\WindowsPowerShell`

To remove a PS module, open the profile `Microsoft.PowerShell_profile.ps1` in Windows PowerShell ISE (this will be the default editor) and delete the offending line.

Full path:

`%USERPROFILE%\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`

Now welcome PowerShell back as a usable shell!