<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/index.css">
    <script src="https://kit.fontawesome.com/9c5767853b.js" crossorigin="anonymous"></script>
    <title>Grub Editor</title>
</head>
<body>
    <script defer type="module" src="./js/script.js"></script>

    <?php 
        include("header.php");
    ?>
    
    
    <div id="main">
        <div id="title">
            <h1 >No need to edit <span>/etc/default/grub manually</span></h1>
            <p>Grub Editor allows you to customize grub with a graphical application(Not a text editor😉)</p>
        </div>
        
        <div id="image_viewer">     
            <div id="screenshots">
                <img id="screenshot0" src="images/light-screenshot0.png">
                <img id="screenshot1" src="images/light-screenshot1.png">
                <!-- <img src="favicon.ico"> -->
                
            </div>
            <i class="fa-solid fa-angle-right fa-3x" id="btn-right"></i>
            <i class="fa-solid fa-angle-left fa-3x" id="btn-left"></i>
        </div>
        <div id="description-text" style="display:none;">
            <img src="./images/kate.png">
            <p>No more editing /etc/default/grub manually</p>
        </div>
        <div id="how_it_works">
            <h1 class="section_heading">How does it work?</h1>
            <p>Unlike the grub customizer, grub editor performs the edits to <span id="cool">etc/default/grub</span>
                and then calls <span>update-grub</span> or <span>grub-mkconfig</span> to update <span>/boot/grub/grub.cfg</span>. 
                It is much more safer than editing <span>/boot/grub/grub.cfg</span> directly as it cannot leave the system in an unbootable condition.</p>
                <p>It currently uses <span>pkexec</span> to execute commands that require sudo permissions as i don't know how to use polkit 
                to elavate permissions 😅.
            </p>
        </div>
        <div id="download-container">
            <div id="download">
                <h1 class="section_heading">Download</h1>
                <div id="cards">
                    <div class="sub-download">
                        <img src="https://archlinux.org/static/archnavbar/archlogo.a2d0ef2df27d.png" id="archlogo">
                        <h2 >Arch linux and it's derivatives</h2>
                        <p>It is in AUR as <a href="https://aur.archlinux.org/packages/grub-editor">grub-editor</a>.<br>
                        You can use a package manager like pamac to install or you can execute the commands below</p>
                        <div class="code">
                            <p>git clone https://aur.archlinux.org/grub-editor.git<br>
                                cd grub-editor<br>
                                makepkg -si
                            </p>
                        
                        </div>
                    </div>
                    <div class="sub-download">
                        <img src="https://assets.ubuntu.com/v1/ce518a18-CoF-2022_solid+O.svg" id="ubuntulogo">
                        <h2>Ubuntu and it's derivatives</h2>
                        <p>Download and install the <a href="https://github.com/Thenujan-0/grub-editor/releases/download/v1.0/grub-editor.deb">deb file</a></p>
                    </div>
                    <div class="sub-download">
                        <h2>fedora</h2>
                        
                        <p>We currently do not have a fedora release</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>