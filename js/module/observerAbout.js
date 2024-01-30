export const initObserverAbout = () => {
    const about = document.querySelectorAll('.about'); 
    console.log(about);
    if (about.length) {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        about.forEach(section => {
            const spin = section.querySelector('.car');
            console.log(spin);

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        spin.classList.add('about__animate'); 
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            observer.observe(about);
        });
    }

};