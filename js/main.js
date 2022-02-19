V = {
    projects: undefined,
    projectId: 0,

    init: function(){
        V.projects = [
            {
                title: [
                    "Clone of",
                    "Wizard"
                ],
                description: [{
                    fr: "Jeu de plateforme",
                    en: "Platform game"
                }],
                primaryColor: "#254667",
                secondaryColor: "#305d8a",
                image: [{
                    normal: "data/img/cloneofwizard.png",
                    mobile: "data/img/cloneofwizard2.PNG"
                }],
                url:"https://www.alexis-gousseau.com/data/CloneOfWizard/CloneOfWizardWebsite.html"
            },
            {
                title: [
                    "Galerie",
                    "Jeux-vidéo"
                ],
                description: [{
                    fr: "Gestion d'images",
                    en: "Image management"
                }],
                primaryColor: "#383737",
                secondaryColor: "#505050",
                image:[{
                    normal: "data/img/galeriejeuxvideo.png",
                    mobile: "data/img/galeriejeuxvideo2.PNG"
                }],
                url: "https://www.alexis-gousseau.com/data/GalerieJeuxVideos/"
            },
            {
                title: [
                    "Games",
                    "News"
                ],
                description: [{
                    fr: "Traitement de flux rss",
                    en: "Processing of rss feeds"
                }],
                primaryColor: "#26613c",
                secondaryColor: "#348051",
                image:[{
                    normal: "data/img/gamesnews.png",
                    mobile: "data/img/gamesnews2.PNG"
                }],
                url: "https://www.alexis-gousseau.com/data/GamesNews/"
            },
            {
                title: [
                    "Marvel",
                    "Builder"
                ],
                description: [{
                    fr: "Utilisation d'une api",
                    en: "Using an api"
                }],
                primaryColor: "#6d3939",
                secondaryColor: "#8e4c4c",
                image:[{
                    normal: "data/img/marvelbuilder.png",
                    mobile: "data/img/marvelbuilder2.PNG"
                }],
                url: "https://marvelbuilder.netlify.app/"
            },
            {
                title: [
                    "World",
                    "Map"
                ],
                description: [{
                    fr: "Utilisation de librairies avancées",
                    en: "Use of advanced libraries"
                }],
                primaryColor: "#1b304a",
                secondaryColor: "#004261",
                image:[{
                    normal: "data/img/worldmap.png",
                    mobile: "data/img/worldmap2.PNG"
                }],
                url: "https://www.alexis-gousseau.com/data/WorldMap/index.php"
            },
            {
                title: [
                    "Tier",
                    "List"
                ],
                description: [{
                    fr: "Obtention de données au format JSON à l'aide de requêtes HTTP",
                    en: "Get data in JSON format using HTTP requests"
                }],
                primaryColor: "#21507e",
                secondaryColor: "#265c90",
                image:[{
                    normal: "data/img/tierlist.png",
                    mobile: "data/img/tierlist2.PNG"
                }],
                url: "https://www.alexis-gousseau.com/data/TierList/index.php"
            }
        ],
        V.bindEvent()
    },
    bindEvent: function(){
        document.querySelector(".navIconMenu").addEventListener("click", function(){
            document.querySelector(".menuContent").classList.add("menuActivated")
            document.querySelector(".menuFiltre").classList.remove("display")
        })
        document.querySelector(".menuCrossIcon").addEventListener("click", function(){
            document.querySelector(".menuContent").classList.remove("menuActivated")
            document.querySelector(".menuFiltre").classList.add("display")
        })
        document.querySelector(".menuFiltre").addEventListener("click", function(){
            document.querySelector(".menuContent").classList.remove("menuActivated")
            document.querySelector(".menuFiltre").classList.add("display")
        })
        for (let i = 0 ; i < document.querySelectorAll(".menuLink").length; i++) {
            document.querySelectorAll(".menuLink")[i].addEventListener("click", function(){
                document.querySelector(".menuContent").classList.remove("menuActivated")
                document.querySelector(".menuFiltre").classList.add("display")
            })
        }
        document.querySelector(".projectsBtnsArrowLeft").addEventListener("click", V.projectsBtnsArrowLeft)
        document.querySelector(".projectsBtnsArrowRight").addEventListener("click", V.projectsBtnsArrowRight)

        document.querySelector(".projectsTotalId").textContent = "0" + V.projects.length

        var b = document.querySelector('.projects');
        window.onscroll = function(){
        var r   = b.getBoundingClientRect();
        if(r.top <= 300){
            V.updateData()
            if(r.top < -560){
                document.querySelector("body").style.backgroundColor = "var(--color2)"
                document.documentElement.style.setProperty('--color4', "#333333");
            }
        }
        else{
            document.querySelector("body").style.backgroundColor = "var(--color2)"
            document.documentElement.style.setProperty('--color4', "#333333");
        }
        }
        window.onscroll()
    },
    projectsBtnsArrowRight: function(){
        if(V.projectId < V.projects.length - 1){
            V.projectId = V.projectId + 1
            document.querySelector(".projectsBtnsArrowLeft").classList.remove("display")
            if(V.projectId === V.projects.length - 1){
                document.querySelector(".projectsBtnsArrowRight").classList.add("display")
            }
        }
        V.updateData()
    },
    projectsBtnsArrowLeft: function(){
        if(V.projectId > 0){
            V.projectId = V.projectId - 1
            document.querySelector(".projectsBtnsArrowRight").classList.remove("display")
            if(V.projectId === 0){
                document.querySelector(".projectsBtnsArrowLeft").classList.add("display")
            }
        }
        V.updateData()
    },
    updateData: function(){
        V.updateColorBackground()
        V.updateImgProjectsCard()
        V.updateProjectsId()
        V.updateProjectsTitle()
        V.updateProjectsDescription()
        V.updateProjectsUrl()
    },
    updateColorBackground: function(){
        document.querySelector("body").style.background = V.projects[V.projectId].primaryColor
        document.documentElement.style.setProperty('--color4', V.projects[V.projectId].secondaryColor);
    },
    updateImgProjectsCard: function(){
        const mediaQuery = window.matchMedia('(max-width: 1200px)')
        if(mediaQuery.matches){
            document.querySelector(".projectsCardImg").style.backgroundImage = "url('" + V.projects[V.projectId].image[0].mobile + "')"
        }
        else{
            document.querySelector(".projectsCardImg").style.backgroundImage = "url('" + V.projects[V.projectId].image[0].normal + "')"
        }
    },
    updateProjectsId: function(){
        document.querySelector(".projectsCurrentId").textContent = "0" + (V.projectId + 1)
    },
    updateProjectsTitle: function(){
        document.querySelector(".projectTitle").textContent = V.projects[V.projectId].title[0]
        document.querySelector(".projectTitleLastWord").textContent = V.projects[V.projectId].title[1]
    },
    updateProjectsDescription: function(){
        var lang = document.querySelectorAll(".homeLanguagesSelectOption")
        for (let i = 0 ; i < lang.length ; i ++) {
            if(lang[i].value === "fr" && lang[i].hasAttribute("selected")){
                document.querySelector(".projectSubtitle").textContent = V.projects[V.projectId].description[0].fr
            }
            else if(lang[i].value === "en" && lang[i].hasAttribute("selected")){
                document.querySelector(".projectSubtitle").textContent = V.projects[V.projectId].description[0].en
            }
        }        
    },
    updateProjectsUrl: function(){
        document.querySelector(".projectsCardUrl").href = V.projects[V.projectId].url
    }
}

window.onload = V.init()