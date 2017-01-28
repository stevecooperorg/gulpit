To get running on mac or unix;

    curl -s https://raw.githubusercontent.com/stevecooperorg/gulpit/master/init | bash

On windows/powershell

    Invoke-WebRequest -uri https://raw.githubusercontent.com/stevecooperorg/gulpit/master/init -usebasicparsing | iex

If you're developing gulpit, this works with the local copy (assuming the relative path;

    cat ../gulpit/init | bash
