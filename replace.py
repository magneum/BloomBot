import os
from colorama import Fore, Style

IGNORED_FOLDERS = ['.git', '__pycache__', 'node_modules']
IGNORED_FILES = ['.DS_Store']
IGNORED_EXTENSIONS = ['.pyc']

def should_ignore_file(filename):
    return any(filename.startswith(ignore_folder) or filename.endswith(ignore_extension) for ignore_folder in IGNORED_FOLDERS for ignore_extension in IGNORED_EXTENSIONS)

def rename_files_in_directory(directory, old_word, new_word):
    for root, dirs, files in os.walk(directory):
        # Rename folders if the old word is found in the folder name
        for i, folder in enumerate(dirs):
            if old_word in folder:
                new_folder = folder.replace(old_word, new_word)
                new_folder_path = os.path.join(root, new_folder)
                os.rename(os.path.join(root, folder), new_folder_path)
                dirs[i] = new_folder
                print(f"{Fore.GREEN}Renamed folder{Style.RESET_ALL}: {folder} -> {new_folder}")

        for filename in files:
            if filename in IGNORED_FILES or should_ignore_file(filename):
                continue

            file_path = os.path.join(root, filename)

            # Rename the file if the old word is found in the filename
            if old_word in filename:
                new_filename = filename.replace(old_word, new_word)
                new_file_path = os.path.join(root, new_filename)
                os.rename(file_path, new_file_path)
                file_path = new_file_path
                print(f"{Fore.GREEN}Renamed file{Style.RESET_ALL}: {filename} -> {new_filename}")

            with open(file_path, 'r') as file:
                content = file.read()

            # Replace the old word with the new word in the file content
            new_content = content.replace(old_word, new_word)

            # Write the updated content back to the file
            with open(file_path, 'w') as file:
                file.write(new_content)

# Prompt user for inputs
workdir = input("Enter the directory path: ")
old_word = input("Enter the word to replace: ")
new_word = input("Enter the new word: ")

rename_files_in_directory(workdir, old_word, new_word)
