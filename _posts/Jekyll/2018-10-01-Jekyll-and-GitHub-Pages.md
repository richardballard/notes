---
layout: post
title:  "Jekyll and GitHub Pages"
date:   2018-10-01 15:00:00 +0100
categories: Jekyll
---

# Getting GitHub Pages to build your Jekyll project

## Local development

Once you have everything set up locally you can run your project via the following command

` bundle exec jekyll serve --safe

The `--safe` keyword is meant to serve the project under the same conditions as GitHub Pages, therefore we _should_ be able to catch errors locally before pushing to GitHub.
For me, although everything was working locally I kept getting an error from GitHub when pushing to the repo.

### Turn on GitHub Pages

Navigate to your repository and to the Settings tab. From here you can turn on GitHub pages and select the source. For this project we are telling GitHub to build the Master branch as the GitHub Pages source.

### GitHub issue

>The page build failed for the `master` branch with the following error:
>The symbolic link `/vendor/bundle/ruby/2.5.0/gems/ffi-1.9.25/ext/ffi_c/libffi-x86_64-linux-gnu/include/ffitarget.h` targets a file which does not exist within your site's repository. For more information, see <https://help.github.com/articles/page-build-failed-symlink-does-not-exist-within-your-site-s-repository/>.

There were two issues preventing GitHub from building the project successfully. The first was that I'd used `bundle install` that can install into a global scope and not specifically contained for the project. Therefore, it's important to use `bundle install --path vendor/bundle` to have everything contained within the folder.

The second was that I'd not excluded the `vendor` folder from the root. The following needs to be added to the .gitignore file `vendor/**`. If you've already pushed this folder to GitHub then you need to remove the cached files after updating your .gitignore file.

`git rm -r --cached .`
`git add .`
`git commit -m "Removed cached files after updating gitignore"`

Once this was updated GitHub Pages worked as expected.