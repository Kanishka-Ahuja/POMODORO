let st = 0,bt = 0,r = 0;
let S = 0;
let Flag =0;
let id;
let temp;
let restrt =0;
let count = 0;
let div = document.createElement("div");
div.setAttribute("id", "maindiv");
document.body.appendChild(div);

let div2 = document.createElement("div");
div2.setAttribute("id", "div");
div.appendChild(div2);

let div3 = document.createElement("div");
div3.setAttribute("id", "tdiv");
div2.appendChild(div3);

let div4 = document.createElement("div");
div4.setAttribute("id", "idiv");
div3.appendChild(div4);

let h = document.createElement("h2");
h.setAttribute("id", "H");
h.innerHTML = `00:00`;
div4.appendChild(h);

let h2 = document.createElement("h2");
h2.setAttribute("id", "h");
h2.innerHTML = `Session`;
div2.appendChild(h2);

let divv = document.createElement("div");
divv.setAttribute("id", "timeclass");
div2.appendChild(divv);

let divv1 = document.createElement("div");
divv1.setAttribute("id", "timeclass1");
divv.appendChild(divv1);

let divv2= document.createElement("div");
divv2.setAttribute("id", "timeclass2");
divv.appendChild(divv2);

let h3 = document.createElement("h2");
h3.setAttribute("id", "h11");
h3.setAttribute("class", "h1");
h3.innerHTML = `Session Time`;
divv1.appendChild(h3);

h3 = document.createElement("h2");
h3.setAttribute("id", "h31");
h3.setAttribute("class", "h3");
h3.innerHTML = `0 min`;
divv1.appendChild(h3);

h3 = document.createElement("h2");
h3.setAttribute("id", "h12");
h3.setAttribute("class", "h1");
h3.innerHTML = `Break Time`;
divv2.appendChild(h3);

h3 = document.createElement("h2");
h3.setAttribute("id", "h32");
h3.setAttribute("class", "h3");
h3.innerHTML = `0 min`;
divv2.appendChild(h3);

let idiv = document.createElement("div");
idiv.setAttribute("id","idiv1");
idiv.setAttribute("class","iidiv");
divv1.appendChild(idiv);

let input = document.createElement("input");
input.setAttribute("id","S+");
input.setAttribute("class","sbtn");
input.setAttribute("type","submit");
input.setAttribute("value","+");
input.addEventListener("click",incrementst);
idiv.appendChild(input);

input = document.createElement("input");
input.setAttribute("id","S-");
input.setAttribute("class","sbtn");
input.setAttribute("type","submit");
input.setAttribute("value","-");
input.addEventListener("click",decrementst);
idiv.appendChild(input);

idiv = document.createElement("div");
idiv.setAttribute("id","idiv2");
idiv.setAttribute("class","iidiv");
divv2.appendChild(idiv);

input = document.createElement("input");
input.setAttribute("id","B+");
input.setAttribute("class","sbtn");
input.setAttribute("type","submit");
input.setAttribute("value","+");
input.addEventListener("click",incrementbt);
idiv.appendChild(input);

input = document.createElement("input");
input.setAttribute("id","B-");
input.setAttribute("class","sbtn");
input.setAttribute("type","submit");
input.setAttribute("value","-");
input.addEventListener("click",decrementbt);
idiv.appendChild(input);

idiv = document.createElement("div");
idiv.setAttribute("id","idivbtn");
idiv.setAttribute("class","iidiv2");
div2.appendChild(idiv);

input = document.createElement("input");
input.setAttribute("id","Start");
input.setAttribute("class","mbtn");
input.setAttribute("type","submit");
input.setAttribute("value","Start");
input.addEventListener("click",starttimer);
idiv.appendChild(input);

input = document.createElement("input");
input.setAttribute("id","Pause");
input.setAttribute("class","mbtn");
input.setAttribute("type","submit");
input.setAttribute("value","Pause");
input.addEventListener("click",Pause);
idiv.appendChild(input);

input = document.createElement("input");
input.setAttribute("id","Reset");
input.setAttribute("class","mbtn");
input.setAttribute("type","submit");
input.setAttribute("value","Reset");
input.addEventListener("click",reset);
idiv.appendChild(input);


function incrementst()
{
    if(Flag==0)
    {
    if(st<90)
    {   st++;
        let div = document.getElementById("h31");
        div.innerHTML = `${st} min`;
    }
}
}

