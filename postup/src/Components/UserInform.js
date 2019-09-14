import React from 'react';

export const User ={
  user_id : '',
  password : '',
  email:'',
  name:'',
  state:''
};


export const List = [
  {
    list_id:'',
    list_name:'',
    cardlist:[
      {
        card_name:'',
        card_description:'',
        card_id:'',
        cardcontentlist: [
          {
            cardcontent_id:'',
            cardcontent_name:'',
            cardcontent_content:''
          }
        ]
      }
    ]
  }
]


export const Board=[
  {
    board_id:''
  }
]
