p = "index.html"
s = open(p, encoding="utf-8").read()
tag = '<script src="parties.js"></script>'
if tag not in s:
    if s.count("</body>") == 1:
        s = s.replace("</body>", tag + "\n</body>")
    else:
        s = s + "\n" + tag + "\n"
    open(p, "w", encoding="utf-8").write(s)
print("parties.js konekte.")
