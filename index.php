<?php
    require("php/decide-lang.php");
    require("php/mail.php");
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
	<meta name="google-site-verification" content="jJNTl2vhVaxxWoxK1Y6HbsGzbOkJw-1KirfGR3ukkyY"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Alexis Gousseau">
    <meta name="publisher" content="Alexis Gousseau">
    <meta name="reply-to" content="alexis.gousseau[at]orange.com">
    <meta name="category" content="internet">
    <meta name="description" content="Site internet réalisé dans le but de promouvoir mon travail effectué tout au long de mes formations mais aussi durant mon temps libre.">
	<meta name="keywords" lang="fr" content="Alexis Gousseau, alexis, alexi, alexy, gousseau, goussau, gousso, goussot, limoges, étudiant, portfolio, développement web, front-end, front, HTML, CSS, JAVASCRIPT, PHP">
	<meta name="robots" content="all">
    <meta property="og:title" content="Alexis Gousseau | Portfolio"/>
    <meta property="og:description" content="Site internet réalisé dans le but de promouvoir mon travail effectué tout au long de mes formations mais aussi durant mon temps libre."/>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="	https://www.alexis-gousseau.com" />
    <meta property="og:image" content="https://www.alexis-gousseau.com/data/img/background.PNG" />
	<title>Alexis Gousseau | Portfolio</title>
    <link rel="icon" href="data/img/logo.png">
    <link rel="stylesheet" href="css/reboot.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@300;400&display=swap" rel="stylesheet">
