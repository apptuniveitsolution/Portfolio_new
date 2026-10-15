/* ── data ── */
const P=[
{n:'FunPay',t:'KMP',big:1,d:'Amusement park ride-booking app on Kotlin and Compose Multiplatform, targeting Android, iOS, Web and Desktop from one codebase. Includes Razorpay/PhonePe payments, wallet and shared API handling.',f:['Compose Multiplatform','Payments','Wallet','4 platforms']},
{n:'BookMyBox',t:'Kotlin',d:'Sports event app built from scratch: team creation, tournaments and real-time live scoring over sockets, synced to the company backend.',f:['Sockets','Live scoring'],l:'https://play.google.com/store/apps/details?id=com.bookmybox'},
{n:'ZipMate',t:'Kotlin',d:'File manager with ZIP compression and extraction, folder organising, browsing and progress tracking.',f:['ZIP','Progress'],l:'https://play.google.com/store/apps/details?id=com.zipmate.zip.rar'},
{n:'Safat Home',t:'Android',d:'Home-shopping app for Alghanim Industries (Kuwait): product browsing, in-store QR scanning, checkout and delivery tracking.',f:['QR scan','Checkout','Tracking'],l:'https://play.google.com/store/apps/details?id=com.alghanim.safathome'},
{n:'Smart Gallery',t:'Android',d:'Photo and video gallery with albums, a PIN/pattern/fingerprint vault, photo editor, HD player and recycle bin.',f:['Vault','Editor','Video'],l:'https://play.google.com/store/apps/details?id=com.albumgallery.photos'},
{n:'IBO Apps',t:'Compose',d:'Five production apps under Embitel (IBO, Krider, IBO Store). Migrated IBO to Jetpack Compose and upgraded dependencies.',f:['Compose migration','Features'],l:'https://play.google.com/store/apps/details?id=com.ibo.android'},
{n:'WaterMoldFire',t:'Java',d:'Large property-restoration system: fixed API issues, refactored legacy code, upgraded dependencies, supported releases.',f:['Refactor','Releases'],l:'https://play.google.com/store/apps/details?id=com.watermoldfire'},
{n:'MitMold',t:'Java',d:'Enterprise property case management: API fixes, deprecated library upgrades, UI/UX consistency and performance.',f:['API fixes','UI/UX']},
{n:'LashesByAnn',t:'Java',d:'Beauty-service booking app: API fixes, legacy refactor, dependency upgrades and release testing.',f:['Booking','Bug fixes'],l:'https://play.google.com/store/apps/details?id=com.lashesbyann'},
{n:'WaterMoldFire / MitMold KMP',t:'KMP',d:'Migrated both Java codebases to Kotlin Multiplatform with shared modules and API logic for Android and future iOS.',f:['Shared logic','Java → KMP']},
{n:'Grocery Store',t:'Firebase',d:'E-commerce grocery app: product listing, cart, authentication and orders on Firebase Auth, Realtime DB and Storage.',f:['Auth','Cart','Orders']}];
const grid=document.getElementById('grid');
P.forEach(p=>{const e=document.createElement('article');e.className='pc'+(p.big?' big':'');
e.innerHTML=`<div class="pt"><div class="pn">${p.n}</div><span class="tag">${p.t}</span></div><p>${p.d}</p><div class="fs">${p.f.map(x=>`<span>${x}</span>`).join('')}</div>${p.l?`<a href="${p.l}" target="_blank" rel="noopener">View on Play Store</a>`:''}`;
grid.appendChild(e);e.dataset.t=p.t;
e.addEventListener('mousemove',v=>{const r=e.getBoundingClientRect(),x=(v.clientX-r.left)/r.width-.5,y=(v.clientY-r.top)/r.height-.5;e.style.transform=`rotateY(${x*12}deg) rotateX(${-y*12}deg) translateY(-4px)`;e.style.setProperty('--mx',(x+.5)*100+'%');e.style.setProperty('--my',(y+.5)*100+'%')});
e.addEventListener('mouseleave',()=>e.style.transform='')});
const fl=document.getElementById('flt');[['All',''],['Kotlin Multiplatform','KMP'],['Native Kotlin','Kotlin,Android,Compose,Firebase'],['Java','Java']].forEach(([l,v],i)=>{const b=document.createElement('button');b.textContent=l;if(!i)b.className='on';b.onclick=()=>{fl.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x==b));grid.querySelectorAll('.pc').forEach(c=>c.classList.toggle('hide',!!v&&!v.split(',').includes(c.dataset.t)))};fl.appendChild(b)});
const mqa=['Kotlin','Jetpack Compose','Kotlin Multiplatform','Compose Multiplatform','Coroutines','Firebase','Razorpay','PhonePe','REST APIs','CI/CD (YAML)','Gradle','Git & GitHub','Android Studio','Playwright','Appium'];
document.getElementById('mq').innerHTML=[...mqa,...mqa].map(x=>`<span>${x}</span>`).join('');
const ready=()=>{document.getElementById('load').classList.add('off');document.body.classList.add('ready')};
addEventListener('load',()=>setTimeout(ready,600));setTimeout(ready,4000);
document.getElementById('send').onclick=()=>{const n=document.getElementById('n').value,m=document.getElementById('m').value;
location.href='mailto:chovatiyadhruvik0104@gmail.com?subject='+encodeURIComponent('Hello from '+(n||'your portfolio'))+'&body='+encodeURIComponent(m)};

