
// const newTodoInput = document.querySelector('input');
// const addTodoButton = document.querySelector('button');
// const todolist = document.querySelector('div.todos');
// let count=0;
// addTodoButton.onclick = function(){
//     var input = newTodoInput.value;
//     if(input.length === 0)
//     {
//         alert("Please Enter A Task");
//     }
//     else
//     {
//         let p = document.createElement('p')
//         p.setAttribute("key",count)
//         p.innerHTML = input
//         todolist.appendChild(p)
//         newTodoInput.value = " "
//         document.querySelector(`p[key = "${count}"]`).addEventListener('click',function(){
//             todolist.removeChild(this)
//         })
//         count++
//     }
// }
// ------------------------------------------------------------------------------------

document.querySelector('#all-data').onclick = async function fetchTodos()
{
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    let output = '';
    data.forEach(function(todo, index) 
    {
        if(todo.completed = false)
        {
            todo.completed = "Pnding-Task"
        }
        else
        {
            todo.completed="Completed-Task"
        }

        output += `<div class="list">
                    <p key=${index}>
                    <span class="task">
                    Title : ${todo.title} |
                    id : ${todo.id} |
                    userId : ${todo.userId} |
                    Status : ${todo.Completed}
                    </span>
                    </p>
                    <div>`

    });
    document.querySelector('.todos').innerHTML = output;
}

// ------------------------------------------------------------------------------------

document.querySelector('#pending-data').onclick = async function fetchTodos()
{
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    let output = '';

    data.forEach(function(todo, index) 
    {
        if(todo.completed == false)
        {
            todo.completed = "Pending-Task"

        output +=`<div class="list"><p key=${index}>
                    <span class = "task">
                    Title : ${todo.title}   | 
                    id : ${todo.id} |
                    userId : ${todo.userId} |
                    Status : ${todo.completed}  
                    </span>
                </p></div>`

        }
    });
    document.querySelector('.todos').innerHTML = output;
}

// ----------------------------------------------------------------------------------------

document.querySelector('#completed-data').onclick = async function fetchTodos()
{
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await res.json();
        let output = '';
    
        data.forEach(function(todo, index) 
        {
            if(todo.completed == true)
            {
                todo.completed = "Completed-Task"
    
            output +=`<div class="list"><p key=${index}>
                        <span class = "task">
                        Title : ${todo.title}   | 
                        id : ${todo.id} |
                        userId : ${todo.userId} |
                        Status : ${todo.completed}   
                        </span>
                    </p></div>`
            }
        });
        document.querySelector('.todos').innerHTML = output;
}
