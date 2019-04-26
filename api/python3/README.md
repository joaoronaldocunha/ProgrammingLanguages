# Steps to execute

1. Install the requirements
- Python3
- pip

2. Create virtualenv

python3 -m venv /path/to/new/virtual/environment

3. Activate environemnt


Platform	Shell	    Command to activate virtual environment
Posix	    bash/zsh	$ source <venv>/bin/activate
 	        fish	    $ . <venv>/bin/activate.fish
 	        csh/tcsh	$ source <venv>/bin/activate.csh
Windows	    cmd.exe	    C:\> <venv>\Scripts\activate.bat
 	        PowerShell	PS C:\> <venv>\Scripts\Activate.ps1
     
4. Install requirements

```bash
pip install -r requirements
```

5. Run application

```bash
python run.py
```  