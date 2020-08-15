window.onload = function(){
    'use strict';

  const numberOfFilms = promptPlus('Сколько фильмов вы уже посмотрели?',''); 
  
  const cinemaCount = 2; //сколько фильмов пользователь должен ввести 
  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
  };


  /* ----------------------------------------------------------------- */
  //ввод текста в промт с проверкой длинны сообщения. Функция возврашает строку от встплывающего сообщения
  function promptPlus (text, len) {
    let userPromptStr = '';

    while(true){
      userPromptStr = prompt(text, userPromptStr); 

      if  (userPromptStr != null && userPromptStr.length > 0){
        if (len =='') {return userPromptStr;}

        if (len > 0 && len > userPromptStr.length)
        {
          return userPromptStr;
        }else if (len > 0 && len < userPromptStr.length){
          alert(`Введите менее ${len} символов`);
        }
      }else {userPromptStr='';}
    }
  }
/* ----------------------------------------------------------------- */

  for (let i=1; i<=cinemaCount; i++){
      personalMovieDB.movies[promptPlus('Один из последних просмотренных фильмов?', 50)] = promptPlus('На сколько оцените его?', '');
    } 
    
  if (personalMovieDB.count <10){
    console.log("Просмотрено довольно мало фильмов");
  }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log("Вы классический зритель");
  }else if(personalMovieDB.count > 30){
    console.log("Вы киноман");
  }else{
    console.log("Произошла ошибка");
  }
  
    
  console.log(personalMovieDB);
        
};