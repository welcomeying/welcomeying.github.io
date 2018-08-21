const projectsList = document.querySelector('#projects-list');

const projectsNav = document.querySelectorAll('.projects-nav li');
projectsNav.forEach(ele => {
   	ele.onclick = changeActiveProjects;
});

function changeActiveProjects(ele) {
	// Change 'Active' State
	projectsNav.forEach(item => {
		if(item.id == 'active') {
			item.removeAttribute('id')
		}
	});
	ele.target.id = 'active';
	changeProjects(ele.target.className);
}

function changeProjects(item) {
	const category = projects[item];
	// Remove Child Elements
	while (projectsList.hasChildNodes()) {
		projectsList.removeChild(projectsList.lastChild);
	}

	category.map(project => {
		let projectDiv = document.createElement('div');
		projectDiv.className = 'project';

		let image = document.createElement('img');
		image.src = project.image;
		image.className = 'image';
		projectDiv.append(image);

		let overlay = document.createElement('div');
		overlay.className = 'overlay';
		projectDiv.append(overlay);

		let text = document.createElement('div');
		text.className = 'text';
		overlay.append(text);
		text.innerHTML = project.name + '<br>';


		for (let i = 0; i < project.skills.length; i ++) {
			let skill = document.createElement('span');
			skill.className = 'skills';
			skill.innerHTML=project.skills[i];
			text.append(skill);
		}

		let button = document.createElement('buton');
		button.className = 'btn';
		let link = document.createElement('a');
		link.href = project.link;
		link.target = '_blank';
		link.innerHTML = "View Project >"
		button.append(link);
		text.append(button);

        projectsList.append(projectDiv);
    })
 }
changeProjects('Featured');


