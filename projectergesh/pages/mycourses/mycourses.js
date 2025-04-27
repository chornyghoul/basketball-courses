function highlightSections(playerNumber) {
    resetHighlight();

    const sectionMapping = {
        1: ['course2', 'course4'],
        2: ['course1', 'course3'],
        3: ['course1', 'course5'],
        4: ['course3', 'course4'],
        5: ['course2', 'course5']
    };

    const sectionsToHighlight = sectionMapping[playerNumber];   
    if (sectionsToHighlight) {
        sectionsToHighlight.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('highlight');
            }
        });
    }
}

function resetHighlight() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('highlight'));
}