/* ── 3D scene ── */
(function(){
const cv=document.getElementById('gl');let R;
try{R=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true})}catch(e){cv.style.display='none';return}
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
R.setPixelRatio(Math.min(devicePixelRatio,2));
const S=new THREE.Scene();S.fog=new THREE.FogExp2(0x0B0B0F,.022);
const C=new THREE.PerspectiveCamera(55,1,.1,200);
const G=0x3DDC84;
S.add(new THREE.AmbientLight(0xffffff,.55));
const l1=new THREE.PointLight(G,1.6,30);l1.position.set(3,3,5);S.add(l1);
const l2=new THREE.PointLight(0x60a5fa,1.1,30);l2.position.set(-4,-2,4);S.add(l2);
const l3=new THREE.DirectionalLight(0xffffff,.5);l3.position.set(0,5,5);S.add(l3);
const ST=16;

/* stars */
{const n=1800,a=new Float32Array(n*3);for(let i=0;i<n;i++){a[i*3]=(Math.random()-.5)*60;a[i*3+1]=(Math.random()-.5)*36;a[i*3+2]=14-Math.random()*100}
const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(a,3));
S.add(new THREE.Points(g,new THREE.PointsMaterial({color:G,size:.06,transparent:true,opacity:.7})))}

/* helpers */
const RD=[];
function tex(w,h,fn){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');fn(x,w,h);const t=new THREE.CanvasTexture(c);t.anisotropy=4;const rd=()=>{x.clearRect(0,0,w,h);fn(x,w,h);t.needsUpdate=true};RD.push(rd);return[t,rd]}
function rr(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}

/* 1 · phone (hero) */
const phone=new THREE.Group();
{const w=1.6,h=3.2,r=.24,s=new THREE.Shape();
s.moveTo(-w/2+r,-h/2);s.lineTo(w/2-r,-h/2);s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);s.lineTo(w/2,h/2-r);s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);s.lineTo(-w/2+r,h/2);s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);s.lineTo(-w/2,-h/2+r);s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
const g=new THREE.ExtrudeGeometry(s,{depth:.12,bevelEnabled:true,bevelThickness:.03,bevelSize:.03,bevelSegments:4});g.center();
phone.add(new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:0x1b1b22,metalness:.85,roughness:.28})));
const code=['@Composable','fun Portfolio() {','  val dev = Dhruvik(','    kotlin = true,','    compose = true,','    kmp = "Android","iOS",','           "Web","Desktop"','  )','  Hire(dev)','}'];
const [t,redraw]=tex(512,1024,(x,w,h)=>{x.fillStyle='#0B0B0F';rr(x,0,0,w,h,60);x.fill();
const gr=x.createRadialGradient(w/2,0,10,w/2,0,500);gr.addColorStop(0,'rgba(61,220,132,.35)');gr.addColorStop(1,'rgba(61,220,132,0)');x.fillStyle=gr;x.fillRect(0,0,w,h);
x.fillStyle='#3DDC84';x.font='500 22px DM Mono, monospace';x.fillText('9:41',40,56);
x.font='italic 400 62px Fraunces, serif';x.fillStyle='#ececf0';x.fillText('Dhruvik',40,190);x.fillStyle='#3DDC84';x.fillText('Chovatiya',40,258);
x.font='400 20px DM Mono, monospace';x.fillStyle='#9a9aaa';x.fillText('ANDROID DEVELOPER',40,306);
code.forEach((l,i)=>{x.fillStyle=i%3==0?'#3DDC84':'#c6c6d0';x.font='400 24px DM Mono, monospace';x.fillText(l,40,420+i*42)});
x.fillStyle='#3DDC84';rr(x,40,900,432,70,18);x.fill();x.fillStyle='#06240f';x.font='600 26px Geist, sans-serif';x.textAlign='center';x.fillText('View projects',w/2,945);x.textAlign='left'});
const scr=new THREE.Mesh(new THREE.PlaneGeometry(1.5,3.0),new THREE.MeshBasicMaterial({map:t}));scr.position.z=.095;phone.add(scr);
document.fonts&&document.fonts.ready.then(redraw);
const ico=new THREE.Mesh(new THREE.IcosahedronGeometry(2.7,1),new THREE.MeshBasicMaterial({color:G,wireframe:true,transparent:true,opacity:.12}));phone.add(ico);phone.ico=ico;
phone.rings=[0,1,2].map(i=>{const m=new THREE.Mesh(new THREE.TorusGeometry(2.1+i*.45,.012,8,120),new THREE.MeshBasicMaterial({color:i==1?0x60a5fa:G,transparent:true,opacity:.55}));m.rotation.set(1+i*.5,i*.9,0);phone.add(m);return m});
phone.sats=[0,1,2,3,4].map(i=>{const m=new THREE.Mesh(new THREE.OctahedronGeometry(.11),new THREE.MeshStandardMaterial({color:G,emissive:G,emissiveIntensity:.8}));phone.add(m);return m})}
S.add(phone);

