# 1
cd unix_tests

# 2
cat > skills2.txt
Internet
Unix
Bash
Ctrl + C

# 3
cat >> skills2.txt
JavaScript
HTML
CSS
SQL
NoSQL

# 4
wc -l skills2.txt

# 5
head -3 skills2.txt | sort > top_skills.txt

# 6
cat > phrases2.txt
Hello World!
Random phrase number 29
"Nvidia's stability is far superior than AMD's"

# 7
grep -in br phrases2.txt

# 8
grep -inv br phrases2.txt

# 9
cat > phrases2.txt
Trumpland
PooBearLand

# 10
cat phrases2.txt countries.txt > bunch_of_things.txt

# 11
sort bunch_of_things.txt
