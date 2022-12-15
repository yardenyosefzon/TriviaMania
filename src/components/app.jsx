import React, { Component, useEffect } from 'react';
import QuestionGrid from './questionGrid';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import WelcomingPage from './welcomingPage';
import Lose from './Lose'
import Win from './Win';
import Summary from './summary';

 

class AppTrivia extends Component {
    state={
         questions:[   {id:0,text:'What country was part of the original Axis powers in World War II?',answerType:'countrys',rightAnswer:'Germany'},
                     {id:1,text:'Which country do cities of Perth, Adelade & Brisbane belong to?',answerType:'countrys',rightAnswer:'Australia'},
                     {id:2,text:'Which country has the largest population in the world?',answerType:'countrys',rightAnswer:' China'},
                     {id:3,text:'What is the name of the largest country in the world?',answerType:'countrys',rightAnswer:'Russia'},
                     {id:4,text:'What U.S. state is home to no documented poisonous snakes?',answerType:'countrys',rightAnswer:'Alaska'},
                     {id:5,text:'What country has the most natural lakes?',answerType:'countrys',rightAnswer:' Canada'},
                     {id:6,text:'Which country is also called The Netherlands?',answerType:'countrys',rightAnswer:' Holland'},
                     {id:7,text:'What is the coldest place on Earth?',answerType:'countrys',rightAnswer:' Antarctica'},
                     {id:8,text:'What country lies above Mexico?',answerType:'countrys',rightAnswer:' USA'},
                     {id:9,text:'In what country do Mt. Vesuvius located?',answerType:'countrys',rightAnswer:'Italy'},
                     {id:10,text:'What country are the Great Pyramids of Giza located in?',answerType:'countrys',rightAnswer:'Egypt'},
                     {id:11,text:'What is the name of the smallest country in the world?',answerType:'countrys',rightAnswer:'The Vatican City'},
                     {id:12,text:'Which animal can be seen on the Porsche logo?',answerType:'animals',rightAnswer:'Horse'},
                     {id:13,text:'Which mammal is known to have the most powerful bite in the world?',answerType:'animals',rightAnswer:'Hippopotamus'},
                     {id:14,text:'What object does a male penguin often gift to a female penguin to win her over?',answerType:'animals',rightAnswer:'A pebble'},
                     {id:15,text:'Which animal is known to spend 90% of its day sleeping?',answerType:'animals',rightAnswer:' Koalas'},
                     {id:16,text:'Which animals stripes are on their skin as well as their fur?',answerType:'animals',rightAnswer:'Tiger'},
                     {id:17,text:'Which animals poop is known to take the shape of cubes?',answerType:'animals',rightAnswer:'Wombat'},
                     {id:18,text:'What is the name of the fastest land animal?',answerType:'animals',rightAnswer:'Cheetah'},
                     {id:19,text:'Whats the only mammal thats able to fly?',answerType:'animals',rightAnswer:'Bat'},
                     {id:20,text:'What animal is known by the nickname "sea cow"?',answerType:'animals',rightAnswer:' Manatee'},
                    {id:21,text:'What is the only mammal that cant jump?',answerType:'animals',rightAnswer:' Elephant'},
                     {id:22,text:'What animal is the largest mammal in the world?',answerType:'animals',rightAnswer:' Blue Whale'},
                     {id:23,text:'What animal is said to have nine lives?',answerType:'animals',rightAnswer:' Cat'},
                     {id:24,text:'Who named the Pacific Ocean?',answerType:'people',rightAnswer:'Ferdinand Magellan'},
                     {id:25,text:'What is the name of the man who launched eBay back in 1995?',answerType:'people',rightAnswer:'Pierre Omidyar'},
                     {id:26,text:'Who is the actor in the 1976 thriller Taxi Driver, who ways, ““You talkin to me?”',answerType:'people',rightAnswer:'Robert De Niro'},
                     {id:27,text:'Who is the well-known English mathematician and physical scientist that became famous for his law of gravitation?',answerType:'people',rightAnswer:'Sir Isaacs Newton'},
                     {id:28,text:'What is the name of the Argentinian revolutionary hero, who took part in guerilla wars in Cuba and was killed fighting Bolivian troops?',answerType:'people',rightAnswer:'Ernesto “Che” Guevara'},
                     {id:29,text:'Who was the first black President of South Africa imprisoned for about 27 years and led the African National Congress to achieve a non-racist democracy?',answerType:'people',rightAnswer:'Nelson Mandela'},
                     {id:30,text:'Who was the German who invented movable-type printing and printed the Mazarin Bible?',answerType:'people',rightAnswer:'Johannes Gutenberg'},
                     {id:31,text:'Who is the London-based actor who played the lead in Richard Attenboroughs film Gandhi and won a Best Actor Oscar?',answerType:'people',rightAnswer:'Ben Kingsley'},
                     {id:32,text:'Who is remembered as a comedy film star from London who went to the USA in 1916 and starred in City Lights, The Kid, The Gold Rush, and Limelight?',answerType:'people',rightAnswer:'Charlie Chaplin'},
                     {id:33,text:'Who was a TV and movie star, governor of California from 1967 to 1974, and the U.S. President from 1981 to 1988?',answerType:'people',rightAnswer:'Ronald Reagan'},
                     {id:34,text:'Who was the wife of Prince Charles of Britain that died in a car accident in Paris on August 31, 1997?',answerType:'people',rightAnswer:'Princess Diana'},
                     {id:35,text:'Who won the only Oscar nomination for acting in a Star Wars movie?',answerType:'people',rightAnswer:'Alec Guinness'},
                     {id:36,text:'Which monarch officially made Valentines Day a holiday in 1537?',answerType:'people',rightAnswer:' Henry VIII'},
                     {id:37,text:'Who was the first woman to win a Nobel Prize (in 1903)?',answerType:'people',rightAnswer:'Marie Curie'},
                     {id:38,text:'The first dictionary was written by?',answerType:'people',rightAnswer:' Robert Cawdrey'},
                     {id:39,text:'How many languages are written from right to left?',answerType:'numbers',rightAnswer:'12'},
                     {id:40,text:'How many countries still have Shilling as currency?',answerType:'numbers',rightAnswer:'4'},
                     {id:41,text:'There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?',answerType:'numbers',rightAnswer:'141'},
                     {id:42,text:'10*10',answerType:'numbers',rightAnswer:'100'},
                     {id:43,text:'45*45',answerType:'numbers',rightAnswer:'2025'},
                     {id:44,text:'4 + 4',answerType:'numbers',rightAnswer:'8'},
                     {id:45,text:'How much do you need to add to 2 to get 5?',answerType:'numbers',rightAnswer:'3'},
                     {id:46,text:'How much is 555-55?',answerType:'numbers',rightAnswer:'500'},
                     {id:47,text:'How much is 100 + 0?',answerType:'numbers',rightAnswer:'100'},
                     {id:48,text:'How much is 15×5?',answerType:'numbers',rightAnswer:'75'},
                     {id:49,text:'How much is 22 + 33 + 44 + 55?',answerType:'numbers',rightAnswer:'154'},
                     {id:50,text:'How much is 9×8?',answerType:'numbers',rightAnswer:' 72'},
                     {id:51,text:'How much is 77x75x92x17x0x82x99?',answerType:'numbers',rightAnswer:'0'},
                     {id:52,text:'How much is 1 + 1 – 1 + 1 – 1 – 1 + 1 – 1 + 1 + 1 – 1 + 1 ?',answerType:'numbers',rightAnswer:'2'},
                    {id:53,text:'How much will 1x1x1x1x1x1x1x1x1x1?',answerType:'numbers',rightAnswer:'1'},
                     {id:54,text:'I am an odd number. Take away one letter and I become even. What number am I?',answerType:'numbers',rightAnswer:'7'},
                     {id:55,text:'What number squered,is qurter of 10 squred?',answerType:'numbers',rightAnswer:'5'},
                     {id:56,text:'What month is ginos birthday month?',answerType:'dates',dateType:'month',rightAnswer:'4'},
                    {id:57,text:'Which year was the best year?',answerType:'dates',dateType:'year',rightAnswer:'2019'},
                    {id:58,text:'The famous Japanies attack on Pearl Harbor took place on the ___ of December',answerType:'dates',dateType:'day',rightAnswer:'7'}],

        a:[{id:0},
                                {id:1},
                                {id:2},
                                {id:3},
                                {id:4},
                                {id:5},
                                {id:6},
                                {id:7},
                                {id:8},
                                {id:9},
                                {id:10},
                                {id:11},
                                {id:12},
                                {id:13},
                                {id:14},
                                {id:15},
                                {id:16},
                                {id:17},
                                {id:18},
           {id:19}],

        usedQuestions:[], 
         
        usedAnswers:[{type:'people',arr:[]},
                     {type:'numbers',arr:[]},
                     {type:'animals',arr:[]},
                     {type:'countrys',arr:[]},
                     {type:'dates',arr:[]}], 

        lives:[{num:'1',heart:'💓'},{num:'2',heart:'💓'},{num:'3',heart:'💓'}],

        questionIndex:[],

        answerA:[], 
        
        answerB:[],

        rightAnswer:'',

        rightAnswerNum:'',

        questionNum:1,

        answerAge:0,

        Adisplay:'true',

        Bdisplay:'true',

        helpUsed:''
    
                    
    }
    render() {
        return (
               
                <Routes>    
                    <Route path={'/'} element={<WelcomingPage randomQuestion={()=>this.randomQuestion()} />}/>
                    <Route path={"/game"}  element={ <QuestionGrid submitAnswer={(string=>this.submitAnswer(string))} help={()=>this.help()} answerA={this.state.answerA} answerB={this.state.answerB} a={this.state.a} questionNum={this.state.questionNum} questions={this.state.questions} lives={this.state.lives} questionIndex={this.state.questionIndex} Adisplay={this.state.Adisplay} Bdisplay={this.state.Bdisplay} helpUsed={this.state.helpUsed}/>}/>  
                    <Route path={"/lose"} element={<Lose></Lose>}/>
                    <Route path={"/win"} element={<Win></Win>}/>
                    <Route path={"/summary"} element={<Summary questions={this.state.questions} questionIndex={this.state.questionIndex} usedQuestions={this.state.usedQuestions}></Summary>}/>
                </Routes>
        
        );
    }
    randomQuestion=()=>{
     
    this.state.Adisplay='true' ;   
    this.state.Bdisplay='true'  ;
    this.setState({Adisplay:this.state.Adisplay});  
    this.setState({Bdisplay:this.state.Bdisplay});  
    let num=Math.floor(Math.random()*59)-1;    
    if((this.state.usedQuestions.find(questions=>questions==num))===undefined){
    this.state.questionNum=num;
    this.setState({questionNum:this.state.questionNum});
    this.state.usedQuestions.push(num);
    this.setState({usedQuestions:this.state.usedQuestions});
    this.state.rightAnswer=this.state.questions[num].rightAnswer;
    this.randomAnswers(num);
    }
    else
    this.randomQuestion();
    }

