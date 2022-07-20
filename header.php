    <div id="header">
        <header>
            <div id="brand">
                <img id="brand-logo" src="favicon.ico">
                <h1>Grub Editor</h1>
            </div>
            <nav id="nav_bar">
                <ul>
                    
                    <li><a target="_blank" <?php if($active_page=="home"){echo 'class="current"';}?> href="index.php">Home</a></li>

                    <li><a target="_blank" href="https://github.com/Thenujan-0/grub-editor">Source Code(Github)</a></li>
                    <li><a <?php if($active_page=="contribute"){echo 'class="current"';}?> href="contribute.php">Contribute</a></li>
                    <li><a <?php if($active_page=="donate"){echo 'class="current"';}?> href="#">Donate</a></li>
                    <li><a target="_blank" href="https://thenujan.herokuapp.com/">About Me</a></li>
                </ul>
            </nav>
            

        </header>
    </div>
    <div id="hamburger_menu" >
        <span id="hamburger_menu_span1" class="hamburger_menu_span"></span>
        <span id="hamburger_menu_span2" class="hamburger_menu_span"></span>
        <span id="hamburger_menu_span3" class="hamburger_menu_span"></span>
    </div>
        
    <nav id="side_nav_bar">
        <ul>
            
            <li><a <?php if($active_page=="home"){echo 'class="current"';}?> href="index.php">Home</a></li>

            <li><a target="_blank" href="https://github.com/Thenujan-0/grub-editor">Source Code(Github)</a></li>
            <li><a <?php if($active_page=="contribute"){echo 'class="current"';}?> href="contribute.php">Contribute</a></li>
            <li><a <?php if($active_page=="donate"){echo 'class="current"';}?> href="#">Donate</a></li>
            <li><a target="_blank" href="https://thenujan.herokuapp.com/">About Me</a></li>
        </ul>
    </nav>