import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(글제목.map(function(){
    return (0)
  }));
  let [선택글인덱스, 인덱스변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>React Bolg</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
        }}>여자로 바꾸기</button>

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
                {따봉[i]}
                </h4>
              <p>2월 17일 발행</p>
              </div>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1)
                글제목변경(copy)
              }}>글 삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value);
        }}/> <button onClick={()=>{
          글제목변경(글제목.concat(입력값));
          }}>글 발행</button>

      {
        modal? <Modal 선택글인덱스={선택글인덱스} 글제목={글제목}/> : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h4>{props.글제목[props.선택글인덱스]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  )
}

export default App;
