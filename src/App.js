import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [입력글제목, 입력글제목변경] = useState('');
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [날짜, 날짜변경] = useState(['2022-12-31','2023-01-01','2023-01-22']);
  let [입력날짜, 입력날짜변경] = useState('');
  let [상세내용, 상세내용변경] = useState(['추천합니다!', '아무래도 강남엔 맛집이 없네요.', '독학 가능합니다 화이팅.']);
  let [입력상세내용, 입력상세내용변경] = useState('');
  let [선택글인덱스, 인덱스변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>React Bolg</h4>
      </div>

      {
        글제목.map(function(a, i){
          return (      
            <div className="list" key={i}>
              <div>
              <h4 onClick={ ()=>{
                  인덱스변경(i);
                  setModal(true);
                } }>
                { 글제목[i] }
                <span onClick={(e)=>{
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i]++;
                  따봉변경(copy)
                  }}>👍</span>
                { 따봉[i] }
                </h4>
              <p>{ 날짜[i] }</p>
              </div>
              <button onClick={()=>{
                let copy1 = [...글제목];
                copy1.splice(i, 1)
                글제목변경(copy1)

                let copy2 = [...따봉];
                copy2.splice(i, 1)
                따봉변경(copy2)

                let copy3 = [...날짜];
                copy3.splice(i, 1)
                날짜변경(copy3)
              }}>글 삭제</button>
            </div>
          )
        })
      }

      {
        modal? <Modal 선택글인덱스={선택글인덱스} 글제목={글제목} 날짜={날짜} 상세내용={상세내용}/> : null
      }

      <input placeholder='글 제목' onChange={(e)=>{
        입력글제목변경(e.target.value);
        }}/>
        <input type='date' onChange={(e)=>{
          입력날짜변경(e.target.value);
        }}/>
        <input placeholder='상세내용' onChange={(e)=>{
          입력상세내용변경(e.target.value);
        }}/>
        <button onClick={()=>{
          // TODO : 입력값 없으면 발행 안하기
          글제목변경([...글제목, 입력글제목]);
          날짜변경([...날짜, 입력날짜]);
          상세내용변경([...상세내용, 입력상세내용]);
          따봉변경([...따봉, 0]);
          }}>글 발행</button>

    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h4>{props.글제목[props.선택글인덱스]}</h4>
      <p>{props.날짜[props.선택글인덱스]}</p>
      <p>{props.상세내용[props.선택글인덱스]}</p>
      <button>글 수정</button>
    </div>
  )
}

export default App;
