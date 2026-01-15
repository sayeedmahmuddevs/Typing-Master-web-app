const data = [
  "Bangladesh is a beautiful country with rivers, hills, and greenery everywhere",
  "I love coding and creating web applications that solve real-life problems efficiently",
  "JavaScript is very powerful and can be used for front-end, back-end, and full-stack development",
  "Practice makes a man perfect, so keep typing every day to improve your speed and accuracy",
  "It yping speed comes with time, patience, and constant focus on accuracy rather than just speed",
  "Coding is a creative skill that allows you to build amazing things out of logic and imagination",
  "Never give up on your dreams even if the path is hard and full of obstacles and failures",
  "Hard work always pays off in the end, but consistency and persistence are the real keys to success",
  "I enjoy learning new programming languages, frameworks, and tools to expand my knowledge and skills",
  "Web development is fun because you can see your work come alive in the browser almost instantly",
  "Focus on accuracy first, then gradually increase your typing speed while maintaining correctness",
  "Learning never stops, so every day dedicate time to improving yourself and practicing your skills",
  "Success needs patience, discipline, and a lot of practice, especially when you are learning typing",
  "Keep practicing everyday, challenge yourself with long sentences, and monitor your mistakes carefully",
  "Consistency is more important than motivation when you are learning a new skill",
  "Strong fundamentals make advanced programming topics easier to learn",
  "Typing accuracy builds confidence and reduces frustration",
  "Building projects is the best way to learn web development",
  "Time management is a crucial skill for developers and learners",
  "Focus and discipline can beat talent if talent does not work hard",
  "Daily practice helps your brain adapt and improve faster",
  "Learning to code teaches you how to think step by step",
  "Success comes when preparation meets opportunity",
  "Stay curious, keep learning, and never stop improving yourself",
  "A good developer always writes clean, readable, and maintainable code",
  "Mistakes are part of learning, so do not be afraid of making errors",
  "Typing with proper finger placement helps you improve speed naturally",
  "Small daily improvements lead to big results over time",
  "Debugging code improves your problem-solving and logical thinking skills",
  "Never compare your progress with others, focus on your own journey",
  "Learning JavaScript opens doors to many modern web technologies",
  "Practice typing without looking at the keyboard to build muscle memory",
  "Every expert was once a beginner who never gave up",
  "Clean code is easier to understand and easier to fix later",
  
];

const keyboardKeys = [
  "esc", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12","delete",
  "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace","home",
  "tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "enter","pageup",
  "c.lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'","\\", "enter","pagedown",
  "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift","end",
  "control", "fn", "win", "alt", "space", "alt","rig", "control","<","tb", ">"
];

const sound = new Audio('./public/keysound.mp3')

// =================================================== inputkey ==============================================================
const dataInput = document.getElementById('text-input');
let charIndex = 0;
let dataIndex = 0;


function loadData(){
    charIndex = 0

    // remove old span
    dataInput.innerHTML = '';

    // character Data
    const chars = data[dataIndex].split('');

    // creat span
    chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('dataspan','text-3xl','font-bold');
        span.dataset.index = index;
        dataInput.appendChild(span);  
    });

    return chars
}

// calling loadData
let chars = loadData();

//keydown handle
document.addEventListener('keydown', (e) => {
  const currentSpan = document.querySelector(`.dataspan[data-index="${charIndex}"]`);
console.log(e);
const smallltr = e.key.toLowerCase();
const keycolm = document.querySelector(`.keyColum[data-keyindex="${smallltr}"]`)
    
    if(keycolm){
      keycolm.classList.remove('scale-100')
      keycolm.classList.add('scale-80')
    }

// correct key
  if (e.key === chars[charIndex] ) {
    currentSpan.style.color = 'red';
    charIndex++;
        
  }

  // backspace
  else if (e.key === 'Backspace') {
    if (charIndex > 0) {
      charIndex--;
      const prevSpan = document.querySelector(`.dataspan[data-index="${charIndex}"]`);
      prevSpan.style.color = 'black';
    }
    e.preventDefault();
    sound.play();
  }

//   nextLine
  else if((e.key === 'Enter'|| e.key === ' ') && charIndex === chars.length){
        dataIndex = (dataIndex+1) % data.length
        chars = loadData()
        e.preventDefault()
  }else{
    sound.play()
  }
    
});

document.addEventListener('keyup',(e)=>{

  const smallltr = e.key.toLowerCase();
const keycolm = document.querySelector(`.keyColum[data-keyindex="${smallltr}"]`)
  
if(keycolm){
      keycolm.classList.remove('scale-80')
      keycolm.classList.add('scale-100')
    }


})

// ===================================== keyBoard key ==========================================================

// const keyBoard = document.getElementById('keyboard')
const keyCol1 = document.getElementById('div1')
const keyCol2 = document.getElementById('div2')
const keyCol3 = document.getElementById('div3')
const keyCol4 = document.getElementById('div4')
const keyCol5 = document.getElementById('div5')
const keyCol6 = document.getElementById('div6')

keyboardKeys.forEach((el,index)=>{
  const span = document.createElement('span')
    span.textContent = el;
    span.classList.add('keyColum','w-19','p-0.5','h-8','lg:h-11','scale-100','bg-gray-200', 'rounded','block','border','flex','justify-center','items-center')
    span.dataset.keyindex=el.toLowerCase()

      if(index<14){
        keyCol1.appendChild(span)
        span.classList.remove('w-19','h-8','lg:h-11')
        span.classList.add('w-20','h-5','lg:h-10')
      }

      else if(index<29){
        keyCol2.appendChild(span)
        if(keyboardKeys[index]==="back"){
          span.classList.remove('w-19')
          span.classList.add('w-45')
        }
      }

      else if(index<44){
        keyCol3.appendChild(span)
        
        if(keyboardKeys[index]==="tab"){
          span.classList.remove('w-19')
          span.classList.add('w-30')
        }
        else if(keyboardKeys[index]==="enter"){
          span.classList.remove('w-19')
          span.classList.add('w-25')
        }
      }

      else if(index<59){
        keyCol4.appendChild(span)
        if(keyboardKeys[index]==="c.lock"){
          span.classList.remove('w-19')
          span.classList.add('w-36')
        }
      }

      else if(index<72){
        keyCol5.appendChild(span)
        if(keyboardKeys[index]==="Shift"){
          span.classList.remove('w-19')
          span.classList.add('w-40')
        }
        else if(keyboardKeys[index]==="shift"){
          span.classList.remove('w-19')
          span.classList.add('w-35')
        }
      }

      else if(index<keyboardKeys.length){
        keyCol6.appendChild(span)
        
          if(keyboardKeys[index]==="space"){
            span.classList.remove('w-19')
            span.classList.add('w-100')
        }
      }
})
