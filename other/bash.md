# Bash Basics

## Some of the most useful BASH commands and the utility they offer

### Shell

Shell is a command line interface for running programs on a computer. The user types a bunch of commands at the prompt, the shell runs the programs for the user and then displays the output. The commands can be either directly entered by the user or read from a file called the shell script or shell program.

### View directory

**pwd**  	- remove working directory / current directory  
**lpwd** 	- local file directory
**lcd**		- local file list
**ls**		- file inside directory

### Open File

**tail** nameFile - view last 10 line
**cat** nameFile  – view file
**less** nameFile - open all file in one page
**more** nameFile – open all file in one or more page use space to change page

### Logging In to a Remote System to Copy a File

The sftp command is an interactive file transfer program with a user interface similar to ftp. However, sftp uses the SSH File Transfer Protocol to create a secure connection to the server. Not all options available with the ftp command are included in the sftp command, but many of them are.

sftp -oPort=9999 wrf@91.256.255.256

### Show folder and file size

du -h  - see size used avail use
du -sh *
du -sh /folder_path

di -sh ~

tilde(~) is a short cut which denotes the home directory.

### Work with files and folders

ls -a - see hidden files
rm -R foldername - delete folder and included files (confirmation required)
ps aux | grep JRodos - find a running process
rm -dr /path-file - remove directory and all files

echo "Text for new file" > my_file.txt

### Pipelines and Filters

The pipe operator ‘|’ (vertical bar), is a way to send the output of one command as an input to another command.

command1 | command2

```bash
$ fruits.txt | sort
```

**wc** is short for word count
**grep** or global regular expression print searches for lines with a given string or looks for a pattern in a given input stream

```bash
$ grep fruits.txt | wc -w # count total words

$ cat fruits.txt | sort | uniq
```
