# Builds page.html (artifact fragment) and index.html (full document) from src/
t=open('src/template.html').read()
r=lambda f:open('src/'+f).read().replace('</script','<\\/script')
page=t.replace('/*ANSWERS*/',r('answers.js')).replace('/*VIVA*/',r('viva.js')).replace('/*APP*/',r('app.js'))
open('page.html','w').write(page)
head,body=page.split('<header>',1)
open('index.html','w').write('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'+head+'</head>\n<body>\n<header>'+body+'</body>\n</html>\n')
