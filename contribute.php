<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/contribute.css">
    <script type="module" src="./js/contribute.js"></script>
    <?php
        include("header-include.php");
    ?>

    <title>Grub Editor - contribute</title>
</head>
<body>
    
    <?php
    //The following variable will be used in header.php
    $active_page="contribute";
        include("header.php");
    ?>
    <div id="main">
        <div id="thank_you">
            <h1>If you really are willing to contribute to this project, Thank You</h1>
        </div>
        <div id="fix_bugs">
            <h1>You can help us fix bugs</h1>
            <p>Found something that you think is a bug. Go create an issue in the 
                 <a href="https://github.com/Thenujan-0/grub-editor/issues">github repo</a> with all the necessary details. If it is a bug report
            related to crash submit the log file with your issue. Log file is found in ~/.local/share/grub-editor/logs.
            <br><br> Make sure to include all the necessary details below.</p>
             <ul>
                 <li>what you were doing when the issue occured</li>
                 <li>is the bug reprucible or not</li>
                 <li>How you installed grub editor</li>
                 <li>distribution and the desktop environment you are using</li>
                 <li> version of the grub editor</li>
             </ul>
            
        </div>
        <div id="developer">
            <h1>Are you a developer?</h1>
            <p>If you are a developer you can help by fixing the bugs that are currently in issues.
                 You can even work on a feature that you are really interested in  and then send a merge request.
                Also take a look at the todos.txt to find any future plans if you want to start working on them.
                Make sure to check the docs directory it doesn't have much documentation but something is better than nothing right?😉
            </p>
        </div>
        <div id="translation">
            <h1>Help us translate into other languages</h1>
            <p>Currently there are no translations for grub editor. It is only available in English. But you can make it better. Fluent in a languages like German,Spanish,Chinese? you can help us add tranlations to grub editor. Contact me if you need any help on how to add the translation</p>
        </div>

        <div id="documentaion">
            <h1>Improve documentation</h1>
            <p>Right now grub editor has almost zero documentation. But you can change this by adding documentation.
                write the documentaion as markdown files and add it to docs directory. You can explain how the code works.
            </p>
        </div>

        <div id="sidenote">
            <h1>Sidenote i know the truth</h1>
            <p>I know none of you are probably willing to contribute to this project as it is just a very simple project
                I just built this website to improve my web development skills so don't feel sorry for me 😄.
            </p>
        </div>
    </div>
</body>
</html>