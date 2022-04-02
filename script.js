const cards = ["AA", "AKs", "AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s", "AKo", "KK", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s", "AQo", "KQo", "QQ", "QJs", "QTs", "Q9s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s", "AJo", "KJo", "QJo", "JJ", "JTs", "J9s", "J8s", "J7s", "J6s", "J5s", "J4s", "J3s", "J2s", "ATo", "KTo", "QTo", "JTo", "TT", "T9s", "T8s", "T7s", "T6s", "T5s", "T4s", "T3s", "T2s", "A9o", "K9o", "Q9o", "J9o", "T9o", "99", "98s", "97s", "96s", "95s", "94s", "93s", "92s", "A8o", "K8o", "Q8o", "J8o", "T8o", "98o", "88", "87s", "86s", "85s", "84s", "83s", "82s", "A7o", "K7o", "Q7o", "J7o", "T7o", "97o", "87o", "77", "76s", "75s", "74s", "73s", "72s", "A6o", "K6o", "Q6o", "J6o", "T6o", "96o", "86o", "76o", "66", "65s", "64s", "63s", "62s", "A5o", "K5o", "Q5o", "J5o", "T5o", "95o", "85o", "75o", "65o", "55", "54s", "53s", "52s", "A4o", "K4o", "Q4o", "J4o", "T4o", "94o", "84o", "74o", "64o", "54o", "44", "43s", "42s", "A3o", "K3o", "Q3o", "J3o", "T3o", "93o", "83o", "73o", "63o", "53o", "43o", "33", "32s", "A2o", "K2o", "Q2o", "J2o", "T2o", "92o", "82o", "72o", "62o", "52o", "42o", "32o", "22" ]
//RFI First
const LojackRFI = ["A3s", "A4s", "A5s", "A6s", "A7s", "A8s", "A9s", "ATs", "AJs", "AQs", "AKs", "AA", "K8s", "K9s", "KTs", "KJs", "KQs", "KK", "AKo", "Q9s", "QTs", "QJs", "QQ", "KQo", "AQo", "J9s", "JTs", "JJ", "QJo", "KJo", "AJo", "ATo", "TT", "99", "88", "77", "66", "T9s"]
const HijackRFI = ["A3s", "A4s", "A5s", "A6s", "A7s", "A8s", "A9s", "ATs", "AJs", "AQs", "AKs", "AA", "K8s", "K9s", "KTs", "KJs", "KQs", "KK", "AKo", "Q9s", "QTs", "QJs", "QQ", "KQo", "AQo", "J9s", "JTs", "JJ", "QJo", "KJo", "AJo", "ATo", "TT", "99", "88", "77", "66", "T9s", "A2s", "K7s", "K6s", "Q8s", "KTo", "QTo", "98s", "87s", "76s", "55"]
const CutoffRFI = ["A3s", "A4s", "A5s", "A6s", "A7s", "A8s", "A9s", "ATs", "AJs", "AQs", "AKs", "AA", "K8s", "K9s", "KTs", "KJs", "KQs", "KK", "AKo", "Q9s", "QTs", "QJs", "QQ", "KQo", "AQo", "J9s", "JTs", "JJ", "QJo", "KJo", "AJo", "ATo", "TT", "99", "88", "77", "66", "T9s", "A2s", "K7s", "K6s", "Q8s", "KTo", "QTo", "98s", "87s", "76s", "55", "K3s", "K4s", "K5s", "Q6s", "Q7s", "J8s", "T7s", "T8s", "97s", "44", "33", "JTo", "A9o", "A8o"]
const ButtonRFI = ["A3s", "A4s", "A5s", "A6s", "A7s", "A8s", "A9s", "ATs", "AJs", "AQs", "AKs", "AA", "K8s", "K9s", "KTs", "KJs", "KQs", "KK", "AKo", "Q9s", "QTs", "QJs", "QQ", "KQo", "AQo", "J9s", "JTs", "JJ", "QJo", "KJo", "AJo", "ATo", "TT", "99", "88", "77", "66", "T9s", "A2s", "K7s", "K6s", "Q8s", "KTo", "QTo", "98s", "87s", "76s", "55", "K3s", "K4s", "K5s", "Q6s", "Q7s", "J8s", "T7s", "T8s", "97s", "44", "33", "JTo", "A9o", "A8o", "K2s", "Q3s", "J4s", "Q4s", "Q5s", "J5s", "J6s", "J7s", "T6s", "96s", "86s", "85s", "75s", "65s", "64s", "54s", "53s", "22", "A4o", "A5o", "A6o", "A7o", "K8o", "K9o", "Q9o", "J9o", "T9o", "T8o", "98o"]
const SBRFIRise = ["AKs", "ATs", "A9s", "A8s", "A7s", "A5s", "K5s", "Q5s", "J5s", "T5s", "KK", "AQo", "AJo", "KJo", "QQ", "KJs", "KTs", "K8s", "QJs", "QTs", "JJ", "JTs", "T9s", "J7s", "J6s", "T6s", "96s", "K3s", "K2s", "Q4s", "Q3s", "Q2s", "J4s", "A8o", "A7o", "A6o", "A4o", "K9o", "K8o", "K7o", "Q9o", "J9o", "T8o", "98o", "65s", "64s", "54s", "53s", "33", "22",]
const SBRFILimp = ["AA", "AKo", "AQs", "AJs", "A6s", "A4s", "A3s", "A2s", "KQs", "K9s", "K7s", "K6s", "K4s", "KQo", "Q9s", "Q8s", "Q7s", "Q6s", "J9s", "J8s", "QJo", "ATo", "KTo", "QTo", "JTo", "TT", "T8s", "T7s", "J3s", "J2s", "T4s", "T3s", "A9o", "T9o", "99", "98s", "97s", "95s", "94s", "84s", "85s", "75s", "74s", "63s", "43s", "44", "88", "77", "66", "55", "76s", "86s", "87s", "76o", "86o", "Q7o", "J7o", "T7o", "97o", "87o", "Q8o", "J8o", "K6o", "Q6o", "A5o", "K5o", "Q5o", "K4o", "A3o", "A2o",]
//Facing RFI in position
const HJvLJ = ["AA", "AKs", "AQs", "AJs", "ATs", "KTs", "KJs", "KQs", "KK", "AKo", "AQo", "KQo", "QQ", "QJs", "JJ", "TT", "99", "A5s"]
const COvLJ = ["AA", "AKs", "AQs", "AJs", "ATs", "KTs", "KJs", "KQs", "KK", "AKo", "AQo", "KQo", "QQ", "QJs", "JJ", "TT", "99", "A5s", "88"]
const COvHJ = ["AA", "AKs", "AQs", "AJs", "ATs", "KTs", "KJs", "KQs", "KK", "AKo", "AQo", "KQo", "QQ", "QJs", "JJ", "TT", "99", "A5s", "88", "AJo", "A9s", "A4s"]
const BTNvLJRise = ["AA", "AKs", "AQs", "AKo", "KK", "KQo", "QQ", "QJs", "JJ", "AJo", "T9s", "A9s", "K9s", "A8s", "A4s", "A3s"]
const BTNvLJLimp = ["ATs", "KTs", "QTs", "JTs", "TT", "AJs", "KJs", "KQs", "AQo", "A5s", "99", "88", "77", "66", "55", "54s", "65s", "76s",]
const BTNvHJRise = ["AA", "AKo", "KK", "AKs", "AQs", "KQo", "QQ", "AJo", "JJ", "66", "T9s", "QTs", "Q9s", "KTs", "K9s", "K8s", "A9s", "A8s", "A7s", "A4s", "A3s",]
const BTNvHJLimp = ["AJs", "ATs", "KJs", "QJs", "KQs", "AQo", "JTs", "TT", "99", "88", "77", "55", "44", "87s", "98s", "A5s",]
const BTNvCORise = ["AA", "AKs", "AQs", "AKo", "KK", "KQs", "AJo", "ATo", "KQo", "KJo", "QJo", "QQ", "QJs", "JJ", "TT", "JTs", "J9s", "Q9s", "K9s", "A8s", "A7s", "A6s", "A4s", "A3s", "55",]
const BTNvCOLimp = ["AJs", "ATs", "A9s", "KTs", "QTs", "KJs", "AQo", "T9s", "99", "98s", "88", "77", "66", "A5s",]
//Facing RFI out position 
const SBvLJ = ["AA", "AKs", "AQs", "AJs", "ATs", "KTs", "KJs", "KQs", "KK", "AKo", "AQo", "QQ", "QJs", "JJ", "TT", "99", "A5s",]
const SBvHJ = ["AA", "AKs", "AQs", "AJs", "ATs", "KTs", "KJs", "KQs", "KK", "AKo", "AQo", "QQ", "QJs", "JJ", "TT", "99", "A5s", "QTs", "JTs", "88", "77",]
const SBvCO = ["AA", "AKs", "AQs", "AJs", "ATs", "KTs", "KJs", "KQs", "KK", "AKo", "AQo", "QQ", "QJs", "JJ", "TT", "99", "A5s", "QTs", "JTs", "88", "77", "KQo", "66", "A9s", "J9s", "T9s",]
const SBvBTN =["AA", "AKs", "AQs", "AJs", "ATs", "KTs", "KJs", "KQs", "KK", "AKo", "AQo", "QQ", "QJs", "JJ", "TT", "99", "A5s", "QTs", "JTs", "88", "77", "KQo", "66", "A9s", "J9s", "T9s", "A8s", "A7s", "A4s", "K9s", "Q9s", "T8s", "55", "AJo", "KJo",]
const BBvLJRise = ["AA", "AKs", "AQs", "AKo", "KK", "KQs", "KJs", "QQ", "QJs", "JJ", "JTs", "65s", "54s", "A5s", "A4s",]
const BBvLJLimp = ["AJs", "A6s", "ATs", "A9s", "A8s", "A7s", "A3s", "A2s", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K3s", "K2s", "K4s", "Q5s", "QTs", "Q9s", "Q8s", "Q7s", "Q6s", "AQo", "KQo", "AJo", "KJo", "QJo", "ATo", "TT", "99", "88", "77", "66", "55", "44", "33", "22", "JTo", "J9s", "J8s", "T9s", "T8s", "T7s", "96s", "85s", "74s", "63s", "32s", "43s", "53s", "64s", "75s", "76s", "86s", "87s", "97s", "98s",]
const BBvHJRise = ["AA", "AKs", "AQs", "AKo", "KK", "KQs", "KJs", "QQ", "QJs", "JJ", "JTs", "65s", "54s", "A5s", "A4s", "A9s", "KTs", "K5s", "QTs", "TT",]
const BBvHJLimp = ["AJs", "ATs", "A8s", "A7s", "A6s", "A3s", "A2s", "K9s", "K8s", "K7s", "K6s", "K4s", "K3s", "K2s", "AQo", "KQo", "Q9s", "Q8s", "Q7s", "Q6s", "Q5s", "AJo", "ATo", "A9o", "KJo", "QJo", "KTo", "QTo", "JTo", "J9s", "T9s", "99", "88", "77", "66", "55", "44", "33", "22", "43s", "53s", "63s", "64s", "74s", "75s", "76s", "85s", "86s", "87s", "96s", "97s", "98s", "T7s", "J7s", "J8s", "T8s",]
const BBvCORise = ["AA", "AKs", "AQs", "AKo", "KK", "KQs", "KJs", "QQ", "QJs", "JJ", "JTs", "65s", "54s", "A5s", "A4s", "A9s", "KTs", "QTs", "TT", "AQo", "99", "T9s", "J9s", "Q9s",]
const BBvCOLimp = ["ATs", "A8s", "A7s", "A6s", "A3s", "A2s", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "KQo", "KJo", "KTo", "AJo", "ATo", "A9o", "A8o", "A5o", "QJo", "QTo", "JTo", "T9o", "88", "77", "66", "55", "44", "33", "22", "Q8s", "J8s", "T8s", "98s", "J7s", "T7s", "97s", "87s", "J6s", "96s", "86s", "76s", "85s", "75s", "74s", "64s", "63s", "53s", "52s", "43s",]
const BBvBTNRise = ["ATs", "AJs", "AQs", "AKs", "AA", "AKo", "KK", "KQs", "KJs", "KTs", "K9s", "AQo", "KQo", "QQ", "QJs", "QTs", "Q9s", "JJ", "TT", "99", "88", "JTs", "J9s", "J8s", "T9s", "T8s", "98s", "97s", "87s", "76s", "65s", "54s", "A6s", "A5s", "A4s",]
const BBvBTNLimp =["AJo", "ATo", "A9o", "A8o", "A7o", "A6o", "A5o", "A4o", "A3o", "KJo", "KTo", "K9o", "K8o", "K7o", "K6o", "QJo", "QTo", "Q9o", "Q8o", "JTo", "J9o", "J8o", "T9o", "T8o", "98o", "87o", "76o", "65o", "54o", "77", "66", "55", "44", "33", "22", "A9s", "A8s", "A7s", "A2s", "A3s", "K8s", "Q8s", "K7s", "Q7s", "K6s", "Q6s", "K5s", "Q5s", "K4s", "Q4s", "K3s", "Q3s", "K2s", "Q2s", "J7s", "T7s", "J6s", "T6s", "J5s", "T5s", "J4s", "T4s", "J3s", "T3s", "J2s", "T2s", "96s", "95s", "94s", "86s", "85s", "84s", "75s", "74s", "73s", "64s", "63s", "62s", "53s", "52s", "43s", "42s", "32s",]

const MainButtons = ["Lojack","Hijack","Cutoff","Button","SB","BB","Next"]
const MainButtonsFunction = ["FLojackRFI()", "FHijackRFI()", "FCutoffRFI()", "FButtonRFI()", "FsbRFI()", "FbbRFI()", "Next()"] 

//Funkcja od stworzenia pustej tablicy kart i przycisków 
function blind(){

const toAdd = document.getElementById("display");
const toAddButton = document.getElementById("buttons");

//Tablica kart
for(var i=0; i < 169; i++){
   var newDiv = document.createElement('div');
   newDiv.id = cards[i];
   newDiv.className = 'square';
   toAdd.appendChild(newDiv);
   let inside = document.getElementById(cards[i]);
   var newContent = document.createElement('div');
   newContent.className = 'card';
   newContent.innerHTML = cards[i];
   newContent.setAttribute('onclick', 'arrays('+i+')');
   inside.appendChild(newContent);
}

//Guziki
for(var i=0; i < MainButtons.length; i++){
   var newButton = document.createElement('button');
   newButton.id = MainButtons[i];
   newButton.className = 'mButton';
   newButton.innerHTML = MainButtons[i];
   newButton.setAttribute('onclick', MainButtonsFunction[i]);
   toAddButton.appendChild(newButton);
}

}

//Lojack first rise 
function FLojackRFI(){
   
   for(var i=0; i < cards.length ; i++){
      document.getElementById(cards[i]).classList.add('square');
      document.getElementById(cards[i]).classList.remove('rise','limp');
   }
   
   for(var i=0; i < LojackRFI.length ; i++){
      document.getElementById(LojackRFI[i]).classList.add('rise');
      document.getElementById(LojackRFI[i]).classList.remove('square');
   }

}

//Hijack first rise
function FHijackRFI(){
   
   for(var i=0; i < cards.length ; i++){
      document.getElementById(cards[i]).classList.add('square');
      document.getElementById(cards[i]).classList.remove('rise','limp');
   }
   
   for(var i=0; i < HijackRFI.length ; i++){
      document.getElementById(HijackRFI[i]).classList.add('rise');
      document.getElementById(HijackRFI[i]).classList.remove('square');
   }

}

//Cutoff first rise
function FCutoffRFI(){
   
   for(var i=0; i < cards.length ; i++){
      document.getElementById(cards[i]).classList.add('square');
      document.getElementById(cards[i]).classList.remove('rise','limp');
   }
  
   for(var i=0; i < CutoffRFI.length ; i++){
      document.getElementById(CutoffRFI[i]).classList.add('rise');
      document.getElementById(CutoffRFI[i]).classList.remove('square');
   }

}

//Button first rise
function FButtonRFI(){
   
   for(var i=0; i < cards.length ; i++){
      document.getElementById(cards[i]).classList.add('square');
      document.getElementById(cards[i]).classList.remove('rise','limp');
   }
   
   for(var i=0; i < ButtonRFI.length ; i++){
      document.getElementById(ButtonRFI[i]).classList.add('rise');
      document.getElementById(ButtonRFI[i]).classList.remove('square');
   }

}

//Small Blind first rise
function FsbRFI(){
   
   for(var i=0; i < cards.length ; i++){
      document.getElementById(cards[i]).classList.add('square');
      document.getElementById(cards[i]).classList.remove('rise','limp');
   }
   
   
   for(var i=0; i < SBRFIRise.length ; i++){
      document.getElementById(SBRFIRise[i]).classList.add('rise');
      document.getElementById(SBRFIRise[i]).classList.remove('square');
   }
   
   for(var i=0; i < SBRFILimp.length ; i++){
      document.getElementById(SBRFILimp[i]).classList.add('limp');
      document.getElementById(SBRFILimp[i]).classList.remove('square');
   }
}

//Facing RFI Hijac vs Lojack
function FHJvLJ(){

   for(var i=0; i < cards.length ; i++){
      document.getElementById(cards[i]).classList.add('square');
      document.getElementById(cards[i]).classList.remove('rise','limp');
   }

   for(var i=0; i < HJvLJ.length ; i++){
      document.getElementById(HJvLJ[i]).classList.add('rise');
      document.getElementById(HJvLJ[i]).classList.remove('square');
   }
}



//funkcja od tworzenia zestawów kart
//function arrays(duet){
  // const txt = cards[duet];
   //const para = document.getElementById("para");
   //para.textContent += "\"" + cards[duet] + "\", ";
   //document.getElementById(cards[duet]).classList.add('rise');
   //document.getElementById(cards[duet]).classList.remove('square');
//}


