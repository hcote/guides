$ ls -a
// returns hidden files and folders
$ ls -l
// returns contents in long format
// long format = access_rights | #_child_files/directories | username | group_name | size_of_file_in_bytes | date&time_last_modified | name_of_file/directory
$ ls -t
// orders files from when they were last modified
// can combine to do:
$ ls -alt
$ cp file_one file_two
// copies contents of file_one into file_two (both exist - you're not creating a new file here)
$ cp file_one ./ // (first argument is file, second is destination of copied file)
// THIS is how you duplicate/copy a file
$ cp * folder/
// copies all files (not directories) to destination
$ cp m*.txt folder/
// copies all .txt files starting with m
$ mv file_name folder/
// moves a file
$ mv file_one new_file_name
// to change a file name
$ rm file_name
// removes file
$ rm -r folder_name
// recursive. remove folder and all child folders
// there is no undo for rm commands

// REDIRECTION
// standard input (stdin):
// info input to the terminal
// standard output (stdout):
// info output after terminal process is run
// standard error (stderr):
// error message output by failed process
$ echo 'hello' > hello.txt
// redirecting the stdout to a file
$ cat hello.txt
// stdout: 'hello'
// cat outputs the contents of the file
$ cat hello.txt > hello_2.txt
// copies contents of ello to hello_2
// > overwrites ALL original contents of file_2
$ cat hello.txt >> hello_2
// >> is how you APPEND the stdout of the left side to the right side file
$ cat file_one | wc
// OR
$ wc file_name // returns 3 space separated integers
// wc stands for 'word count' & prints count of lines, words, and bytes for the file
$ cat volcanoes.txt | wc
// the stdout of 'cat volcanoes.txt' is the stdin of wc
// the '|' takes the standard output of the command on the left, and 'pipes' it as standard input to the command on the right
$ cat volcanoes.txt | wc | cat > islands.txt
// Multiple |'s can be chained together. Here the standard output of cat volcanoes.txt is "piped" (attached) to the wc command. The standard output of wc is then "piped" to cat. Finally, the standard output of cat is redirected to islands.txt.
$ sort file_name
$ cat lakes.txt | sort > sorted-lakes.txt
// prints each line in alphabetical order
$ uniq deserts.txt
// returns list with dups removed
$ sort deserts.txt | uniq > uniq-deserts.txt
// sorted list of unqiue deserts now in new file
// NOTE: unique only removes adjacent duplicates, you NEED to sort to remove all dups
$ grep Word file_name
// grep: global regular expression
// searches file for lines that match 'Word' and returns them
// run $ grep -i ... to make it case sensitive
$ grep -R Word file_path
// searches all files in directory and outputs the file_paths with files that contain 'Word' & show the line that contains 'Word'
$ grep -Rl Word file_path
// include the 'l' to just get returned the file names
$ sed 's/snow/rain/' file_name
// sed => stream editor
// s for substitute 'snow' with 'rain' (above will only substitute the first encounter)
$ sed 's/snow/rain/g' file_name
// g stands for global and will replace all instances of snow with rain
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
