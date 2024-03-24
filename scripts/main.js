const link_repo = "https://github.com/imperialesjeremias/foodie_back"
const link_github = "https://github.com/imperialesjeremias"
import curriculum from "../public/ImperialesJeremias.pdf";

function openRepo() {
  window.open(link_repo, '_blank');
}
function openGithub() {
  window.open(link_github, '_blank');
}
function openCurriculum() {
  window.open(curriculum, '_blank');
}

if (document.getElementById('link_repo')) {
  document.getElementById('link_repo').addEventListener('click', openRepo);
}

if(document.getElementById('link_github')) {
  document.getElementById('link_github').addEventListener('click', openGithub);
}

if(document.getElementById('curriculum')) {
  document.getElementById('curriculum').addEventListener('click', openCurriculum);
}

function showProjects() {
  document.getElementById('project-1').style.display = 'block';
  document.getElementById('arrow').style.display = 'none';
  window.scrollTo(0,document.body.scrollHeight);
}

if(document.getElementById('arrow')) {
  document.getElementById('arrow').addEventListener('click', showProjects);
}

function hideProjects() {
  document.getElementById('project-1').style.display = 'none';
  document.getElementById('arrow').style.display = '';
  window.scrollTo(0,0);
}

if(document.getElementById('arrow-up')) {
  document.getElementById('arrow-up').addEventListener('click', hideProjects);
}
