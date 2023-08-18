class Student{
    constructor(fname, lname, bday, program){
        this.fname = fname;
        this.lname = lname;
        this.bday = bday;
        this.program = program;
    }
    createCard(){
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title')
        cardTitle.textContent = this.lname + ", " + this.fname;

        const cardContentBday = document.createElement('p');
        cardContentBday.classList.add('card-text');
        cardContentBday.textContent = "Birthday: " + this.bday;

        const cardContentProgram = document.createElement('p');
        cardContentProgram.classList.add('card-text');
        cardContentProgram.textContent = "Program: " + this.program;

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn');
        btnDelete.classList.add('btn-danger');
        btnDelete.textContent = "Delete";
        btnDelete.addEventListener('click', e => this.deleteStudent(e));

      
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardContentBday);
        cardBody.appendChild(cardContentProgram);
        cardBody.appendChild(btnDelete);
        cardWrapper.appendChild(cardBody);
        

        return cardWrapper, cardBody;
    }

    deleteStudent(e){
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }

}

class App{
    constructor(){
       this.form = document.querySelector("#form");
       this.btnReorder = document.querySelector('#btn-reorder');
       this.form.addEventListener('submit', e => this.whenFormIsSubmit(e));
       this.btnReorder.addEventListener('click', e => this.reorder(e));
       this.studentsList = document.querySelector('#students-list');
       this.students = [];
    }

    whenFormIsSubmit(e){
        e.preventDefault();

        const newStudent = new Student(
            this.form.querySelector('#fn-input').value,
            this.form.querySelector('#ln-input').value,
            this.form.querySelector('#birthday-input').value,
            this.form.querySelector('#program-input').value,
        );

        this.students.push(newStudent);
       /*  )*/
        this.studentsList.appendChild(newStudent.createCard());
        this.form.reset();
    }

    reorder(e){
        console.log('le bouton reorder a ete clique');

        while(this.studentsList.firstChild){
            this.studentsList.removeChild(this.studentsList.firstChild);
        }
        
        this.students.sort((a, b) =>{
            const lnameA = a.lname.toUpperCase();
            const lnameB = b.lname.toUpperCase();
            if (lnameA < lnameB){
                return -1;
            }
            if(lnameA > lnameB){
                return 1;
            }
            return 0;
        });
        console.log(this.students);
        this.students.forEach(student => {
            let studentCard = student.createCard();
            this.studentsList.appendChild(studentCard);
        });
    };


}

new App();

import * as bootstrap from 'bootstrap'