/* 2 · experience: knot */
const knot=new THREE.Mesh(new THREE.TorusKnotGeometry(1.7,.42,160,20,2,3),new THREE.MeshStandardMaterial({color:0x14301f,emissive:G,emissiveIntensity:.35,metalness:.9,roughness:.25,wireframe:false}));
const knotW=new THREE.Mesh(new THREE.TorusKnotGeometry(1.7,.44,90,12,2,3),new THREE.MeshBasicMaterial({color:G,wireframe:true,transparent:true,opacity:.25}));
const kg=new THREE.Group();kg.add(knot,knotW);S.add(kg);

/* 3 · projects: ring of tiles */
const ring=new THREE.Group();const tiles=[];
P.forEach((p,i)=>{const [t]=tex(512,320,(x,w,h)=>{x.fillStyle='#14141a';rr(x,0,0,w,h,34);x.fill();x.strokeStyle='rgba(61,220,132,.7)';x.lineWidth=4;x.stroke();
x.fillStyle='#3DDC84';x.font='400 24px DM Mono, monospace';x.fillText(p.t.toUpperCase(),36,66);x.fillStyle='#ececf0';x.font='italic 400 50px Fraunces, serif';
let s=p.n.length>14?p.n.split(' ')[0]:p.n;x.fillText(s,36,170);x.fillStyle='#9a9aaa';x.font='300 22px Geist, sans-serif';x.fillText(p.f.slice(0,2).join(' · '),36,230)});
const m=new THREE.Mesh(new THREE.PlaneGeometry(2.4,1.5),new THREE.MeshBasicMaterial({map:t,transparent:true,opacity:.8,side:THREE.DoubleSide}));
const a=i/P.length*Math.PI*2;m.position.set(Math.cos(a)*5.4,Math.sin(i*1.7)*.9,Math.sin(a)*5.4);m.rotation.y=-a-Math.PI/2;ring.add(m);tiles.push(m)});
ring.rotation.x=.35;S.add(ring);
document.fonts&&Promise.all(['italic 400 40px Fraunces','400 20px "DM Mono"','500 20px "DM Mono"','600 20px Geist','300 20px Geist'].map(f=>document.fonts.load(f))).then(()=>RD.forEach(f=>f()));

/* 4 · skills: tag sphere */
const sphere=new THREE.Group();
['Kotlin','Java','Compose','KMP','Coroutines','Firebase','REST API','Razorpay','PhonePe','CI/CD','YAML','Gradle','Git','GitHub','Android SDK','MVVM','Playwright','Appium','Testing','Cursor','Copilot','Claude','TypeScript','iOS','Web','Desktop','Wallet','Compose MP'].forEach((k,i,arr)=>{
const [t]=tex(256,80,(x,w,h)=>{x.fillStyle='rgba(15,15,19,.8)';rr(x,4,4,w-8,h-8,36);x.fill();x.strokeStyle=i%3?'rgba(61,220,132,.8)':'rgba(96,165,250,.9)';x.lineWidth=3;x.stroke();x.fillStyle='#ececf0';x.font='500 30px DM Mono, monospace';x.textAlign='center';x.fillText(k,w/2,52)});
const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:t,transparent:true}));sp.scale.set(1.45,.45,1);
const y=1-(i/(arr.length-1))*2,rad=Math.sqrt(1-y*y),th=i*2.399963;sp.position.set(Math.cos(th)*rad,y,Math.sin(th)*rad).multiplyScalar(3.1);sphere.add(sp)});
S.add(sphere);

