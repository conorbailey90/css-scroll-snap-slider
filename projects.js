const main = document.querySelector('main')

const projects = [
    {
        client: 'Sony',
        title: 'Project One',
        date: '10/11/2021',
        description: 'Amazing web design project.'
    },
    {
        client: 'Apple',
        title: 'Project Two',
        date: '10/11/2021',
        description: 'Amazing web design project.'
    },
    {
        client: 'Panasonic',
        title: 'Project Three',
        date: '10/11/2021',
        description: 'Amazing web design project.'
    },
    {
        client: 'Google',
        title: 'Project Four',
        date: '10/11/2021',
        description: 'Amazing web design project.'
    },
    {
        client: 'Netflix',
        title: 'Project Five',
        date: '10/11/2021',
        description: 'Amazing web design project.'
    },

]

projects.forEach(project => {
    let section = document.createElement('section');
    let container = document.createElement('div');
    container.classList.add('container');

    let leftPanel = document.createElement('div');
    leftPanel.classList.add('l-panel');
    for (key in project){
        let h5 = document.createElement('h5');
        h5.innerText = key;
        let h4 = document.createElement('h4');
        h4.innerText = project[key];
        h4.classList.add('info')
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('outer');
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('inner');
        outerDiv.appendChild(h4);
        outerDiv.appendChild(innerDiv)
        leftPanel.appendChild(h5);
        leftPanel.appendChild(outerDiv);
    }
    let h2 = document.createElement('h2');
    h2.innerText = project.title

    container.append(leftPanel);
    section.appendChild(container)
    main.appendChild(section)
})