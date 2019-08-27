import React,{useContext} from 'react';
import {
  BoardDiv,BoardMenuDiv,BoardRight,MdFolderStyled
  ,NewBoard,CreateBoard,MdListStyled
} from './BoardStyleComponet';
import Header from '../Components/Header';
import style from './Board.css';
import {UserListContext,UserBoardContext} from '../UserContext';

function Board(){
  const context = useContext(UserBoardContext);

  return(
    <>
      <BoardDiv>
        <BoardMenuDiv>
          <MdListStyled /><b>List</b>
        </BoardMenuDiv>
          <div className={style.box}>
           <MdFolderStyled />Board
          </div>
        <BoardRight>
        {context.map(t =>(<NewBoard to='/Login'>{t.board_id}</NewBoard>))}
          <CreateBoard><span> Create new board </span></CreateBoard>
        </BoardRight>
      </BoardDiv>
    </>
  );

}

export default Board;