    randomAnswers=(num)=>{
       
        if(this.answerAge%3==0);{
        this.state.usedAnswers.map(answers=>answers.arr.reverse());
        this.state.usedAnswers.map(answers=>answers.arr.splice(0,4));
        this.state.usedAnswers.map(answers=>answers.arr.reverse());
        this.setState({usedAnswers:this.state.usedAnswers});
        this.state.answerAge++;
        }
        this.state.answerA=[];
        this.setState({answerA:this.state.answerA})
        this.state.answerB=[];
        this.setState({answerB:this.state.answerB})
        let type=this.state.questions[this.state.questionNum].answerType;
        switch(type){

           case 'people':{
             this.generateAnswer1('people',0); 
                break;
           } 

           case 'numbers':{
            this.generateAnswer1('numbers',1); 
                break;
           } 

           case 'animals':{
            this.generateAnswer1('animals',2); 
               break;
           } 

           case 'countrys':{
            this.generateAnswer1('countrys',3); 
               break;
           } 

           case'dates':{
            this.generateDateAnswer(num);
            break;
           }

        }
    }
    generateAnswer1=(type,arrIndex)=>{
        this.state.usedAnswers[arrIndex].arr.push(this.state.questions[this.state.questionNum]);
        let arr=[];
        let arrWords=this.state.questions.filter(val=>val.answerType==type);
        let num=Math.floor((Math.random())*arrWords.length);
        console.log(this.state.usedAnswers[arrIndex].arr.find(answers=>answers.id==arrWords[num].id)==undefined);
        if(this.state.usedAnswers[arrIndex].arr.find(answers=>answers.id==arrWords[num].id)===undefined){
        this.state.usedAnswers[arrIndex].arr.push(arrWords[num]);    
        this.setState({usedAnswers:this.state.usedAnswers}); 
        arr.push(arrWords[num]);        
        this.generateAnswer2(type,arrIndex,arr); 
        }
        else
        this.generateAnswer1(type,arrIndex);
    }
    generateAnswer2=(type,arrIndex,arr)=>{
        
        let arrWords=this.state.questions.filter(val=>val.answerType==type);
        let num=Math.floor((Math.random())*arrWords.length);
        console.log(this.state.usedAnswers[arrIndex].arr.find(answers=>answers.id==arrWords[num].id)==undefined);
        if(this.state.usedAnswers[arrIndex].arr.find(answers=>answers.id==arrWords[num].id)==undefined){
        this.state.usedAnswers[arrIndex].arr.push(arrWords[num]);
        this.setState({usedAnswers:this.state.usedAnswers}); 
        arr.push(arrWords[num]);
            this.generateAnswer3(type,arrIndex,arr);
        }
        else
        this.generateAnswer2(type,arrIndex,arr);
    }
    generateAnswer3=(type,arrIndex,arr)=>{
       
        let arrWords=this.state.questions.filter(val=>val.answerType==type);
        let num=Math.floor((Math.random())*arrWords.length);
        console.log(this.state.usedAnswers[arrIndex].arr.find(answers=>answers.id==arrWords[num].id)==undefined);
        if(this.state.usedAnswers[arrIndex].arr.find(answers=>answers.id==arrWords[num].id)==undefined){
        this.state.usedAnswers[arrIndex].arr.push(arrWords[num]);
        this.setState({usedAnswers:this.state.usedAnswers});   
        arr.push(arrWords[num]);
        this.generateRandomCorrect(type,arrIndex,arr);
        }
        else
        this.generateAnswer3(type,arrIndex,arr);
    }
    generateRandomCorrect=(type,arrIndex,arr)=>{
    
        let num=Math.floor(Math.random()*3);
        this.state.rightAnswerNum=num;
        this.setState({rightAnswerNum:this.state.rightAnswerNum});
        arr.splice(num,0,this.state.questions[this.state.questionNum]);
        let index=this.state.usedAnswers.find(answers=>answers.type==type);
        this.setState({usedAnswers:this.state.usedAnswers});
        let answerA=arr.splice(0,2);
        let answerB=arr;
        console.log(answerA,answerB);
        this.setState({answerA:answerA});
        this.setState({answerB:answerB});
        console.log(this.state.rightAnswer,this.state.questionIndex.length);
        console.log(this.state.questionIndex,this.state.lives);
    }
    submitAnswer=(string)=>{
     if(string=='true'){

       this.state.questionIndex.push('true');
       this.setState({questionIndex:this.state.questionIndex});
     }
     else{
     this.state.questionIndex.push('false');
     this.setState({questionIndex:this.state.questionIndex});
     this.state.lives[this.state.lives.length-1].heart='💔';
     setTimeout(()=>{this.popLives()},1000);
     }
     this.randomQuestion();
    }
    popLives=()=>{
      this.state.lives.pop();
      this.setState({lives:this.state.lives});
      console.log(this.state.lives);
    }
    generateDateAnswer=(num)=>{
        let question=this.state.questions[num].dateType;
        let arr=[]; 
        switch (question){

           
            case 'day':
                
               arr.push({text:'',rightAnswer:this.randomDate(new Date(2012, 0, 1), new Date()).getDate()});
               arr.push({text:'',rightAnswer:this.randomDate(new Date(2012, 0, 1), new Date()).getDate()});
               arr.push({text:'',rightAnswer:this.randomDate(new Date(2012, 0, 1), new Date()).getDate()});
               this.generateRandomCorrect('dates',4,arr);
               
                break;

            case 'month':

            arr.push({text:'',rightAnswer:this.randomDate(new Date(2012, 0, 1), new Date()).getMonth()+1});
            arr.push({text:'',rightAnswer:this.randomDate(new Date(2012, 0, 1), new Date()).getMonth()+1});
            arr.push({text:'',rightAnswer:this.randomDate(new Date(2012, 0, 1), new Date()).getMonth()+1});
            this.generateRandomCorrect('dates',4,arr);
            
                break;

            case 'year':

            arr.push({text:'',rightAnswer:this.randomDate(new Date(2012, 0, 1), new Date()).getFullYear()});
            arr.push({text:'',rightAnswer:this.randomDate(new Date(2012, 0, 1), new Date()).getFullYear()});
            arr.push({text:'',rightAnswer:this.randomDate(new Date(2012, 0, 1), new Date()).getFullYear()});
            this.generateRandomCorrect('dates',4,arr);
            

                break;

        }
    }
    randomDate=(start, end)=> {
    
        let date= new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        if(date.getFullYear==2019||date.getDate==7||(date.getMonth+1)==4)
        this.randomDate(start,end);
        else
        return date;
      }
    help=()=>{
     if(this.state.rightAnswerNum<2)
     this.state.Bdisplay='false';
     else
     this.state.Adisplay='false';   

     this.state.helpUsed='true';
     this.setState({helpUsed:this.state.helpUsed});
    }  
    
    
}

export default AppTrivia;
