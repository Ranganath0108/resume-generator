
const inputfields = document.querySelector('.input-fields')
const innerBox = document.querySelector('.innerBox')
const output = document.querySelector('.output')
const container = document.querySelector('.container')
const resumeSaveBtn = document.querySelector('#saveResume');

let inputShow = true


async function TextEditor(element){
  const newEditor =  await ClassicEditor
  .create(element,{
    toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
  } )
  return newEditor
 
}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor=>{
  workExpdetails = nEditor
})
let Academic;
TextEditor(inputfields["academics"]).then(nEditor=>{
  Academic = nEditor
})
let Skills;
TextEditor(inputfields["skills"]).then(nEditor=>{
  Skills = nEditor
})

let PRJC;
TextEditor(inputfields["projects"]).then(nEditor=>{
  PRJC = nEditor
})

let achievementsData;
TextEditor(inputfields["achievements"]).then(nEditor=>{
  achievementsData = nEditor
})



function toggle(){
    if(inputShow){
         inputfields.style.display = "none";
         innerBox.style.display = "none";
         container.style.display = "none";
         resumeSaveBtn.style.display = "block";
         inputShow = false 
         output.innerHTML=`
           <div class="container1" id="resumeT">
           <div class="innerBox1" id="resume">
           <div class="hero1">
               <h1>${inputfields["name"].value}</h1> 
           </div>
           <div class="main">
               <div>
                 <h4>Objective</h4>
                 <hr>
                 <p>${inputfields["objective"].value}</p>
                 <h4>Skills</h4>
                 <hr>
                 ${Skills.getData()}
                 <h4>Achievements</h4>
                 <hr>
                 ${achievementsData.getData()}
                <h4>Professional experience</h4>
                <hr>
                ${workExpdetails.getData()}
                <h4>Academic details</h4>
                <hr>
                 ${Academic.getData()}
                 </div>
                 <div>
                <h4>Projects</h4>
                <hr>
                ${PRJC.getData()}
                <h4>Contact</h4>
                <hr>
                 <p>${inputfields["contact"].value}</p>
                <p>${inputfields["email"].value}</p>
               </div>
           </div>
           </div>
        </div>
         `
    }else{
        inputfields.style.display =  "block";
        innerBox.style.display = "flex";
        container.style.display = "flex";
        resumeSaveBtn.style.display = "none";
        inputShow = true
        output.innerHTML=""
    }
}

window.onloadend;

resumeSaveBtn.addEventListener('click', (e)=> {
								e.preventDefault;
								const resumePdf = document.getElementById('resume');
								console.log(window);
								var opt = {
  margin:       0.2,
  filename:     'resume.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};
								html2pdf().set(opt).from(resumePdf).save();
				})
