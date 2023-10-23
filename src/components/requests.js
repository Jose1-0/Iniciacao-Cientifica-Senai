import axios from 'axios';

let UrlDefault = "http://127.0.0.1:8000/"

async function getQuestions(subject){
    var returnarray = [];
    await axios.get(UrlDefault+"Question/get/")
        .then(function (response) {
            const dataresponse = response.data;
            if (Array.isArray(dataresponse)) {
                // Usando o método forEach para percorrer o array de objetos
                dataresponse.forEach(item => {
                    if (item.type === subject){
                        returnarray.push(item);
                    }});
            } else {
                console.log("data não é um array.");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log(returnarray)
    return returnarray;
};

async function addQuestions(questiontext, idoption, typequestion){
    var returnarray = [];
    axios.post(UrlDefault+"Question/create/", {
        question_text: questiontext,
        options: [
            idoption
        ],
        type: typequestion
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
};

async function updateQuestions(idquestion,questiontext, idoption, typequestion){
    var returnarray = [];
    axios.post(UrlDefault+"Question/"+idquestion+"/update/", {
        question_text: questiontext,
        options: [
            idoption
        ],
        type: typequestion
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
};

async function deleteQuestions(idquestion){
    var returnarray = [];
    axios.delete(UrlDefault+"Question/"+idquestion+"/delete/")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
};

async function getIntroduction(subject){
  var returnarray = [];
  await axios.get(UrlDefault+"Introduction/get/")
      .then(function (response) {
          const dataresponse = response.data;
          if (Array.isArray(dataresponse)) {
              // Usando o método forEach para percorrer o array de objetos
              dataresponse.forEach(item => {
                  if (item.type === subject){
                      returnarray.push(item);
                  }});
          } else {
              console.log("data não é um array.");
          }
      })
      .catch(function (error) {
          console.log(error);
      });
  console.log(returnarray)
  return returnarray;
};

async function addIntroduction(title_introduction, text_introduction, type_introduction){
  var returnarray = [];
  axios.post(UrlDefault+"Introduction/create/", {
      title: title_introduction,
      introduction_text: text_introduction,
      type: type_introduction
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function updateIntroduction(id_introduction, title_introduction, text_introduction, type_introduction){
  var returnarray = [];
  axios.post(UrlDefault+"Introduction/"+id_introduction+"/update/", {
      title: title_introduction,
      introduction_text: text_introduction,
      type: type_introduction
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function deleteIntroduction(id_introduction){
  var returnarray = [];
  axios.delete(UrlDefault+"Introduction/"+id_introduction+"/delete/")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function getOption(subject){
  var returnarray = [];
  await axios.get(UrlDefault+"Option/get/")
      .then(function (response) {
          const dataresponse = response.data;
          if (Array.isArray(dataresponse)) {
              // Usando o método forEach para percorrer o array de objetos
              dataresponse.forEach(item => {
                  if (item.option_text === subject){
                      returnarray.push(item);
                  }});
          } else {
              console.log("data não é um array.");
          }
      })
      .catch(function (error) {
          console.log(error);
      });
  console.log(returnarray)
  return returnarray;
};

async function addOption(option_text, correct){
  var returnarray = [];
  axios.post(UrlDefault+"Option/create/", {
      option_text: option_text,
      correct: correct
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function updateOption(id_Option, option_text, correct){
  var returnarray = [];
  axios.post(UrlDefault+"Option/"+id_Option+"/update/", {
      option_text: option_text,
      correct: correct
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function deleteOption(id_Option){
  var returnarray = [];
  axios.delete(UrlDefault+"Option/"+id_Option+"/delete/")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function getResponse(userid){
  var returnarray = [];
  await axios.get(UrlDefault+"Response/get/")
      .then(function (response) {
          const dataresponse = response.data;
          if (Array.isArray(dataresponse)) {
              // Usando o método forEach para percorrer o array de objetos
              dataresponse.forEach(item => {
                  if (item.user === userid){
                      returnarray.push(item);
                  }});
          } else {
              console.log("data não é um array.");
          }
      })
      .catch(function (error) {
          console.log(error);
      });
  console.log(returnarray)
  return returnarray;
};

async function addResponse(userid, question, selected_option){
  var returnarray = [];
  axios.post(UrlDefault+"Response/create/", {
      user: userid,
      question: question,
      selected_option: selected_option
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function updateResponse(id_Response, userid, question, selected_option){
  var returnarray = [];
  axios.post(UrlDefault+"Response/"+id_Response+"/update/", {
      user: userid,
      question: question,
      selected_option: selected_option
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function deleteResponse(id_Response){
  var returnarray = [];
  axios.delete(UrlDefault+"Response/"+id_Response+"/delete/")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function getUser(name_user){
  var returnarray = [];
  await axios.get(UrlDefault+"User/get/")
      .then(function (response) {
          const dataresponse = response.data;
          if (Array.isArray(dataresponse)) {
              // Usando o método forEach para percorrer o array de objetos
              dataresponse.forEach(item => {
                  if (item.name_user === name_user){
                      returnarray.push(item);
                  }});
          } else {
              console.log("data não é um array.");
          }
      })
      .catch(function (error) {
          console.log(error);
      });
  console.log(returnarray)
  return returnarray;
};

async function addUser(name_user, birthday, gender){
  var returnarray = [];
  axios.post(UrlDefault+"User/create/", {
      name_user: name_user,
      birthday: birthday,
      gender: gender
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function updateUser(id_User, name_user, birthday, gender){
  var returnarray = [];
  axios.post(UrlDefault+"User/"+id_User+"/update/", {
      name_user: name_user,
      birthday: birthday,
      gender: gender
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function deleteUser(id_User){
  var returnarray = [];
  axios.delete(UrlDefault+"User/"+id_User+"/delete/")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

//Exemplos
addQuestions("Onde está localizado a Europa", 1, "Geografia"); // cria um novo registro
updateQuestions(6,"Onde está localizado a Dinamarca", 1, "Geografia"); // atualiza registro existente
getQuestions("Geografia");  // filtra questão pelo type OBS:(tema da questão)
deleteQuestions(11)// deleta questão

addIntroduction("França", "Texto a ser trabalhado na França", "Geografia"); // cria um novo registro de tema
updateIntroduction(3, "Japão", "Texto a ser trabalhado no Japão", "Geografia"); // atualiza registro existent
deleteIntroduction(2); // deleta questão
getIntroduction("Geografia"); // filtra questão pelo type OBS:(tema da questão)

addOption("Primeira Guerra munidal", true); // cria um novo registro de opção
updateOption(1, "Segunda guerra mundial", true); // atualiza registro existent
deleteOption(3); // deleta questão
getOption('Segunda guerra mundial'); // filtra questão pelo type OBS:(tema da questão)

addResponse(1, 6, 1); // cria um novo registro de resposta
updateResponse(1, 1, 5, 1); // atualiza registro existente
deleteResponse(2); // deleta resposta
getResponse(1); // filtra reposta pelo id do usuario

addUser("Manuel", "2000-11-29", "M"); // cria um novo registro de usuario
updateUser(3, "Luiza", "2001-12-25", "F"); // atualiza registro existente
deleteUser(2); // deleta usuario
getUser("Luiza"); // filtra usuario pelo name_user 
