<h1 align="left">Email RegExp </h1> 

```bash
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

It allows the following formats:

```bash
1.  bunnieswork@example.com
2.  bunnies.work@example.com
3.  disposable.style.email.with+symbol@example.com
4.  other.email-with-dash@example.com
9.  #!$%&'*+-/=?^_`{}|~@example.org
6.  "()[]:,;@\\\"!#$%&'*+-/=?^_`{}| ~.a"@example.org
7.  " "@example.org (space between the quotes)
8.  üñîçøðé@example.com (Unicode characters in local part)
9.  üñîçøðé@üñîçøðé.com (Unicode characters in domain part)
10. Pelé@example.com (Latin)
11. δοκιμή@παράδειγμα.δοκιμή (Greek)
12. 我買@屋企.香港 (Chinese)
13. 甲斐@黒川.日本 (Japanese)
14. чебурашка@ящик-с-апельсинами.рф (Cyrillic)
```

<h1 align="left">RFC22</h1>
http://tools.ietf.org/html/rfc22

```bash
^((?>[a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]+\x20*|"((?=[\x01-\x7f])[^"\\]|\\[\x01-\x7f])*
"\x20*)*(?<angle><))?((?!\.)(?>\.?[a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]+)+|"((?=[\x01-\x
7f])[^"\\]|\\[\x01-\x7f])*")@(((?!-)[a-zA-Z\d\-]+(?<!-)\.)+[a-zA-Z]{2,}|\[(((?(?<
!\[)\.)(25[0-5]|2[0-4]\d|[01]?\d?\d)){4}|[a-zA-Z\d\-]*[a-zA-Z\d]:((?=[\x01-\x7f])
[^\\\[\]]|\\[\x01-\x7f])+)\])(?(angle)>)$
```
