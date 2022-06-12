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
    <meta property="og:url" content="https://www.alexis-gousseau.com" />
    <meta property="og:image" content="https://www.alexis-gousseau.com/data/img/portfolio.jpg" />
	<title>Alexis Gousseau | Portfolio</title>
    <link rel="icon" href="data/img/logo.png">
    <link rel="stylesheet" href="css/reboot.css">
    <link rel="stylesheet" href="css/app.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@300;400&display=swap" rel="stylesheet">
</head>
<body>
    <h1><?php echo homeH1; ?></h1>

    <!-- NAVIGATION -->
    <nav class="nav">
        <p class="navLogo">g<span>.</span></p>
        <svg class="navIconMenu" aria-labelledby="title">
            <title><?php echo menuSvgTitleIconMenu; ?></title>
            <desc><?php echo menuSvgDescIconMenu; ?></desc>
            <use href="#icon-menu"></use>
        </svg>
    </nav>

    <!-- MENU -->
    <section class="menu">
        <div class="menuFiltre display"></div>
        <div class="menuContent">
            <svg class="menuCrossIcon" aria-labelledby="title">
                <title><?php echo menuSvgTitleCrossIcon; ?></title>
                <desc><?php echo menuSvgDescCrossIcon; ?></desc>
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
                <a class="homeSubtitleHook" href="<?php echo homeLinkCV; ?>" target="_blank">
                    <h3 class="homeSubtitleCV"><?php echo homeLookCV; ?></h3>
                    <svg class="homeSubtitleIcon" aria-labelledby="title">
                        <title><?php echo homeSvgTitleSubtitleIcon; ?></title>
                        <desc><?php echo homeSvgDescSubtitleIcon; ?></desc>
                        <use href="#icon-arrow-white"></use>
                    </svg>
                </a>
            </div>
        </div>
        <div class="homeCard backgroundCard">
            <div class="homeCardImg">
                <img src="data/img/photo.jpg" alt="<?php echo homeAltPhoto; ?>Photo d'Alexis Gousseau">
            </div>
            <div class="cardGradient"></div>
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
                <svg class="circleArrow" aria-labelledby="title">
                    <title><?php echo homeSvgTitleCircleArrow; ?></title>
                    <desc><?php echo homeSvgDescCircleArrow; ?></desc>
                    <use href="#icon-arrow-white"></use>
                </svg>
                <svg class="circleIcon" aria-labelledby="title">
                    <title><?php echo homeSvgTitleCircleIcon; ?></title>
                    <desc><?php echo homeSvgDescCircleIcon; ?></desc>
                    <use href="#icon-circle"></use>
                    <text fill="var(--color1)">
                        <textPath xlink:href="#circlePath">SCROLL SCROLL SCROLL SCROLL SCROLL SCROLL</textPath>
                    </text>
                </svg>
            </a>
        </div>
    </section>

    <!-- PROJECTS -->
    <section class="projects" id="projects">
        <div class="slider">
            <div class="slider-wrapper">
                <div class="slider-item" data-primary-color="#254667" data-secondary-color="#305d8a">
                    <div class="projectTitles">
                        <h2 class="projectTitle">Clone of</h2>
                        <h2 class="projectTitleLastWord">Wizard</h2>
                    </div>
                    <p class="projectSubtitle"><?php echo projectDesc1; ?></p>
                    <div class="slider-link-wrapper backgroundCard">
                        <div class="cardGradient"></div>
                        <a href="https://www.alexis-gousseau.com/data/CloneOfWizard/CloneOfWizardWebsite.html" target="_blank">
                            <img src="data/img/cloneofwizard.png" alt="Image vitrine du projet 'Clone of Wizard'">
                        </a>
                    </div>
                </div>
                <div class="slider-item" data-primary-color="#383737" data-secondary-color="#505050">
                    <div class="projectTitles">
                        <h2 class="projectTitle">Games</h2>
                        <h2 class="projectTitleLastWord">Gallery</h2>
                    </div>
                    <p class="projectSubtitle"><?php echo projectDesc2; ?></p>
                    <div class="slider-link-wrapper backgroundCard">
                        <div class="cardGradient"></div>
                        <a href="https://www.alexis-gousseau.com/data/GalerieJeuxVideos/" target="_blank">
                            <img src="data/img/galeriejeuxvideo.png" alt="Image vitrine du projet 'Galerie Jeux-videos'">
                        </a>
                    </div>
                </div>
                <div class="slider-item" data-primary-color="#26613c" data-secondary-color="#348051">
                    <div class="projectTitles">
                        <h2 class="projectTitle">Games</h2>
                        <h2 class="projectTitleLastWord">News</h2>
                    </div>
                    <p class="projectSubtitle"><?php echo projectDesc3; ?></p>
                    <div class="slider-link-wrapper backgroundCard">
                        <div class="cardGradient"></div>
                        <a href="https://www.alexis-gousseau.com/data/GamesNews/" target="_blank">
                            <img src="data/img/gamesnews.png" alt="Image vitrine du projet 'Games News'">
                        </a>
                    </div>
                </div>
                <div class="slider-item" data-primary-color="#6d3939" data-secondary-color="#8e4c4c">
                    <div class="projectTitles">
                        <h2 class="projectTitle">Marvel</h2>
                        <h2 class="projectTitleLastWord">Builder</h2>
                    </div>
                    <p class="projectSubtitle"><?php echo projectDesc4; ?></p>
                    <div class="slider-link-wrapper backgroundCard">
                        <div class="cardGradient"></div>
                        <a href="https://marvelbuilder.netlify.app/" target="_blank">
                            <img src="data/img/marvelbuilder.png" alt="Image vitrine du projet 'Marvel Builder'">
                        </a>
                    </div>
                </div>
                <div class="slider-item" data-primary-color="#1b304a" data-secondary-color="#004261">
                    <div class="projectTitles">
                        <h2 class="projectTitle">World</h2>
                        <h2 class="projectTitleLastWord">Map</h2>
                    </div>
                    <p class="projectSubtitle"><?php echo projectDesc5; ?></p>
                    <div class="slider-link-wrapper backgroundCard">
                        <div class="cardGradient"></div>
                        <a href="https://www.alexis-gousseau.com/data/WorldMap/index.php" target="_blank">
                            <img src="data/img/worldmap.png" alt="Image vitrine du projet 'World Map'">
                        </a>
                    </div>
                </div>
                <div class="slider-item" data-primary-color="#21507e" data-secondary-color="#306aa1">
                    <div class="projectTitles">
                        <h2 class="projectTitle">Tier</h2>
                        <h2 class="projectTitleLastWord">List</h2>
                    </div>
                    <p class="projectSubtitle"><?php echo projectDesc6; ?></p>
                    <div class="slider-link-wrapper backgroundCard">
                        <div class="cardGradient"></div>
                        <a href="https://www.alexis-gousseau.com/data/TierList/index.php" target="_blank">
                            <img src="data/img/tierlist.png" alt="Image vitrine du projet 'Tier List'">
                        </a>
                    </div>
                </div>
            </div>
            <div class="slider-id-wrapper">
                <svg class="slider-prev slider-inactivated" aria-labelledby="title">
                    <title><?php echo projectSvgTitleSliderPrev; ?></title>
                    <desc><?php echo projectSvgDescSliderPrev; ?></desc>
                    <use href="#icon-arrow-white"></use>
                </svg>
                <span class="slider-id-active"></span>
                <span class="slider-id-separation"></span>
                <span class="slider-id-max"></span>
                <svg class="slider-next" aria-labelledby="title">
                    <title><?php echo projectSvgTitleSliderNext; ?></title>
                    <desc><?php echo projectSvgDescSliderNext; ?></desc>
                    <use href="#icon-arrow-white"></use>
                </svg>
            </div>
        </div>
    </section>

    <!-- CONTACT -->
    <section class="contact" id="contact">
        <h2 class="contactTitle"><?php echo contactTitle; ?></h2>
        <form class="contactForm" method="POST" action="#contact">
            <div class="contactFormInformations">
                <input class="inputLastname" name="lastname" type="text" autocomplete="off" placeholder="<?php echo contactLastname; ?>" value="<?php if(isset($_POST['lastname'])) { echo $lastname; }; ?>">
                <input class="inputFirstname" name="firstname" type="text" autocomplete="off" placeholder="<?php echo contactFirstname; ?>" value="<?php if(isset($_POST['firstname'])) { echo $firstname; }; ?>">
                <input class="inputEmail" name="mail" type="email" autocomplete="off" placeholder="<?php echo contactEmail; ?>" value="<?php if(isset($_POST['mail'])) { echo $mail; }; ?>">
            </div>
            <textarea class="inputMessage" name="message" autocomplete="off" placeholder="<?php echo contactMessage; ?>"><?php if(isset($_POST['message'])) { echo $message; }; ?></textarea>
            <input class="inputBtnSend" name="sendMail" type="submit" value="<?php echo contactBtnSend; ?>">
        </form>
        <p class="inputSendMessage"><?php if(isset($msg)){ echo $msg; }; ?></p>
        <div class="circle">
            <a href="#">
                <svg class="circleArrow contactCircleArrow" aria-labelledby="title">
                    <title><?php echo contactSvgTitleCircleArrow; ?></title>
                    <desc><?php echo contactSvgDescCircleArrow; ?></desc>
                    <use href="#icon-arrow-white"></use>
                </svg>
                <svg class="circleIcon" aria-labelledby="title">
                    <title><?php echo contactSvgTitleCircleIcon; ?></title>
                    <desc><?php echo contactSvgDescCircleIcon; ?></desc>
                    <use href="#icon-circle"></use>
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
            <svg class="circleArrow footerCircleArrow" aria-labelledby="title">
                <title><?php echo footerSvgTitleCircleArrow; ?></title>
                <desc><?php echo footerSvgDescCircleArrow; ?></desc>
                <use href="#icon-arrow-orange"></use>
            </svg>
            <p class="footerBtnArrow"><?php echo footerBtnArrow; ?></p>
        </a>
        <div class="footerContent">
            <div class="footerContentFirstDiv">
                <p class="footerCopyright">© 2022 Alexis Gousseau</p>
                <p class="footerDroits"><?php echo footerDroits; ?></p>
            </div>
            <div class="footerContentDiv">
                <a href="mentionsLegales.html" target="_blank"><p class="footerMentions"><?php echo footerMentions; ?></p></a>
                <a href="politiqueConfidentialite.html" target="_blank"><p class="footerMentions"><?php echo footerPolitique; ?></p></a>
            </div>
            <div class="footerContentDiv">
                <a href="<?php echo homeLinkCV; ?>" target="_blank"><p class="footerMentions"><?php echo homeLookCV; ?></p></a>
                <div class="footerReseaux">
                    <a href="https://github.com/alexis-gss" target="_blank">
                        <svg class="footerReseauxIcon" aria-labelledby="title">
                            <title><?php echo footerSvgTitleIconGithub; ?></title>
                            <desc><?php echo footerSvgDescIconGithub; ?></desc>
                            <use href="#icon-github"></use>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/alexis-gousseau/" target="_blank">
                        <svg class="footerReseauxIcon" aria-labelledby="title">
                            <title><?php echo footerSvgTitleIconLinkedIn; ?></title>
                            <desc><?php echo footerSvgDescIconLinkedIn; ?></desc>
                            <use href="#icon-linkedin"></use>
                        </svg>
                    </a>
                    <a href="https://www.behance.net/alexisgousseau" target="_blank">
                        <svg class="footerReseauxIcon" aria-labelledby="title">
                            <title><?php echo footerSvgTitleIconBehance; ?></title>
                            <desc><?php echo footerSvgDescIconBehance; ?></desc>
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
            <symbol id="icon-github" viewBox="0 0 64 64">
                <path d="M38.592,50.166h-4.84h-4.844c0,0,0.014-2.874,0-4.844c-6.629,1.428-8.479-3.633-8.479-3.633    c-1.21-2.423-2.423-3.633-2.423-3.633c-2.423-1.438,0-1.21,0-1.21c2.423,0,3.633,2.423,3.633,2.423    c2.126,3.609,5.908,3.028,7.266,2.423c0-1.21,0.53-3.042,1.21-3.633c-5.29-0.595-9.693-3.633-9.693-9.689s1.216-7.266,2.427-8.479    c-0.244-0.597-1.259-2.805,0.037-6.056c0,0,2.38,0,4.803,3.633c1.2-1.2,4.844-1.21,6.056-1.21c1.208,0,4.854,0.01,6.054,1.21    c2.423-3.633,4.809-3.633,4.809-3.633c1.296,3.251,0.282,5.459,0.037,6.056c1.21,1.21,2.423,2.423,2.423,8.479    s-4.397,9.092-9.689,9.689c0.682,0.591,1.21,2.675,1.21,3.633L38.592,50.166L38.592,50.166z"/>
            </symbol>
        </defs>
    </svg>
    
    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
        <defs>
			<symbol id="icon-linkedin" viewBox="0 0 32 32">
                <path d="M24.294,22.942v-6.137c0-3.288-1.755-4.818-4.096-4.818c-1.889,0-2.735,1.039-3.206,1.768v-1.517h-3.558   c0.047,1.005,0,10.704,0,10.704h3.558v-5.978c0-0.319,0.023-0.639,0.117-0.867c0.257-0.639,0.842-1.301,1.825-1.301   c1.288,0,1.803,0.981,1.803,2.42v5.727L24.294,22.942L24.294,22.942z M9.685,10.777c1.24,0,2.013-0.823,2.013-1.85   c-0.023-1.05-0.773-1.849-1.99-1.849S7.696,7.877,7.696,8.927c0,1.028,0.772,1.85,1.967,1.85H9.685z M11.464,22.942V12.238H7.907   v10.704H11.464z"/>
            </symbol>
        </defs>
    </svg>

    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
        <defs>
			<symbol id="icon-behance" viewBox="0 0 32 32">
                <path d="M14.284,15.607c0,0,1.678-0.128,1.678-2.136c0-2.007-1.138-2.996-2.878-2.996l-5.961-0.009v11.09h6.099    c0,0,3.05,0.096,3.05-3.327C16.272,18.228,16.496,15.607,14.284,15.607z M9.341,12.129h3.05c0,0,1.044,0.017,1.044,1.37    c0,1.402-1.044,1.402-1.044,1.402h-3.05V12.129z M12.668,19.892H9.341v-3.327h3.327c0,0,1.663,0.017,1.663,1.663    S12.907,19.892,12.668,19.892z"/>
                <path d="M20.985,13.238c-4.166,0-4.159,4.159-4.159,4.159s-0.277,4.159,4.159,4.159c0,0,3.881,0,3.881-3.327    h-2.218c0,0,0,1.663-1.663,1.663c0,0-1.663,0-1.663-2.218c0,0,4.436,0,5.545,0C24.867,16.565,24.867,13.238,20.985,13.238z     M19.322,16.565c0,0-0.037-1.663,1.663-1.663c1.7,0,1.663,1.663,1.663,1.663H19.322z"/>
                <rect height="1.109" width="4.436" x="18.767" y="11.574"/>
            </symbol>
        </defs>
    </svg>

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

    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
        <defs>
            <symbol id="icon-circle" viewBox="0 0 32 32">
                <path id="circlePath" d="M 75, 75 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
            </symbol>
        </defs>
    </svg>

    <script src="js/main.js" async></script>
    <script src="js/slider.js"></script>
</body>
</html>