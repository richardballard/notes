---
layout: post
title:  "Ensure Https and www with rewrite rules"
date:   2018-10-02 10:00:00 +0100
categories: ASP.Net
---

When sites are in production you'll want it to use HTTPS and to redirect HTTP traffic you can use rewrite rules in the web.config. If the site is public facing and therefore SEO is important you'll also want one url to always be used. The following shows us one way to achieve this by modifying the web.config.

## Ensure HTTPS

```web.config
    <rule name="Redirect Rule for PermanentRedirects" stopProcessing="true">
      <match url=".*" />
      <conditions>
        <add input="{PermanentRedirects:https://{HTTP_HOST}{REQUEST_URI}}" pattern="(.+)" />
      </conditions>
      <action type="Redirect" url="{C:1}" appendQueryString="false" redirectType="Permanent"/>
    </rule>
```

## Ensure www

```web.config
<rule name="ensurewww" stopProcessing="true">
  <match url=".*" />
  <conditions>
    <add input="{CACHE_URL}" pattern="^(.+)://(?!www)(.*)" />
  </conditions>
  <action type="Redirect" url="{C:1}://www.{C:2}" redirectType="Permanent" />
</rule>
```