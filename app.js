let nei_nav=document.getElementsByClassName("nei_nav");
let cbts=nei_nav[0].getElementsByTagName("li");

let nei_nr=document.getElementsByClassName("nei_nr");
let fds=nei_nr[0].getElementsByClassName("fd");

    for(let i=0;i<cbts.length;i++){
        cbts[i].index1=i;
        cbts[i].onclick=function(){
            for(let j=0;j<cbts.length;j++){
                cbts[j].index1=j;
                cbts[j].className='';
                cbts[cbts[j].index1].style.background="#7043a7";
                cbts[cbts[j].index1].style.color="#fff";
                fds[j].style.display="none";
            }
            cbts[cbts[i].index1].style.color="#7043a7";
            cbts[cbts[i].index1].style.background="#fff";
            this.className="active";
            fds[cbts[i].index1].style.display="block";
        }
    }
    let bt_1=document.getElementsByClassName("bt_1");
    let jp=bt_1[0].getElementsByTagName("span");
    
    let nr_1=document.getElementsByClassName("nr_1");
    let jipiao_1=nr_1[0].getElementsByClassName("jipiao_1");
    let xian=document.querySelector(".henxian_1");
    for(let i=0;i<jp.length;i++){
        jp[i].index1=i;
        jp[i].onclick=function(){
            for(let j=0;j<jp.length;j++){
                jipiao_1[j].style.display="none";
            }
            jipiao_1[jp[i].index1].style.display="block";
            if(jp[i].index1===0){
                xian.className='henxian_1 henxian_1_1';
            }
            else{
                xian.className='henxian_1 henxian_1_2';
            }
        }
    }
    
    let bt_2=document.getElementsByClassName("bt_2");
    let jd=bt_2[0].getElementsByTagName("span");
    
    let nr_2=document.getElementsByClassName("nr_2");
    let jiudian_1=nr_2[0].getElementsByClassName("jiudian_1");
    let xian_1=document.querySelector(".henxian_2");
    for(let i=0;i<jp.length;i++){
        jd[i].index1=i;
        jd[i].onclick=function(){
            for(let j=0;j<jp.length;j++){
                jiudian_1[j].style.display="none";
            }
            jiudian_1[jd[i].index1].style.display="block";
            if(jd[i].index1===0){
                xian_1.className='henxian_2 henxian_2_1';
            }
            else{
                xian_1.className='henxian_2 henxian_2_2';
            }
        }
    }
    let bt_3=document.getElementsByClassName("bt_3");
    let jingdian=bt_3[0].getElementsByTagName("span");
    
    let nr_3=document.getElementsByClassName("nr_3");
    let jingdian_1=nr_3[0].getElementsByClassName("jingdian_1");
    let xian_2=document.querySelector(".henxian_3");
    for(let i=0;i<jingdian.length;i++){
        jingdian[i].index1=i;
        jingdian[i].onclick=function(){
            for(let j=0;j<jingdian.length;j++){
                jingdian_1[j].style.display="none";
            }
            jingdian_1[jingdian[i].index1].style.display="block";
            if(jingdian[i].index1===0){
                xian_2.className='henxian_3 henxian_3_1';
            }
            else{
                xian_2.className='henxian_3 henxian_3_2';
            }
        }
    }
    let bt_4=document.getElementsByClassName("bt_4");
    let dujia=bt_4[0].getElementsByTagName("span");
    
    let nr_4=document.getElementsByClassName("nr_4");
    let dujia_1=nr_4[0].getElementsByClassName("dujia_1");
    let xian_3=document.querySelector(".henxian_4");
    for(let i=0;i<dujia.length;i++){
        dujia[i].index1=i;
        dujia[i].onclick=function(){
            for(let j=0;j<dujia.length;j++){
                dujia_1[j].style.display="none";
            }
            dujia_1[dujia[i].index1].style.display="block";
            if(dujia[i].index1===0){
                xian_3.className='henxian_4 henxian_4_1';
            }
            if(dujia[i].index1===1){
                xian_3.className='henxian_4 henxian_4_2';
            }
            if(dujia[i].index1===2){
                xian_3.className='henxian_4 henxian_4_3';
            }
            if(dujia[i].index1===3){
                xian_3.className='henxian_4 henxian_4_4';
            }
        }
    }
    let df=document.getElementsByClassName("df");
    let df1=df[0].getElementsByTagName("li");
    let nr=document.getElementsByClassName("nr2");
    let zjd=nr[0].getElementsByClassName("nr4");
    let xiaxian=document.querySelector(".xiaxian_1");
    for(let i=0;i<df1.length;i++){
        df1[i].index1=i;
        df1[i].onmouseenter=function(){
            for(let j=0;j<df1.length;j++){
                zjd[j].style.display="none";
                df1[j].style.color="#666";
                df1[j].style.fontWeight="400";
            }
            df1[i].style.color="#32c775";
            df1[i].style.fontWeight="bolder";
            zjd[df1[i].index1].style.display="block";
            if(df1[i].index1===0){
                xiaxian.className='xiaxian_1';
            }
            if(df1[i].index1===1){
                xiaxian.className='xiaxian_2';
            }
            if(df1[i].index1===2){
                xiaxian.className='xiaxian_3';
            }
            if(df1[i].index1===3){
                xiaxian.className='xiaxian_4';
            }
            if(df1[i].index1===4){
                xiaxian.className='xiaxian_5';
            }
            if(df1[i].index1===5){
                xiaxian.className='xiaxian_6';
            }
            if(df1[i].index1===6){
                xiaxian.className='xiaxian_7';
            }
            if(df1[i].index1===7){
                xiaxian.className='xiaxian_8';
            }
        }
    }
    let rt=document.getElementsByClassName("rt");
    let rt1=rt[0].getElementsByTagName("li");
    let xiaxian1=document.querySelector(".xiaxian_1_1");
    for(let i=0;i<rt1.length;i++){
        rt1[i].index1=i;
        rt1[i].onmouseenter=function(){
            for(let j=0;j<rt1.length;j++){
                rt1[j].style.color="#666";
                rt1[j].style.fontWeight="400";
            }
            rt1[i].style.color="#32c775";
            rt1[i].style.fontWeight="bolder";
            if(rt1[i].index1===0){
                xiaxian1.className='xiaxian_1_1';
            }
            if(rt1[i].index1===1){
                xiaxian1.className='xiaxian_1_2';
            }
            if(rt1[i].index1===2){
                xiaxian1.className='xiaxian_1_3';
            }
            if(rt1[i].index1===3){
                xiaxian1.className='xiaxian_1_4';
            }
            if(rt1[i].index1===4){
                xiaxian1.className='xiaxian_1_5';
            }
            if(rt1[i].index1===5){
                xiaxian1.className='xiaxian_1_6';
            }
            if(rt1[i].index1===6){
                xiaxian1.className='xiaxian_1_7';
            }
        }
    }





    let jiantou_1=document.getElementById("jiantou_1");
    let jiantou_2=document.getElementById("jiantou_2");
    let n=0;
    jiantou_1.addEventListener('click', function() {
        if(n===0){
            var newSrc = "/images/home-di-logo_09.png"; 
            this.setAttribute('src', newSrc);
            var divElement = document.getElementById("food_1_3_2");
            divElement.style.height = '100px'; 
            n++;
        }else{
            var newSrc = "/images/home-di-logo_07.png"; 
            this.setAttribute('src', newSrc);
            var divElement = document.getElementById("food_1_3_2");
            divElement.style.height = '20px'; 
            n--;
        }
    })
    jiantou_2.addEventListener('click', function() {
        if(n===0){
            var newSrc = "/images/home-di-logo_09.png"; 
            this.setAttribute('src', newSrc);
            var divElement = document.getElementById("food_1_3_3");
            divElement.style.height = '100px'; 
            n++;
        }else{
            var newSrc = "/images/home-di-logo_07.png"; 
            this.setAttribute('src', newSrc);
            var divElement = document.getElementById("food_1_3_3");
            divElement.style.height = '20px'; 
            n--;
        }
    })