/* 5 · contact: portal */
const portal=new THREE.Group();
for(let i=0;i<7;i++){const m=new THREE.Mesh(new THREE.TorusGeometry(1.2+i*.55,.02,8,100),new THREE.MeshBasicMaterial({color:i%2?0x60a5fa:G,transparent:true,opacity:.6-i*.06}));m.position.z=-i*.5;portal.add(m)}
S.add(portal);

/* layout */
let mob=false;
const pos=(o,x,y,z,sc)=>{o.position.set(x,y,z);o.scale.setScalar(sc)};
function layout(){mob=innerWidth<860;const sc=mob?.7:1,y=mob?2.1:0;
pos(phone,mob?0:2.7,mob?1.7:0,0,mob?.7:1);pos(kg,mob?0:-3.4,y,-ST,sc);pos(ring,0,mob?1.6:0,-ST*2,mob?.75:1);pos(sphere,mob?0:3.5,mob?1.8:0,-ST*3,mob?.65:1);pos(portal,0,0,-ST*4-4,mob?.7:1)}
function size(){R.setSize(innerWidth,innerHeight,false);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix();layout()}
addEventListener('resize',size);size();

/* input */
const M={x:0,y:0};addEventListener('pointermove',e=>{M.x=e.clientX/innerWidth-.5;M.y=e.clientY/innerHeight-.5});
let drag=null,spin={x:0,y:0};
cv.style.pointerEvents='none';
addEventListener('pointerdown',e=>{const r=document.getElementById('skills').getBoundingClientRect();if(r.top<innerHeight*.5&&r.bottom>innerHeight*.5&&!e.target.closest('.panel,a,button,input,textarea,nav')){drag={x:e.clientX,y:e.clientY}}});
addEventListener('pointermove',e=>{if(drag){spin.y+=(e.clientX-drag.x)*.01;spin.x+=(e.clientY-drag.y)*.01;drag={x:e.clientX,y:e.clientY}}});
addEventListener('pointerup',()=>drag=null);

/* scroll → station */
const secs=[...document.querySelectorAll('main section')],navA=[...document.querySelectorAll('.links a')],prog=document.getElementById('prog');
let st=0,stT=0;
function scrollCalc(){const mid=scrollY+innerHeight*.5,tops=secs.map(s=>s.offsetTop+s.offsetHeight*.5);
if(mid<=tops[0])stT=0;else if(mid>=tops[tops.length-1])stT=tops.length-1;else{let i=0;while(mid>tops[i+1])i++;stT=i+(mid-tops[i])/(tops[i+1]-tops[i])}
prog.style.width=(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+'%';
navA.forEach((a,i)=>a.classList.toggle('on',Math.round(stT)==i))}
addEventListener('scroll',scrollCalc,{passive:true});scrollCalc();st=stT;

/* loop */
const clock=new THREE.Clock();
function frame(){const t=clock.getElapsedTime(),k=reduce?0:1;
st+=(stT-st)*.07;
const camZ=7-st*ST,sway=Math.sin(st*1.4)*(mob?.6:1.4);
C.position.set(sway+M.x*.8,-M.y*.6+Math.sin(st*.9)*.5,camZ);
C.lookAt(sway*.4,Math.sin(st*.9)*.2,camZ-10);
phone.rotation.y=-.35+M.x*.7+Math.sin(t*.6)*.12*k;phone.rotation.x=M.y*.4;phone.position.y=(mob?1.7:0)+Math.sin(t)*.12*k;
phone.ico.rotation.y=t*.15*k;phone.ico.rotation.x=t*.1*k;
phone.rings.forEach((m,i)=>{m.rotation.z=t*(.3+i*.15)*k});
phone.sats.forEach((m,i)=>{const a=t*.7*k+i*1.26,r=2.4+(i%2)*.5;m.position.set(Math.cos(a)*r,Math.sin(a*1.3+i)*1.6,Math.sin(a)*r);m.rotation.y=t*2});
kg.rotation.y=t*.35*k;kg.rotation.x=t*.2*k;
ring.rotation.y=t*.12*k+st*.5;tiles.forEach((m,i)=>m.position.y=Math.sin(i*1.7)*.9+Math.sin(t*.8+i)*.15*k);
sphere.rotation.y+=(.004*k+spin.y*.1);sphere.rotation.x+=spin.x*.1;spin.x*=.9;spin.y*=.9;sphere.rotation.x*=.995;
portal.children.forEach((m,i)=>{m.rotation.z=t*.2*(i%2?1:-1)*k;m.scale.setScalar(1+Math.sin(t*1.2-i*.5)*.04*k)});
R.render(S,C);requestAnimationFrame(frame)}
frame();
})();