function decrementst()
{

    if(st>0&&Flag==0)
    {
    st--;
        let div = document.getElementById("h31");
        div.innerHTML = `${st} min`;
    }
}

function decrementbt()
{
    if(bt>0 && Flag==0)
    {
    bt--;
        let div = document.getElementById("h32");
        div.innerHTML = `${bt} min`;
    }
}

function incrementbt()
{
    if(Flag==0)
    {
    if(bt<90)
    {
        bt++;
        let div = document.getElementById("h32");
        div.innerHTML = `${bt} min`;
    }
}
}

function starttimer()
{
    let d = document.getElementById("h31");
    let b = document.getElementById("h32");
    if(d.innerHTML!=="0 min" && b.innerHTML!=="0 min")
    {
        Flag=1;
        let a= document.getElementById("Start");
        a.setAttribute("style","display:none");
        a= document.getElementById("Pause");
        a.setAttribute("style","display:block");
        
    let sc = document.getElementById("h");
    let min;
    if (count%2==0)
    {
        if(r==0)
        {
            S++;
            let div = document.getElementById("H");
            div.setAttribute("style","color : #06a4b4");
            sc.innerHTML = `Session ${S}`;
            div = document.getElementById("h31");
            min = div.innerHTML;
            min = min.replace(" min","");
        }
        else if(r==1)
        {
            let div = document.getElementById("H");
            div.setAttribute("style","color : #06a4b4");
            min = div.innerHTML;
            let m = min.slice(0,2);
            let s = min.slice(3,5);
            min = (m*60)+(s*1);
        }
    }
    else
    {
        if(r==0)
        {
            let div = document.getElementById("H");
            div.setAttribute("style","color : Red");
            sc.innerHTML = `Break!`;
            let div1 = document.getElementById("h32");
            min = div1.innerHTML;
            min = min.replace(" min","");
        }
        else if(r==1)
        {
            let div = document.getElementById("H");
            div.setAttribute("style","color : Red");
            min = div.innerHTML;
            let m = min.slice(0,2);
            let s = min.slice(3,5);
            min = (m*60)+(s*1);
        }
        
    }
    if(min>0)
    {
        let sec;
        let t = document.getElementById("H");
        if(r==0)
        {
            sec =  min*60;
        }
        else if(r==1)
        {
            sec = min-1;
        }
        id = setInterval(function()
        {
            if(sec<0)
            {
                clearInterval(id);
                r=0;
                count++;
                starttimer();
            }
            let m= parseInt(sec/60);
            let s = sec%60;
            if(sec>=60)
            {
                if(m>=10 && s>=10)
                {
                    t.innerHTML= `${m}:${s}`;
                }
                else if(m>=10 && s<10)
                {
                    t.innerHTML= `${m}:0${s}`;
                }
                else if(m<10 && s<10)
                {
                    t.innerHTML= `0${m}:0${s}`;
                }
                else if(m<10 && s>=10)
                {
                    t.innerHTML= `0${m}:${s}`;
                }
            }
            else if(sec>=0)
            {
                if(s>=10)
                {
                    t.innerHTML = `00:${s}`;
                }
                else
                {
                    t.innerHTML = `00:0${s}`;
                }
            }
            sec--;
        },1000);
    }
    }
    else
    {
        reset();
    }
}

function reset()
{
    let a= document.getElementById("Pause");
    a.value = "Pause";
    a.setAttribute("style","display:none");
    a= document.getElementById("Start");
    a.setAttribute("style","display:block");
    clearInterval(id);
    let b =  document.getElementById("h31");
    b.innerHTML = "0 min";
    b =  document.getElementById("h32");
    b.innerHTML = "0 min";
    b =  document.getElementById("h");
    b.innerHTML = "Session";
    b =  document.getElementById("H");
    b.innerHTML = "00:00";
    b.setAttribute("style","color : #06a4b4");
    st=0;
    bt = 0;
    S =0;
    Flag =0;
    count =0;
    r =0 ;
    restrt =0;
}

function Pause()
{
    if(restrt==0)
    {
        clearInterval(id);
        let div =  document.getElementById("Pause");
        div.value = "Restart";
        restrt=1;
        Flag=0;
    }
    else if(restrt==1)
    {
        let div =  document.getElementById("Pause");
        div.value = "Pause";
        if(r==0)
        {
            r=1;
        }
        Flag=1;
        restrt = 0;
        starttimer(); 
    }
}
