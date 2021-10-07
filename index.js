function addNewTodo(){
  var list = document.createElement('li');
  var text = document.getElementById('newTodo').value;
  var nodeText = document.createTextNode(text);
  var errorMessage = document.getElementById('error');

    // التحقق من النص
    if(text === ''){
      errorMessage.innerText = 'الرجاء ملئ الحقل';
      // اظهار رسالة الخطأ
      errorMessage.style.display = 'block';
  
    }else if (text.length < 3) {
      errorMessage.innerText = 'النص قصير جداً، يجب أن لا يقل عن ثلاثة احرف';
      // اظهار رسالة الخطأ
      errorMessage.style.display = 'block';
  
    }else{
      // اضافة المهمة الجديدة
      list.appendChild(nodeText);
      document.getElementById('list').prepend(list);
      document.getElementById('newTodo').value = '';
  
      // اخفاء رسالة الحطأ في حال كانت ظاهرة
      errorMessage.style.display = 'none';

      // إظهار رسالة في حال كانت قائمة المهام فاراغة
      showEmptyMessage();

      // اضافة زر الحذف
      var button = document.createElement("i");
      button.className = "fas fa-trash delete ";
      list.appendChild(button);
      
      for (i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = function() {
          var list = this.parentElement;
          list.remove();
          // إظهار رسالة في حال كانت قائمة المهام فاراغة
          showEmptyMessage();
        }
      }
  
    }

}


// حذف المهام
var deleteButtons = document.getElementsByClassName("delete");
var i;
for (i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = function() {
    var list = this.parentElement;
    list.remove();
    // إظهار رسالة في حال كانت قائمة المهام فاراغة
    showEmptyMessage();
    }
}

// تحديد المهام المنتهية مع اضافة كلاس checked
var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

// إظهار أو إخفاء الرسالة التي تظهر في حال لم يكن هناك مهام
var showEmptyMessage = function(){
  var message = document.getElementById("emptyMessage");
  var todos = document.getElementsByTagName('li');
  console.log(todos);
  

  return message.style.display = todos.length < 1 ? 'block' : 'none';
}


var form = document.getElementById("form");
// اضافة مهمة جديدة
form.addEventListener("submit", function(event){
  event.preventDefault();
  addNewTodo();
  
});

