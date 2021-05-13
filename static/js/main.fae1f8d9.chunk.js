(this.webpackJsonpericcolor=this.webpackJsonpericcolor||[]).push([[0],{193:function(e,a,t){},322:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t(10),r=t.n(n),l=t(34),c=(t(193),t(52)),i=t(73),s=t(24),d=t(25),m=t(15),h=t(27),u=t(26),b=t(21),p=t(162),j=t(49),f=t.n(j),g={ColorBox:{width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},copyText:{color:function(e){return f()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return f()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return f()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return f()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":{fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},x=t(325),O=t(3),v=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(m.a)(o)),o}return Object(d.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showingFullPalette,r=e.classes,c=this.state.copied;return Object(O.jsx)(p.CopyToClipboard,{text:t,onCopy:this.changeCopyState,children:Object(O.jsxs)("div",{style:{background:t},className:r.ColorBox,children:[Object(O.jsx)("div",{style:{background:t},className:"".concat(r.copyOverlay," ").concat(c&&r.showOverlay)}),Object(O.jsxs)("div",{className:"".concat(r.copyMessage," ").concat(c&&r.showMessage),children:[Object(O.jsx)("h1",{children:"copied!"}),Object(O.jsx)("p",{className:r.copyText,children:this.props.background})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:r.boxContent,children:Object(O.jsx)("span",{className:r.colorName,children:a})}),Object(O.jsx)("button",{className:r.copyButton,children:"Copy"})]}),n&&Object(O.jsx)(l.b,{to:o,onClick:function(e){return e.stopPropagation()},children:Object(O.jsx)("span",{className:r.seeMore,children:"MORE"})})]})})}}]),t}(o.Component),C=Object(x.a)(g)(v),y=t(383),w=t(386),k=t(384),S=t(372),N=t(164),F=t.n(N),B=t(174),P=(t(203),function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={format:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(m.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(m.a)(o)),o}return Object(d.a)(t,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,n=e.classes,r=this.state.format;return Object(O.jsxs)("header",{className:n.Navbar,children:[Object(O.jsx)("div",{className:n.logo,children:Object(O.jsx)(l.b,{to:"/",children:"Eric-Color-Picker\ud83e\udd73"})}),o&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:["Level: ",a]}),Object(O.jsx)("div",{className:n.slider,children:Object(O.jsx)(B.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t})})]}),Object(O.jsx)("div",{className:n.selectContainer,children:Object(O.jsxs)(y.a,{value:r,onChange:this.handleFormatChange,children:[Object(O.jsx)(w.a,{value:"hex",children:"HEX - #ffffff"}),Object(O.jsx)(w.a,{value:"rgb",children:"RGB - rgb(255,255,255)"}),Object(O.jsx)(w.a,{value:"rgba",children:"RGBA - rgba(255,255,255, 1.0)"})]})}),Object(O.jsx)(k.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:Object(O.jsxs)("span",{id:"message-id",children:["Format Changed To ",r.toUpperCase()]}),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[Object(O.jsx)(S.a,{onClick:this.closeSnackbar,color:"inherit","aria-label":"close",children:Object(O.jsx)(F.a,{})},"close")]})]})}}]),t}(o.Component)),D=Object(x.a)({Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:{marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},slider:{width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},selectContainer:{marginLeft:"auto",marginRight:"1rem"}})(P);var A=Object(x.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return Object(O.jsxs)("footer",{className:o.PaletteFooter,children:[a,Object(O.jsx)("span",{className:o.emoji,children:t})]})})),E={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:{width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}}},I=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(m.a)(o)),o.changeFormat=o.changeFormat.bind(Object(m.a)(o)),o}return Object(d.a)(t,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,r=this.props.classes,l=this.state,c=l.level,i=l.format,s=a[c].map((function(e){return Object(O.jsx)(C,{background:e[i],name:e.name,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0},e.id)}));return Object(O.jsxs)("div",{className:r.Palette,children:[Object(O.jsx)(D,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),Object(O.jsx)("div",{className:r.colors,children:s}),Object(O.jsx)(A,{paletteName:t,emoji:o})]})}}]),t}(o.Component),L=Object(x.a)(E)(I);var G=Object(x.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"}})((function(e){var a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return Object(O.jsx)("div",{className:a.miniColor,style:{backgroundColor:e.color}},e.name)}));return Object(O.jsxs)("div",{className:a.root,onClick:e.handleClick,children:[Object(O.jsx)("div",{className:a.colors,children:n}),Object(O.jsxs)("h5",{className:a.title,children:[t," ",Object(O.jsx)("span",{className:a.emoji,children:o})]})]})})),R=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes;return Object(O.jsx)("div",{className:o.root,children:Object(O.jsxs)("div",{className:o.container,children:[Object(O.jsxs)("nav",{className:o.nav,children:[Object(O.jsx)("h1",{children:"Eric's color"}),Object(O.jsx)(l.b,{to:"/palette/new",children:"Create Palette"})]}),Object(O.jsx)("div",{className:o.palettes,children:t.map((function(a){return Object(O.jsx)(G,Object(c.a)(Object(c.a)({},a),{},{handleClick:function(){return e.goToPalette(a.id)}}))}))})]})})}}]),t}(o.Component),T=Object(x.a)({root:{backgroundColor:"blue",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white"}},palettes:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"5%"}})(R),M=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e))._shades=o.gatherShades(o.props.palette,o.props.colorId),o.state={format:"hex"},o.changeFormat=o.changeFormat.bind(Object(m.a)(o)),o}return Object(d.a)(t,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,r=this.props.classes,c=this._shades.map((function(a){return Object(O.jsx)(C,{name:a.name,background:a[e],showingFullPalette:!1},a.name)}));return Object(O.jsxs)("div",{className:r.Palette,children:[Object(O.jsx)(D,{handleChange:this.changeFormat,showingAllColors:!1}),Object(O.jsxs)("div",{className:r.colors,children:[c,Object(O.jsx)("div",{className:r.goBack,children:Object(O.jsx)(l.b,{to:"/palette/".concat(n),children:"GO BACK"})})]}),Object(O.jsx)(A,{paletteName:t,emoji:o})]})}}]),t}(o.Component),z=Object(x.a)(E)(M),U=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],H=t(39),q=t(17),V=t.n(q),W=t(8),J=t(379),Y=t(380),K=t(381),_=t(178),Q=t(166),X=t.n(Q),$=t(378),Z=t(48),ee=t(373),ae=t(377),te=t(375),oe=t(376),ne=t(374),re=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.state={open:!0,newPaletteName:""},o.handleChange=o.handleChange.bind(Object(m.a)(o)),o}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Z.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,a=this.state.newPaletteName;return Object(O.jsxs)(ee.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(O.jsx)(ne.a,{id:"form-dialog-title",children:"Make a Palette Name"}),Object(O.jsxs)(Z.ValidatorForm,{onSubmit:function(){return e.props.handleSubmit(a)},children:[Object(O.jsxs)(te.a,{children:[Object(O.jsx)(oe.a,{children:"Enter your Palette name. you are not able to make same name of Palette. make sure it is unique"}),Object(O.jsx)(Z.TextValidator,{label:"Palette Name",value:a,name:"newPaletteName",fullWidth:!0,margin:"normal",onChange:this.handleChange,validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})]}),Object(O.jsxs)(ae.a,{children:[Object(O.jsx)($.a,{onClick:this.handleClose,color:"primary",children:"Cancel"}),Object(O.jsx)($.a,{variant:"contained",color:"primary",type:"submit",children:"Save Palette"})]})]})]})}}]),t}(o.Component),le=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={newPaletteName:"",formShowing:!1},o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.showForm=o.showForm.bind(Object(m.a)(o)),o}return Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleSubmit;this.state.newPaletteName;return Object(O.jsxs)("div",{className:a.root,children:[Object(O.jsx)(J.a,{}),Object(O.jsxs)(Y.a,{position:"fixed",color:"default",className:V()(a.appBar,Object(H.a)({},a.appBarShift,t)),children:[Object(O.jsxs)(K.a,{disableGutters:!t,children:[Object(O.jsx)(S.a,{color:"inherit","aria-label":"Open drawer",onClick:this.props.handleDrawerOpen,className:V()(a.menuButton,t&&a.hide),children:Object(O.jsx)(X.a,{})}),Object(O.jsx)(_.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Create New Palette"})]}),Object(O.jsxs)("div",{className:a.navBtns,children:[Object(O.jsx)(l.b,{to:"/",className:a.link,children:Object(O.jsx)($.a,{variant:"contained",color:"secondary",className:a.button,children:"Go Back"})}),Object(O.jsx)($.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button,children:"Save"})]})]}),this.state.formShowing&&Object(O.jsx)(re,{palettes:o,handleSubmit:n})]})}}]),t}(o.Component),ce=Object(W.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:{marginRight:"1rem"},button:{margin:"0 0.5rem"},link:{textDecoration:"none"}}}),{withTheme:!0})(le),ie=t(385),se=t(382),de=t(172),me=t.n(de),he=t(65),ue=t(167),be=t.n(ue),pe=Object(he.b)((function(e){var a=e.classes,t=e.handleClick,o=e.name,n=e.color;return Object(O.jsx)("div",{className:a.root,style:{backgroundColor:n},children:Object(O.jsxs)("div",{className:a.boxContent,children:[Object(O.jsxs)("span",{children:[" ",o]}),Object(O.jsx)(be.a,{className:a.deleteIcon,onClick:t})]})})})),je=Object(x.a)({root:{width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"rgba(0, 0, 0, 0.5)",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}})(pe),fe=Object(he.a)((function(e){var a=e.colors,t=e.removeColor;return Object(O.jsx)("div",{style:{height:"100%"},children:a.map((function(e,a){return Object(O.jsx)(je,{index:a,color:e.color,name:e.name,handleClick:function(){return t(e.name)}},e.name)}))})})),ge=t(173),xe=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={currentColor:"teal",newColorName:""},o.updateCurrentColor=o.updateCurrentColor.bind(Object(m.a)(o)),o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(m.a)(o)),o}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Z.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Z.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes,o=this.state,n=o.currentColor,r=o.newColorName;return Object(O.jsxs)("div",{children:[Object(O.jsx)(ge.a,{color:n,onChangeComplete:this.updateCurrentColor,className:t.picker}),Object(O.jsxs)(Z.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",children:[Object(O.jsx)(Z.TextValidator,{value:r,placeholder:"Color Name",className:t.colornamein,name:"newColorName",margin:"normal",variant:"filled",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"]}),Object(O.jsx)($.a,{variant:"contained",type:"submit",color:"primary",disabled:a,style:{backgroundColor:a?"grey":this.state.currentColor},className:t.addcolor,children:a?"Palette Full":"Add Color"})]})]})}}]),t}(o.Component),Oe=Object(W.a)({picker:{width:"100% !important",marginTop:"2rem"},addcolor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colornamein:{width:"100%",height:"70px"}},{withTheme:!0})(xe),ve=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(he.c)(o,a,t)}}))},o.state={open:!0,currentColor:"teal",colors:o.props.palettes[0].colors},o.addNewColor=o.addNewColor.bind(Object(m.a)(o)),o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(m.a)(o)),o.removeColor=o.removeColor.bind(Object(m.a)(o)),o.clearColors=o.clearColors.bind(Object(m.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(m.a)(o)),o}return Object(d.a)(t,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(i.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){var e=this.props.palettes.map((function(e){return e.colors})).flat(),a=e[Math.floor(Math.random()*e.length)];this.setState({colors:[].concat(Object(i.a)(this.state.colors),[a])})}},{key:"handleSubmit",value:function(e){var a={paletteName:e,id:e.toLowerCase().replace(/ /g,"-"),colors:this.state.colors};this.props.savePalette(a),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,r=n.open,l=n.colors,c=l.length>=t;return Object(O.jsxs)("div",{className:a.root,children:[Object(O.jsx)(ce,{open:r,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),Object(O.jsxs)(ie.a,{className:a.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:a.drawerPaper},children:[Object(O.jsx)("div",{className:a.drawerHeader,children:Object(O.jsx)(S.a,{onClick:this.handleDrawerClose,children:Object(O.jsx)(me.a,{})})}),Object(O.jsx)(se.a,{}),Object(O.jsxs)("div",{className:a.container,children:[Object(O.jsx)(_.a,{variant:"h4",gutterBottom:!0,children:"Design Your Palette"}),Object(O.jsxs)("div",{className:a.buttons,children:[Object(O.jsx)($.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:a.button,children:"Clear Palette"}),Object(O.jsx)($.a,{variant:"contained",color:"primary",onClick:this.addRandomColor,disabled:c,className:a.button,children:"Random Color"})]}),Object(O.jsx)(Oe,{colors:l,paletteIsFull:c,addNewColor:this.addNewColor})]})]}),Object(O.jsxs)("main",{className:V()(a.content,Object(H.a)({},a.contentShift,r)),children:[Object(O.jsx)("div",{className:a.drawerHeader}),Object(O.jsx)(fe,{colors:l,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd})]})]})}}]),t}(o.Component);ve.defaultProps={maxColors:20};var Ce=Object(W.a)((function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(c.a)(Object(c.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}}),{withTheme:!0})(ve),ye=t(127),we=[50,100,200,300,400,500,600,700,800,900];function ke(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(ye.a)(we);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(h){o.e(h)}finally{o.f()}var r,l,c,i=Object(ye.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,d=(l=s.color,c=10,f.a.scale(function(e){var a="#fff";return[f()(e).darken(1.4).hex(),e,a]}(l)).mode("lab").colors(c)).reverse();for(var m in d)t.colors[we[m]].push({name:"".concat(s.name," ").concat(we[m]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:d[m],rgb:f()(d[m]).css(),rgba:f()(d[m]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){i.e(h)}finally{i.f()}return t}var Se=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={palettes:U},o.savePalette=o.savePalette.bind(Object(m.a)(o)),o.findPalette=o.findPalette.bind(Object(m.a)(o)),o}return Object(d.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(i.a)(this.state.palettes),[e])})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{exact:!0,path:"/palette/new",render:function(a){return Object(O.jsx)(Ce,Object(c.a)({savePalette:e.savePalette,palettes:e.state.palettes},a))}}),Object(O.jsx)(b.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return Object(O.jsx)(z,{colorId:a.match.params.colorId,palette:ke(e.findPalette(a.match.params.paletteId))})}}),Object(O.jsx)(b.a,{exact:!0,path:"/",render:function(a){return Object(O.jsx)(T,Object(c.a)({palettes:e.state.palettes},a))}}),Object(O.jsx)(b.a,{exact:!0,path:"/palette/:id",render:function(a){return Object(O.jsx)(L,{palette:ke(e.findPalette(a.match.params.id))})}})]})}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(O.jsx)(l.a,{children:Object(O.jsx)(Se,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[322,1,2]]]);
//# sourceMappingURL=main.fae1f8d9.chunk.js.map