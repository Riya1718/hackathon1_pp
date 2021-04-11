const puppeteer = require("puppeteer");
const id = "tepobik682@gmail.com";
const pwd="ab@123456";

(async function(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
      });
    let allPages = await browser.pages();
    let tab = allPages[0];

    await tab.goto("https://accounts.google.com/signin");
    await tab.type("#identifierId",id)
    await tab.click(".VfPpkd-dgl2Hf-ppHlrf-sM5MNb .VfPpkd-RLmnJb");
    await tab.waitForTimeout(5000);
    await tab.waitForSelector(".Xb9hP .whsOnd.zHQkBf");
    await tab.type(".Xb9hP .whsOnd.zHQkBf",pwd);
    await tab.click(".VfPpkd-dgl2Hf-ppHlrf-sM5MNb .VfPpkd-RLmnJb");
    let newTab=await browser.newPage();
    await newTab.waitForTimeout(5000);
    await newTab.goto("https://mail.google.com/mail/u/0/#inbox");
    await newTab.waitForSelector(".T-I.T-I-KE.L3");
    await newTab.click(".T-I.T-I-KE.L3");
    await newTab.waitForSelector(".wO.nr.l1");
    await newTab.type(".wO.nr.l1","riyajain6999@gmail.com");
    await newTab.click(".aoD.az6");
    await newTab.type(".aoD.az6","Present");
    await newTab.click(".Ar.Au");
    await newTab.type(".Ar.Au","Good Morning Mam....I am ready for today task.");
    // await newTab.click(".aA7.aaA.aMZ");
    // let allnav = await newTab.$$(".a-Ji-Yb.a-Ji-Yb-Zb.a-Ji-Yb-hc");
    // let recentnav = allnav[2];
    // await recentnav.click();
   
    // await newTab.waitForSelector(".ee-Ki-If.ee-Df-If");
    // await newTab.waitForSelector(".Nd-a11y-Ud-Kc.Nd-ue-ve-Mg-qb.Nd-ph-Kc");
    // let allFiles = await newTab.$$('.Nd-a11y-Ud-Kc.Nd-ue-ve-Mg-qb.Nd-ph-Kc');
    // let recentFile = allFiles[0];
    // await recentFile.click();
    await newTab.click(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3")
    await newTab.close();
  
})();
