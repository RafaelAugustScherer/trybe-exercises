# Block 1 - Unix & Bash

### Basic Commands

```bash
//Basic Directory Cmds
ls [*] # List files + directories
ll # List files + directories and details
cd [path] # Change directory
clear (Ctrl + L) # Clean terminal

//Basic Directory & File Management Cmds
mkdir [dir] # Create directory
rmdir [dir] # Remove empty directory
rm -rf [dir] # Remove any directory

touch [file] # Create file
rm [file] # Remove file

mv [path_src] [path_dst] # Move | Rename file or directory
cp [path_src] [path_dst] # Copy file or directory

//Help Cmds
man [cmd] # Reveal the manual of a command
whatis [cmd] # Brief explanation of a command
apropos [search] # Search for a command for what you type
```

---

### Editor Commands

```bash
//Exhibit Cmds
cat [file] # Show file content on terminal
less [file] # Show file content in a spearated page
head [-num] [file] # Show first 10 lines of file
tail [-num] [file] # Show last 10 lines of file

//Create & Edit Cmds
cat > [file] # Create file and add values to it
cat >> [file] # Add values to existing file
cat [file] [file] > [file] # Unite multiple files into one

nano [file] # Open file in the nano editor
```

---

### Filter Commands

```bash
grep [-params] [chars] [file] #Find and list words | characters in file
	params: [i] # Non case-sensitive
					[v] # Do not contain specified chars
					[c] # Count how many

wc [-params] [file] # Count how many characters (-c), words (-w) and0 lines (-l)
sort < [file] [> file] # Sort file in asc order & save to file (optional)

find [src] [-params] # Search for file | dir from src (all system if empty)
	params: [-name ""] # Name is X
					[-type d | f] # Dir or File
```

---

### User Commands

```bash
who # Show all users logged in the system
ls -lag # Show all permissions infos in current path

chmod [-params | +params] [path] # Change dir | file permissions
	params: [- | +] # Define if adding or removing permission
					[u | g | o | a] # Applies to user (u), group (g), others (o), all [a]
					[r | w | x] # Is read [r], write [w] or execution [x] permission
chmod [xxx] [path] # Define all users permissions based on the table below
# r = 4 | w = 2 | x = 1
# rwx = 7 | r-- = 4 | -w- = 2 | --x = 1
# rw- = 6 | r-x = 5 | -wx = 3 | --- = 0
```

---

### Process Commands

```bash
ps # List all processes running
jobs # List all processes in background
bg [-pid] # Set suspended => running in background
fg [-pid] # Set suspended => running in foreground
kill [-pid] #Terminate process
[process] & #Run process in bg
```

---

### Wildcards

```bash
* # All or anything | Ex: ls *.txt
? # Replace any char in a cmd | Ex: command.t?t
[cmd] | [cmd] # Output of 1st is sent to 2nd to process
[cmd] > [file] # Send output to file 
```