</head>
<body>
    <h1><?php echo h1; ?></h1>

    <!-- NAVIGATION -->
    <nav class="nav">
        <p class="navLogo">g<span>.</span></p>
        <svg class="navIconMenu">
            <use href="#icon-menu"></use>
        </svg>
    </nav>

    <!-- MENU -->
    <section class="menu">
        <div class="menuFiltre display"></div>
        <div class="menuContent">
            <svg class="menuCrossIcon">
                <use href="#icon-cross"></use>
            </svg>
            <div class="menuLinks">
                <a class="menuLink" href="#home"><span class="menuLinkNumber">01.</span><?php echo menuHome; ?></a>
                <a class="menuLink" href="#projects"><span class="menuLinkNumber">02.</span><?php echo menuProjects; ?></a>
                <a class="menuLink" href="#contact"><span class="menuLinkNumber">03.</span><?php echo menuContact; ?></a>
            </div>
        </div>
    </section>

    <!-- BACK LINES -->
    <section class="lines">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </section>

    <!-- HOME -->
    <section class="home" id="home">
        <div class="homeTitles">
            <div class="homeTitlesContent">
                <h2 class="homeTitle">alexis</h2>
                <h2 class="homeTitle">gousseau</h2>
            </div>
            <div class="homeSubtitle">
                <a class="homeSubtitleHook" href="<?php echo urlCV; ?>" target="_blank">
                    <h3 class="homeSubtitleCV"><?php echo voirCV; ?></h3>
                    <svg class="homeSubtitleIcon">
                        <use href="#icon-arrow-white"></use>
                    </svg>
                </a>
            </div>
        </div>
        <div class="homeCard">
            <div class="homeCardImg"></div>
            <div class="homeCardFond"></div>
            <div class="homeCardGradient"></div>
            <p class="homeCardDescription"><?php echo homeCardDescription; ?></p>
        </div>
        <form class="homeLanguages" method="POST" action="">
            <select name="lang" class="homeLanguagesSelect" onchange='if(this.value != 0) { this.form.submit(); }'>
                <option class="homeLanguagesSelectOption" value="fr" <?php if ($_POST['lang'] == 'fr') echo 'selected="selected"'; ?>>Français</option>
                <option class="homeLanguagesSelectOption" value="en" <?php if ($_POST['lang'] == 'en') echo 'selected="selected"'; ?>>English</option>
            </select>
        </form>
        <div class="circle">
            <a href="#projects">
                <svg class="circleArrow">
                    <use href="#icon-arrow-white"></use>
                </svg>
                <svg class="circleIcon" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="0 0 150 150" enable-background="new 0 0 150 150" xml:space="preserve">
                    <defs>
                        <path id="circlePath" d="M 75, 75 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                    </defs>
                    <text fill="var(--color1)">
                        <textPath xlink:href="#circlePath">SCROLL SCROLL SCROLL SCROLL SCROLL SCROLL</textPath>
                    </text>
                </svg>
            </a>
        </div>
    </section>

    <!-- PROJECTS -->
    <section class="projects" id="projects">
        <div class="projectDescription">
            <div class="projectTitles">
                <h2 class="projectTitle">Clone of</h2>
                <h2 class="projectTitleLastWord">Wizard</h2>
            </div>
            <p class="projectSubtitle">Jeu de plateforme</p>
        </div>

        <div class="projectsContent">
            <div class="projectsBtns">
                <svg class="projectsBtnsArrow projectsBtnsArrowLeft display">
                    <use href="#icon-arrow-white"></use>
                </svg>
            </div>
            <div class="projectsCard">
                <a href="#" class="projectsCardUrl" target="_blank">
                    <div class="projectsCardImg"></div>
                </a>
                <div class="projectsCardFond"></div>
            </div>
            <div class="projectsBtns">
                <svg class="projectsBtnsArrow projectsBtnsArrowRight">
                    <use href="#icon-arrow-white"></use>
                </svg>
            </div>
            <div class="projectsId">
                <p class="projectsCurrentId">01</p>
                <span class="projectsIdSeparation"></span>
                <p class="projectsTotalId">05</p>
            </div>
        </div> 
    </section>

    <!-- CONTACT -->
    <section class="contact" id="contact">
        <h2 class="contactTitle"><?php echo contactTitle; ?></h2>
        <form class="contactForm" method="POST" action="#contact">
            <div class="contactFormInformations">
                <input class="inputLastname" name="lastname" type="text" autocomplete="off" placeholder="<?php echo inputLastname; ?>" value="<?php if(isset($_POST['lastname'])) { echo $lastname; }; ?>">
                <input class="inputFirstname" name="firstname" type="text" autocomplete="off" placeholder="<?php echo inputFirstname; ?>" value="<?php if(isset($_POST['firstname'])) { echo $firstname; }; ?>">
                <input class="inputEmail" name="mail" type="email" autocomplete="off" placeholder="<?php echo inputEmail; ?>" value="<?php if(isset($_POST['mail'])) { echo $mail; }; ?>">
            </div>
            <textarea class="inputMessage" name="message" autocomplete="off" placeholder="<?php echo inputMessage; ?>"><?php if(isset($_POST['message'])) { echo $message; }; ?></textarea>
            <input class="inputBtnSend" name="sendMail" type="submit" value="<?php echo inputBtnSend; ?>">
        </form>
        <p class="inputSendMessage"><?php if(isset($msg)){ echo $msg; }; ?></p>
        <div class="circle">
            <a href="#">
                <svg class="circleArrow contactCircleArrow">
                    <use href="#icon-arrow-white"></use>
                </svg>
                <svg class="circleIcon" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="0 0 150 150" enable-background="new 0 0 150 150" xml:space="preserve">
                    <defs>
                        <path id="circlePath" d="M 75, 75 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                    </defs>
                    <text fill="var(--color1)">
                        <textPath xlink:href="#circlePath">SCROLL SCROLL SCROLL SCROLL SCROLL SCROLL</textPath>
                    </text>
                </svg>
            </a>
        </div>
    </section>

    <!-- FOOTER -->
    <section class="footer">
        <a class="footerBtnHaut" href="#">
            <svg class="circleArrow footerCircleArrow">
                <use href="#icon-arrow-orange"></use>
            </svg>
            <p class="footerBtnArrow"><?php echo footerBtnArrow; ?></p>
        </a>
        <div class="footerContent">
            <div class="footerContentFirstDiv">
                <p class="footerCopyright">© 2022 alexis gousseau</p>
                <p class="footerDroits"><?php echo footerDroits; ?></p>
            </div>
            <div class="footerContentDiv">
                <a href="mentionsLegales.html" target="_blank"><p class="footerMentions"><?php echo footerMentions; ?></p></a>
                <a href="politiqueConfidentialite.html" target="_blank"><p class="footerMentions"><?php echo footerPolitique; ?></p></a>
            </div>
            <div class="footerContentDiv">
                <a href="<?php echo urlCV; ?>" target="_blank"><p class="footerMentions"><?php echo voirCV; ?></p></a>
                <div class="footerReseaux">
                    <a href="https://www.linkedin.com/in/alexis-gousseau/" target="_blank">
                        <svg class="footerReseauxIcon">
                            <use href="#icon-linkedin"></use>
                        </svg>
                    </a>
                    <a href="https://www.behance.net/alexisgousseau" target="_blank">
                        <svg class="footerReseauxIcon">
                            <use href="#icon-behance"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- SVGs -->
    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
        <defs>
			<symbol id="icon-menu" viewBox="0 0 32 32">
                <line x1="11.0546" y1="31.1355" x2="31.0546" y2="31.1355" stroke="var(--color1)" stroke-width="2"/>
                <line x1="16.0545" y1="17.1355" x2="31.0545" y2="17.1355" stroke="var(--color1)" stroke-width="2"/>
                <line y1="-1" x2="29.9207" y2="-1" transform="matrix(1 0 0.00279724 0.999996 1 2)" stroke="var(--color1)" stroke-width="2"/>
            </symbol>
        </defs>
    </svg>

    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
        <defs>
			<symbol id="icon-arrow-white" viewBox="0 0 69 97">
                <path d="M1 61.5L33.5 95M33.5 95L67.5 61.5M33.5 95V0" stroke="var(--color1)" stroke-width="4"/>
            </symbol>
        </defs>
    </svg>

    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
        <defs>
			<symbol id="icon-arrow-orange" viewBox="0 0 69 97">
                <path d="M1 61.5L33.5 95M33.5 95L67.5 61.5M33.5 95V0" stroke="var(--color3)" stroke-width="4"/>
            </symbol>
        </defs>
    </svg>

    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
        <defs>
			<symbol id="icon-cross" viewBox="0 0 32 32">
                <path d="M2.5 1L17 15.5M33 31.5L17 15.5M17 15.5L1 31.5L31.5 1" stroke="white" stroke-width="2"/>
            </symbol>
        </defs>
    </svg>

    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <symbol id="icon-linkedin" viewBox="0 0 32 32">
                <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
            </symbol>
        </defs>
    </svg>

    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <symbol id="icon-behance" viewBox="0 0 32 32">
                <path d="M12.631 14.019c0.406-0.294 0.6-0.781 0.6-1.456 0-0.375-0.063-0.681-0.194-0.919-0.137-0.238-0.313-0.425-0.544-0.556-0.225-0.137-0.481-0.231-0.775-0.281-0.287-0.056-0.594-0.081-0.906-0.081h-3.294v3.737h3.563c0.625 0.006 1.144-0.144 1.55-0.444z"></path>
                <path d="M13.188 17.394c-0.463-0.35-1.075-0.525-1.838-0.525h-3.831v4.406h3.756c0.35 0 0.675-0.031 0.988-0.1s0.594-0.175 0.831-0.337c0.238-0.156 0.431-0.369 0.575-0.637s0.213-0.619 0.213-1.038c0-0.825-0.231-1.413-0.694-1.769z"></path>
                <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM20.975 8.419h6.481v1.581h-6.481v-1.581zM16.925 21.45c-0.313 0.594-0.738 1.075-1.262 1.45-0.531 0.375-1.137 0.65-1.819 0.831-0.675 0.181-1.375 0.269-2.088 0.269h-7.756v-15.994h7.537c0.762 0 1.456 0.069 2.088 0.2 0.625 0.131 1.162 0.356 1.613 0.662 0.444 0.306 0.794 0.713 1.044 1.219 0.244 0.5 0.369 1.131 0.369 1.875 0 0.806-0.181 1.475-0.55 2.012s-0.906 0.975-1.631 1.319c0.988 0.281 1.713 0.781 2.194 1.487 0.488 0.712 0.725 1.569 0.725 2.569 0.006 0.819-0.15 1.519-0.462 2.1zM29.981 18.975h-8.356c0 0.913 0.313 1.781 0.788 2.25 0.475 0.462 1.163 0.7 2.056 0.7 0.644 0 1.194-0.163 1.663-0.488 0.462-0.325 0.744-0.669 0.85-1.025h2.8c-0.45 1.394-1.131 2.387-2.063 2.988-0.919 0.6-2.044 0.9-3.35 0.9-0.913 0-1.731-0.15-2.469-0.438-0.738-0.294-1.35-0.706-1.869-1.244-0.506-0.538-0.894-1.181-1.175-1.931-0.275-0.744-0.419-1.575-0.419-2.469 0-0.869 0.144-1.675 0.425-2.425 0.288-0.75 0.688-1.4 1.212-1.938 0.525-0.544 1.15-0.975 1.875-1.294 0.725-0.313 1.525-0.469 2.413-0.469 0.981 0 1.837 0.188 2.575 0.575 0.731 0.381 1.331 0.894 1.806 1.537s0.806 1.375 1.019 2.2c0.206 0.813 0.275 1.669 0.219 2.569z"></path>
                <path d="M24.269 14.494c-0.506 0-0.931 0.088-1.262 0.262s-0.6 0.387-0.806 0.637c-0.206 0.256-0.344 0.525-0.425 0.819-0.081 0.281-0.131 0.538-0.144 0.762h5.175c-0.075-0.813-0.356-1.412-0.731-1.831-0.387-0.425-1.025-0.65-1.806-0.65z"></path>
            </symbol>
        </defs>
    </svg>

    <script src="js/main.js" async></script>
</body>
</html>