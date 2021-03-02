<h1 align="left">
Useful Regular Expressions for Validating Input in Google Forms <img src="https://bunnieswork.com/BunniesWork.png" height="40"> 
</h1> 

## 1. Postal Address 
allow only alphanumeric characters, spaces and few other characters like comma, period and hash symbol in the form input field.
```bash
[a-zA-Z\d\s\-\,\#\.\+]+
```

## 2. ZIP Code 
the regex allows ZIP codes in standard formats and it matches both US and Indian pincodes.
```bash
^\d{5,6}(?:[-\s]\d{4})?$
```

## 3. Date
accept date input in the mm/dd/yyyy or mm-dd-yyyy formats.
```bash
((0[1-9])|(1[0-2]))[\/-]((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))[\/-](\d{4})
```

## 4. Email Address
the regex below should match most common email address formats, including Gmail aliases that accept the ”+” sign but there’s no perfect solution.
```bash
[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+
```

## 5. URL (Web domain)
this is useful for fields that require the user to enter their website address and it even matches the upcoming TLDs like .directory or .restaurant. The other regex matches YouTube URL including those using the youtu.be domains.
```bash
https?\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}
https?\:\/\/(www\.)?youtu(\.)?be(\.com)?\/.*(\?v=|\/v\/)?[a-zA-Z0-9_\-]+
```
## 6. Character Limit
the default text box in a Google form allows users to input any number of characters but you can impose a limit with the help of regular expression. Here we limit the input to 140 characters much like Twitter.
```bash
[\w]{1,140}
```

## 7. Phone Numbers
these are often a series of numbers preceded by an optional ”+” sign and the area code may be inside brackets.
```bash
\+?\(?\d{2,4}\)?[\d\s-]{3,}
```

## 8. Price (with decimal)
if a form field requires users to enter a price of an item in their own currency, this regex will help. Replace the $ sign with your own currency symbol.
```bash
\$?\d{1,3}(,?\d{3})*(\.\d{1,2})?
```

## 9. Complex Password
only accept a string that has 1 uppercase alphabet, 1 lowercase alphabet, 2 digits and 1 special character. Also the minimum allowed length is 8 characters.
```bash
(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9]).{8,}
```

## 10. CAPTCHA
Google forms do not offer CAPTCHAs but you can create one using regex. Here’s a simple captcha that requires users to answer a simple question - what is 2+2?
```bash
^(4|[Ff][Oo][Uu][Rr])$
```

11. Word Limit
If you would like to limit the number of words that a user can type in the input field of a Google Form, there’s a regex for that as well. In this case, we only allow any input that has between 10 to 15 words:
```bash
^[-\w]+(?:\W+[-\w]+){9,14}\W*$
```
