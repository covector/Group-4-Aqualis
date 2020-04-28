function UnityProgress(unityInstance, progress) {
  if (!unityInstance.Module)
    return;
  if (!unityInstance.logo) {
    unityInstance.logo = document.createElement("div");
    unityInstance.logo.className = "logo " + unityInstance.Module.splashScreenStyle;
    unityInstance.container.appendChild(unityInstance.logo);
  }
  if (!unityInstance.progress) {    
    unityInstance.progress = document.createElement("div");
    unityInstance.progress.className = "progress " + unityInstance.Module.splashScreenStyle;
    unityInstance.progress.empty = document.createElement("div");
    unityInstance.progress.empty.className = "empty";
    unityInstance.progress.appendChild(unityInstance.progress.empty);
    unityInstance.progress.full = document.createElement("div");
    unityInstance.progress.full.className = "full";
    unityInstance.progress.appendChild(unityInstance.progress.full);
    unityInstance.container.appendChild(unityInstance.progress);
  }
  unityInstance.progress.full.style.width = (100 * progress) + "%";
  unityInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";

  if (progress == 1){
    unityInstance.logo.style.display = unityInstance.progress.style.display = "none";
    let bar = document.getElementsByClassName("load")[0];
    let jar = document.getElementsByClassName("ne")[0];
    bar.style.opacity = "1";
    jar.style.opacity = "0";
    let dir = 1;
    let enter = setInterval(()=>{
      if (dir == 1){
        let currOp = parseFloat(bar.style.opacity);
        if (currOp <= 0.05) {
          dir = -1;
          jar.style.display = "block";
          bar.style.display = "none";
        }
        bar.style.opacity = (currOp - 0.05).toString();
      }
      else{
        let currOp = parseFloat(jar.style.opacity);
        if (currOp >= 0.95) {
          document.getElementsByClassName("topBar")[0].style.height = "10%";
          clearInterval(enter);
        }
        jar.style.opacity = (currOp + 0.05).toString();
      }   
    }, 50);
  }
}