# Bash Basics

## Some of the most useful BASH commands and the utility they offer

### Shell

Shell is a command line interface for running programs on a computer. The user types a bunch of commands at the prompt, the shell runs the programs for the user and then displays the output. The commands can be either directly entered by the user or read from a file called the shell script or shell program.

### What's the version of my OS

```bash
$ uname -a
# give you kernel version

$ cat /proc/version

$ cat /etc/*release
# CentOS release 6.8 (Final)

$ cat /etc/issue*

$  lsb_release -a
```

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

## Easy

### What is the etc folder for?

This directory contains most of the basic Linux system configuration files.

The /etc directory (means etcetera) contains configuration files, which can generally be edited by hand in a text editor.

### How do I find out which directory I am currently in? Which user I am logged in as?

### How would I create a hidden file?

Any file or directory beginning with a dot (.) is considered a hidden file and is not displayed by default with ls. These dot files are typically configuration files or directories that need to be in your home directory, but don’t need to be seen in your daily work. The -a lets you see those fi les.

### How do I give a user sudo access?

```bash
sudo usermod -a -G sudo user_name
```

### What's usually the name for the user with full admin privileges?

In ubuntu default sudo user is ubuntu

How do I find out the current directory? Current user?
How do I restart apache?

### How do I monitor processes?

```bash
htop
#or
ps aux
```

## Medium

### How do I determine how much disk space is free? Memory?

### What's usually the name of the group that has admin access?

It's name - sudo group (which is the "administrators" group in Ubuntu).

### While file do I edit to automatically mount a drive on boot?

### What is systemd?

systemd — подсистема инициализации и управления службами в Linux, 
Systemd запускает сервисы описанные в его конфигурации.
Конфигурация состоит из множества файлов, которые по-модному называют юнитами.

### How do I generate an RSA key? What would I use it for?
