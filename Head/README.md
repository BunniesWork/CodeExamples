## Basic

```bash
<title>{props.title}</title>
<meta name="description" content={props.description} />
<meta name="keywords" content={props.keywords} />
<link rel="icon" href="/BunniesWork.png"/>
```

## Languages (Methods for indicating your alternate pages)
```bash
<link rel="alternate" hreflang="lang_code" href="url_of_page" />
``` 
Supported language/region codes

The value of the hreflang attribute identifies the language (in ISO 639-1 format) and optionally a region (in ISO 3166-1 Alpha 2 format) of an alternate URL. (The language need not be related to the region.) For example:
<ul>
<li>de: German language content, independent of region</li>
<li>en-GB: English language content, for GB users</li>
<li>de-ES: German language content, for users in Spain</li>
</ul>
              

<meta name="mobile-web-app-capable" content="yes"/>

## Apple 
```bash
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-title" content="BunniesWork" />
<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
<link rel="apple-touch-icon" href="" />
<link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="touch-icon-iphone-retina.png"/>
<link rel="apple-touch-icon" sizes="167x167" href="touch-icon-ipad-retina.png"/>
```
