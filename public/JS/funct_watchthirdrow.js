var epsnum = 0 , recentepsnum = epsnum;

function playepisodes_infinitestratos(epsnum) {
    epsnum = 0;
    epsnum = document.getElementById('episodenum').selectedIndex;
    epsnum +=1;
    if (epsnum == 1) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps1";
        document.getElementById('episodenum').selectedIndex = 0;
       
    }
    else if (epsnum == 2) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps2";
        document.getElementById('episodenum').selectedIndex = 1;
    }
    else if (epsnum == 3) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps3";
        document.getElementById('episodenum').selectedIndex = 2;
    }
    else if (epsnum == 4) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps4";
        document.getElementById('episodenum').selectedIndex = 3;
    }
    else if (epsnum == 5) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps5";
        document.getElementById('episodenum').selectedIndex = 4;
    }
    else if (epsnum == 6) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps6";
        document.getElementById('episodenum').selectedIndex = 5;
    }
    else if (epsnum == 7) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps7";
        document.getElementById('episodenum').selectedIndex = 6;
    }
    else if (epsnum == 8) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps8";
        document.getElementById('episodenum').selectedIndex = 7;
    }
    else if (epsnum == 9) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps9";
        document.getElementById('episodenum').selectedIndex = 8;
    }
    else if (epsnum == 10) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps10";
        document.getElementById('episodenum').selectedIndex =9;
    }
    else if (epsnum == 11) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps11";
        document.getElementById('episodenum').selectedIndex = 10;
    }
    else if (epsnum == 12) {
        window.location.href = "http://localhost/AniWeb/index.php/awwatch_thirdrow/watchinfinitestratos_eps12";
        document.getElementById('episodenum').selectedIndex = 11;
    }
}


