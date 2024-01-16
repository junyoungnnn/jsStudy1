const quotes =[
{
    quote: "If you change your thoughts, you will change your life.",
    trans: "당신이 당신의 생각을 바꾼다면, 당신의 인생도 바꿀 수 있다.",
},
{
    quote: " Instead of thinking how hard your journey is think about how great your story will be.",
    trans: "당신의 여정이 얼마나 힘든지 생각하기보다 당신의 이야기가 얼마나 멋져질지 생각하세요.",
},
{
    quote: "No risk, no glory.",
    trans: "위험을 감수하지 않고서는 영광을 얻을 수 없다.",
},
{
    quote: "Never be a prisoner of your past. It was just a lesson, not a life sentence.",
    trans: "절대 과거에 갇힌 수감자로 살지 말아라. 인생의 수업이었을 뿐, 종신형이 아니다.",
},
{
    quote: "I don't chase, I attract. What's meant for me will simply find me.",
    trans: "나는 쫓지 않고 끌어당긴다. 나의 운명을 타고난 것이라면 날 찾을 것이다."
},
{
    quote: "You will be never criticized by someone who is doing more than you. You will only be criticized by someone doing less.",
    trans: "당신은 절대 당신보다 더 노력하는 사람에게 비난받지 않을 것입니다. 오직 당신보다 덜하는 사람만에게만 비난받을 것입니다.",
},
{
    quote: "One year from today, you will regret that you haven't start today.",
    trans: "오늘로부터 1년 후, 당신은 오늘 시작하지 않은 것을 후회할 것입니다.",
},
{
    quote: "If you want to be strong then learn to enjoy being alone.",
    trans: "당신이 강해지고 싶다면, 혼자 있는 것을 즐기는 법을 배워라.",
},
{
    quote: "Real success is when you find people copying you.",
    trans: "진짜 성공은 사람들이 당신을 따라하는 것을 발견할 때이다.",
},
{
    quote: "Stay positive. Good days are on their way.",
    trans: "긍정적으로 지내세요. 좋은 날들이 오고 있으니까요.",
}
];

const quote = document.querySelector("#quote span:first-child");
const trans = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
trans.innerText = todaysQuote.trans;