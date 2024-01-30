export const initObserver = () => {
    const sections = document.querySelectorAll('.flag'); 
    console.log(sections);
    if (sections.length) {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        sections.forEach(section => {
            const spin = section.querySelector('.wheel');
            console.log(spin);

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        spin.classList.add('spin'); 
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            observer.observe(section);
        });
    }

};